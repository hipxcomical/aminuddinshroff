import React, { useState, useEffect } from 'react';
import { AnimatedSection } from './CV';

// Define the structure of an episode
interface Episode {
  title: string;
  link: string;
  pubDate: string;
  description: string; // This will be HTML content
  audioUrl: string;
}

// Skeleton loader for episode cards
const EpisodeSkeletonCard: React.FC = () => (
  <div className="bg-gray-50/80 p-6 rounded-lg shadow-sm animate-pulse">
    <div className="h-5 bg-gray-300 rounded-lg w-3/4 mb-3"></div>
    <div className="h-4 bg-gray-300 rounded-lg w-1/2 mb-4"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-300 rounded-lg w-full"></div>
      <div className="h-4 bg-gray-300 rounded-lg w-5/6"></div>
      <div className="h-4 bg-gray-300 rounded-lg w-full"></div>
    </div>
  </div>
);

// Component to display a single episode
const EpisodeCard: React.FC<{ episode: Episode }> = ({ episode }) => {
  const date = new Date(episode.pubDate);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Create a clean text snippet by stripping HTML tags and truncating
  const textDescription = episode.description.replace(/<[^>]*>?/gm, '');
  const snippet = textDescription.length > 200 
    ? textDescription.substring(0, 200) + '...' 
    : textDescription;

  return (
    <div className="bg-gray-50/80 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group flex flex-col h-full">
      <a href={episode.link} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-sm text-gray-500 mb-1">{formattedDate}</p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">
            {episode.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{snippet}</p>
        </div>
        <div className="mt-4 text-sm font-semibold text-brand-orange">
          Read Show Notes & Listen <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-block group-hover:translate-x-1">→</span>
        </div>
      </a>
    </div>
  );
};

const Podcast: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const spotifyShowUrl = "https://open.spotify.com/show/2RbV83klNFT2MxfkPizESi";
  const applePodcastShowUrl = "https://podcasts.apple.com/us/podcast/hip-x-comical/id1789729101";
  const spotifyEmbedUrl = "https://open.spotify.com/embed/show/2RbV83klNFT2MxfkPizESi?utm_source=generator";
  
  useEffect(() => {
    const fetchEpisodes = async () => {
      const cachedEpisodesJSON = localStorage.getItem('substack_episodes');
      if (cachedEpisodesJSON) {
        try {
          const episodesFromCache: Episode[] = JSON.parse(cachedEpisodesJSON);
          setEpisodes(episodesFromCache);
          setLoading(false);
        } catch (e) {
          console.error("Failed to parse cached episodes", e);
          localStorage.removeItem('substack_episodes');
        }
      } else {
        setLoading(true);
      }
      
      try {
        const RSS_URL = 'https://aminuddinshroff.substack.com/feed';
        const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}&_=${Date.now()}`;
        
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        if (data.status !== 'ok') throw new Error('RSS feed could not be fetched.');

        const podcastItems = data.items.filter((item: any) => 
          item.enclosure && item.enclosure.type && item.enclosure.type.startsWith('audio/')
        );
        
        const parsedEpisodes: Episode[] = podcastItems.map((item: any) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          description: item.description,
          audioUrl: item.enclosure.link,
        }));
        
        setEpisodes(parsedEpisodes);
        localStorage.setItem('substack_episodes', JSON.stringify(parsedEpisodes));
        setError(null);
      } catch (e) {
        console.error("Failed to fetch or parse RSS feed:", e);
        if (!cachedEpisodesJSON) { // Only show error if there was no cache to begin with
           setError("Could not load podcast episodes. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchEpisodes();
  }, []);

  return (
    <div className="w-full mx-auto px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
        <AnimatedSection>
          <header className="mb-12 text-left">
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter">Podcast</h1>
              <p className="text-xl text-gray-700 mt-4 leading-relaxed max-w-4xl">
                  My day job is untangling global supply chains. This podcast is for untangling everything else. Hip X Comical takes the logic of digital transformation and points it at design, culture, and the weirdness of being human. Think of it as strategic living, with less spreadsheets and more existential jokes. For more applied thoughts, explore my writing at <a href="https://aminuddinshroff.substack.com" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline font-semibold">aminuddinshroff.substack.com</a>
              </p>
          </header>
        </AnimatedSection>

        <AnimatedSection>
           <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Listen to the Latest Episode</h2>
              <iframe 
                className="rounded-xl shadow-lg"
                src={spotifyEmbedUrl}
                width="100%" 
                height="232" 
                frameBorder="0" 
                allowFullScreen={false}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Hip X Comical Podcast Player"
              ></iframe>
           </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Episodes</h2>
            
            {loading && !episodes.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array(4)].map((_, i) => <EpisodeSkeletonCard key={i} />)}
              </div>
            ) : error ? (
              <div className="text-center py-10 bg-red-50 p-6 rounded-lg">
                <p className="text-xl text-red-700 font-semibold">An Error Occurred</p>
                <p className="text-lg text-red-600 mt-2">{error}</p>
              </div>
            ) : episodes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {episodes.map(ep => <EpisodeCard key={ep.link} episode={ep} />)}
              </div>
            ) : (
              <div className="text-center py-10 bg-gray-50/80 p-6 rounded-lg">
                <p className="text-xl text-gray-600">No episodes could be loaded at this time.</p>
              </div>
            )}
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a
                  href={spotifyShowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-full sm:w-auto bg-gray-800 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:bg-spotify-green"
                >
                  <svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><title>Spotify logo</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.901 17.542c-.229.323-.62.435-.943.205-2.656-1.63-6.002-2-10.455-1.082-.387.086-.74-.127-.825-.512-.086-.387.127-.74.512-.825 4.718-.972 8.352-.57 11.238 1.155.323.229.435.62.205.943zm1.45-3.212c-.282.404-.802.533-1.206.252-3.048-1.86-7.578-2.39-12.445-1.303-.456.102-.913-.153-1.015-.609-.102-.456.153-.913.609-1.015 5.297-1.185 10.218-.598 13.645 1.417.404.282.533.802.252 1.206zm.13-3.418C15.22 7.23 9.89 6.9 5.673 8.01c-.533.153-1.068-.18-1.22-.713-.153-.533.18-1.068.713-1.22 4.675-1.22 10.556-.838 14.937 1.898.456.282.609.89.327 1.346-.282.456-.89.609-1.346.327z"/></svg>
                  <span className="ml-3">Listen on Spotify</span>
                </a>
                <a
                  href={applePodcastShowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-full sm:w-auto bg-gray-800 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:bg-apple-podcast-purple"
                >
                  <svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Apple Podcasts logo</title>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM9.779 6.47c.535 0 .968.434.968.968v8.052c0 .535-.433.968-.968.968s-.968-.433-.968-.968V7.438c0-.534.433-.968.968-.968zm4.442 0c.535 0 .968.434.968.968v8.052c0 .535-.433.968-.968.968s-.968-.433-.968-.968V7.438c0-.534.433-.968.968-.968zM5.337 8.634c.535 0 .968.433.968.968v3.78c0 .535-.433.968-.968.968s-.968-.433-.968-.968v-3.78c0-.535.433-.968.968-.968zm13.326 0c.535 0 .968.433.968.968v3.78c0 .535-.433.968-.968.968s-.968-.433-.968-.968v-3.78c0-.535.433-.968.968-.968z"/>
                  </svg>
                  <span className="ml-3">Listen on Apple Podcasts</span>
                </a>
            </div>
        </AnimatedSection>
    </div>
  );
};

export default Podcast;