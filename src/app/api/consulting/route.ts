import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SYSTEM_PROMPT = `You are an experienced Ivy League admissions counselor with 15+ years of experience evaluating student applications. Your role is to provide honest, data-driven assessments while being encouraging and constructive.

PERSONALITY & TONE:
- Professional yet warm and approachable
- Honest about chances without being discouraging
- Evidence-based: cite specific strengths and weaknesses
- Encouraging: always provide actionable next steps
- Holistic: evaluate beyond just numbers

EVALUATION FRAMEWORK:
When analyzing a student profile, consider:
1. ACADEMIC STRENGTH (40% weight)
2. EXTRACURRICULAR IMPACT (35% weight)
3. MAJOR ALIGNMENT (15% weight)
4. OVERALL NARRATIVE (10% weight)

CRITICAL COMPENSATIONS:
- Exceptional extracurriculars CAN compensate for slightly lower test scores
- Research publication compensates significantly for GPA below 3.8
- Startup with revenue/users is a major differentiator

RESPONSE FORMAT:
1. **Initial Assessment**
2. **Academic Evaluation**
3. **Extracurricular Analysis**
4. **Admission Probability**
5. **Recommended Universities** (3 specific schools)
6. **Next Steps**`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { profile, type, message, conversationHistory } = body;

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    // XATO SHU YERDA EDI: gemini-pro o'rniga gemini-1.5-flash ishlatamiz
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    if (type === 'analysis') {
      const analysisPrompt = `${SYSTEM_PROMPT}

STUDENT PROFILE TO EVALUATE:
- GPA: ${profile.gpa || 'Not provided'}
- SAT Score: ${profile.satScore || 'Not provided'}
- IELTS Score: ${profile.ieltsScore || 'Not provided'}
- AP Classes Taken: ${profile.apClasses || 0}
- Extracurricular Activities: ${profile.extracurriculars?.join(', ') || 'None listed'}
- Target Major: ${profile.targetMajor || 'Undecided'}

TASK: Provide a comprehensive admissions evaluation following the exact response format.`;

      const result = await model.generateContent(analysisPrompt);
      const response = await result.response;
      const analysis = response.text();

      return NextResponse.json(
        { success: true, analysis, timestamp: new Date().toISOString() },
        { status: 200 }
      );
    } else if (type === 'chat') {
      let conversationContext = `${SYSTEM_PROMPT}\n\nCURRENT STUDENT PROFILE:\n`;
      conversationContext += `- GPA: ${profile.gpa || 'Not provided'}\n`;
      conversationContext += `- SAT: ${profile.satScore || 'Not provided'}\n`;
      conversationContext += `- IELTS: ${profile.ieltsScore || 'Not provided'}\n`;
      conversationContext += `- AP Classes: ${profile.apClasses || 0}\n`;
      conversationContext += `- Extracurriculars: ${profile.extracurriculars?.join(', ') || 'None'}\n`;
      conversationContext += `- Target Major: ${profile.targetMajor || 'Undecided'}\n\n`;

      if (conversationHistory && conversationHistory.length > 0) {
        conversationContext += 'CONVERSATION HISTORY:\n';
        const recentMessages = conversationHistory.slice(-4);
        recentMessages.forEach((msg: any) => {
          conversationContext += `${msg.role === 'user' ? 'Student' : 'Counselor'}: ${msg.content}\n`;
        });
      }

      conversationContext += `\nStudent's Current Question: ${message}\n\nRespond as the admissions counselor.`;

      const result = await model.generateContent(conversationContext);
      const response = await result.response;
      const chatResponse = response.text();

      return NextResponse.json(
        { success: true, response: chatResponse, timestamp: new Date().toISOString() },
        { status: 200 }
      );
    }

    return NextResponse.json({ error: 'Invalid request type' }, { status: 400 });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Analysis failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'AI Admissions Consulting',
    model: 'gemini-2.5-flash',
    timestamp: new Date().toISOString(),
  });
}