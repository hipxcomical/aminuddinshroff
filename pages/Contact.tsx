import React from 'react';
import { AnimatedSection } from './CV';

// Reusable component for the new interactive connect cards
const ConnectCard: React.FC<{ href: string; title: string; description: string; }> = ({ href, title, description }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block bg-gray-50/80 p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-brand-orange/50"
  >
    <div className="flex justify-between items-start h-full">
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed flex-grow">{description}</p>
      </div>
      <span className="text-gray-400 transform transition-transform duration-300 group-hover:text-brand-orange group-hover:translate-x-2 ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </div>
  </a>
);

const Connect: React.FC = () => {
  // Define all links here for easy management
  const calendarUrl = "https://calendar.app.google/j3Dpi86iKam3Bs9k8";
  const linkedinProfileUrl = "https://www.linkedin.com/in/aminuddinshroff/";
  const what3WordsUrl = "https://what3words.com/risks.mountain.challenge";

  return (
    <div className="w-full mx-auto px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
      <AnimatedSection>
        <header className="mb-12 md:mb-16 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-tight max-w-5xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an interesting vision. Let's talk strategy, sourcing, or the best route to the Himalayas.
              </h1>
          </header>
        </AnimatedSection>

        <section className="mb-12 md:mb-16">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50/80 p-8 md:p-10 rounded-lg shadow-sm border-l-4 border-brand-orange">
                    <div className="text-gray-700 leading-relaxed space-y-4">
                        <p className="text-xl italic">
                            “I highly recommend Amin for his exceptional contributions to Strategic Sourcing. Starting as a Specialist in Market Research, he quickly advanced to Associate Director, overseeing critical shared services. Amin is a remarkable professional, consistently demonstrating strategic capability, operational excellence, and transformative leadership.”
                        </p>
                        
                        <div className="space-y-3 text-lg">
                            <p className="font-semibold text-gray-800">Key highlights include:</p>
                            <div className="pl-4 border-l-2 border-gray-300 space-y-2">
                                <p><strong className="font-semibold">Operational Transformation & Scaling:</strong> As Senior Manager and Associate Director, Amin built and led the Shared Services team, supporting 30+ global sourcing categories and centralizing functions for measurable efficiency.</p>
                                <p><strong className="font-semibold">Commitment to Culture and People:</strong> He fostered a collaborative, empowering, and inclusive environment, mentoring his team and championing continuous improvement.</p>
                                <p><strong className="font-semibold">Program and Change Management:</strong> As a Consultant, he led crucial training and transition for the Ariba platform, demonstrating strong change management and communication skills.</p>
                            </div>
                        </div>

                        <p className="text-xl italic">
                            “Amin is a high-impact leader capable of executing complex contracts, building, scaling, and culturally aligning organizational infrastructure for global procurement success. I wish him the best in his career.”
                        </p>
                    </div>
                    <cite className="block text-right mt-6 not-italic">
                        <span className="font-bold text-gray-800">Peter Ucovich</span>
                        <span className="block text-gray-500 text-base">Chief Product & Sourcing Office E&I</span>
                        <span className="block text-gray-500 text-sm">Peter managed Amin directly at Verizon</span>
                    </cite>
                </div>
            </div>
        </section>

        <AnimatedSection>
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Let's Connect</h2>
                <p className="text-xl text-gray-600 mt-3 max-w-2xl mx-auto">
                    Here are a few ways you can reach out or learn more about my work.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <ConnectCard 
                    href={calendarUrl}
                    title="Schedule a Meeting"
                    description="The most direct way to connect. Book a time that works for you directly on my calendar."
                />
                <ConnectCard 
                    href={linkedinProfileUrl}
                    title="Write a Recommendation"
                    description="If we've worked together, I'd appreciate your endorsement on my LinkedIn profile."
                />
                <ConnectCard 
                    href={linkedinProfileUrl}
                    title="General Inquiries"
                    description="Slide into my professional DMs. I'm always up for a good conversation about strategy or tech."
                />
                <ConnectCard 
                    href={what3WordsUrl}
                    title="Find My Nexus"
                    description="Pinpoint my creative base with three random words. It's like geo-caching for ideas."
                />
            </div>
        </AnimatedSection>
    </div>
  );
};

export default Connect;