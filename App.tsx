import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AIChatSection } from './components/AIChatSection';
import { Footer } from './components/Footer';
import TargetCursor from './components/TargetCursor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-darker text-slate-100 selection:bg-primary selection:text-white">
      <TargetCursor />
      <Navbar />
      <main className="container mx-auto px-4 md:px-8 space-y-24 pb-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIChatSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;