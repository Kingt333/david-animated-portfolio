import { useRef, useEffect, useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { User, Code, Palette, Zap } from 'lucide-react';
import userPic from '../images/userpic.jpeg';

export const AboutMe = () => {
  // Determine greeting based on time of day
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <SectionWrapper id="about" className="bg-gradient-to-b from-background to-background/50">
      <h2 className="text-4xl font-bold text-center mb-16 text-glow">
        About <span className="text-primary">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 animate-fade-in-delay-1">
          <h3 className="text-2xl font-semibold">
            <span className="text-primary">{greeting}</span>, I'm David.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a passionate web developer dedicated to building high-quality, responsive websites and applications.
            With a keen eye for design and a strong command of modern backend and frontend technologies, I strive to create
            seamless digital experiences that solve real-world problems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey started with a curiosity for how things work on the web, and it has evolved into a career
            where I constantly learn and adapt to new challenges.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
              <Code className="w-8 h-8 text-primary mb-2" />
              <h4 className="font-semibold">Clean Code</h4>
              <p className="text-sm text-muted-foreground">Maintainable & Scalable</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
              <Palette className="w-8 h-8 text-primary mb-2" />
              <h4 className="font-semibold">Modern Design</h4>
              <p className="text-sm text-muted-foreground">UI/UX Best Practices</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
              <Zap className="w-8 h-8 text-primary mb-2" />
              <h4 className="font-semibold">Fast Performance</h4>
              <p className="text-sm text-muted-foreground">Optimized for Speed</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
              <User className="w-8 h-8 text-primary mb-2" />
              <h4 className="font-semibold">User Centric</h4>
              <p className="text-sm text-muted-foreground">Focus on Experience</p>
            </div>
          </div>
        </div>

        {/* Profile Image / Visual */}
        <div className="relative group animate-fade-in-delay-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10 transition-transform duration-500 group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
            {/* Alternatively, uncomment below when you have an image */}
            <img src={userPic} alt="David" className="w-full h-full object-center" />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};