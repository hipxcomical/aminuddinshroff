import React, { useState } from 'react';
import { CompanyExperience, Role } from '../data/resumeData';

interface TimelineProps {
  data: CompanyExperience[];
  hoveredSkill: string | null;
}

const Timeline: React.FC<TimelineProps> = ({ data, hoveredSkill }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const flatData = data.flatMap((companyExp, companyIndex) =>
    companyExp.roles.map((role, roleIndex) => ({
      ...role,
      company: companyExp.company,
      companySubtitle: companyExp.companySubtitle,
      totalDuration: companyExp.totalDuration,
      isFirstOfCompany: roleIndex === 0,
      id: `${companyIndex}-${roleIndex}`,
      skills: role.skills || [],
    }))
  );

  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute top-2 left-3 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>
      
      <div>
        {flatData.map((item) => {
          const isHoveredOnCard = hoveredId === item.id;
          const isSkillMatch = hoveredSkill && item.skills.includes(hoveredSkill);
          const isHighlighted = isHoveredOnCard || isSkillMatch;

          return (
            <div 
              key={item.id} 
              className="relative pl-10 pb-10 last:pb-0" 
              onMouseEnter={() => setHoveredId(item.id)} 
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Timeline Dot */}
              <div className="absolute left-3 top-2.5 transform -translate-x-1/2">
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${isHighlighted ? 'bg-brand-orange ring-4 ring-orange-100' : 'bg-gray-300 ring-4 ring-gray-100'}`}
                >
                </div>
              </div>

              <div>
                {item.isFirstOfCompany && (
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {item.company}
                      {item.companySubtitle && <span className="text-xl font-normal text-gray-700 ml-2">{item.companySubtitle}</span>}
                    </h3>
                    {item.totalDuration && <p className="text-gray-500">{item.totalDuration}</p>}
                  </div>
                )}
                
                {/* Card Content */}
                <div className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-300 ${isHighlighted ? 'shadow-lg ring-1 ring-brand-orange/50' : ''}`}>
                  <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-base text-gray-500 mb-3">{item.duration}{item.location && ` · ${item.location}`}</p>
                  {item.description && <p className="text-gray-700 text-justify">{item.description}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;