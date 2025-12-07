import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { createChatSession, sendMessageStream } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

export const AIChatSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: `Hello! I'm ${PERSONAL_INFO.name}'s AI Assistant. Ask me anything about his experience, skills, or projects.` }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat session only once
  useEffect(() => {
    if (!chatSessionRef.current) {
      const session = createChatSession();
      if (session) {
        chatSessionRef.current = session;
      } else {
        setIsError(true);
        setMessages(prev => [
          ...prev, 
          { 
            id: 'error-init', 
            role: 'model', 
            text: "I'm currently offline (API Key missing). Please contact Ayush directly via email." 
          }
        ]);
      }
    }
  }, []);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    if (isError || !chatSessionRef.current) {
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'user', 
        text: inputValue 
      }, {
        id: (Date.now()+1).toString(),
        role: 'model',
        text: "Sorry, I can't process requests right now because the API is not configured."
      }]);
      setInputValue('');
      return;
    }

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Create a placeholder for the model's response
    const modelMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: '', isStreaming: true }]);

    try {
      const streamResult = await sendMessageStream(chatSessionRef.current, userMsg.text);
      
      let fullText = '';
      
      for await (const chunk of streamResult) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text || '';
        fullText += textChunk;
        
        setMessages(prev => prev.map(msg => 
          msg.id === modelMsgId 
            ? { ...msg, text: fullText }
            : msg
        ));
      }
      
      // Final update to remove streaming flag
      setMessages(prev => prev.map(msg => 
        msg.id === modelMsgId 
          ? { ...msg, isStreaming: false }
          : msg
      ));

    } catch (error) {
      setMessages(prev => prev.map(msg => 
        msg.id === modelMsgId 
          ? { ...msg, text: "I'm sorry, I'm having trouble connecting to the network right now. Please try again later.", isStreaming: false }
          : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-chat" className="scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3"
        >
          <Sparkles className="text-yellow-400" />
          Ask My AI Assistant
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[600px] cursor-target"
        >
          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${msg.role === 'model' ? 'bg-blue-600' : 'bg-slate-700'}`}>
                  {msg.role === 'model' ? <Bot size={20} className="text-white" /> : <User size={20} className="text-white" />}
                </div>
                
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-white/5'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                  {msg.isStreaming && (
                    <span className="inline-block w-2 h-4 ml-1 bg-blue-400 animate-pulse align-middle"></span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-900 border-t border-white/10">
            <form onSubmit={handleSubmit} className="relative flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={isError ? "AI Chat unavailable (Missing API Key)" : "Ask about my projects, skills, or background..."}
                className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-xl pl-4 pr-12 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/5 transition-all cursor-target"
                disabled={isLoading || isError}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim() || isError}
                className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-target"
              >
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : (isError ? <AlertCircle size={20} /> : <Send size={20} />)}
              </button>
            </form>
            <p className="text-center text-slate-600 text-xs mt-3">
              Powered by Google Gemini 2.5 Flash. AI can make mistakes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};