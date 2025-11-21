
import React, { useState } from 'react';

const Logo: React.FC = () => {
    const name = "aminuddin shroff";
    const [animKey, setAnimKey] = useState(0);

    const triggerAnimation = () => {
        setAnimKey(prev => prev + 1);
    };

    return (
        <div 
            className="flex items-center gap-2 group cursor-pointer select-none" 
            onMouseEnter={triggerAnimation}
        >
            {/* Visually hidden text for screen readers */}
            <span className="sr-only">Aminuddin Shroff</span>

            {/* Networked 'a' Logo (Lowercase) - Hidden from screen readers as it is decorative/redundant to the text */}
            <div className="relative h-10 w-10 flex items-center justify-center" aria-hidden="true">
                <svg viewBox="0 0 32 32" className="w-full h-full overflow-visible">
                    {/* The Network Lines (The 'a' Frame) */}
                    <g key={`lines-${animKey}`} stroke="#FF6A13" strokeWidth="2.5" strokeLinecap="round" fill="none">
                        {/* Stem: Top Right to Bottom Right (Shortened to remove ascender) */}
                        <path d="M22 12 L22 26" 
                              style={{ 
                                  strokeDasharray: 20, 
                                  strokeDashoffset: 20, 
                                  animation: 'drawLines 0.4s ease-out forwards' 
                              }} 
                        />
                        {/* Bowl Top: Top of Stem to Left */}
                        <path d="M22 12 L8 19" 
                              style={{ 
                                  strokeDasharray: 16, 
                                  strokeDashoffset: 16, 
                                  animation: 'drawLines 0.4s ease-out 0.3s forwards' 
                              }} 
                        />
                        {/* Bowl Bottom: Left to Bottom of Stem */}
                        <path d="M8 19 L22 26" 
                              style={{ 
                                  strokeDasharray: 16, 
                                  strokeDashoffset: 16, 
                                  animation: 'drawLines 0.3s ease-out 0.6s forwards' 
                              }} 
                        />
                    </g>

                    {/* The Nodes (Dots) */}
                    <g fill="#FF6A13" key={`nodes-${animKey}`}>
                         {/* Top Right Node (Top of Stem) */}
                        <circle cx="22" cy="12" r="3" style={{ animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s both' }} />
                        {/* Left Node (Belly) */}
                        <circle cx="8" cy="19" r="3" style={{ animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.45s both' }} />
                        {/* Bottom Right Node (Bottom of Stem) */}
                        <circle cx="22" cy="26" r="3" style={{ animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.7s both' }} />
                    </g>
                </svg>
                <style>{`
                    @keyframes drawLines {
                        to { stroke-dashoffset: 0; }
                    }
                    @keyframes popIn {
                        from { transform: scale(0); transform-origin: center; opacity: 0; }
                        to { transform: scale(1); transform-origin: center; opacity: 1; }
                    }
                `}</style>
            </div>

            {/* Name - Hidden from screen readers as the span above covers it */}
            <div
                className="text-xl md:text-2xl font-bold font-sans text-gray-900 tracking-tighter flex"
                aria-hidden="true"
            >
                {name.split('').map((char, index) => (
                    <span
                        key={index}
                        className="transition-all duration-300 ease-in-out group-hover:text-brand-orange"
                        style={{ transitionDelay: `${index * 15}ms` }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Logo;
