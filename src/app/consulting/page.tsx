'use client';

import { useState } from 'react';
import {
  Send, User, GraduationCap, Trophy, Target, Sparkles, Moon, Sun, Loader2, CheckCircle2,
} from 'lucide-react';

interface UserProfile {
  gpa: string;
  satScore: string;
  ieltsScore: string;
  apClasses: number;
  extracurriculars: string[];
  targetMajor: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ConsultingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    gpa: '', satScore: '', ieltsScore: '', apClasses: 0, extracurriculars: [], targetMajor: '',
  });
  const [messages, setMessages] = useState<Message[]>([{
    role: 'assistant',
    content: "👋 Hello! I'm your StudyPath AI Admissions Counselor. I'll help you assess your university admission chances and recommend the best-fit schools. Fill out your profile on the left, then click 'Analyze My Profile' to get started!",
    timestamp: new Date(),
  }]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [chatInput, setChatInput] = useState('');

  const extracurricularOptions = [
    'Hackathons', 'Math Olympiad', 'Science Olympiad', 'Debate Team', 'Sports (Varsity)',
    'Sports (Club)', 'Volunteering (100+ hours)', 'Volunteering (50-100 hours)',
    'Research Publication', 'Startup/Business', 'Music (Advanced)', 'Art Portfolio',
    'Student Government', 'Coding Competitions',
  ];

  const majors = [
    'Computer Science', 'Engineering (General)', 'Electrical Engineering', 'Mechanical Engineering',
    'Business/Economics', 'Medicine/Pre-Med', 'Biology', 'Chemistry', 'Physics', 'Mathematics',
    'Psychology', 'Political Science', 'Literature/English', 'History', 'Art/Design', 'Undecided',
  ];

  const toggleExtracurricular = (activity: string) => {
    setProfile((prev) => ({
      ...prev,
      extracurriculars: prev.extracurriculars.includes(activity)
        ? prev.extracurriculars.filter((a) => a !== activity)
        : [...prev.extracurriculars, activity],
    }));
  };

  const analyzeProfile = async () => {
    if (!profile.gpa || !profile.targetMajor) {
      alert('Please fill in at least your GPA and Target Major');
      return;
    }
    setIsAnalyzing(true);
    const userMessage: Message = {
      role: 'user',
      content: `Please analyze my profile:\n- GPA: ${profile.gpa}\n- SAT: ${profile.satScore || 'N/A'}\n- IELTS: ${profile.ieltsScore || 'N/A'}\n- AP Classes: ${profile.apClasses}\n- Extracurriculars: ${profile.extracurriculars.join(', ') || 'None listed'}\n- Target Major: ${profile.targetMajor}`,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch('/api/consulting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile, type: 'analysis' }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Analysis failed');
      setMessages((prev) => [...prev, { role: 'assistant', content: data.analysis, timestamp: new Date() }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', content: '❌ Sorry, I encountered an error analyzing your profile. Please try again.', timestamp: new Date() }]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const sendChatMessage = async () => {
    if (!chatInput.trim()) return;
    const userMessage: Message = { role: 'user', content: chatInput, timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setChatInput('');
    setIsAnalyzing(true);

    try {
      const response = await fetch('/api/consulting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile, type: 'chat', message: chatInput, conversationHistory: messages }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Chat failed');
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response, timestamp: new Date() }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', content: '❌ Sorry, I encountered an error. Please try again.', timestamp: new Date() }]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 pb-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b mb-8`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-blue-500" />
              <div>
                <h1 className="text-2xl font-bold">AI Admissions Counselor</h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Powered by StudyPath AI</p>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        {/* DIQQAT: Xato dizayn (h-[calc...]) olib tashlandi. Items-start qo'shildi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative">
          
          {/* Chap tomon: Anketa qismi (Tabiiy uzunlikda) */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl p-6`}>
            <div className="flex items-center gap-2 mb-6">
              <User className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold">Your Profile</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2"><GraduationCap className="inline w-4 h-4 mr-1" /> Current GPA (out of 4.0)</label>
                <input type="number" step="0.01" min="0" max="4" value={profile.gpa} onChange={(e) => setProfile({ ...profile, gpa: e.target.value })} placeholder="e.g., 3.85" className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 outline-none`} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">SAT Score (Optional)</label>
                <input type="number" min="400" max="1600" value={profile.satScore} onChange={(e) => setProfile({ ...profile, satScore: e.target.value })} placeholder="e.g., 1450" className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 outline-none`} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">IELTS Score (Optional)</label>
                <input type="number" step="0.5" min="0" max="9" value={profile.ieltsScore} onChange={(e) => setProfile({ ...profile, ieltsScore: e.target.value })} placeholder="e.g., 7.5" className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 outline-none`} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Number of AP Classes Taken</label>
                <input type="number" min="0" max="20" value={profile.apClasses} onChange={(e) => setProfile({ ...profile, apClasses: parseInt(e.target.value) || 0 })} placeholder="e.g., 5" className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 outline-none`} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2"><Trophy className="inline w-4 h-4 mr-1" /> Extracurricular Activities</label>
                <div className="flex flex-wrap gap-2">
                  {extracurricularOptions.map((activity) => (
                    <button key={activity} onClick={() => toggleExtracurricular(activity)} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${profile.extracurriculars.includes(activity) ? 'bg-blue-600 text-white' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                      {profile.extracurriculars.includes(activity) && <CheckCircle2 className="inline w-4 h-4 mr-1" />}
                      {activity}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2"><Target className="inline w-4 h-4 mr-1" /> Target Major</label>
                <select value={profile.targetMajor} onChange={(e) => setProfile({ ...profile, targetMajor: e.target.value })} className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 outline-none`}>
                  <option value="">Select a major...</option>
                  {majors.map((major) => <option key={major} value={major}>{major}</option>)}
                </select>
              </div>
              <button onClick={analyzeProfile} disabled={isAnalyzing} className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {isAnalyzing ? <><Loader2 className="w-5 h-5 animate-spin" /> Analyzing...</> : <><Sparkles className="w-5 h-5" /> Analyze My Profile</>}
              </button>
            </div>
          </div>

          {/* O'ng tomon: Chat qismi (Ekran bo'ylab yuradi - sticky) */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl flex flex-col h-[700px] lg:sticky lg:top-28`}>
            <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" /> StudyPath AI Counselor
              </h2>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Ask me anything about your admissions chances</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-lg px-4 py-3 ${message.role === 'user' ? 'bg-blue-600 text-white' : darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
                    {/* Bu yerda prose ishlatish orqali AI yozgan qalin (bold) yozuvlarni chiroyli chiqaramiz */}
                    <div className="text-sm whitespace-pre-wrap leading-relaxed" dangerouslySetInnerHTML={{__html: message.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}}></div>
                    <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-blue-200' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isAnalyzing && (
                <div className="flex justify-start">
                  <div className={`rounded-lg px-4 py-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                  </div>
                </div>
              )}
            </div>
            <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex gap-2">
                <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()} placeholder="Ask a follow-up question..." disabled={isAnalyzing} className={`flex-1 px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50`} />
                <button onClick={sendChatMessage} disabled={isAnalyzing || !chatInput.trim()} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}