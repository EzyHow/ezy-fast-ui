// src/components/CookiesNotice.tsx
import React, { useState, useEffect } from 'react';

const CookiesNotice: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasAcceptedCookies = localStorage.getItem('cookies-accepted') === 'true';
        if (!hasAcceptedCookies) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        setIsVisible(false);
        localStorage.setItem('cookies-accepted', 'true');
        // Initialize Google Analytics or other services here if necessary
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-center items-center gap-4 z-50">
            <p className="text-sm text-justify">
                We use cookies for analytics purposes to enhance your experience. By continuing to use this site, you consent to our use of cookies.
            </p>
            <button
                onClick={handleAccept}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Accept
            </button>
        </div>
    );
};

export default CookiesNotice;
