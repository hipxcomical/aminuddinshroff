import React from 'react';
import { CompanyExperience } from '../data/resumeData';

interface TimelineProps {
  data: CompanyExperience[];
  hoveredSkill: string | null;
  onHoverRole: (skills: string[]) => void;
}

const Timeline: React.FC<TimelineProps> = ({ data, hoveredSkill, onHoverRole }) => {
  const hasActiveSkillFilter = hoveredSkill !== null;

  return (
    <div className="pl-2 md:pl-4">
      <div className="relative border-l-2 border-gray-200 space-y-12 pb-4">
        {data.map((companyExp, index) => {
          const companyHasSkill = companyExp.roles.some(role => 
            role.skills && role.skills.includes(hoveredSkill || '')
          );
          const isCompanyFaded = hasActiveSkillFilter && !companyHasSkill;

          return (
            <div key={index} className={`relative pl-6 md:pl-8 ${isCompanyFaded ? 'opacity-30' : 'opacity-100'} transition-opacity duration-300`}>
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 bg-white py-1">
                <div
                  className={`w-5 h-5 rounded-full border-4 border-white transition-all duration-300 ${
                    !hasActiveSkillFilter || companyHasSkill 
                        ? 'bg-gray-800 ring-2 ring-gray-800' 
                        : 'bg-gray-300 ring-2 ring-gray-300'
                  } ${hasActiveSkillFilter && companyHasSkill ? 'bg-brand-orange ring-brand-orange scale-110' : ''}`}
                >
                </div>
              </div>

              {/* Company Header */}
              <div className="mb-6 pt-0.5">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                  {companyExp.company}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-base text-gray-600 mt-1">
                   {companyExp.companySubtitle && <span className="font-medium">{companyExp.companySubtitle}</span>}
                   {companyExp.totalDuration && (
                       <>
                        {companyExp.companySubtitle && <span className="text-gray-400">•</span>}
                        <span className="text-sm uppercase tracking-wide font-medium">{companyExp.totalDuration}</span>
                       </>
                   )}
                </div>
              </div>

              {/* Roles List */}
              <div className="space-y-6">
                {companyExp.roles.map((role, roleIndex) => {
                  const isSkillMatch = hoveredSkill && role.skills?.includes(hoveredSkill);
                  const isRoleFaded = hasActiveSkillFilter && !isSkillMatch;

                  return (
                    <div 
                      key={roleIndex} 
                      className={`relative transition-all duration-300 ${isRoleFaded ? 'opacity-50' : 'opacity-100'}`}
                      onMouseEnter={() => onHoverRole(role.skills || [])}
                      onMouseLeave={() => onHoverRole([])}
                    >
                      <div className={`bg-gray-50 p-5 rounded-lg border-l-4 transition-all duration-300 hover:shadow-md
                          ${isSkillMatch ? 'border-brand-orange shadow-md bg-white' : 'border-transparent hover:border-brand-orange'}
                      `}>
                          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                            <h4 className="text-lg font-bold text-gray-800">{role.title}</h4>
                            <span className="text-sm text-gray-500 font-medium mt-1 md:mt-0">{role.duration}</span>
                          </div>
                          
                          {role.location && <div className="text-sm text-gray-500 mb-3 -mt-1">{role.location}</div>}
                          
                          {role.description && (
                              <p className="text-gray-700 text-base leading-relaxed text-left md:text-justify">
                                  {role.description}
                              </p>
                          )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;