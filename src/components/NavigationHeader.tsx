import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import useClickOutside from "../hooks/useClickOutside";
import { DropdownItem } from "../types";

const dropdownItems: DropdownItem[] = [
    {
        label: "CSS Box Shadow Generator",
        href: "/css-box-shadow-generator",
        elementType: 'Link'
    },
    {
        label: "CSS Gradient Generator",
        href: "/css-gradient-generator",
        elementType: 'Link'
    },
];

export default function NavigationHeader() {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const close = useCallback(() => setIsOpen(false), []);

    useClickOutside(menuRef, close);

    return (
        <>
            <nav ref={menuRef} className="shadow-lg bg-gray-800 fixed top-0 left-0 w-screen z-[1000]">
                <div className="container px-6 py-4 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link
                                    className="text-2xl font-bold transition-colors duration-300 transform text-white lg:text-3xl hover:text-gray-300"
                                    to="/">
                                    <img src="./images/logo_200x200.webp" width="40px" height="40px" className="inline-block mr-4" alt="Ezy Fast UI" />
                                    Ezy Fast UI
                                </Link>
                            </div>

                            {/* <!-- Mobile menu button --> */}
                            <div className="flex visible lg:hidden">
                                <button
                                    onClick={() => (setIsOpen(!isOpen))}
                                    type="button"
                                    className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                                    aria-label="toggle menu"
                                >
                                    {!isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            className="w-6 h-6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 8h16M4 16h16"
                                            ></path>
                                        </svg>
                                    )
                                        : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )
                                    }
                                </button>
                            </div>
                        </div>

                        <div
                            className={`absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between 
                                ${isOpen
                                    ? 'translate-x-0 opacity-100'
                                    : 'opacity-0 translate-x-full'}`}
                        >
                            <div
                                className="flex flex-col  capitalize text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center"
                            >
                                <Link
                                    onClick={close}
                                    to="/list/animations"
                                    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-200"
                                >Animations</Link>
                                <Link
                                    onClick={close}
                                    to="/list/snippets"
                                    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-200"
                                >Snippets</Link>

                                <Dropdown menuLabel="Tools" items={dropdownItems} onClose={close} />

                                <Link
                                    onClick={close}
                                    to="/about"
                                    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-200"
                                >About</Link>
                            </div>

                            <div onClick={close} className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                                <a
                                    href="https://twitter.com/ezyhow"
                                    className="mx-2 pt-1 transition-colors duration-300 transform text-gray-300 hover:text-gray-300"
                                    aria-label="Twitter"
                                    target="_blank"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" /></svg>
                                </a>

                                <a
                                    href="https://www.facebook.com/EzyHow/"
                                    className="mx-2  transition-colors duration-300 transform text-gray-300 hover:text-gray-300"
                                    aria-label="Facebook"
                                    target="_blank"
                                >
                                    <svg
                                        className="w-5 h-5 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"
                                        />
                                    </svg>
                                </a>

                                <a
                                    href="https://github.com/EzyHow/ezy-fast-ui"
                                    className="mx-2 transition-colors duration-300 transform text-gray-300 hover:text-gray-300"
                                    aria-label="Github"
                                    target="_blank"
                                >
                                    <svg
                                        className="w-5 h-5 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="h-16" />
        </>
    );
}