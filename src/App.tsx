import { Navigation } from './components/Navigation';
import { ParticleBackground } from './components/ParticleBackground';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="relative bg-[#0A192F] overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />

      <footer className="bg-[#0A192F] border-t border-[#64FFDA]/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#CCD6F6]/60">
            Built with React & TypeScript by Yash Haldiya © 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
