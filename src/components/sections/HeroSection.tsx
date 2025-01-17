'use client';
import React from 'react';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold text-white tracking-tight">
        Aseem Sethi
      </h1>
      <p className="text-2xl text-white/80 hover:text-white transition-colors font-light max-w-2xl text-center">
        Information Systems student at UW, passionate about AI, data science, and building impactful solutions.
      </p>
      <div className="flex gap-4">
        <a 
          href="#projects"
          className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
        >
          View Projects
        </a>
        <a 
          href="#contact"
          className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
} 