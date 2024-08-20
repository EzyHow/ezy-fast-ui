import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { snippets } from '../../data/snippets';
import { CodeSnippetData } from '../../types';
import CodeViewer from '../../components/CodeViewer';
import CodeSnippetViewer from '../../components/CodeSnippetViewer';
import { animations } from '../../data/animations';
import { Helmet } from 'react-helmet-async';

const SnippetShow = () => {
    const { type, slug } = useParams();
    const [selected, setSelected] = useState<CodeSnippetData | null>(null);
    const [activeTab, setActiveTab] = useState<'HTML' | 'CSS' | 'JS'>('HTML');

    useEffect(() => {
        let tempArray = [];
        if (type === 'animations') {
            tempArray = animations;
        } else {
            tempArray = snippets;
        }
        if (tempArray && tempArray.length > 0) {
            if (slug) {
                const foundSnippet = tempArray.find((sn) => sn.slug === slug);
                setSelected(foundSnippet || null);
            }
        }
    }, [slug, snippets, animations, type]);


    return (
        <div className="mt-16">
            <Helmet>
                <title>Output of {selected?.name ? selected?.name : ''} | Ezy Fast UI</title>
                <link rel="canonical" href={`https://fastui.ezyhow.com/#/${type}/${slug}`} />
            </Helmet>
            <div className="grid grid-cols-1">
                <div className="col-span-1 w-full pl-5 pr-5 pb-10">
                    {selected ? (
                        <>
                            <div className="flex justify-start items-center">
                                <Link
                                    to={`/list/${type}`}
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
                                </Link>
                                <h3 className="text-center mb-5 text-white text-3xl font-bold flex-1">{selected?.name}</h3>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className='grid grid-cols-1'>
                                    <CodeSnippetViewer snippet={selected} />
                                </div>
                                <div className="grid grid-cols-1 row-auto gap-1">

                                    <div className="border-b border-neutral-700 flex gap-2 pl-4">
                                        {selected?.html && (
                                            <button onClick={() => setActiveTab('HTML')} className={`${activeTab === 'HTML' ? 'bg-gray-950 text-gray-100' : 'bg-gray-800 text-gray-200'} hover:bg-black font-bold py-2 px-4 rounded-lg inline-flex items-center active:translate-y-1`}>
                                                <svg
                                                    className='h-6 w-6 mr-2'
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="800"
                                                    height="800"
                                                    fill='currentColor'
                                                    version="1.1"
                                                    viewBox="0 0 550.801 550.801"
                                                    xmlSpace="preserve"
                                                >
                                                    <path d="M475.095 131.986c-.032-2.525-.844-5.015-2.568-6.992L366.324 3.684c-.021-.029-.053-.045-.084-.071-.633-.712-1.36-1.289-2.141-1.803a10.984 10.984 0 00-2.838-1.313c-.2-.058-.379-.145-.59-.188A10.474 10.474 0 00358.203 0H97.2C85.292 0 75.6 9.688 75.6 21.601v507.6c0 11.907 9.692 21.601 21.6 21.601h356.4c11.908 0 21.601-9.693 21.601-21.601V133.197c-.001-.406-.064-.804-.106-1.211zM97.2 21.601h250.203v110.51c0 5.962 4.831 10.8 10.8 10.8H453.6l.011 223.837H97.2V21.601zm83.257 477.71h-21.642v-41.26h-35.744v41.26h-21.769v-98.613h21.769v37.895h35.744v-37.895h21.642v98.613zm85.417-79.882h-26.188v79.882h-21.779v-79.882h-25.763v-18.731h73.73v18.731zm93.542 79.882l-1.424-37.747c-.422-11.85-.854-26.188-.854-40.532h-.422c-2.996 12.583-6.982 26.631-10.685 38.19l-11.665 38.476H317.43l-10.252-38.18c-3.133-11.56-6.412-25.608-8.69-38.486h-.285c-.564 13.321-1.002 28.535-1.692 40.827l-1.72 37.457h-20.07l6.117-98.613h28.903l9.397 32.917c2.995 11.412 5.975 23.704 8.121 35.264h.422c2.711-11.417 5.975-24.427 9.112-35.406l10.252-32.774h28.329l5.263 98.613h-21.221v-.006zm97.822 0H397.3v-98.613h21.779v79.882h38.153v18.731h.006z"></path>
                                                    <path d="M154.132 249.086L236.872 287.523 236.872 269.254 174.295 241.851 174.295 241.505 236.872 214.094 236.872 195.827 154.132 234.262z"></path>
                                                    <path d="M249.642 294.416L267.047 294.416 303.93 169.452 286.527 169.452z"></path>
                                                    <path d="M313.938 214.094L377.895 241.505 377.895 241.851 313.938 269.254 313.938 287.523 396.668 249.605 396.668 233.745 313.938 195.827z"></path>
                                                </svg>
                                                <span>HTML</span>
                                            </button>
                                        )}

                                        {selected?.css && (
                                            <button onClick={() => setActiveTab('CSS')} className={`${activeTab === 'CSS' ? 'bg-gray-950 text-gray-100' : 'bg-gray-800 text-gray-200'} hover:bg-black font-bold py-2 px-4 rounded-lg inline-flex items-center active:translate-y-1`}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6 mr-2"
                                                    width="800"
                                                    fill='currentColor'
                                                    height="800"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path d="M204.064 46.682V68.7h-56.302V.501h56.302v24.13h-32.172v22.051h32.172zm57.877-22.051h22.492V.501h-56.308v24.13c7.533 7.533 11.461 11.139 22.356 22.034-6.369 0-22.356.022-22.356.021V68.7h56.308V46.682l-22.492-22.051zm79.805 0h22.49V.501H307.93v24.13c7.531 7.533 11.461 11.139 22.355 22.034-6.365 0-22.355.022-22.355.021V68.7h56.307V46.682l-22.491-22.051zm96.649 76.481l-34.203 370.486-148.193 39.9-148.196-39.9-34.198-370.486h364.79zm-68.918 75.332H140.245l5.529 44.739H262.049l-6.184 2.574-106.067 44.177 3.518 43.73 102.549.333 54.963.175-3.521 58.311-51.442 14.484v-.046l-.422.116-49.684-12.542-3.015-36.195h-46.411l6.032 69.876 93.5 27.649v-.05l.168.05 93-27.146L361.1 267.935H255.605l.26-.112 109.086-46.639 4.526-44.74z"></path>
                                                </svg>
                                                <span>CSS</span>
                                            </button>
                                        )}

                                        {selected?.js && (
                                            <button onClick={() => setActiveTab('JS')} className={`${activeTab === 'JS' ? 'bg-gray-950 text-gray-100' : 'bg-gray-800 text-gray-200'} hover:bg-black font-bold py-2 px-4 rounded-lg inline-flex items-center active:translate-y-1`}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="800"
                                                    height="800"
                                                    className='h-6 w-6 mr-2'
                                                    fill='currentColor'
                                                    version="1.1"
                                                    viewBox="0 0 550.801 550.801"
                                                    xmlSpace="preserve"
                                                >
                                                    <path d="M475.084 131.997c-.021-2.531-.833-5.021-2.567-6.992L366.325 3.694c-.032-.034-.063-.045-.085-.076-.633-.707-1.371-1.295-2.151-1.804-.231-.155-.464-.285-.706-.422a11.325 11.325 0 00-2.131-.896c-.2-.053-.38-.135-.58-.188A10.828 10.828 0 00358.193 0H97.2C85.282 0 75.6 9.693 75.6 21.601v507.6c0 11.907 9.682 21.601 21.6 21.601h356.4c11.907 0 21.6-9.693 21.6-21.601V133.202c0-.406-.063-.804-.116-1.205zM251.599 469.832c0 38.043-18.225 51.311-47.548 51.311-6.94 0-16.055-1.182-21.998-3.164l3.375-24.374c4.158 1.393 9.503 2.384 15.448 2.384 12.68 0 20.596-5.759 20.596-26.557v-83.996h30.122v84.396h.005zm57.846 51.11c-15.25 0-30.296-3.966-37.829-8.121l6.138-24.965c8.118 4.166 20.606 8.321 33.483 8.321 13.869 0 21.189-5.737 21.189-14.459 0-8.322-6.339-13.078-22.381-18.816-22.19-7.73-36.647-20.007-36.647-39.424 0-22.781 19.013-40.215 50.512-40.215 15.056 0 26.156 3.164 34.076 6.739l-6.724 24.363c-5.357-2.573-14.86-6.339-27.943-6.339-13.067 0-19.417 5.954-19.417 12.878 0 8.511 7.536 12.287 24.774 18.815 23.567 8.723 34.668 20.999 34.668 39.814-.004 22.393-17.248 41.409-53.899 41.409zm144.156-154.195H97.2V21.601h250.193v110.51c0 5.967 4.841 10.8 10.8 10.8H453.6v223.836z"></path>
                                                    <path d="M174.396 126.755c0 9.336 6.637 16.928 14.79 16.928 2.304 0 4.179-2.144 4.179-4.789 0-2.647-1.88-4.785-4.179-4.785-3.536 0-6.426-3.299-6.426-7.354 0-4.061 2.89-7.356 6.426-7.356h.037c.799 0 7.971-.182 8.026 6.557v183.658c0 7.921 5.627 14.365 12.543 14.365h22.32c-.008-.042-.008-.085-.013-.116h114.03c9.091 0 16.474-8.453 16.474-18.868 0-8.648-5.125-15.947-12.086-18.151.01-.042.021-.063.021-.095h.042V124.185c0-7.921-5.621-14.359-12.54-14.359H189.061c-8.029-.007-14.665 7.593-14.665 16.929zm57.092 178.346c0-3.713-1.107-6.824-2.694-9.397h106.238c4.472 0 8.11 4.166 8.11 9.292 0 5.136-3.639 9.297-8.11 9.297h-106.13c1.524-2.506 2.586-5.554 2.586-9.192zm-4.05-88.199h97.875v8.774h-97.875v-8.774zm0-31.725h97.875v8.775h-97.875v-8.775zm0-32.4h97.875v8.774h-97.875v-8.774z"></path>
                                                </svg>
                                                <span>JS</span>
                                            </button>
                                        )}
                                    </div>

                                    {selected?.html && activeTab === 'HTML' && (
                                        <CodeViewer code={selected?.html} language="html" heading="HTML" />
                                    )}
                                    {selected?.css && activeTab === 'CSS' && (
                                        <CodeViewer code={selected?.css} language="css" heading="CSS" />
                                    )}
                                    {selected?.js && activeTab === 'JS' && (
                                        <CodeViewer code={selected?.js} language="js" heading="JS" />
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
                            <Link
                                to="/list"
                                className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-gray-100 animate-pulse"
                            >
                                View all snippets
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SnippetShow;
