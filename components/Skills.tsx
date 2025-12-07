import React from 'react';
import { SKILLS } from '../constants';
import { motion, Variants } from 'framer-motion';
import { Database, Brain, Cloud, LineChart } from 'lucide-react';

export const Skills: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const getSkillIcon = (name: string) => {
    const iconClass = "w-12 h-12 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform duration-300 object-contain";

    if (name.includes('React')) {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className={iconClass} />;
    }
    if (name.includes('JavaScript')) {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className={iconClass} />;
    }
    if (name.includes('HTML')) {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className={iconClass} />;
    }
    if (name === 'CSS') {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className={iconClass} />;
    }
    if (name.includes('Tailwind')) {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className={iconClass} />;
    }
    if (name.includes('TypeScript')) {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className={iconClass} />;
    }
    if (name.includes('Node')) {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className={iconClass} />;
    }
    if (name.includes('Python')) {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className={iconClass} />;
    }
    if (name.includes('C++')) {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className={iconClass} />;
    }
    if (name === 'C') {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" className={iconClass} />;
    }
    if (name === 'R') {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" alt="R" className={iconClass} />;
    }
    if (name.includes('MATLAB')) {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" alt="MATLAB" className={iconClass} />;
    }
    if (name === 'AWS') {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className={iconClass} />;
    }
    if (name === 'Azure') {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure" className={iconClass} />;
    }
    if (name === 'SQL') {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="SQL" className={iconClass} />;
    }
    if (name === 'Machine Learning') {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="Machine Learning" className={iconClass} />;
    }
    if (name === 'Data Analysis') {
      return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Data Analysis" className={iconClass} />;
    }
    if (name === 'Artificial Intelligence') {
      return <Brain className={`${iconClass} text-purple-400`} />;
    }
    if (name === 'Cloud Computing') {
      return <Cloud className={`${iconClass} text-sky-400`} />;
    }
    if (name.includes('Database')) {
      return <Database className={`${iconClass} text-blue-400`} />;
    }
    return <div className={`${iconClass} bg-slate-700 rounded-full`} />;
  };

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto">
         <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3"
        >
          <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
          Technical Proficiency
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {SKILLS.map((skill) => (
            <motion.div 
              key={skill.name}
              variants={item}
              className="group bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-blue-500/10 cursor-default cursor-target"
            >
              <div className="bg-slate-800/50 p-4 rounded-full mb-2 group-hover:bg-slate-800 transition-colors">
                {getSkillIcon(skill.name)}
              </div>
              <h3 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">{skill.name}</h3>
              
              <div className="w-full mt-4 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs text-slate-500 mt-2 font-mono">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 mt-10 text-sm"
        >
          Proficiency levels based on academic coursework and project experience.
        </motion.p>
      </div>
    </section>
  );
};