import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';
import { motion, Variants } from 'framer-motion';

export const Projects: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40 } }
  };

  const getProjectImageUrl = (githubUrl?: string) => {
    if (!githubUrl) return null;
    try {
      // Clean up URL to handle .git suffix or trailing slashes
      const cleanUrl = githubUrl.replace(/\.git\/?$/, '').replace(/\/$/, '');
      const parts = cleanUrl.split('github.com/');
      if (parts.length < 2) return null;
      // Use GitHub's open graph asset service
      return `https://opengraph.githubassets.com/1/${parts[1]}`;
    } catch {
      return null;
    }
  };

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3"
        >
          <span className="w-8 h-1 bg-green-500 rounded-full"></span>
          Featured Projects
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => {
            const imageUrl = getProjectImageUrl(project.github);
            
            return (
              <motion.div 
                key={project.id} 
                variants={item}
                className="group bg-slate-900 rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="h-48 bg-slate-800 relative overflow-hidden">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full h-full cursor-target"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10 opacity-90 transition-opacity duration-300 group-hover:opacity-70"></div>
                    
                    {imageUrl ? (
                      <img 
                        src={imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                    )}
                    
                    <div className="absolute bottom-4 left-4 z-20">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors drop-shadow-md">{project.title}</h3>
                    </div>
                  </a>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[80px]">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-slate-400 hover:text-white transition-colors cursor-target"
                      >
                        <Github size={16} className="mr-2" /> Code
                      </a>
                    )}
                    {/* Only show Live Demo if it is different from the GitHub link */}
                    {project.link && project.link !== project.github && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors cursor-target"
                      >
                        <ExternalLink size={16} className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
