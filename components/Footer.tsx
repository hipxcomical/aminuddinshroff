import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full mx-auto px-6 md:px-16 lg:px-24 py-16 mt-auto bg-gray-100">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                   <a
                      href="https://aminuddinshroff.substack.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block max-w-2xl mx-auto p-6 bg-white border border-gray-200 rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:ring-2 hover:ring-brand-orange"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-orange transition-colors">Subscribe to Hip X Comical</h3>
                          <p className="text-gray-600 mt-1 text-base">
                            Field notes on humanity, filed under 'duty calls &amp; soul searches'.
                          </p>
                        </div>
                        <div className="text-gray-400 group-hover:text-brand-orange transform transition-all duration-300 group-hover:translate-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </a>
                </div>
                <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
                    <p>&copy; {currentYear} Hip X Comical. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;