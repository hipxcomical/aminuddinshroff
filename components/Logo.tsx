import React, { useState } from 'react';

const Logo: React.FC = () => {
    const name = "aminuddin shroff";
    const lineCount = 4;
    const [animKey, setAnimKey] = useState(0);

    const triggerAnimation = () => {
        setAnimKey(prev => prev + 1);
    };

    return (
        <div 
            className="flex items-center gap-2 group cursor-pointer select-none" 
            aria-label="Aminuddin Shroff homepage"
            onMouseEnter={triggerAnimation}
        >
            {/* Animated Lines Logo */}
            <div className="h-8 w-8 flex flex-col justify-between py-1.5">
                {[...Array(lineCount)].map((_, i) => (
                    <div
                        key={`${animKey}-${i}`}
                        className="bg-brand-orange rounded-full w-full"
                        style={{
                            height: '3px',
                            opacity: 0,
                            animationName: 'fall',
                            animationDuration: '0.5s',
                            animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                            animationFillMode: 'forwards',
                            // Stagger animation: Bottom line falls first, piling up upwards
                            animationDelay: `${(lineCount - 1 - i) * 100}ms`
                        }}
                    />
                ))}
                <style>{`
                    @keyframes fall {
                        0% {
                            transform: translateY(-25px);
                            opacity: 0;
                        }
                        100% {
                            transform: translateY(0);
                            opacity: 1;
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
                        className="transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:text-brand-orange"
                        style={{ transitionDelay: `${index * 25}ms` }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Logo;