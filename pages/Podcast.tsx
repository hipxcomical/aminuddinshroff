import React from 'react';
import { AnimatedSection } from './CV';

const Podcast: React.FC = () => {
  const spotifyShowUrl = "https://open.spotify.com/show/2RbV83klNFT2MxfkPizESi";
  const applePodcastShowUrl = "https://podcasts.apple.com/us/podcast/hip-x-comical/id1789729101";

  return (
    <div className="w-full mx-auto px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
        <AnimatedSection>
          <header className="mb-16 text-left">
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter">Podcast</h1>
              <p className="text-xl text-gray-700 mt-4 leading-relaxed max-w-4xl text-justify">
                  In global supply chains, success is built on strategy, efficiency, and clear thinking. Hip X Comical is where those same principles are applied to life beyond the boardroom. This podcast explores how the mindsets that build high-performance teams and drive digital transformation can bring clarity and insight to design, culture, and personal growth. It's a journey into strategic living, fueled by curiosity and a healthy dose of humour. For more applied thoughts, explore my writing at <a href="https://aminuddinshroff.substack.com" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline font-semibold">aminuddinshroff.substack.com</a>
              </p>
          </header>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
              <a
                href={spotifyShowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-full md:w-auto bg-spotify-green text-white font-bold text-2xl py-6 px-12 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>Listen on Spotify</span>
              </a>
              <a
                href={applePodcastShowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-full md:w-auto bg-apple-podcast-purple text-white font-bold text-2xl py-6 px-12 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>Listen on Apple Podcasts</span>
              </a>
          </div>
        </AnimatedSection>
    </div>
  );
};

export default Podcast;