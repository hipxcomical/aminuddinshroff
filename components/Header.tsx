import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import HandwritingSignature from './HandwritingSignature';

const Header: React.FC = () => {
  const navLinks = [
    { path: '/', name: 'Resume' },
    { path: '/writing', name: 'Writing' },
    { path: 'https://aminuddinshroff.substack.com/notes', name: 'Notes', isExternal: true },
    { path: '/podcast', name: 'Podcast' },
    { path: '/connect', name: 'Connect' },
  ];

  return (
    <header className="w-full mx-auto px-8 md:px-16 lg:px-24 pt-12 pb-20 md:pt-16">
      <div className="flex justify-between items-center">
        <Link to="/" className="signature-link">
          <HandwritingSignature />
        </Link>
        <nav className="flex items-center space-x-6 md:space-x-8 text-base">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link relative transition-colors duration-200 py-1 text-gray-500 hover:text-gray-900"
              >
                {link.name}
              </a>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => 
                  `nav-link relative transition-colors duration-200 py-1 ${isActive ? 'text-gray-900 font-bold active-nav-link' : 'text-gray-500 hover:text-gray-900'}`
                }
              >
                {link.name}
              </NavLink>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;