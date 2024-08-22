// src/pages/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="dark:bg-gray-900 text-gray-100 min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="mb-8">Last updated: August 22, 2024</p>

                <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                <p className="mb-8 text-justify">
                    Welcome to our Privacy Policy. Your privacy is critically important to us. This document outlines the types of personal information that is received and collected by our application and how it is used.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
                <p className="mb-8 text-justify">
                    Our application does not collect any personal information directly. However, we use Google Analytics to track usage and interactions within the application. Google Analytics uses cookies to collect information such as IP addresses, browser types, and pages visited. This information helps us improve our application but does not identify you personally.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
                <p className="mb-8 text-justify">
                    We use cookies for analytics purposes to enhance your experience. Cookies are small files stored on your device that help us understand how you interact with our application. By continuing to use this site, you consent to our use of cookies.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Google Analytics</h2>
                <p className="mb-8 text-justify">
                    Google Analytics is used to analyze how users interact with our application. It uses cookies to collect information about your use of the application and to generate reports. This data helps us improve our app but is not used to personally identify users.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
                <p className="mb-8 text-justify">
                    We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                <p className="mb-8 text-justify">
                    If you have any questions about this Privacy Policy, please contact us via our GitHub Discussions page: <a href="https://github.com/EzyHow/ezy-fast-ui/discussions" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Discussions</a>.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
