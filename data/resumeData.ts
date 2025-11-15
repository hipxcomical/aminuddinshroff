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

export const introParagraphs = [
    "A results-driven global sourcing expert and digital transformation leader with 10+ years of experience orchestrating high-stakes supply chain operations. Proven ability to lead and develop high-performing, multi-site teams, drive complex program management, and secure significant cost savings through strategic supplier relationships. This corporate expertise is sharpened by the entrepreneurial acumen gained as a 1x founder with a successful exit.",
    "Passionate about leveraging AI and automation to innovate and streamline processes. Authored publications on an AI-powered sourcing bot and a LegalTech solution to enhance contract redline efficiency. Adept at navigating diverse business cultures and building consensus among stakeholders to achieve strategic objectives."
];

export const callToAction = "Passionate about solving complex supply chain challenges. If you're looking for expertise in streamlining sourcing workflows and boosting efficiency, I'm available for consulting engagements. Let's connect.";

export const skillsData = [
  {
    category: 'Core Sourcing & Procurement',
    skills: [
      { name: 'Strategic Sourcing', id: 'strategic-sourcing' },
      { name: 'Supplier Relationship Management', id: 'srm' },
      { name: 'Category Strategy', id: 'category-strategy' },
      { name: 'Contract Negotiation', id: 'contract-negotiation' },
      { name: 'Cost Savings', id: 'cost-savings' },
      { name: 'Procurement Operations', id: 'procurement-ops' },
      { name: 'Risk Mitigation', id: 'risk-mitigation' },
      { name: 'Data-Driven Sourcing', id: 'data-sourcing' }
    ]
  },
  {
    category: 'Leadership & Change Management',
    skills: [
      { name: 'Team Leadership & Mentorship', id: 'team-leadership' },
      { name: 'Global Team Management', id: 'global-teams' },
      { name: 'Change Management', id: 'change-management' },
      { name: 'Stakeholder Management', id: 'stakeholder-management' },
      { name: 'Program Management', id: 'program-management' },
      { name: 'Executive Communication', id: 'exec-comm' },
      { name: 'Cross-Functional Collaboration', id: 'cross-functional-collab' },
      { name: 'Process Improvement', id: 'process-improvement' }
    ]
  },
  {
    category: 'Digital Transformation & Innovation',
    skills: [
      { name: 'AI-Powered Solutions', id: 'ai-solutions' },
      { name: 'Digital Transformation Strategy', id: 'digital-transformation' },
      { name: 'ERP Implementation', id: 'erp-implementation' },
      { name: 'Process Automation', id: 'process-automation' },
      { name: 'Data Analysis & Insights', id: 'data-analysis' },
      { name: 'LegalTech Innovation', id: 'legal-tech' }
    ]
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