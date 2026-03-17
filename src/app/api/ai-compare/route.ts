import { Mistral } from '@mistralai/mistralai';
import { NextResponse } from "next/server";

// Mistral AI ni initsializatsiya qilish
const client = new Mistral({ apiKey: process.env.MISTRAL_API_KEY || "" });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { country1, country2 } = body;

    if (!country1 || !country2) {
      return NextResponse.json({ error: "Two countries should be selected!" }, { status: 400 });
    }

    const prompt = `
You are acting as a Senior Global Mobility Consultant and Macroeconomic Analyst. Your task is to provide a high-level, strategic comparison between two destinations for an international student.

INPUT DATA:
- Destination 1: ${country1.name} (Data: ${JSON.stringify(country1)})
- Destination 2: ${country2.name} (Data: ${JSON.stringify(country2)})

Your analysis must be sophisticated and professional, covering the following four dimensions in detail. Explain WHY the data is the way it is:

1. Language Barriers & Social Permeability: 
   - Analyze the "why" behind language challenges. 
   - Discuss labor market permeability (how local language proficiency affects professional employment vs. entry-level jobs).

2. Geopolitical & Visa Architecture: 
   - Explain the logic behind visa difficulty or ease. 
   - Discuss migration policy trends and how labor shortages influence current visa issuance.

3. Holistic Student Ecosystem: 
   - Contrast the benefits (post-study work rights, healthcare) against structural difficulties (housing crises, cultural adaptation).

4. Economic Vitality & Labor Market: 
   - Analyze the impact of current inflation and average salaries on student purchasing power. 
   - Evaluate the job market saturation and identify where the "hidden" job market lies.

CONSTRAINTS:
- Format: Use structured headers. Use **bolding** for emphasis.
- Tone: Analytical, data-driven, and authoritative.
- Length: Around 300-400 words.
- Conclusion: A "Strategic Verdict" recommending which profile of student suits which destination.

OUTPUT LANGUAGE: English.
    `;

    // Mistral API chaqiruvi
    const response = await client.chat.complete({
      model: 'mistral-large-latest',
      messages: [{ role: 'user', content: prompt }],
    });

    const responseText = response.choices?.[0]?.message?.content || "";

    return NextResponse.json({ analysis: responseText });

  } catch (error: any) {
    console.error("Mistral API Error:", error);
    return NextResponse.json(
      { error: "Please try again." },
      { status: 500 }
    );
  }
}