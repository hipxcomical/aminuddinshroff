import React from 'react';
import { AnimatedSection } from './CV';

const Connect: React.FC = () => {
  const calendarUrl = "https://calendar.app.google.com/y5w96c5WdeVyL5hV6";

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
            <div className="bg-gray-50/80 p-10 md:p-14 rounded-lg shadow-sm text-center max-w-4xl mx-auto mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule a Meeting</h2>
                <p className="text-gray-600 text-xl mb-6">
                    The most direct way to connect. Book a time that works for you directly on my calendar.
                </p>
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto bg-brand-orange text-white font-bold py-4 px-12 rounded-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 text-xl"
                >
                    Book an Appointment
                </a>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              
                <div className="bg-gray-50/80 p-10 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col text-center h-full">
                    <div className="flex-grow">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Me</h2>
                        <p className="text-gray-600 mb-4 text-xl">
                           Pinpoint my creative nexus with three random words. It's like geo-caching for ideas.
                        </p>
                    </div>
                    <a 
                      href="https://what3words.com/risks.mountain.challenge" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center bg-verizon-red text-white font-bold py-4 px-8 rounded-md transition-opacity duration-300 hover:opacity-90 mt-auto text-lg"
                    >
                      ///risks.mountain.challenge
                    </a>
                </div>

                 <div className="bg-gray-50/80 p-10 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col text-center h-full">
                    <div className="flex-grow">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">General Inquiries</h2>
                         <p className="text-gray-600 mb-4 text-xl">
                          Slide into my professional DMs. I'm always up for a good conversation about strategy, tech, or the next big thing.
                        </p>
                    </div>
                    <a href="https://www.linkedin.com/in/aminuddinshroff/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-linkedin-blue text-white font-bold py-4 px-8 rounded-md transition-opacity duration-300 hover:opacity-90 mt-auto text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.705-.52-1.248-1.342-1.248-.822 0-1.359.543-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.32 0-1.936.724-2.25 1.402h.016a2.53 2.53 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                        Connect on LinkedIn
                    </a>
                </div>
              
          </div>
        </AnimatedSection>
    </div>
  );
};

export default Connect;