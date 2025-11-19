
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

  // Sort skills alphabetically for display
  const sortedSkills = skillsData
    .flatMap(category => category.skills)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="w-full mx-auto px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
          {/* Hero Section: Minimal Text */}
          <AnimatedSection className="mb-12 md:mb-16 pt-6">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 tracking-tighter leading-[0.9] md:leading-[0.8] text-left lg:max-w-[24ch]">
                  Building High-Performance Teams & AI-Powered Solutions for Global Supply Chain Efficiency.
              </h1>
          </AnimatedSection>

          {/* Intro Text & CTA Section */}
          <AnimatedSection className="mb-12 md:mb-20">
              <div className="w-full">
                  <div className="text-lg md:text-xl leading-relaxed text-gray-800 space-y-6 text-justify">
                      {introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                  <div className="mt-10 p-8 bg-white border-l-4 border-brand-orange rounded-r-xl shadow-sm ring-1 ring-gray-100">
                      <p className="text-lg md:text-xl text-gray-900 leading-relaxed text-justify font-bold">{callToAction}</p>
                  </div>
              </div>
          </AnimatedSection>
          
          {/* TWO-COLUMN LAYOUT FOR SKILLS, PRINCIPLES & EXPERIENCE */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-10 mt-8">
            
            {/* Left Column: Skills & Leadership Principles */}
            <div className="lg:col-span-2 flex flex-col space-y-8">
                <AnimatedSection className="flex-grow flex flex-col">
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm flex-grow flex flex-col">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
                        <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-wrap lg:content-evenly lg:flex-grow">
                            {sortedSkills.map((skill) => {
                                const isDirectlyHovered = hoveredSkill === skill.id;
                                const isExperienceHovered = hoveredExperienceSkills.includes(skill.id);
                                const isHighlighted = isDirectlyHovered || isExperienceHovered;

                                const isFilterActive = hoveredSkill !== null || hoveredExperienceSkills.length > 0;
                                const isFaded = isFilterActive && !isHighlighted;
                                
                                return (
                                    <button 
                                        key={skill.id} 
                                        onClick={() => setSelectedSkill(skill)}
                                        className={`p-2 lg:px-4 lg:py-2 rounded-lg text-sm md:text-base lg:text-lg font-semibold transition-all duration-300 ease-in-out cursor-pointer w-full text-center lg:w-auto h-20 lg:h-auto flex items-center justify-center
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
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm flex-grow flex flex-col">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Leadership Principles</h2>
                        <div className="flex flex-col justify-between flex-grow space-y-4">
                            {leadershipPrinciples.map((principle) => (
                                <div key={principle.title} className="bg-gray-50 p-5 rounded-lg">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{principle.title}</h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{principle.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="flex-grow flex flex-col">
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm flex-grow flex flex-col">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Connect</h2>
                        <div className="flex flex-col items-stretch justify-center gap-4 flex-grow">
                           <a href="https://www.linkedin.com/in/aminuddinshroff/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-linkedin-blue text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-[#004182] hover:shadow-lg hover:-translate-y-1 text-lg md:text-xl text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.705-.52-1.248-1.342-1.248-.822 0-1.359.543-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.32 0-1.936.724-2.25 1.402h.016a2.53 2.53 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                </svg>
                                LinkedIn
                            </a>
                            <a href="https://drive.google.com/file/d/1OTXTfKo0b3mQU7WfPFuSStukqUK9RwTQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1 text-lg md:text-xl text-center">
                                Download PDF
                            </a>
                            <button 
                                className="inline-block bg-brand-orange text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:-translate-y-1 text-lg md:text-xl text-center"
                                onClick={() => window.open("https://aminuddinshroff.substack.com/p/my-principles?utm_source=publication-search", "_blank")}
                            >
                                My Principles
                            </button>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            {/* Right Column: Work Experience */}
            <div className="lg:col-span-3 mt-8 lg:mt-0">
                <AnimatedSection className="h-full">
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm h-full">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
                      <Timeline data={workData} hoveredSkill={hoveredSkill} onHoverRole={setHoveredExperienceSkills} />
                  </div>
                </AnimatedSection>
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
