import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6 relative bg-noise">
      <div className="text-center max-w-4xl z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6">
          Orchestrating the Global Supply Chain.
          <br className="hidden md:block" /> Fueling the Next Road Trip.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10">
          Expertly orchestrating complex global sourcing, driving digital transformation, and leading high-performing teams.
        </p>
        <Link
          to="/cv"
          className="inline-block bg-transparent border-2 border-brand-orange text-brand-orange font-bold py-3 px-8 text-lg tracking-wide uppercase transition-all duration-300 hover:bg-brand-orange hover:text-white"
        >
          Explore the Symphony of Sourcing & Strategy
        </Link>
      </div>
    </div>
  );
};

export default Home;