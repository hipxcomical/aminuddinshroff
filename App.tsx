import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Resume from './pages/CV';
import Connect from './pages/Contact';
import Writing from './pages/Blog';
import Podcast from './pages/Podcast';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <HashRouter>
      <div className="text-gray-700 font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;