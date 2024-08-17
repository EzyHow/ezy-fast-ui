"use client"

import React, { useEffect, useRef } from 'react';
import { CodeSnippetData } from '../types';

interface CodeSnippetProps {
    snippet: CodeSnippetData;
    isCollectionView?: boolean;
}

const CodeSnippetViewer: React.FC<CodeSnippetProps> = ({ snippet, isCollectionView = false }) => {
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
                        <style>
                            body { padding: 0; margin: 0; overflow: hidden; }
                            * { box-sizing: border-box; }
                            html, body { width: 100%; height: 100%; }
                            .output { display: flex; justify-content: center; align-items: center; height: 100%; }
                        </style>
                        <style>${snippet.css}</style>
                    </head>
                    <body>
                        <div class="output">
                            ${snippet.html}
                        </div>
                        <script>${snippet.js}</script>
                    </body>
                    </html>
                `);
                doc.close();
            }
        }
    }, [snippet]);

    return <div className="">
        <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-md shadow-black">
            <div className="relative block rounded-xl bg-gray-900 p-4 sm:p-8">
                <div className="absolute top-2 left-4">
                    <h3 className="text-fuchsia-200">{snippet.name}</h3>
                </div>
                <div
                    className={`flex justify-center items-center ${isCollectionView ? 'min-h-[196px]' : 'min-h-[350px]'
                        }`}
                // style={snippet?.hiddenStyle}
                >

                    <iframe ref={iframeRef} style={{ width: '100%', height: 'auto', border: 'none' }} />

                </div>
            </div>
        </div>
    </div>;
};

export default CodeSnippetViewer;

