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
        <div className="bg-gray-50/80 p-8 md:p-12 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-xl">
                {children}
            </div>
        </div>
    </AnimatedSection>
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
                <div className="space-y-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Verizon</h3>
                        <p className="text-gray-500 mb-6">6 years 6 months</p>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800">Associate Director, Shared Services & Operations (GSO)</h4>
                                <p className="text-base text-gray-500 mb-3">January 2024 - Present &middot; Hyderabad, Telangana, India</p>
                                <p className="text-gray-700">A proven leader in strategic sourcing and procurement, with a strong track record of championing change management and digital transformation leading a 50+ talented sourcing professionals. By strategically integrating innovative, Al-powered solutions, this role has consistently driven significant process improvements and enhanced team productivity. My leadership style is defined by a commitment to mentorship, empowering global teams to embrace new technologies and become agents of change. The focus is on providing executive-level guidance on high-impact sourcing initiatives, directly influencing global supply chain strategy, and ensuring the organization remains at the forefront of procurement best practices.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800">WAVE Regional Communications Chair (Asia Pacific)</h4>
                                <p className="text-base text-gray-500 mb-3">April 2022 - Present &middot; Hyderabad, Telangana, India</p>
                                <p className="text-gray-700">As a leader in a volunteer capacity, this role consistently demonstrated strategic leadership by serving as a Board Representative, providing updates, and acting as the primary point of contact for a large membership. The role drove a significant change management initiative by developing and executing a comprehensive communications plan to increase awareness and engagement. A key focus was on mentorship, cultivating and empowering a communications committee to foster professional growth. This leadership also resulted in a more engaged community by coordinating, writing, and distributing all membership communications. By streamlining processes, this role ensured consistency and efficiency across all communications and content delivery.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800">Senior Manager, Shared Services & Operations (GSO)</h4>
                                <p className="text-base text-gray-500 mb-3">September 2022 - December 2023 (1 year 4 months) &middot; Hyderabad, Telangana, India</p>
                                <p className="text-gray-700">In this leadership role, guided a team of over 30+ sourcing professionals, consistently exceeding key performance metrics and strategic objectives. This position served as a strategic partner to executive leadership, providing critical insights that directly influenced sourcing decisions and broader supply chain initiatives. With a strong focus on mentorship, the leader coached junior colleagues on complex sourcing projects, simultaneously pioneering a more collaborative team environment to improve communication and alignment across all functions.</p>
                            </div>
                             <div>
                                <h4 className="text-xl font-semibold text-gray-800">Consultant, Sourcing</h4>
                                <p className="text-base text-gray-500 mb-3">March 2021 - September 2022 (1 year 7 months) &middot; Hyderabad, Telangana, India</p>
                                <p className="text-gray-700">In this role, directed a complex change management initiative, successfully transitioning a critical ERP implementation from an external partner to an in-house team. This involved providing dynamic leadership across all program phases, from stakeholder management and budget control to execution and stabilization. By expertly managing both internal and external dependencies, this position ensured a smooth project timeline. A key focus was on proactive mentorship, guiding team members through the complexities of the new system while facilitating cross-functional collaboration to ensure all stakeholders were aligned and committed to the program's success.</p>
                            </div>
                             <div>
                                <h4 className="text-xl font-semibold text-gray-800">Specialist, Sourcing</h4>
                                <p className="text-base text-gray-500 mb-3">June 2021 - March 2021 (1 year 10 months) &middot; Hyderabad, Telangana, India</p>
                                <p className="text-gray-700">As a strategic specialist, this role was responsible for managing over $500M in spending, identifying and securing over $100M in documented cost savings. A key focus was providing expert consultation to stakeholders by developing and executing category strategies that enhanced business value and mitigated risk. Acting as a change agent, this role introduced and implemented new sourcing methodologies and negotiation strategies to improve overall purchasing power. The position also fostered strong supplier relationships, drove performance improvements through effective contract management, and mentored junior team members on data-driven sourcing and negotiation best practices.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Hitachi Vantara</h3>
                        <p className="text-gray-500 mb-6">3 years 2 months</p>
                         <div className="space-y-8">
                             <div>
                                <h4 className="text-xl font-semibold text-gray-800">Senior Consultant, Supply Chain (Asia Pacific)</h4>
                                <p className="text-base text-gray-500 mb-3">April 2018 - June 2019 (1 year 3 months) &middot; Hyderabad, Telangana, India</p>
                            </div>
                             <div>
                                <h4 className="text-xl font-semibold text-gray-800">Consultant, Supply Chain (Asia Pacific)</h4>
                                <p className="text-base text-gray-500 mb-3">May 2016 - April 2018 (2 years) &middot; Hyderabad, Telangana, India</p>
                                <p className="text-gray-700">In this role, provided direct leadership and supervision to the India Delivery Centers, making key operational decisions that were aligned with senior leadership's strategic direction. This position was critical in fostering cross-functional collaboration with project managers and stakeholders to define requirements and ensure the seamless execution of procurement activities. By focusing on continuous improvement, the leader successfully streamlined end-to-end procurement processes, effectively managing supplier relationships, assessing performance, and overseeing contract and invoice management to maximize efficiency.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Deloitte India (Offices of the US)</h3>
                         <div className="space-y-8 mt-6">
                             <div>
                                <h4 className="text-xl font-semibold text-gray-800">Strategic Sourcing Analyst</h4>
                                <p className="text-base text-gray-500 mb-3">October 2015 - April 2016 (7 months) &middot; Hyderabad, Andhra Pradesh, India</p>
                                <p className="text-gray-700">In this role, analyzed and presented financial data and key insights from RFx activities to support strategic decision-making. The position led data-driven initiatives, including collecting, organizing, and analyzing large volumes of data for various projects and developing trend analyses for future-case scenario modeling. This role also contributed to significant system and reporting improvements by troubleshooting data integrity issues and participating in new tool implementations to ensure data accuracy and reliability.</p>
                            </div>
                        </div>
                    </div>
                     <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">GENPACT</h3>
                        <p className="text-gray-500 mb-6">2 years 1 month</p>
                         <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800">Senior Buyer</h4>
                                <p className="text-base text-gray-500 mb-3">October 2014 - October 2015 (1 year 1 month) &middot; Dlf Cybercity</p>
                                <p className="text-gray-700">In this dynamic role, I managed day-to-day procurement operations and provided timely support for a variety of ad-hoc requests, including cost analysis, change management, and supplier performance management. I proactively contributed to internal business development, expanding the department's footprint and strengthening its influence within a specific region. A key aspect of this position was my role as a mentor, providing early coaching to junior procurement colleagues on smaller sourcing projects, and helping to build the firm's sourcing knowledge base.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800">Buyer</h4>
                                <p className="text-base text-gray-500 mb-3">October 2013 - October 2014 (1 year 1 month) &middot; Hyderabad Area, India</p>
                                <p className="text-gray-700">As a member of a procurement team supporting a US healthcare implant multinational with their procurement operations. This role was responsible for managing day-to-day operations and providing timely support for a variety of ad-hoc requests, including cost analysis and delivery & lead time management to meet strict SLAs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section title="Certifications">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">Certified Supply Chain Professional (CSCP)</h3>
                        <p className="text-gray-600">APICS</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">Six Sigma Green Belt (CSSGB)</h3>
                        <p className="text-gray-600">Anexas</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">GCP Certified Gen AI Leader</h3>
                        <p className="text-gray-600">Google Cloud</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">Certified Strategy Professional</h3>
                        <p className="text-gray-600">Strategy Management Group</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">Slack Workflow Builder</h3>
                        <p className="text-gray-600">Slack</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">Slack Champion Certification</h3>
                        <p className="text-gray-600">Slack</p>
                    </div>
                </div>
            </Section>

            <Section title="Professional Affiliations">
                <div className="space-y-4">
                     <h3 className="text-xl font-semibold text-gray-900">Project Management Institute (PMI)</h3>
                     <h3 className="text-xl font-semibold text-gray-900">Association for Supply Chain Management (APICS/ASCM)</h3>
                     <h3 className="text-xl font-semibold text-gray-900">Institute for Supply Management (ISM)</h3>
                </div>
            </Section>


            <Section title="Core Competencies">
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
            </Section>
        </div>
    </div>
  );
};

export default Resume;