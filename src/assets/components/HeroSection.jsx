// import React from "react"
// import { Menu, X } from 'lucide-react';
// import { cn } from './lib/utils';
// import { useEffect, useState } from 'react';



export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center"
    >
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="flex flex-row justify-center items-center text-3xl md:text-5xl lg:text-6xl font-bold space-x-2 md:space-x-4">
          <span className="opacity-0 animate-fade-in">Hi, I'm</span>
          <span className="text-primary animate-fade-in-delay-1">DAVID</span>
          <span className="text-gradient opacity animate-fade-in-delay-2">JOHN</span>
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-400 text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          A web developer with a strong foundation in frontend technologies, currently expanding into full-stack and app development.{/* I build clean, efficient, and user-focused digital experiences while continuously learning and refining my skills */}
        </p>

        <div>
          <a href="#projects" className="cosmic-button mt-8 inline-block px-6 py-3 bg-primary text-white font-semibold rounded-xxl shadow-lg hover:bg-primary-dark transition duration-300 opacity-0 animate-fade-in-delay-4">
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transorm -translate-x-1/2 items-center flex flex-col animate-bounce">
        <span className="text-gray-400 mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </section>

  );
};
