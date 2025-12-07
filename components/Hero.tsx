import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';
import TextType from './TextType';

export const Hero: React.FC = () => {
  const words = ["AI Solutions", "Cloud Systems", "Modern Web Apps", "Data Analytics"];

  return (
    <section id="hero" className="pt-20 md:pt-32 flex flex-col md:flex-row items-center gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <h2 className="text-blue-400 font-medium tracking-wide text-2xl md:text-3xl">Hi, I'm {PERSONAL_INFO.name}</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
          Developer of <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
             <TextType 
                as="span"
                text={words}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
                className="inline-block"
             />
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <a 
            href="#projects" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-target"
          >
            View Projects
          </a>
          <a 
            href="#ai-chat" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 hover:bg-white/5 transition-colors group cursor-target"
          >
            Chat with AI <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 flex justify-center md:justify-end relative"
      >
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10 transform translate-x-10 translate-y-10"></div>
        <img 
          src={PERSONAL_INFO.heroImage} 
          alt={PERSONAL_INFO.name} 
          className="w-64 h-64 md:w-96 md:h-96 rounded-2xl object-cover shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 cursor-target"
        />
      </motion.div>
    </section>
  );
};