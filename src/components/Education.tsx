import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const educationData = [
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'University of Rajasthan',
    period: '2016 - 2019',
    grade: '71%',
    type: 'degree',
  },
  {
    degree: 'Senior Secondary Education',
    institution: "St. Edmund's School",
    period: '2015 - 2016',
    grade: '75.8%',
    type: 'school',
  },
];

const achievements = [
  {
    title: 'Certificate of Recognition',
    description: 'Outstanding contributions to JioCloud Go Live and General Availability projects',
    date: 'June 2023',
    organization: 'Appgallop Pvt. Ltd.',
  },
  {
    title: 'Amazon Internal Wiki Development',
    description: 'Recognized for creating knowledge-sharing websites and promotions portal',
    date: '2020 - 2023',
    organization: 'Amazon Development Center',
  },
  {
    title: 'Customer Obsession Award',
    description: 'Exceptional performance and workplace impact',
    date: '2019',
    organization: 'Amazon Development Center',
  },
  {
    title: 'Trainee of the Batch',
    description: 'Top performer among new hires',
    date: '2019',
    organization: 'Amazon Development Center',
  },
];

export const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-20 bg-[#112240]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#CCD6F6] mb-4">
            Education & <span className="text-[#64FFDA]">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-[#64FFDA] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#CCD6F6] mb-8 flex items-center gap-3">
              <GraduationCap className="text-[#64FFDA]" size={32} />
              Education
            </h3>

            <div className="relative border-l-2 border-[#64FFDA]/30 pl-8 space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute -left-[41px] top-0 w-8 h-8 bg-[#64FFDA] rounded-full border-4 border-[#112240] flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#0A192F] rounded-full" />
                  </div>

                  <div className="bg-[#0A192F] rounded-lg p-6 border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-[#CCD6F6]">{edu.degree}</h4>
                      <span className="px-3 py-1 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] text-sm">
                        {edu.grade}
                      </span>
                    </div>
                    <p className="text-[#64FFDA] font-medium mb-1">{edu.institution}</p>
                    <p className="text-[#CCD6F6]/60 text-sm">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#CCD6F6] mb-8 flex items-center gap-3">
              <Award className="text-[#64FFDA]" size={32} />
              Achievements & Awards
            </h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-[#0A192F] rounded-lg p-6 border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#64FFDA]/10 rounded-lg flex items-center justify-center">
                      <Award className="text-[#64FFDA]" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#CCD6F6] mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-[#CCD6F6]/80 text-sm mb-2">
                        {achievement.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-[#64FFDA] text-sm font-medium">
                          {achievement.organization}
                        </p>
                        <p className="text-[#CCD6F6]/60 text-sm">{achievement.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
