import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full mx-auto px-8 md:px-16 lg:px-24 py-16 mt-auto border-t border-gray-200 bg-gray-50/50">
            <div className="max-w-2xl mx-auto text-center">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to My Newsletter</h2>
                    <p className="text-gray-600 text-lg mb-8">
                        Get updates on supply chain strategies, digital transformation, and leadership principles delivered to your inbox.
                    </p>
                    <div className="w-full mx-auto" style={{ maxWidth: '480px' }}>
                        <iframe 
                            src="https://aminuddinshroff.substack.com/embed" 
                            width="100%" 
                            height="320" 
                            style={{border:'1px solid #EEE', background:'white'}} 
                            frameBorder="0" 
                            scrolling="no"
                            title="Substack Newsletter Embed"
                        ></iframe>
                    </div>
                </div>
                <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
                    <p>&copy; {currentYear} Hip X Comical. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;