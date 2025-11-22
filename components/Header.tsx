
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', name: 'resume' },
    { path: '/writing', name: 'writing' },
    { path: 'https://aminuddinshroff.substack.com/notes', name: 'notes', isExternal: true },
    { path: '/podcast', name: 'podcast' },
    { path: '/connect', name: 'connect' },
  ];
  
  useEffect(() => {
    // Prevent scrolling when the menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    
    // Cleanup function to restore scrolling
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Header */}
      <header className="w-full mx-auto px-6 md:px-16 lg:px-24 pt-12 pb-6 md:pt-16 relative z-40">
        <div className="flex justify-between items-center">
          <Link to="/" className="relative z-50" onClick={() => setIsMenuOpen(false)}>
            <Logo />
          </Link>
          
          {/* Desktop Horizontal Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link relative text-lg font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => 
                    `nav-link relative text-lg font-medium transition-colors duration-300 ${isActive ? 'text-gray-900 active-nav-link' : 'text-gray-500 hover:text-gray-900'}`
                  }
                >
                  {link.name}
                </NavLink>
              )
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl font-bold font-sans tracking-tighter text-gray-700 hover:text-brand-orange transition-all duration-300 ease-in-out transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => 
                  `text-5xl font-bold font-sans tracking-tighter transition-all duration-300 ease-in-out ${isActive ? 'text-brand-orange' : 'text-gray-700 hover:text-brand-orange transform hover:translate-x-2'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            )
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
