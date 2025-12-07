import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-slate-500 border-t border-white/5 mt-20">
      <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
      <p className="text-sm mt-2">Built with React, TypeScript, Tailwind & Gemini API</p>
    </footer>
  );
};