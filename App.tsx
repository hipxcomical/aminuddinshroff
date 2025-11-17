import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Resume from './pages/CV';
import Connect from './pages/Contact';
import Writing from './pages/Blog';
import Podcast from './pages/Podcast';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Cursor from './components/Cursor';

function App() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Simple check on mount is sufficient for this use case.
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);
  }, []);

  return (
    <HashRouter>
      <>
        {!isTouchDevice && <Cursor />}
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
      </>
    </HashRouter>
  );
}

export default App;
