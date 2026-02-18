"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const pageContent: Record<string, { message: string; buttons: string[] }> = {
    "/": {
        message: "Welcome back! I'm Nova, an AI Hospitality Agent at Jebitech. Do you have any questions about our vacation rental solutions?",
        buttons: ["Get Started", "Customer Support"],
    },
    "/products/": {
        message: "Exploring our products? I can help you find the best tools for your property management needs.",
        buttons: ["View Features", "Pricing"],
    },
    "/services/": {
        message: "Need a hand with your operations? Our expert services team is here to help you scale.",
        buttons: ["Consulting", "Setup Help"],
    },
};
interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    time: string;
}

const ChatWidget = () => {
    const pathname = usePathname();
    const [view, setView] = useState<'hidden' | 'intro' | 'chat'>('hidden');
    const [currentData, setCurrentData] = useState(pageContent["/"]);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const [showHelloMessage, setShowHelloMessage] = useState(false);

    // Load saved state from localStorage on mount
    useEffect(() => {
        const savedView = localStorage.getItem('chatWidgetView');
        if (savedView && (savedView === 'hidden' || savedView === 'intro' || savedView === 'chat')) {
            setView(savedView as 'hidden' | 'intro' | 'chat');
        } else {
            // First time visitor - show intro after delay
            const timer = setTimeout(() => setView('intro'), 1000);
            return () => clearTimeout(timer);
        }
        setIsInitialized(true);
    }, []);

    // Show hello message periodically when chat is hidden
    useEffect(() => {
        if (view === 'hidden') {
            const initialTimer = setTimeout(() => {
                setShowHelloMessage(true);
                setTimeout(() => setShowHelloMessage(false), 4000); // Hide after 4 seconds
            }, 3000);

            const interval = setInterval(() => {
                setShowHelloMessage(true);
                setTimeout(() => setShowHelloMessage(false), 4000); // Hide after 4 seconds
            }, 15000);

            return () => {
                clearTimeout(initialTimer);
                clearInterval(interval);
            };
        } else {
            setShowHelloMessage(false);
        }
    }, [view]);

    useEffect(() => {
        const content = pageContent[pathname] || pageContent["/"];
        setCurrentData(content);

        // Initialize the conversation with the page-specific greeting
        setMessages([{
            id: Date.now(),
            text: content.message,
            sender: 'bot',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);

        // Don't auto-show intro on page change if user has minimized it
        if (isInitialized) {
            const savedView = localStorage.getItem('chatWidgetView');
            if (savedView === 'hidden') {
                // Keep it hidden if user minimized it
                setView('hidden');
            }
        }
    }, [pathname, isInitialized]);

    const openChat = () => {
        setView('chat');
        localStorage.setItem('chatWidgetView', 'chat');
    };
    
    const closeAll = () => {
        setView('hidden');
        localStorage.setItem('chatWidgetView', 'hidden');
    };

    const showIntro = () => {
        setView('intro');
        localStorage.setItem('chatWidgetView', 'intro');
    };

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        // 1. Add User Message
        const userMsg: Message = {
            id: Date.now(),
            text: inputValue,
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        const lastInput = inputValue;
        setInputValue("");

        // 2. Simulate Bot Response
        setTimeout(() => {
            const botMsg: Message = {
                id: Date.now() + 1,
                text: `You asked about "${lastInput}". I'm a demo bot, but I can tell you more about our ${pathname === '/' ? 'Home page' : pathname.replace('/', '')} services!`,
                sender: 'bot',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end font-sans">

            {/* STAGE 1: Intro Card (from first_chatbot_UI.png) */}
            {view === 'intro' && (
                <div
                    className="mb-4 w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 animate-bounce-subtle"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                            className="w-10 h-10 rounded-full object-cover border-2 border-primary-orange"
                            alt="Nova"
                        />
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800 text-sm">Nova</h3>
                            <p className="text-[10px] text-primary-purple uppercase tracking-wider font-semibold">AI Hospitality Agent</p>
                        </div>
                        <button
                            onClick={closeAll}
                            className="text-gray-400 hover:text-primary-purple hover:bg-gray-100 p-1.5 rounded-full transition-colors"
                            aria-label="Minimize chat"
                        >
                            <ChevronDown size={20} />
                        </button>
                    </div>

                    <div onClick={openChat} className="cursor-pointer">
                        <p className="text-[13px] text-gray-700 leading-relaxed mb-4">
                            {currentData.message}
                        </p>

                        <div className="flex gap-2 mb-4">
                            {currentData.buttons.map(btn => (
                                <button key={btn} className="px-3 py-1.5 border-2 border-primary-orange text-primary-orange rounded-full text-[11px] font-bold hover:bg-primary-orange hover:text-white transition-colors">
                                    {btn}
                                </button>
                            ))}
                        </div>

                        <div className="relative flex items-center">
                            <input
                                readOnly
                                placeholder="Enter a message"
                                className="w-full pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm cursor-pointer focus:border-primary-purple"
                            />
                            <Send size={18} className="absolute right-3 text-primary-orange" />
                        </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                        <p className="text-[10px] text-gray-400">
                            This chat may be recorded and used in line with our <span className="underline cursor-pointer hover:text-primary-purple">Privacy Policy</span>
                        </p>
                    </div>
                </div>
            )}

            {/* STAGE 2: Full Chat UI (from second_chat_UI.png) */}
            {view === 'chat' && (
                <div className="mb-4 w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
                    {/* Purple Header */}
                    <div className="bg-gradient-to-r from-primary-purple to-purple-700 p-4 flex items-center justify-between rounded-t-2xl">
                        <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" className="w-10 h-10 rounded-full border-2 border-white/30" alt="Nova" />
                            <div className="text-white">
                                <h3 className="font-bold text-sm">Nova</h3>
                                <p className="text-[10px] opacity-90">AI Hospitality Agent</p>
                            </div>
                        </div>
                        <button onClick={closeAll} className="text-white hover:bg-white/10 p-1.5 rounded-full transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Chat Body */}
                    {/* <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
                        <div className="text-center mb-6">
                            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">Today, 5:16 pm</span>
                        </div>

                        <div className="flex gap-2">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50" className="w-6 h-6 rounded-full self-start" alt="avatar" />
                            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[80%]">
                                <p className="text-[13px] text-gray-800 leading-relaxed">
                                    {currentData.message}
                                </p>
                            </div>
                        </div>
                    </div> */}

                    <div ref={scrollRef} className="flex-1 bg-gray-50 p-4 overflow-y-auto space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-[13px] shadow-sm ${msg.sender === 'user'
                                    ? 'bg-primary-orange text-white rounded-tr-none'
                                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                                    }`}>
                                    {msg.text}
                                    <div className={`text-[9px] mt-1 opacity-70 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                        {msg.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-white border-t border-gray-100">
                        <div className="flex gap-2 mb-4">
                            {currentData.buttons.map(btn => (
                                <button key={btn} className="px-3 py-1.5 border-2 border-primary-orange text-primary-orange rounded-full text-[11px] font-bold hover:bg-primary-orange hover:text-white transition-colors">
                                    {btn}
                                </button>
                            ))}
                        </div>
                        {/* <div className="relative flex items-center">
                            <input
                                autoFocus
                                type="text"
                                placeholder="Enter a message"
                                className="w-full pl-4 pr-12 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00a699]"
                            />
                            <button className="absolute right-3 text-[#00664b]">
                                <Send size={20} />
                            </button>
                        </div> */}
                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100">
                            <div className="relative flex items-center">
                                <input
                                    autoFocus
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Enter a message"
                                    className="w-full pl-4 pr-12 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple/20 focus:border-primary-purple"
                                />
                                <button type="submit" className="absolute right-3 text-primary-orange hover:scale-110 transition-transform">
                                    <Send size={20} />
                                </button>
                            </div>
                        </form>
                        <p className="mt-3 text-[10px] text-gray-400 text-center">
                            This chat may be recorded and used in line with our <span className="underline cursor-pointer hover:text-primary-purple">Privacy Policy</span>
                        </p>
                    </div>
                </div>
            )}

            {/* Hello Message Bubble - appears periodically */}
            {showHelloMessage && view === 'hidden' && (
                <div className="absolute bottom-20 right-0 animate-in slide-in-from-bottom-5 fade-in duration-500">
                    <div className="relative">
                        {/* Main Speech Bubble - Glassmorphic */}
                        <div className="relative rounded-3xl shadow-2xl p-5 min-w-[240px]" style={{
                            backdropFilter: 'blur(5px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(5px) saturate(180%)',
                            backgroundColor: 'rgba(247, 248, 250, 0.49)',
                            border: '1px solid rgba(255, 255, 255, 0.125)'
                        }}>
                            
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl animate-wave">👋</span>
                                    <p className="text-base font-bold text-gray-800">Hello there!</p>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Need help? I'm Nova, your AI assistant. Click to chat!
                                </p>
                            </div>

                            {/* Decorative dot */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* Launcher Button (Circular Avatar) with Bubble Animation */}
            <div className="relative">
                {/* Animated Bubbles - only show when chat is hidden */}
                {view === 'hidden' && (
                    <>
                        {/* Bubble 1 */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-orange rounded-full animate-bubble-1 opacity-70"></div>
                        {/* Bubble 2 */}
                        <div className="absolute -top-4 right-2 w-3 h-3 bg-primary-orange/80 rounded-full animate-bubble-2 opacity-60"></div>
                        {/* Bubble 3 */}
                        <div className="absolute -top-6 right-6 w-2 h-2 bg-primary-orange/60 rounded-full animate-bubble-3 opacity-50"></div>
                        
                        {/* Pulsing Ring */}
                        <div className="absolute inset-0 rounded-full border-4 border-primary-purple animate-ping opacity-20"></div>
                    </>
                )}
                
                <button
                    onClick={() => view === 'chat' ? closeAll() : view === 'hidden' ? showIntro() : openChat()}
                    className="w-16 h-16 rounded-full overflow-hidden shadow-xl border-4 border-primary-purple hover:scale-105 transition-transform relative z-10"
                >
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                        className="w-full h-full object-cover"
                        alt="Nova"
                    />
                </button>
            </div>
        </div>
    );
};

export default ChatWidget;