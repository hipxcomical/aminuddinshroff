import React, { useState, useEffect, useMemo } from 'react';
import { AnimatedSection } from './CV';

const getWeekNumber = (d: Date): number => {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return weekNo;
};

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="animate-pulse space-y-4">
        <div className="h-5 bg-gray-200 rounded-lg w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded-lg w-1/2"></div>
      </div>
    </div>
  );
};

const ArticleCard: React.FC<{ title: string; link: string; pubDate: string; }> = ({ title, link, pubDate }) => {
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    // Check for Web Share API support on the client side
    if (navigator && navigator.share) {
      setCanShare(true);
    }
  }, []);

  const encodedLink = encodeURIComponent(link);
  const encodedTitle = encodeURIComponent(title);

  const shareData = {
    title: title,
    text: `Check out this article by Aminuddin Shroff: "${title}"`,
    url: link,
  };

  const handleNativeShare = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.share(shareData);
    } catch (err) {
      // User cancellation of the share dialog is not an error.
      // We check if the error is a DOMException with the name 'AbortError'.
      if (err instanceof DOMException && err.name === 'AbortError') {
        // Do nothing, user cancelled.
      } else {
        // Log other actual errors.
        console.error("Error sharing article:", err);
      }
    }
  };

  const handleSocialShareClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'width=600,height=400,noopener,noreferrer');
  };

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedLink}&text=${encodeURIComponent(title + " by @aminuddinshroff")}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedLink}&title=${encodedTitle}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`;

  const date = pubDate ? new Date(pubDate) : null;
  let dateString = '';
  if (date && !isNaN(date.getTime())) {
      const year = date.getFullYear();
      const week = getWeekNumber(date);
      dateString = `Week ${week}/52 | ${year}`;
  }
  
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read more about ${title}`}
      className="group block bg-white p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] active:shadow-inner border border-gray-200 flex flex-col h-full justify-between"
    >
      {/* Top part with title */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">
          {title} <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-block">→</span>
        </h3>
      </div>
      
      {/* Footer part with date and share buttons */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
        <div>
          {dateString && <p className="text-gray-500 text-sm">{dateString}</p>}
        </div>
        
        <div className="flex items-center space-x-3">
          {canShare ? (
            <button
              onClick={handleNativeShare}
              aria-label="Share this article"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-orange transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span>Share</span>
            </button>
          ) : (
            <>
              {/* Twitter */}
              <div className="relative group/tooltip">
                <button 
                  onClick={(e) => handleSocialShareClick(e, twitterShareUrl)} 
                  aria-label="Share on Twitter" 
                  className="text-gray-500 hover:text-[#1DA1F2] transition-all duration-200 transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </button>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-semibold text-white bg-gray-800 rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Share on Twitter
                </span>
              </div>
              {/* LinkedIn */}
              <div className="relative group/tooltip">
                <button 
                  onClick={(e) => handleSocialShareClick(e, linkedinShareUrl)} 
                  aria-label="Share on LinkedIn" 
                  className="text-gray-500 hover:text-linkedin-blue transition-all duration-200 transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </button>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-semibold text-white bg-gray-800 rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Share on LinkedIn
                </span>
              </div>
              {/* Facebook */}
              <div className="relative group/tooltip">
                <button 
                  onClick={(e) => handleSocialShareClick(e, facebookShareUrl)} 
                  aria-label="Share on Facebook" 
                  className="text-gray-500 hover:text-[#1877F2] transition-all duration-200 transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                </button>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-semibold text-white bg-gray-800 rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Share on Facebook
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </a>
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
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const loadArticles = async () => {
      let hasCache = false;
      const cachedArticlesJSON = localStorage.getItem('substack_articles');
      if (cachedArticlesJSON) {
        try {
          const articlesFromCache: Article[] = JSON.parse(cachedArticlesJSON);
          setArticles(articlesFromCache);
          hasCache = true;
        } catch (e) {
          console.error('Failed to parse cached articles, removing item.', e);
          localStorage.removeItem('substack_articles');
        }
      }

      if (!hasCache) {
        setLoading(true);
      }

      try {
        const RSS_URL = 'https://aminuddinshroff.substack.com/feed';
        const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}&_=${Date.now()}`;

        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.status !== 'ok') {
          throw new Error('RSS feed could not be fetched. The service reported an error.');
        }
    
        const parsedArticles: Article[] = data.items.map((item: any) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
        }));

        setArticles(parsedArticles);
        localStorage.setItem('substack_articles', JSON.stringify(parsedArticles));
        setError(null);
      } catch (e) {
        console.error("Failed to fetch or parse RSS feed:", e);
        if (!hasCache) {
          setError("Could not load articles from Substack. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  const filteredArticles = useMemo(() => {
    return articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [articles, searchQuery]);

  return (
    <div className="w-full mx-auto px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
        <AnimatedSection>
          <header className="mb-12">
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter">Writing</h1>
              <p className="text-xl text-gray-600 mt-4 leading-relaxed max-w-4xl">
                My digital garden of ideas on strategy, tech, and personal growth. It's less an organized journal and more a series of interesting rabbit holes, all curated from my Substack.
              </p>
          </header>
        </AnimatedSection>
        
        <AnimatedSection className="mb-12">
            <div className="relative">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles by title..."
                    className="w-full p-4 text-lg text-gray-800 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none transition-shadow placeholder:text-gray-400"
                    aria-label="Search articles"
                />
                 <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </AnimatedSection>
        
        {loading && (
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...Array(6)].map((_, index) => <SkeletonCard key={index} />)}
            </div>
          </AnimatedSection>
        )}
        
        {error && (
          <div className="text-center py-10 bg-red-100 border border-red-200 p-6 rounded-lg">
            <p className="text-xl text-red-700 font-semibold">An Error Occurred</p>
            <p className="text-lg text-red-600 mt-2">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div>
            {articles.length > 0 && filteredArticles.length === 0 ? (
                <AnimatedSection>
                  <div className="text-center py-10 bg-gray-100 p-6 rounded-lg">
                      <p className="text-xl text-gray-700 font-semibold">No articles found for "{searchQuery}"</p>
                      <p className="text-lg text-gray-500 mt-2">Please try a different search term.</p>
                  </div>
                </AnimatedSection>
            ) : articles.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-xl text-gray-500">No articles could be loaded at this time.</p>
                </div>
            ) : (
                <AnimatedSection>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredArticles.map(post => <ArticleCard key={post.link} title={post.title} link={post.link} pubDate={post.pubDate} />)}
                  </div>
                </AnimatedSection>
            )}
          </div>
        )}
    </div>
  );
};

export default Writing;