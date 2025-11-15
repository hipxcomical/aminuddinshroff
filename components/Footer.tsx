import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full mx-auto px-8 md:px-16 lg:px-24 py-16 mt-auto border-t border-gray-200 bg-gray-50/50">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <a
                        href="https://aminuddinshroff.substack.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-orange text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 text-xl shadow-md"
                    >
                        Subscribe to HipxComical
                    </a>
                    <p className="text-gray-600 text-lg mt-8 max-w-3xl mx-auto">
                       A logbook of purposeful wandering, hard-won lessons, and deep dives down rabbit holes. Field notes on humanity, filed under 'duty calls &amp; soul searches'.
                    </p>
                </div>
                <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
                    <p>&copy; {currentYear} Hip X Comical. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;