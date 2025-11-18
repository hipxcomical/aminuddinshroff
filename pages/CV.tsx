import React, { useRef, useState, useEffect } from 'react';
import Timeline from '../components/Timeline';
import SkillModal from '../components/SkillModal';
import { introParagraphs, skillsData, workData, callToAction, leadershipPrinciples, Skill } from '../data/resumeData';

export const AnimatedSection: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [useAnimation, setUseAnimation] = useState(false);

    useEffect(() => {
        const checkAnimation = () => {
            setUseAnimation(window.innerWidth >= 768);
        };
        checkAnimation();
        window.addEventListener('resize', checkAnimation);
        return () => window.removeEventListener('resize', checkAnimation);
    }, []);

    useEffect(() => {
        if (!useAnimation) {
            // Instantly make visible if not using animations (for mobile)
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentElement = ref.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [useAnimation]);

    const animationClasses = useAnimation ? `fade-in-section ${isVisible ? 'is-visible' : ''}` : '';

    return (
        <section ref={ref} className={`${className} ${animationClasses}`}>
            {children}
        </section>
    );
};


const Resume: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [hoveredExperienceSkills, setHoveredExperienceSkills] = useState<string[]>([]);

  return (
    <>
      <div className="w-full mx-auto px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
          <div className="mx-2">
              <AnimatedSection className="mb-16">
                  <div>
                      <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 tracking-tighter">Building High-Performance Teams & AI-Powered Solutions for Global Supply Chain Efficiency.</h1>
                      <div className="text-xl leading-relaxed text-gray-700 space-y-4">
                          {introParagraphs.map((p, i) => <p key={i} className="text-left md:text-justify">{p}</p>)}
                      </div>
                      <div className="mt-8 p-6 bg-brand-orange/10 border-l-4 border-brand-orange rounded-r-lg">
                          <p className="text-xl text-gray-800 leading-relaxed font-medium">{callToAction}</p>
                      </div>
                  </div>
              </AnimatedSection>
              
              {/* TWO-COLUMN LAYOUT FOR SKILLS, PRINCIPLES & EXPERIENCE */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-16 mt-16">
                
                {/* Left Column: Skills & Leadership Principles */}
                <div className="lg:col-span-2 flex flex-col space-y-16">
                    <AnimatedSection className="flex-grow flex flex-col">
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm flex-grow flex flex-col">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
                            <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-wrap lg:content-evenly lg:flex-grow">
                                {skillsData.flatMap(category => category.skills).map((skill) => {
                                    const isDirectlyHovered = hoveredSkill === skill.id;
                                    const isExperienceHovered = hoveredExperienceSkills.includes(skill.id);
                                    const isHighlighted = isDirectlyHovered || isExperienceHovered;

                                    const isFilterActive = hoveredSkill !== null || hoveredExperienceSkills.length > 0;
                                    const isFaded = isFilterActive && !isHighlighted;
                                    
                                    return (
                                        <button 
                                            key={skill.id} 
                                            onClick={() => setSelectedSkill(skill)}
                                            className={`p-2 lg:px-4 lg:py-2 rounded-lg text-base lg:text-lg font-semibold transition-all duration-300 ease-in-out cursor-pointer w-full text-center lg:w-auto h-24 lg:h-auto flex items-center justify-center
                                                ${isHighlighted
                                                    ? 'bg-brand-orange text-white scale-110 shadow-lg'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-brand-orange hover:text-white hover:scale-105'
                                                }
                                                ${isFaded ? 'opacity-40' : 'opacity-100'}
                                            `}
                                            onMouseEnter={() => setHoveredSkill(skill.id)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                        >
                                            {skill.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="flex-grow flex flex-col">
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm flex-grow flex flex-col">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership Principles</h2>
                            <div className="flex flex-col justify-between flex-grow space-y-4">
                                {leadershipPrinciples.map((principle) => (
                                    <div key={principle.title} className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{principle.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="flex-grow flex flex-col">
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm flex-grow flex flex-col">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Connect</h2>
                            <div className="flex flex-col items-stretch justify-center gap-6 flex-grow">
                               <a href="https://www.linkedin.com/in/aminuddinshroff/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-linkedin-blue text-white font-bold py-4 px-8 rounded-lg transition-opacity duration-300 hover:opacity-90 text-xl text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.705-.52-1.248-1.342-1.248-.822 0-1.359.543-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.32 0-1.936.724-2.25 1.402h.016a2.53 2.53 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg>
                                    LinkedIn
                                </a>
                                <a href="https://drive.google.com/file/d/1OTXTfKo0b3mQU7WfPFuSStukqUK9RwTQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 hover:bg-gray-600 text-xl text-center">
                                    Download PDF
                                </a>
                                <a href="https://aminuddinshroff.substack.com/p/my-principles?utm_source=publication-search" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 hover:bg-verizon-red hover:text-white text-xl text-center">
                                    My Principles
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Right Column: Work Experience */}
                <div className="lg:col-span-3 mt-16 lg:mt-0">
                    <AnimatedSection className="h-full">
                      <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm h-full">
                          <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
                          <Timeline data={workData} hoveredSkill={hoveredSkill} onHoverRole={setHoveredExperienceSkills} />
                      </div>
                    </AnimatedSection>
                </div>
              </div>
          </div>
      </div>
      {selectedSkill && (
        <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
      )}
    </>
  );
};

export default Resume;