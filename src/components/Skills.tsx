import { useRef, useState, useEffect } from 'react';
import { Code, Server, Database, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'HTML5/CSS3', level: 90 },
      { name: 'TypeScript', level: 75 },
      { name: 'Redux', level: 70 },
      { name: 'jQuery', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'Express', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'MongoDB Atlas', level: 70 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Linux', level: 75 },
      { name: 'Jira', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'Visual Studio', level: 80 },
    ],
  },
];

const SkillBar = ({ skill, isVisible }: { skill: { name: string; level: number }; isVisible: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-[#CCD6F6] font-medium">{skill.name}</span>
        <span className="text-[#64FFDA]">{skill.level}%</span>
      </div>
      <div className="h-2 bg-[#0A192F] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#64FFDA] to-[#64FFDA]/60 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 bg-[#0A192F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#CCD6F6] mb-4">
            Technical <span className="text-[#64FFDA]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#64FFDA] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bg-[#112240] rounded-lg p-8 border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                    <Icon className="text-[#64FFDA]" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#CCD6F6]">{category.title}</h3>
                </div>

                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} isVisible={isVisible} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-[#112240] rounded-lg p-8 border border-[#64FFDA]/20">
          <h3 className="text-2xl font-bold text-[#CCD6F6] mb-6 text-center">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Agile/Scrum',
              'Performance Optimization',
              'Full SDLC',
              'Knowledge Management',
              'Problem Solving',
              'Team Leadership',
              'Documentation',
              'Bash Scripting',
              'AJAX',
              'BitBucket',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] hover:bg-[#64FFDA]/20 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
