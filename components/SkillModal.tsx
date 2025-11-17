import React, { useEffect } from 'react';
import { Skill } from '../data/resumeData';

interface SkillModalProps {
  skill: Skill | null;
  onClose: () => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!skill) return null;

  // A simple style component to avoid adding to index.html for one-off animations
  const KeyframeStyles = () => (
    <style>{`
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
      .animate-slide-up { animation: slideUp 0.4s ease-out forwards; }
    `}</style>
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="skill-modal-title"
    >
      <KeyframeStyles />
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-auto p-8 md:p-10 relative transform animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
          aria-label="Close skill details"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 id="skill-modal-title" className="text-3xl font-bold text-gray-900 mb-6 pr-8">{skill.name}</h2>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-4">
          <p>{skill.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;