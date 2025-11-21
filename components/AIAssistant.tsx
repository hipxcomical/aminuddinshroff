
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { introParagraphs, skillsData, leadershipPrinciples, workData } from '../data/resumeData';

const buildContext = (): string => {
    let context = `You are a helpful and professional AI assistant for Aminuddin Shroff's personal website. Your purpose is to answer questions from visitors about his skills, experience, and leadership principles. You must base your answers *only* on the context provided below. Do not invent information. Be concise, professional, and friendly. Use markdown for formatting like lists or bold text where appropriate.\n\n--- CONTEXT ---\n\n`;

    context += "## Introduction\n";
    introParagraphs.forEach(p => context += `- ${p}\n`);
    context += "\n";

    context += "## Skills & Expertise\n";
    skillsData.forEach(category => {
        context += `### ${category.category}\n`;
        category.skills.forEach(skill => {
            context += `- **${skill.name}:** ${skill.description}\n`;
        });
    });
    context += "\n";

    context += "## Leadership Principles\n";
    leadershipPrinciples.forEach(p => {
        context += `- **${p.title}:** ${p.description}\n`;
    });
    context += "\n";

    context += "## Work Experience\n";
    workData.forEach(company => {
        context += `### ${company.company}${company.companySubtitle ? ` - ${company.companySubtitle}` : ''} (${company.totalDuration})\n`;
        company.roles.forEach(role => {
            context += `- **${role.title}** (${role.duration} | ${role.location})\n`;
            if (role.description) {
                context += `  - ${role.description.replace(/\n/g, '\n    ')}\n`;
            }
        });
        context += "\n";
    });

    context += "\n--- END OF CONTEXT ---";
    return context;
};

interface Message {
    role: 'user' | 'model';
    text: string;
}

const LoadingIndicator: React.FC = () => (
    <div className="flex items-center space-x-2" aria-label="AI is thinking">
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
    </div>
);

const AIAssistant: React.FC = () => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const initializeChat = async () => {
            if (!process.env.API_KEY) {
                setError("API key is not configured.");
                setMessages([{ role: 'model', text: "Sorry, the AI assistant is not available at the moment due to a configuration issue." }]);
                return;
            }
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const context = buildContext();
                const newChat = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: context,
                    },
                });
                setChat(newChat);
                setMessages([{ role: 'model', text: "Hello! How can I help you learn more about Aminuddin's experience?" }]);
            } catch (err) {
                console.error("Failed to initialize AI assistant:", err);
                setError("Initialization failed.");
                setMessages([{ role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
            }
        };
        initializeChat();
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    const sendMessage = async (messageText: string) => {
        if (!messageText.trim() || loading || !chat) return;

        const userMessage: Message = { role: 'user', text: messageText };
        setMessages(prev => [...prev, userMessage]);
        setLoading(true);
        setError(null);

        try {
            const stream = await chat.sendMessageStream({ message: messageText });
            let currentResponse = '';
            setMessages(prev => [...prev, { role: 'model', text: '' }]);

            for await (const chunk of stream) {
                currentResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = currentResponse;
                    return newMessages;
                });
            }
        } catch (err) {
            console.error("Error sending message to AI:", err);
            setError("An error occurred while getting a response.");
            setMessages(prev => [...prev, { role: 'model', text: "I encountered an error. Please try asking again." }]);
        } finally {
            setLoading(false);
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
        setInput('');
    };
    
    const handleExamplePrompt = (prompt: string) => {
        if (!loading) {
            setInput(prompt); 
            sendMessage(prompt);
            setInput('');
        }
    };

    const examplePrompts = [
        "Summarize his experience at Verizon.",
        "What is his approach to leadership?",
        "Tell me about his AI-powered solutions.",
    ];

    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ask Amin's AI Assistant</h3>
            <div className="bg-white p-4 rounded-lg h-80 flex flex-col border border-gray-200 shadow-sm">
                {/* Added role="log" and aria-live="polite" for screen reader announcements */}
                <div 
                    className="flex-grow overflow-y-auto pr-2 space-y-4" 
                    role="log" 
                    aria-live="polite" 
                    aria-relevant="additions text"
                >
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div
                                className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-xl ${
                                    msg.role === 'user'
                                        ? 'bg-brand-orange text-white'
                                        : 'bg-gray-200 text-gray-800'
                                }`}
                                style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex justify-start">
                             <div className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800">
                                <LoadingIndicator />
                             </div>
                        </div>
                    )}
                    {error && (
                         <div className="flex justify-start">
                             <div className="px-4 py-2 rounded-xl bg-red-100 text-red-700">
                                {error}
                             </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                
                {!loading && messages.length < 3 && (
                    <div className="flex-shrink-0 pt-2 flex flex-wrap gap-2">
                        {examplePrompts.map(prompt => (
                            <button
                                key={prompt}
                                onClick={() => handleExamplePrompt(prompt)}
                                className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition-colors"
                            >
                                {prompt}
                            </button>
                        ))}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex-shrink-0 pt-4 flex items-center space-x-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about my experience..."
                        disabled={loading || !!error}
                        className="w-full p-3 text-base text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none transition-shadow disabled:opacity-50 placeholder:text-gray-400"
                        aria-label="Ask the AI assistant a question"
                    />
                    <button
                        type="submit"
                        disabled={loading || !input.trim() || !!error}
                        className="bg-brand-orange text-white rounded-lg p-3 disabled:bg-gray-400 transition-colors duration-200 hover:bg-orange-600 flex-shrink-0"
                        aria-label="Send message"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AIAssistant;
