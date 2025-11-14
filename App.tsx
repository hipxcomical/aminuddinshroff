import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Resume from './pages/CV';
import Connect from './pages/Contact';
import Writing from './pages/Blog';
import Podcast from './pages/Podcast';
import Cursor from './components/Cursor';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <div className="bg-white text-gray-900 font-sans antialiased flex flex-col min-h-screen">
        <Cursor />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;