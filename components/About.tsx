import React from 'react';
import { GraduationCap, Code, Cpu } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export const About: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="about" className="scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3"
        >
          <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
          About Me
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={item} className="bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors cursor-target">
            <GraduationCap className="text-blue-400 mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold mb-2">BCA</h3>
            <p className="text-slate-400">
              My academic background in Computer Applications fuels my passion for writing clean, maintainable code.
            </p>
          </motion.div>
          
          <motion.div variants={item} className="bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors cursor-target">
            <Code className="text-purple-400 mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold mb-2">Architecture</h3>
            <p className="text-slate-400">
              Designing scalable systems is my passion. I focus on modularity and separating concerns effectively.
            </p>
          </motion.div>

          <motion.div variants={item} className="bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-green-500/30 transition-colors cursor-target">
            <Cpu className="text-green-400 mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p className="text-slate-400">
              I obsess over Core Web Vitals. Fast load times and smooth 60fps animations are non-negotiable.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};