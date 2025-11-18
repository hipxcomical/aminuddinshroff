import React from 'react';

const Logo: React.FC = () => {
    const name = "aminuddin shroff";

    return (
        <div className="flex items-center gap-2 group" aria-label="Aminuddin Shroff homepage">
            {/* Logo Monogram */}
            <div className="flex-shrink-0 transition-all duration-300 ease-in-out group-hover:scale-110">
                <span className="text-brand-orange font-bold text-2xl tracking-tighter">A/S</span>
            </div>

            {/* Name */}
            <div
                className="text-base font-bold font-sans text-gray-900 tracking-tighter flex"
                aria-hidden="true" // The parent div has the full aria-label
            >
                {name.split('').map((char, index) => (
                    <span
                        key={index}
                        className="transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:text-brand-orange"
                        style={{ transitionDelay: `${index * 35}ms` }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Logo;