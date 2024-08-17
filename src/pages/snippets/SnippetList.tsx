
import React, { useState, useEffect } from 'react';
import { CodeSnippetCategories, AnimationCategories } from '../../types';
import CodeSnippetViewer from '../../components/CodeSnippetViewer';
import { snippets } from '../../data/snippets';
import { useParams } from 'react-router-dom';
import { animations } from '../../data/animations';


const SnippetList: React.FC = () => {
    const { type } = useParams();

    // const [categoryFilter, setCategoryFilter] = useState<any | null>(null);
    const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
    const [filteredSnippets, setFilteredSnippets] = useState(type == 'animations' ? animations : snippets);

    const categories = type == 'animations' ? AnimationCategories : CodeSnippetCategories;

    useEffect(() => {
        if (selectedCategories.size === 0) {
            setFilteredSnippets(type == 'animations' ? animations : snippets);
        } else {
            if (type == 'animations') {
                setFilteredSnippets(animations.filter((animation) => selectedCategories.has(animation.category)));
            } else {
                setFilteredSnippets(snippets.filter((snippet) => selectedCategories.has(snippet.category)));
            }
        }
    }, [selectedCategories]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prevCategories) => {
            const newCategories = new Set(prevCategories);
            if (newCategories.has(category)) {
                newCategories.delete(category);
            } else {
                newCategories.add(category);
            }
            return newCategories;
        });
    };

    const clearFilter = () => {
        setSelectedCategories(new Set());
    };

    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-white sm:text-3xl">Ezy Fast UI {type == 'animations' ? 'Animations' : 'Snippets'} Collection</h2>
                    <p className="max-w-md mt-4 text-gray-200">Available for personal and commercial use.</p>
                </header>

                <div className="mt-8 flex items-center justify-end">
                    <div className="flex gap-4">
                        <div className="relative">
                            <details className="group">
                                <summary
                                    className="flex items-center gap-2 pb-1 text-gray-100 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
                                // onClick={() => {
                                //     if (categoryFilter) {
                                //         categoryFilter.removeAttribute('open');
                                //     }
                                // }}
                                >
                                    <span className="text-sm font-medium">Category</span>
                                    <span className="transition group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </summary>

                                <div className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2">
                                    <div className="bg-slate-900 border border-gray-900 rounded w-80 -translate-x-60 shadow-md">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-200">{selectedCategories.size} Selected</span>
                                            <button
                                                type="button"
                                                onClick={clearFilter}
                                                className="text-sm text-gray-100 underline underline-offset-4"
                                            >
                                                Reset
                                            </button>
                                        </header>
                                        <ul className="p-4 space-y-1 border-t border-gray-200">
                                            {categories.map((category) => (
                                                <li key={category}>
                                                    <label htmlFor={category} className="inline-flex items-center gap-2 w-full cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            id={category}
                                                            className="w-5 h-5 border-gray-300 rounded"
                                                            checked={selectedCategories.has(category)}
                                                            onChange={() => handleCategoryChange(category)}
                                                        />
                                                        <span className="text-sm font-medium text-gray-200">{category}</span>
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

                <div className="text-gray-100">
                    <strong>Showing results for: </strong>
                    <span className="text-gray-200">
                        {selectedCategories.size > 0
                            ? Array.from(selectedCategories).map((filter, i) => (
                                <React.Fragment key={filter}>
                                    {i !== 0 && ', '}
                                    {filter}
                                </React.Fragment>
                            ))
                            : 'All categories'}
                    </span>
                </div>
                <hr className="mb-5 mt-1 opacity-50" />
                {filteredSnippets.length === 0 && (
                    <div className="text-center">
                        <p className="text-gray-200 text-sm italic">No record found!</p>
                    </div>
                )}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {filteredSnippets.map((snippet, index) => (<div className="relative">
                        <CodeSnippetViewer key={index} snippet={snippet} isCollectionView={true} />
                        <a
                            href={`/${type}/${snippet.slug}`}
                            className="block transition-colors duration-300 overflow-hidden group absolute bottom-3 right-4 text-orange-200 active:translate-y-0.5 hover:text-white"
                        >
                            <svg
                                className="w-6 h-6 inline-block"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                /></svg> <span className="inline-block">View Code</span>
                        </a>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SnippetList;
