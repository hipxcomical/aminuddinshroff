import React, { useState, useEffect } from 'react';
import { AnimatedSection } from './CV';

const getWeekNumber = (d: Date): number => {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return weekNo;
};

const ArticleCard: React.FC<{ title: string; link: string; pubDate: string; }> = ({ title, link, pubDate }) => {
  const encodedLink = encodeURIComponent(link);
  const encodedTitle = encodeURIComponent(title);

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedLink}&text=${encodeURIComponent(title + " by @aminuddinshroff")}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedLink}&title=${encodedTitle}`;
  
  const handleShareClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'width=600,height=400,noopener,noreferrer');
  };

  const date = pubDate ? new Date(pubDate) : null;
  let dateString = '';
  if (date && !isNaN(date.getTime())) {
      const year = date.getFullYear();
      const week = getWeekNumber(date);
      dateString = `Week ${week}/52 | ${year}`;
  }
  
  return (
    <div className="relative bg-gray-50/80 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">
          {title} <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
        </h3>
        {dateString && <p className="text-gray-500 text-sm">{dateString}</p>}
        <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label={`Read more about ${title}`}></a>
      </div>
      <div className="relative z-10 flex items-center justify-end space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4 border-t border-transparent group-hover:border-gray-200">
        <button 
          onClick={(e) => handleShareClick(e, twitterShareUrl)} 
          aria-label="Share on Twitter" 
          className="text-gray-500 hover:text-[#1DA1F2] transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
        </button>
        <button 
          onClick={(e) => handleShareClick(e, linkedinShareUrl)} 
          aria-label="Share on LinkedIn" 
          className="text-gray-500 hover:text-linkedin-blue transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
        </button>
      </div>
    </div>
  );
};

interface Article {
  title: string;
  link: string;
  pubDate: string;
}

const Writing: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const RSS_URL = 'https://aminuddinshroff.substack.com/feed';
        // Using a CORS proxy to bypass browser's same-origin policy which blocks direct requests.
        const PROXY_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(RSS_URL)}`;
        
        const response = await fetch(PROXY_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');

        // Check for parsing errors which can happen if the proxy fails or returns non-XML content
        const parseError = xml.querySelector('parsererror');
        if (parseError) {
          console.error('XML Parsing Error:', parseError.textContent);
          throw new Error('Failed to parse the RSS feed. It might be malformed or the proxy returned an error page.');
        }

        const items = xml.querySelectorAll('item');

        const parsedArticles: Article[] = [];

        items.forEach(item => {
          const title = item.querySelector('title')?.textContent || '';
          const link = item.querySelector('link')?.textContent || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          
          parsedArticles.push({ title, link, pubDate });
        });

        parsedArticles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

        setArticles(parsedArticles);
      } catch (e) {
        console.error("Failed to fetch or parse RSS feed:", e);
        setError("Could not load articles from Substack. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="w-full mx-auto px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
        <AnimatedSection>
          <header className="mb-16">
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter">Writing</h1>
              <p className="text-xl text-gray-700 mt-4 leading-relaxed max-w-4xl">
                A collection of thoughts on strategy, technology, and personal growth, curated from my Substack.
              </p>
          </header>
        </AnimatedSection>
        
        {loading && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">Loading latest articles from Substack...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-10 bg-red-50 p-6 rounded-lg">
            <p className="text-xl text-red-700 font-semibold">An Error Occurred</p>
            <p className="text-lg text-red-600 mt-2">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div>
            {articles.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-xl text-gray-600">No articles found.</p>
                </div>
            ) : (
                <AnimatedSection>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map(post => <ArticleCard key={post.link} title={post.title} link={post.link} pubDate={post.pubDate} />)}
                  </div>
                </AnimatedSection>
            )}
          </div>
        )}
    </div>
  );
};

export default Writing;