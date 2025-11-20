
export interface Role {
    title: string;
    duration: string;
    location: string;
    description: string;
    isCurrent?: boolean;
    skills?: string[];
}
  
export interface CompanyExperience {
    company: string;
    companySubtitle?: string;
    totalDuration: string;
    roles: Role[];
}

export interface Skill {
  id: string;
  name: string;
  description: string;
}

export interface Certification {
    name: string;
    link?: string;
}

export const introParagraphs = [
    "A results-driven global sourcing expert and digital transformation leader with 10+ years of experience orchestrating high-stakes supply chain operations. Proven ability to lead and develop high-performing, multi-site teams, drive complex program management, and secure significant cost savings through strategic supplier relationships. This corporate expertise is sharpened by the entrepreneurial acumen gained as a 1x founder with a successful exit.",
    "Passionate about leveraging AI and automation to innovate and streamline processes. Authored publications on an AI-powered sourcing bot and a LegalTech solution to enhance contract redline efficiency. Adept at navigating diverse business cultures and building consensus among stakeholders to achieve strategic objectives."
];

export const callToAction = "Passionate about solving complex supply chain challenges. If you're looking for expertise in streamlining sourcing workflows and boosting efficiency, I'm available for consulting engagements. Let's connect.";

export const skillsData: { category: string; skills: Skill[] }[] = [
  {
    category: 'Core Sourcing & Procurement',
    skills: [
      { name: 'Strategic Sourcing', id: 'strategic-sourcing', description: 'Expertise in developing and executing comprehensive sourcing strategies that align with business objectives. This includes conducting market analysis, identifying potential suppliers, and managing competitive RFx processes to secure the best value. Applied extensively at Verizon to manage over $500M in spending and deliver significant savings.' },
      { name: 'Supplier Relationship Management', id: 'srm', description: 'Skilled in building and maintaining strong, collaborative relationships with key suppliers to drive performance, innovation, and long-term value. Implemented SRM programs at Hitachi and Genpact to monitor performance, mitigate risks, and foster a partnership approach, ensuring alignment with strategic goals.' },
      { name: 'Category Strategy', id: 'category-strategy', description: 'Proficient in developing multi-year category strategies that optimize spending, reduce risk, and deliver sustainable value. At Verizon, developed and executed strategies for multiple global sourcing categories, providing expert consultation to senior stakeholders on market trends and opportunities.' },
      { name: 'Contract Negotiation', id: 'contract-negotiation', description: 'Adept at leading complex contract negotiations with global suppliers, focusing on terms, pricing, and service levels to protect business interests and achieve favorable outcomes. Successfully negotiated high-value contracts across roles at Verizon, Hitachi, and Deloitte, ensuring compliance and mitigating legal and commercial risks.' },
      { name: 'Cost Savings', id: 'cost-savings', description: 'Proven track record of identifying and delivering substantial, documented cost savings through strategic sourcing, negotiation, and process optimization. A key achievement at Verizon was securing over $100M in savings by implementing data-driven sourcing methodologies and leading tough negotiations.' },
      { name: 'Procurement Operations', id: 'procurement-ops', description: 'Experienced in managing and streamlining end-to-end procurement operations, from purchase requisition to payment. At Hitachi and Genpact, I supervised delivery centers and optimized workflows to enhance efficiency, ensure compliance, and meet strict service level agreements (SLAs).' },
      { name: 'Risk Mitigation', id: 'risk-mitigation', description: 'Specialized in identifying, assessing, and mitigating supply chain risks, including geopolitical, financial, and operational vulnerabilities. This involves developing contingency plans and diversifying the supplier base to ensure business continuity, a critical function performed for key categories at Verizon.' },
      { name: 'Data-Driven Sourcing', id: 'data-sourcing', description: 'Leverages advanced data analytics to inform sourcing strategies, model total cost of ownership (TCO), and track supplier performance. At Deloitte and Verizon, led initiatives to collect, analyze, and present procurement data, uncovering insights that drove strategic decisions and negotiation leverage.' }
    ]
  },
  {
    category: 'Leadership & Change Management',
    skills: [
      { name: 'Team Leadership & Mentorship', id: 'team-leadership', description: 'Passionate about building, leading, and mentoring high-performing teams. Fosters a culture of collaboration, continuous learning, and empowerment. Consistently recognized for developing talent and guiding teams through complex challenges at Verizon, Hitachi, and Genpact.' },
      { name: 'Global Team Management', id: 'global-teams', description: 'Experienced in leading diverse, multi-site teams across different continents. As Associate Director at Verizon, I lead a team of over 50 professionals, aligning global operations and fostering a cohesive, high-performance culture across geographical boundaries.' },
      { name: 'Change Management', id: 'change-management', description: 'Expert in guiding organizations through significant transitions, including technology implementations and process re-engineering. Successfully led the change management for a critical ERP transition at Verizon and drove adoption of new sourcing methodologies as a change agent.' },
      { name: 'Stakeholder Management', id: 'stakeholder-management', description: 'Adept at building consensus and aligning stakeholders at all levels, from executive leadership to operational teams. This skill was crucial in large-scale program management at Verizon, ensuring all parties were engaged and committed to shared objectives.' },
      { name: 'Program Management', id: 'program-management', description: 'Skilled in overseeing complex, cross-functional programs from conception to completion. Managed the entire lifecycle of a critical ERP implementation at Verizon, ensuring the project stayed on schedule, within budget, and met all strategic goals.' },
      { name: 'Executive Communication', id: 'exec-comm', description: 'Proficient in distilling complex information into clear, concise, and compelling presentations for executive leadership. Regularly provided strategic updates and insights to senior leaders at Verizon, directly influencing high-impact sourcing decisions and supply chain strategy.' },
      { name: 'Cross-Functional Collaboration', id: 'cross-functional-collab', description: 'Fosters a collaborative environment by building strong relationships with legal, finance, IT, and business unit partners. This approach was key at Hitachi and Verizon to ensure seamless execution of procurement activities and alignment on strategic projects.' },
      { name: 'Process Improvement', id: 'process-improvement', description: 'Committed to continuous improvement by identifying inefficiencies and implementing streamlined, scalable processes. Led initiatives at Hitachi and Verizon to re-engineer procurement workflows, resulting in measurable gains in efficiency and productivity.' }
    ]
  },
  {
    category: 'Digital Transformation & Innovation',
    skills: [
      { name: 'AI-Powered Solutions', id: 'ai-solutions', description: 'Visionary in applying AI and automation to solve complex supply chain challenges. Authored a publication on an AI-powered sourcing bot designed to automate routine procurement tasks, and champion the integration of innovative technologies to drive efficiency at Verizon.' },
      { name: 'Digital Transformation Strategy', id: 'digital-transformation', description: 'Develops and executes strategies for digital transformation within procurement and supply chain functions. This involves identifying opportunities to leverage technology to enhance data analysis, improve decision-making, and create a more agile, resilient supply chain.' },
      { name: 'ERP Implementation', id: 'erp-implementation', description: 'Led the successful transition and in-housing of a critical ERP system at Verizon. Managed all phases of the project, demonstrating deep technical understanding and strong program management skills to ensure a stable and effective system rollout.' },
      { name: 'Process Automation', id: 'process-automation', description: 'Focuses on identifying and implementing automation solutions (e.g., RPA, AI bots) to reduce manual effort, minimize errors, and free up team members for more strategic work. A core component of the digital transformation initiatives I lead.' },
      { name: 'Data Analysis & Insights', id: 'data-analysis', description: 'Expert in transforming raw data into actionable business intelligence. At Deloitte, I was responsible for analyzing financial data from RFx activities to provide key insights that supported strategic negotiations and sourcing decisions.' },
      // FIX: Corrected a typo from `name:-` to `name:` which was causing a TypeScript type error.
      { name: 'LegalTech Innovation', id: 'legal-tech', description: 'Passionate about improving efficiency in the legal aspects of procurement. Co-authored a white paper on a LegalTech solution designed to streamline the contract redlining process, reducing turnaround times and legal overhead.' }
    ]
  }
];

export const certifications: Certification[] = [
    { name: 'Google Cloud Certified Generative AI Leader', link: 'https://www.credly.com/badges/cb444bae-86d0-4986-b5c9-7857fecfeb0b' },
    { name: 'Certified Professional in Strategic Sourcing (CPSS)' },
    { name: 'Certified Strategy Professional', link: 'https://www.udemy.com/certificate/UC-309dc03d-e471-41a8-8697-5f0a316032cd/' },
    { name: 'Generative AI for Project Managers', link: 'https://www.credly.com/badges/fd1f4fe7-41d3-4586-a648-09114f187116/public_url' },
    { name: 'Digital Transformation Roadmap for Business' },
    { name: 'Change Management Certification', link: 'https://www.udemy.com/certificate/UC-ccedbc8b-687a-4000-afcd-5fc65e1357ae/' },
    { name: 'Certified ANA Marketing Professional (CAMP)' },
    { name: 'Build Persuasive Products', link: 'https://www.udemy.com/certificate/UC-45be6f4b-a281-4910-8099-d8e146e53996/' },
    { name: 'Slack Workflow Builder' }
];

export const leadershipPrinciples = [
    {
      title: 'Empowerment Through Autonomy',
      description: 'Trust teams with ownership and provide them the space to innovate. Micromanagement stifles creativity; autonomy, guided by clear strategic goals, unlocks potential and drives accountability.'
    },
    {
      title: 'Clarity is Kindness',
      description: 'Communicate goals, feedback, and expectations with radical candor. Ambiguity creates friction and anxiety. Clear, direct, and empathetic communication is the foundation of high-performance teams.'
    },
    {
      title: 'Lead with Curiosity',
      description: 'Approach challenges with a beginner\'s mind. Ask questions, seek diverse perspectives, and never assume you have all the answers. Continuous learning is the engine of growth and innovation.'
    },
    {
      title: 'Build Bridges, Not Silos',
      description: 'Foster a culture of cross-functional collaboration. The most complex problems are solved when diverse expertise converges. Break down organizational barriers to create a unified, mission-focused team.'
    },
    {
      title: 'Results-Driven Empathy',
      description: 'Understand the human element behind the metrics. Drive for ambitious results while prioritizing the well-being and professional growth of every team member. Sustainable success is built on a foundation of mutual respect and support.'
    }
];

export const workData: CompanyExperience[] = [
    {
        company: 'Verizon',
        totalDuration: '6 years 6 months',
        roles: [
            {
                title: 'Associate Director, Shared Services & Operations (GSO)',
                duration: 'January 2024 - Present',
                location: 'Hyderabad, Telangana, India',
                description: 'A proven leader in strategic sourcing and procurement, with a strong track record of championing change management and digital transformation leading a 50+ talented sourcing professionals. By strategically integrating innovative, Al-powered solutions, this role has consistently driven significant process improvements and enhanced team productivity. My leadership style is defined by a commitment to mentorship, empowering global teams to embrace new technologies and become agents of change. The focus is on providing executive-level guidance on high-impact sourcing initiatives, directly influencing global supply chain strategy, and ensuring the organization remains at the forefront of procurement best practices.',
                isCurrent: true,
                skills: ['team-leadership', 'global-teams', 'change-management', 'digital-transformation', 'ai-solutions', 'process-improvement', 'exec-comm', 'stakeholder-management']
            },
            {
                title: 'WAVE Regional Communications Chair (Asia Pacific)',
                duration: 'April 2022 - Present',
                location: 'Hyderabad, Telangana, India',
                description: 'As a leader in a volunteer capacity, this role consistently demonstrated strategic leadership by serving as a Board Representative, providing updates, and acting as the primary point of contact for a large membership. The role drove a significant change management initiative by developing and executing a comprehensive communications plan to increase awareness and engagement. A key focus was on mentorship, cultivating and empowering a communications committee to foster professional growth. This leadership also resulted in a more engaged community by coordinating, writing, and distributing all membership communications. By streamlining processes, this role ensured consistency and efficiency across all communications and content delivery.',
                isCurrent: true,
                skills: ['team-leadership', 'exec-comm', 'stakeholder-management', 'process-improvement', 'change-management']
            },
            {
                title: 'Senior Manager, Shared Services & Operations (GSO)',
                duration: 'September 2022 - December 2023 (1 year 4 months)',
                location: 'Hyderabad, Telangana, India',
                description: 'In this leadership role, guided a team of over 30+ sourcing professionals, consistently exceeding key performance metrics and strategic objectives. This position served as a strategic partner to executive leadership, providing critical insights that directly influenced sourcing decisions and broader supply chain initiatives. With a strong focus on mentorship, the leader coached junior colleagues on complex sourcing projects, simultaneously pioneering a more collaborative team environment to improve communication and alignment across all functions.',
                skills: ['team-leadership', 'global-teams', 'exec-comm', 'cross-functional-collab', 'data-sourcing']
            },
             {
                title: 'Consultant, Sourcing',
                duration: 'March 2021 - September 2022 (1 year 7 months)',
                location: 'Hyderabad, Telangana, India',
                description: 'In this role, directed a complex change management initiative, successfully transitioning a critical ERP implementation from an external partner to an in-house team. This involved providing dynamic leadership across all program phases, from stakeholder management and budget control to execution and stabilization. By expertly managing both internal and external dependencies, this position ensured a smooth project timeline. A key focus was on proactive mentorship, guiding team members through the complexities of the new system while facilitating cross-functional collaboration to ensure all stakeholders were aligned and committed to the program\'s success.',
                skills: ['change-management', 'erp-implementation', 'program-management', 'stakeholder-management', 'cross-functional-collab']
            },
             {
                title: 'Specialist, Sourcing',
                duration: 'June 2019 - March 2021 (1 year 10 months)',
                location: 'Hyderabad, Telangana, India',
                description: 'As a strategic specialist, this role was responsible for managing over $500M in spending, identifying and securing over $100M in documented cost savings. A key focus was providing expert consultation to stakeholders by developing and executing category strategies that enhanced business value and mitigated risk. Acting as a change agent, this role introduced and implemented new sourcing methodologies and negotiation strategies to improve overall purchasing power. The position also fostered strong supplier relationships, drove performance improvements through effective contract management, and mentored junior team members on data-driven sourcing and negotiation best practices.',
                skills: ['strategic-sourcing', 'cost-savings', 'category-strategy', 'srm', 'contract-negotiation', 'data-sourcing', 'risk-mitigation', 'team-leadership']
            }
        ]
    },
    {
        company: 'Hitachi Vantara',
        totalDuration: '3 years 2 months',
        roles: [
            {
                title: 'Senior Consultant, Supply Chain (Asia Pacific)',
                duration: 'April 2018 - June 2019 (1 year 3 months)',
                location: 'Hyderabad, Telangana, India',
                description: '',
                skills: []
            },
             {
                title: 'Consultant, Supply Chain (Asia Pacific)',
                duration: 'May 2016 - April 2018 (2 years)',
                location: 'Hyderabad, Telangana, India',
                description: 'In this role, provided direct leadership and supervision to the India Delivery Centers, making key operational decisions that were aligned with senior leadership\'s strategic direction. This position was critical in fostering cross-functional collaboration with project managers and stakeholders to define requirements and ensure the seamless execution of procurement activities. By focusing on continuous improvement, the leader successfully streamlined end-to-end procurement processes, effectively managing supplier relationships, assessing performance, and overseeing contract and invoice management to maximize efficiency.',
                skills: ['team-leadership', 'procurement-ops', 'srm', 'contract-negotiation', 'process-improvement', 'cross-functional-collab']
            }
        ]
    },
    {
        company: 'Deloitte',
        companySubtitle: 'India (Offices of the US)',
        totalDuration: '',
        roles: [
            {
                title: 'Strategic Sourcing Analyst',
                duration: 'October 2015 - April 2016 (7 months)',
                location: 'Hyderabad, Andhra Pradesh, India',
                description: 'In this role, analyzed and presented financial data and key insights from RFx activities to support strategic decision-making. The position led data-driven initiatives, including collecting, organizing, and analyzing procurement data to identify cost-saving opportunities and support negotiation strategies.',
                skills: ['strategic-sourcing', 'data-analysis', 'data-sourcing', 'contract-negotiation']
            }
        ]
    },
    {
        company: 'Genpact',
        totalDuration: '2 years 1 month',
        roles: [
            {
                title: 'Senior Buyer',
                duration: 'October 2014 - October 2015 (1 year 1 month)',
                location: 'Hyderabad, Telangana, India',
                description: 'In this dynamic role, I managed day-to-day procurement operations and provided timely support for a variety of ad-hoc requests, including cost analysis, change management, and supplier performance management. I proactively contributed to internal business development, expanding the department\'s footprint and strengthening its influence within a specific region. A key aspect of this position was my role as a mentor, providing early coaching to junior procurement colleagues on smaller sourcing projects, and helping to build the firm\'s sourcing knowledge base.',
                skills: ['procurement-ops', 'change-management', 'srm', 'team-leadership', 'cost-savings']
            },
            {
                title: 'Buyer',
                duration: 'October 2013 - October 2014 (1 year 1 month)',
                location: 'Hyderabad, Telangana, India',
                description: 'As a member of a procurement team supporting a US healthcare implant multinational with their procurement operations. This role was responsible for managing day-to-day operations and providing timely support for a variety of ad-hoc requests, including cost analysis and delivery & lead time management to meet strict SLAs.',
                skills: ['procurement-ops', 'srm']
            }
        ]
    }
];
