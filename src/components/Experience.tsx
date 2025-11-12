import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences = [
  {
    title: 'Founder & Operator',
    company: 'Food Truck Venture',
    location: 'Jaipur, India',
    period: 'October 2023 – March 2025',
    description: [
      'Directed end-to-end operations: menu development, procurement, inventory management, and customer service',
      'Generated ₹11,000+ sales during Navratri 2024 (₹7,000 net profit), serving ~600 customers',
      'Managed high-pressure environments with manual order tracking and financial bookkeeping',
    ],
    color: '#64FFDA',
  },
  {
    title: 'Software Engineer',
    company: 'Appgallop Pvt. Ltd.',
    location: 'Jaipur, India',
    period: 'February 2023 – August 2023',
    description: [
      'Engineered SaaS solutions for sales management and operational workflows',
      'Optimized code performance by 20%, reduced hardware costs by 7%, decreased bug rates by 25%',
      'Developed robust web applications using HTML, CSS, JavaScript, Java, and Visual Studio',
    ],
    color: '#64FFDA',
  },
  {
    title: 'Resolution Specialist',
    company: 'Amazon Development Center',
    location: 'Jaipur, India',
    period: 'September 2020 – January 2023',
    description: [
      'Analyzed and resolved complex technical challenges for internal/external customers',
      'Created centralized portals on internal wiki during sales events',
      'Enhanced team efficiency through proactive documentation and process optimization',
    ],
    color: '#64FFDA',
  },
  {
    title: 'Customer Service Associate',
    company: 'Amazon Development Center',
    location: 'Jaipur, India',
    period: 'June 2019 – September 2020',
    description: [
      'Delivered exceptional customer support with empathy and accuracy',
      'Recognized with Customer Obsession Award (2019) and Trainee of the Batch (2019)',
    ],
    color: '#64FFDA',
  },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 bg-[#0A192F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#CCD6F6] mb-4">
            Professional <span className="text-[#64FFDA]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-[#64FFDA] mx-auto" />
        </div>

        <div className="relative">
          <div className="overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex gap-8 min-w-max px-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 bg-[#112240] rounded-lg p-6 border border-[#64FFDA]/20 hover:border-[#64FFDA] transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-[#64FFDA]/10 rounded-lg">
                      <Briefcase className="text-[#64FFDA]" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#CCD6F6]">{exp.title}</h3>
                      <p className="text-[#64FFDA] font-medium">{exp.company}</p>
                      <p className="text-[#CCD6F6]/60 text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#CCD6F6]/70 text-sm mb-4">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-[#CCD6F6]/80 text-sm flex items-start gap-2">
                        <span className="text-[#64FFDA] mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-[#CCD6F6]/60 text-sm">Scroll horizontally to view all experiences →</p>
        </div>
      </div>
    </section>
  );
};
