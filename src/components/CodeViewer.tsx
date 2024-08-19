import Prism from 'prismjs';
import ClipboardButton from './ClipboardButton';

const CodeViewer = ({ code = '<h1>Ezy Code Snippets!!!</h1>', language = 'html', heading = 'HTML' }) => {
    return (
        <div className="whitespace-pre-wrap text-white">
            <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
                <div className="relative block rounded-xl bg-gray-900 p-4">
                    <div className="absolute top-2 left-4">
                        <h3 className="text-fuchsia-200">{heading}</h3>
                    </div>
                    <div className="sm:pr-8 h-full max-h-52 overflow-auto pb-6">
                        <pre dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages[language], language) }} />
                    </div>
                    <div className="absolute right-2 bottom-6">
                        <ClipboardButton title="Copy" value={code} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeViewer;
