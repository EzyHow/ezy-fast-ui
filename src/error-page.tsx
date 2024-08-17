import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Oops!</h1>
                <p className="mt-4 text-normal">Sorry, an unexpected error has occurred.</p>
                <p className="mt-4 text-3xl font-bold text-orange-300">
                    {error?.statusText || error?.message}
                </p>
            </div>
        </div>
    );
}