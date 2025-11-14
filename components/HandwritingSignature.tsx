import React from 'react';

const HandwritingSignature: React.FC = () => {
    const name = "aminuddin shroff";

    return (
        <div className="text-4xl font-script text-gray-900" aria-label={name}>
            {name}
        </div>
    );
};

export default HandwritingSignature;