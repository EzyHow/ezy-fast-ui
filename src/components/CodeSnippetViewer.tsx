"use client"

import React, { useEffect, useRef } from 'react';
import { CodeSnippetData } from '../types';

interface CodeSnippetProps {
    snippet: CodeSnippetData;
    isCollectionView?: boolean;
}

const CodeSnippetViewer: React.FC<CodeSnippetProps> = ({ snippet, isCollectionView = false }) => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    const replayAnimation = () => {
        if (iframeRef.current) {
            // clear iframe and recreate it
            const doc = iframeRef.current.contentDocument;
            if (doc) {
                doc.open();
                doc.write('');
                doc.close();
            }

            createIframe();
        }
    };

    const createIframe = () => {
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
                        <script>
                            (function scopedExecution() {
                                ${snippet.js}
                            })();
                        </script>
                    </body>
                    </html>
                `);
                doc.close();
            }
        }
    }

    useEffect(() => {
        createIframe();
    }, [snippet]);

    return <div className="">
        <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-md shadow-black">
            <div className="relative block rounded-xl bg-gray-900 p-4 sm:p-8">
                <div className="absolute top-2 left-4">
                    <h3 className="text-fuchsia-200">{snippet.name}</h3>
                </div>
                {snippet?.showReplayButton
                    &&
                    <div className="absolute top-2 right-4">
                        <button onClick={replayAnimation} className='inline-flex items-center gap-1 text-orange-300'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="{1.5}"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                                />
                            </svg>
                            Replay</button>
                    </div>
                }

                {!isCollectionView && snippet?.hint
                    &&
                    <p className="absolute bottom-2 right-4 text-xl italic">
                        <strong className="text-white">Hint:</strong> {snippet.hint}
                    </p>
                }
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

