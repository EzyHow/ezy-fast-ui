"use client"

import React, { useEffect, useRef } from 'react';

interface CodeSnippetProps {
    html: string;
    css: string;
    js: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ html, css, js }) => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    useEffect(() => {
        if (iframeRef.current) {
            const doc = iframeRef.current.contentDocument;
            if (doc) {
                doc.open();
                doc.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>${css}</style>
                    </head>
                    <body>
                        ${html}
                        <script>${js}</script>
                    </body>
                    </html>
                `);
                doc.close();
            }
        }
    }, [html, css, js]);

    return <iframe ref={iframeRef} style={{ width: '100%', height: 'auto', border: 'none' }} />;
};

export default CodeSnippet;
