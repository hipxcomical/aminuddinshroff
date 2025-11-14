import React, { useRef, useState, useEffect } from 'react';

export const AnimatedSection: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
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
    }, []);

    return (
        <section ref={ref} className={`${className} fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            {children}
        </section>
    );
};


const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <AnimatedSection className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed text-xl">
            {children}
        </div>
    </AnimatedSection>
);

const ExperienceItem: React.FC<{ title: string; company: string; duration: string; children: React.ReactNode }> = ({ title, company, duration, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-md h-full">
    <h3 className="text-2xl font-semibold text-gray-900">{company}</h3>
    <p className="text-xl text-gray-700">{title}</p>
    <p className="text-base text-gray-500 mb-4">{duration}</p>
    <div className="text-gray-600 space-y-2 text-xl leading-relaxed border-t border-gray-200 pt-4">{children}</div>
  </div>
);

const CertificationItem: React.FC<{ title: string; issuer: string; color: string }> = ({ title, issuer, color }) => (
  <div className={`bg-white p-6 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-md h-full border-l-4 ${color}`}>
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600">{issuer}</p>
  </div>
);

const Resume: React.FC = () => {
  return (
    <div className="w-full mx-auto px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
        <div>
            <AnimatedSection className="mb-16">
                <div className="flex flex-col lg:flex-row items-start lg:gap-16">
                    <div className="lg:flex-1">
                        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 tracking-tighter">Building High-Performance Teams & AI-Powered Solutions for Global Supply Chain Efficiency.</h1>
                        <div className="text-xl leading-relaxed text-gray-700 space-y-4">
                            <p className="text-justify">
                                A results-driven global sourcing expert and digital transformation leader with 10+ years of experience orchestrating high-stakes supply chain operations. Proven ability to lead and develop high-performing, multi-site teams, drive complex program management, and secure significant cost savings through strategic supplier relationships. This corporate expertise is sharpened by the entrepreneurial acumen gained as a 1x founder with a successful exit.
                            </p>
                            <p className="text-justify">
                                Passionate about leveraging AI and automation to innovate and streamline processes. Authored publications on an AI-powered sourcing bot and a LegalTech solution to enhance contract redline efficiency. Adept at navigating diverse business cultures and building consensus among stakeholders to achieve strategic objectives.
                            </p>
                            <p className="text-justify">
                               Available for Select Projects on improving workflows and efficiencies in the sourcing & supply chain processes.
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <Section title="Connect">
                 <div className="flex flex-wrap items-center gap-4 text-lg">
                    <a href="https://www.linkedin.com/in/aminuddinshroff/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-linkedin-blue text-white font-bold py-2 px-6 rounded-md transition-opacity duration-300 hover:opacity-90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.705-.52-1.248-1.342-1.248-.822 0-1.359.543-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.32 0-1.936.724-2.25 1.402h.016a2.53 2.53 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                        LinkedIn
                    </a>
                    <a href="https://drive.google.com/file/d/1OTXTfKo0b3mQU7WfPFuSStukqUK9RwTQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-700 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300 hover:bg-gray-900">
                        Download PDF
                    </a>
                    <a href="https://aminuddinshroff.substack.com/p/my-principles?utm_source=publication-search" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-md transition-colors duration-300 hover:bg-verizon-red hover:text-white">
                        My Principles
                    </a>
                </div>
            </Section>

            <Section title="Work Experience">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ExperienceItem title="Associate Director" company="Verizon" duration="December 2023 – Present">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Leading a Source-to-Contract support team of 30+ professionals and supply chain analysts.</li>
                            <li>Driving global strategic sourcing initiatives and overseeing end-to-end sourcing operations.</li>
                            <li>Developing supplier-facing knowledge management programs to enhance collaboration and efficiency.</li>
                        </ul>
                    </ExperienceItem>
                    <ExperienceItem title="Senior Manager" company="Verizon" duration="September 2022 – November 2023">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Led a source-to-contract support team of 20+ professionals.</li>
                            <li>Aligned with global sourcing leadership on business priorities and drove category-specific goals.</li>
                        </ul>
                    </ExperienceItem>
                    <ExperienceItem title="Specialist, Promoted to Consultant" company="Verizon" duration="June 2019 – August 2022">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Served a dual role as Program Leader for 1Sourcing Ariba S2C Implementation and Category Sourcing Consultant.</li>
                            <li>Managed projects with a spend of over $500M, achieving multi-site cost savings of $100M.</li>
                        </ul>
                    </ExperienceItem>
                    <ExperienceItem title="Supply Chain Senior Consultant" company="Hitachi Consulting" duration="May 2016 – June 2019">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Enhanced source-to-pay cycle efficiency by introducing a centralized purchasing function.</li>
                            <li>Implemented an eRequest Management System and streamlined the S2P process using Ariba On-Demand.</li>
                        </ul>
                    </ExperienceItem>
                    <ExperienceItem title="Strategic Sourcing Analyst" company="Deloitte" duration="October 2015 – April 2016">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Supported category managers in rolling out RFx for internal requirements in the US and India.</li>
                            <li>Acted as a single point of contact for suppliers and stakeholders during the sourcing process.</li>
                        </ul>
                    </ExperienceItem>
                    <ExperienceItem title="Strategic Sourcing Buyer" company="Genpact" duration="October 2013 – October 2015">
                        <ul className="list-disc pl-5 space-y-2">
                           <li>Worked as an MRO & IT Buyer, enhancing the S2P cycle for a multinational healthcare client.</li>
                           <li>Managed buying processes and ensured compliance with sourcing policies.</li>
                        </ul>
                    </ExperienceItem>
                </div>
            </Section>

            <Section title="Certifications">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CertificationItem title="Certified Supply Chain Professional (CSCP)" issuer="APICS" color="border-green-500" />
                    <CertificationItem title="Six Sigma Green Belt (CSSGB)" issuer="Anexas" color="border-gray-500" />
                    <CertificationItem title="GCP Certified Gen AI Leader" issuer="Google Cloud" color="border-yellow-500" />
                    <CertificationItem title="Certified Strategy Professional" issuer="Strategy Management Group" color="border-purple-500" />
                    <CertificationItem title="Slack Workflow Builder" issuer="Slack" color="border-blue-500" />
                    <CertificationItem title="Slack Champion Certification" issuer="Slack" color="border-indigo-500" />
                </div>
            </Section>

            <Section title="Professional Affiliations">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
                         <h3 className="text-xl font-semibold text-gray-900">Project Management Institute (PMI)</h3>
                    </div>
                     <div className="bg-white p-6 rounded-lg text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
                         <h3 className="text-xl font-semibold text-gray-900">Association for Supply Chain Management (APICS/ASCM)</h3>
                    </div>
                     <div className="bg-white p-6 rounded-lg text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
                         <h3 className="text-xl font-semibold text-gray-900">Institute for Supply Management (ISM)</h3>
                    </div>
                </div>
            </Section>


            <Section title="Core Competencies">
                 <div className="bg-white p-8 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sourcing & Procurement</h3>
                            <p className="text-gray-600">Category Management, Supplier Relationship Management, Contract Negotiation, Cost Reduction, Global Sourcing.</p>
                        </div>
                        <div>
                             <h3 className="text-xl font-semibold text-gray-900 mb-2">Program Management</h3>
                            <p className="text-gray-600">Agile Methodologies, Stakeholder Management, Budget Control, Risk Assessment, Performance Measurement.</p>
                        </div>
                         <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Leadership & Communication</h3>
                            <p className="text-gray-600">Visionary Thinking, Strategic Planning, Team Development, Cross-Functional Collaboration, Change Management.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    </div>
  );
};

export default Resume;