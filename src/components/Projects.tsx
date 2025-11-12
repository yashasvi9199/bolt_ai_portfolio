import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'React Notes Dashboard',
    description: 'A comprehensive note-taking application with rich text editing, tagging system, and real-time search functionality.',
    tech: ['React', 'TypeScript', 'Local Storage', 'CSS3'],
    github: 'https://github.com/yashasvi9199',
    demo: 'https://github.com/yashasvi9199',
    image: 'gradient-1',
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/yashasvi9199',
    demo: 'https://github.com/yashasvi9199',
    image: 'gradient-2',
  },
  {
    title: 'Weather App',
    description: 'Interactive weather application with real-time data, 5-day forecasts, and location-based search functionality.',
    tech: ['React', 'API Integration', 'Geolocation', 'CSS3'],
    github: 'https://github.com/yashasvi9199',
    demo: 'https://github.com/yashasvi9199',
    image: 'gradient-3',
  },
  {
    title: 'Jio Business Marketplace',
    description: 'Enterprise marketplace platform with UI/backend integration, third-party API connections, and real-time data sync.',
    tech: ['HTML', 'JavaScript', 'AJAX', 'REST APIs'],
    github: 'https://github.com/yashasvi9199',
    demo: 'https://github.com/yashasvi9199',
    image: 'gradient-4',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const gradients = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-pink-500 to-purple-600',
  ];

  return (
    <div
      className="perspective-1000 h-96"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className={`w-full h-full bg-gradient-to-br ${gradients[index % 4]} rounded-xl p-8 flex flex-col justify-end`}>
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-[#112240] border-2 border-[#64FFDA] rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#CCD6F6] mb-4">{project.title}</h3>
              <p className="text-[#CCD6F6]/80 leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-sm text-[#64FFDA]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-transparent border border-[#64FFDA] text-[#64FFDA] rounded-lg hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all duration-300"
              >
                <Github size={20} />
                <span>Code</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#64FFDA] text-[#0A192F] rounded-lg hover:bg-[#64FFDA]/80 transition-all duration-300"
              >
                <ExternalLink size={20} />
                <span>Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 bg-[#112240]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#CCD6F6] mb-4">
            Featured <span className="text-[#64FFDA]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#64FFDA] mx-auto mb-4" />
          <p className="text-[#CCD6F6]/70 text-lg">Hover over cards to view details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
