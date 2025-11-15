import React from 'react';

const HandwritingSignature: React.FC = () => {
    const name = "aminuddin shroff";

    return (
        <div 
            className="text-base font-bold font-sans text-gray-900 tracking-tighter flex group" 
            aria-label={name}
        >
            {name.split('').map((char, index) => (
                <span
                    key={index}
                    className="transition-transform duration-300 ease-in-out group-hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 35}ms` }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </div>
    );
};

export default HandwritingSignature;