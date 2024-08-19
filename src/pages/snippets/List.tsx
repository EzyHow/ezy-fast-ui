import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function List() {
    return (
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <Helmet>
                <title>List of Free Code Snippets and Animations | Ezy Fast UI</title>
                <link rel="canonical" href="https://fastui.ezyhow.com/#/list" />
            </Helmet>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white text-center">Select any of following to view snippets.</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Link to="/list/animations">
                    <div className="whitespace-pre-wrap text-white">
                        <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
                            <h2 className="relative block rounded-xl bg-gray-900 p-4 text-center text-3xl animate-pulse">
                                Animations
                            </h2>
                        </div>
                    </div>
                </Link>
                <Link to="/list/snippets">
                    <div className="whitespace-pre-wrap text-white">
                        <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
                            <h2 className="relative block rounded-xl bg-gray-900 p-4 text-center text-3xl animate-pulse">
                                Snippets
                            </h2>
                        </div>
                    </div>
                </Link>
            </div>




        </div>
    )
}