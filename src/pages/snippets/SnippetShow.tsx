import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { snippets } from '../../data/snippets';
import { CodeSnippetData } from '../../types';
import CodeViewer from '../../components/CodeViewer';
import CodeSnippetViewer from '../../components/CodeSnippetViewer';
import { animations } from '../../data/animations';

const SnippetShow = () => {
    const { type, slug } = useParams();
    const [selected, setSelected] = useState<CodeSnippetData | null>(null);

    useEffect(() => {
        let tempArray = [];
        if (type === 'animations') {
            tempArray = animations;
        } else {
            tempArray = snippets;
        }
        if (tempArray && tempArray.length > 0) {
            console.log('sdf => ', slug);
            if (slug) {
                const foundSnippet = tempArray.find((sn) => sn.slug === slug);
                setSelected(foundSnippet || null);
            }
        }
    }, [slug, snippets, animations, type]);


    return (
        <div className="mt-5">
            <div className="grid grid-cols-1">
                <div className="col-span-1 w-full pl-5 pr-5 pb-10">
                    {selected ? (
                        <>
                            <div className="flex justify-start items-center">
                                <a
                                    href={`/list/${type}`}
                                    className="flex justify-start items-center text-sm text-orange-200 active:translate-y-0.5 hover:text-white ml-2 animate-pulse"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                        />
                                    </svg>
                                    Back
                                </a>
                                <h3 className="text-center mb-5 text-white text-3xl font-bold flex-1">{selected?.name}</h3>
                            </div>
                            <div className="grid auto-grid gap-4">
                                <CodeSnippetViewer snippet={selected} />
                                <div className="grid grid-cols-1 row-auto gap-4">
                                    {selected?.html && (
                                        <CodeViewer code={selected?.html} language="html" heading="HTML" />
                                    )}
                                    {selected?.css && (
                                        <CodeViewer code={selected?.css} language="css" heading="CSS" />
                                    )}
                                    {selected?.js && (
                                        <CodeViewer code={selected?.js} language="js" heading="JavaScript" />
                                    )}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-center mt-52">
                            <div className="animate-bounce text-center text-3xl text-white mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-10 h-10 mx-auto"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-200 text-xl mb-4">
                                Sorry, We couldn't find what you are looking for!
                            </p>
                            <a
                                href="/component"
                                className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-gray-100 animate-pulse"
                            >
                                View all snippets
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SnippetShow;
