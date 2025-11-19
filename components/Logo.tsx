
import React, { useState } from 'react';

const Logo: React.FC = () => {
    const name = "aminuddin shroff";
    const [animKey, setAnimKey] = useState(0);

    const triggerAnimation = () => {
        setAnimKey(prev => prev + 1);
    };

    return (
        <div 
            className="flex items-center gap-1 group cursor-pointer select-none" 
            aria-label="Aminuddin Shroff homepage"
            onMouseEnter={triggerAnimation}
        >
            {/* Triangle Icon with Samurai Slice */}
            <div className="relative h-8 w-8 flex items-center justify-center mr-1">
                <svg viewBox="0 0 32 32" className="w-full h-full overflow-visible">
                    <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="1" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>
                    {/* Solid Triangle 'A' Base */}
                    <path
                        d="M16 2 L30 28 H2 Z"
                        fill="#FF6A13"
                        className="transform origin-center transition-transform duration-100"
                    />
                    
                    {/* The Slice Line (Samurai Cut) - Horizontal Middle Cut */}
                    <path
                        key={animKey}
                        d="M-6 17 L38 17"
                        stroke="white"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        fill="none"
                        style={{
                            strokeDasharray: 44,
                            strokeDashoffset: 44,
                            animation: 'samuraiSlice 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                        }}
                    />
                </svg>
                <style>{`
                    @keyframes samuraiSlice {
                        0% {
                            stroke-dashoffset: 44;
                        }
                        40% {
                            stroke-dashoffset: 0;
                        }
                        100% {
                            stroke-dashoffset: 0;
                        }
                    }
                `}</style>
            </div>

            {/* Name */}
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
