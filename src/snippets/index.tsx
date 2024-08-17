
import React, { useState, useEffect } from 'react';
import { CodeSnippetData } from '../types';
import CodeSnippet from '../components/CodeSnippet';

const SnippetList: React.FC = () => {
    const [snippets, setSnippets] = useState<{ [key: string]: CodeSnippetData } | null>(null);
    const [selectedSnippet, setSelectedSnippet] = useState<CodeSnippetData | null>(null);

    useEffect(() => {
        const fetchSnippets = async () => {
            const response = await fetch('/api/snippets');
            const data = await response.json();
            setSnippets(data);
        };

        fetchSnippets();
    }, []);

    useEffect(() => {
        if (snippets) {
            const firstSnippetKey = Object.keys(snippets)[0];
            if (firstSnippetKey) {
                setSelectedSnippet(snippets[firstSnippetKey]);
            }
        }
    }, [snippets]);

    return (
        <div>
            <h1>Code Snippets</h1>
            <ul>
                {snippets && Object.keys(snippets).map((key) => (
                    <li key={key} onClick={() => setSelectedSnippet(snippets[key])}>
                        {snippets[key].name || key}
                    </li>
                ))}
            </ul>
            {selectedSnippet && (
                <CodeSnippet
                    html={selectedSnippet.html}
                    css={selectedSnippet.css}
                    js={selectedSnippet.js}
                />
            )}

            <div>
                <h2>All Snippets</h2>
                {snippets && Object.keys(snippets).map((key) => (
                    <div key={key}>
                        <h3>{snippets[key].name || key}</h3>
                        <CodeSnippet
                            html={snippets[key].html}
                            css={snippets[key].css}
                            js={snippets[key].js}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SnippetList;
