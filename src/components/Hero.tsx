import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    'Software Developer',
    'JavaScript & React Specialist',
    'Full-Stack Engineer',
    'Problem Solver',
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (currentIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, roleIndex]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#CCD6F6] mb-4">
            Hi, I'm <span className="text-[#64FFDA]">Yash Haldiya</span>
          </h1>

          <div className="h-12 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#CCD6F6]/80">
              {displayText}
              <span className="animate-blink">|</span>
            </h2>
          </div>

          <p className="mt-6 text-lg sm:text-xl text-[#CCD6F6]/70 max-w-3xl mx-auto leading-relaxed">
            Results-driven Software Engineer specializing in JavaScript, React, and full-stack development.
            Proven expertise in delivering scalable web applications and driving technical innovation.
          </p>

          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="https://github.com/yashasvi9199"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300 p-3 rounded-full bg-[#112240] hover:bg-[#64FFDA] text-[#64FFDA] hover:text-[#0A192F] border border-[#64FFDA]"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:yashaldiya@gmail.com"
              className="transform hover:scale-110 transition-all duration-300 p-3 rounded-full bg-[#112240] hover:bg-[#64FFDA] text-[#64FFDA] hover:text-[#0A192F] border border-[#64FFDA]"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300 p-3 rounded-full bg-[#112240] hover:bg-[#64FFDA] text-[#64FFDA] hover:text-[#0A192F] border border-[#64FFDA]"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <button
            onClick={scrollToContact}
            className="mt-10 px-8 py-4 bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] rounded-lg hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all duration-300 font-medium text-lg"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-[#64FFDA]" />
      </div>
    </section>
  );
};
