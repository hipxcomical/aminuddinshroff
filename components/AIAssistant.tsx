import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { introParagraphs, skillsData, workData, callToAction } from '../data/resumeData';

const formatResumeForAI = () => {
    let context = `Introduction:\n${introParagraphs.join('\n')}\n\n`;
    context += `Call to Action for Consulting:\n${callToAction}\n\n`;
  
    context += "Skills & Expertise:\n";
    skillsData.forEach(category => {
      context += `- ${category.category}:\n`;
      category.skills.forEach(skill => {
        context += `  - ${skill.name}\n`;
      });
    });
  
    context += "\nWork Experience:\n";
    workData.forEach(company => {
      context += `\nCompany: ${company.company}\n`;
      company.roles.forEach(role => {
        context += `  - Title: ${role.title}\n`;
        context += `  - Duration: ${role.duration}\n`;
        context += `  - Description: ${role.description}\n`;
      });
    });
    return context;
};
  
const systemInstruction = `You are a helpful and professional AI assistant for Aminuddin Shroff's portfolio website. Your purpose is to answer questions about his skills, experience, and professional background based ONLY on the information provided below. Do not invent information. If a question is outside the scope of this information (e.g., personal life, opinions on unrelated topics), politely state that you can only answer questions about Aminuddin's professional background. Be concise and friendly.

Here is the information about Aminuddin Shroff:
---
${formatResumeForAI()}
---
`;

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const AIAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: input,
              config: {
                systemInstruction: systemInstruction,
              }
            });
            const assistantMessage: Message = { role: 'assistant', content: response.text };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            const errorMessage: Message = { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please try again later." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 bg-brand-orange text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 z-50"
                aria-label="Open AI Assistant"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L15.27 8.73L24 12L15.27 15.27L12 24L8.73 15.27L0 12L8.73 8.73L12 0Z" />
                </svg>
            </button>

            {isOpen && (
                <div className="fixed bottom-28 right-8 w-full max-w-md h-full max-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 transform transition-all duration-300 origin-bottom-right" style={{ animation: 'slideUp 0.3s ease-out' }}>
                    <header className="flex items-center justify-between p-4 border-b bg-gray-50/80 rounded-t-lg">
                        <h2 className="text-xl font-bold">AI Assistant</h2>
                        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </header>
                    <main className="flex-grow p-4 overflow-y-auto bg-gray-50">
                        <div className="space-y-4">
                            <div className="flex justify-start">
                                <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
                                    <p className="text-sm">Hello! Ask me anything about Aminuddin's professional background, skills, or experience.</p>
                                </div>
                            </div>
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`${msg.role === 'user' ? 'bg-brand-orange text-white' : 'bg-gray-200'} p-3 rounded-lg max-w-xs`}>
                                        <p className="text-sm">{msg.content}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </main>
                    <footer className="p-4 border-t bg-white rounded-b-lg">
                        <form onSubmit={handleSend} className="flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about a project..."
                                className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                                disabled={isLoading}
                            />
                            <button type="submit" className="ml-2 bg-brand-orange text-white px-4 py-2 rounded-lg disabled:opacity-50" disabled={isLoading}>
                                Send
                            </button>
                        </form>
                    </footer>
                </div>
            )}
            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
};

export default AIAssistant;