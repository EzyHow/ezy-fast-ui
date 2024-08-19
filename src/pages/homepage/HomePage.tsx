import { Link } from "react-router-dom";
import { snippets } from "../../data/snippets";
import CodeSnippetViewer from "../../components/CodeSnippetViewer";
import { useEffect, useState } from "react";


export default function HomePage() {

    const [randomElementIndices, setRandomElementIndices] = useState<number[]>([]);

    useEffect(() => {

        let length = snippets.length;

        if (length < 3) {
            throw new Error('Array must have at least three elements.');
        }

        const indices = new Set<number>();

        while (indices.size < 3) {
            const randomIndex = Math.floor(Math.random() * length);
            indices.add(randomIndex);
        }

        setRandomElementIndices(Array.from(indices));

        return () => {
            // second
        }
    }, [])


    return (
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">

            <div className="mb-4 text-center">
                <h1 className="text-3xl font-bold mb-2">Ezy Fast UI</h1>
                <p>Your go-to source for free, beautiful HTML, CSS, and JavaScript code snippets.</p>
            </div>

            <section id="hero" className="bg-gray-900 text-white py-12 text-center rounded-lg p-4 shadow-xl">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-extrabold mb-4">Transform Your Web Design with Ease</h2>
                    <p className="text-lg mb-6">Discover a vast collection of HTML, CSS, and JavaScript code snippets that you can effortlessly integrate into your projects. Perfect for both personal and commercial use!</p>
                    <div>
                        <p className="animate-pulse mt-2 mb-8">
                            <Link to="/list" className="bg-rose-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-600">Browse Snippets</Link>
                        </p>
                    </div>
                    <div>
                        <p className="">
                            <a href="https://github.com/ezyhow/ezy-fast-ui" className=" text-white font-semibold hover:text-gray-100">Star on GitHub</a>
                        </p>
                    </div>
                </div>
            </section>

            {randomElementIndices &&
                randomElementIndices.length > 0 &&

                <section id="demo" className="pt-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Sample</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {
                                randomElementIndices.map((index) => (<div className="relative">
                                    <CodeSnippetViewer key={snippets[index].slug} snippet={snippets[index]} isCollectionView />
                                    <Link
                                        to={`/snippet/${snippets[index].slug}`}
                                        className="block transition-colors duration-300 overflow-hidden group absolute bottom-3 right-4 text-orange-200 active:translate-y-0.5 hover:text-white"
                                    >
                                        <svg
                                            className="w-6 h-6 inline-block"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        ><path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                            /></svg> <span className="inline-block">View Code</span>
                                    </Link>
                                </div>
                                ))
                            }

                        </div>
                        <div className="text-center mt-16">
                            <Link className="inline-block text-xl px-4 py-2 border-2 shadow-sm shadow-rose-300 border-rose-300 text-gray-300 bg-transparent rounded-md focus:shadow-sm hover:bg-gray-700 hover:-translate-y-1 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50" to={'/list'}>Browse All Snippets</Link>
                        </div>
                    </div>
                </section>
            }

            <section id="features" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold mb-4">Easy Integration</h3>
                            <p>Copy and paste code snippets directly into your projects. It's that simple!</p>
                        </div>
                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold mb-4">Beautiful Designs</h3>
                            <p>Access a variety of stunning HTML elements and CSS animations to enhance your web design.</p>
                        </div>
                        <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold mb-4">Free for All</h3>
                            <p>Use our code snippets in personal or commercial projects at no cost. No strings attached!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="pb-16 shadow-xl">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
                    <p className="text-lg text-center">Ezy Fast UI (ezy-fast-ui) is created by Developer for Developers. Our mission is to simplify the web design process by providing high-quality, easy-to-use code snippets that anyone can integrate into their projects.</p>
                </div>
            </section>

            <section id="contact" className="bg-gray-800 py-16 rounded-lg">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
                    <p className="text-lg text-center">If you have any questions, suggestions, or feedback, feel free to <a href="https://github.com/EzyHow/ezy-fast-ui/discussions" target="_blank" className="text-gray-200 underline">start a discussion on GitHub</a>. I would love to hear from you!</p>
                </div>
            </section>

        </div>
    )
}