import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useClickOutside from '../hooks/useClickOutside';
import { DropdownItem } from '../types';

type DropdownProps = {
    menuLabel: string;
    items: DropdownItem[];
};

const Dropdown: React.FC<DropdownProps> = ({ menuLabel, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const close = useCallback(() => setIsOpen(false), []);

    useClickOutside(dropdownRef, close);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="mt-2 whitespace-nowrap transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-200"
            >
                {menuLabel}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-4 h-4 inline-block"
                    viewBox="0 0 24 24"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        ></path>

                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                    )
                    }
                </svg>
            </button>
            {isOpen && (
                <div ref={dropdownRef} className="absolute z-30 left-0 mt-2 w-72 bg-gray-900 text-white border border-gray-500 rounded shadow-lg">
                    <div className="py-1">
                        {items.map((item, index) => (
                            item?.elementType === 'Link' ? (
                                <Link
                                    key={index}
                                    to={item.href}
                                    className="block px-4 py-2 hover:bg-gray-700"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="block px-4 py-2 hover:bg-gray-700"
                                >
                                    {item.label}
                                </a>
                            )
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
