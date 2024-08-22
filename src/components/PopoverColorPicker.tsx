import React, { useCallback, useRef, useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import useClickOutside from '../hooks/useClickOutside';

// Define the props type for PopoverPicker
interface PopoverPickerProps {
    color: string;
    onChange: (color: string) => void;
}

export const PopoverPicker: React.FC<PopoverPickerProps> = ({ color, onChange }) => {
    const popover = useRef<HTMLDivElement>(null);
    const [isOpen, toggle] = useState<boolean>(false);

    const close = useCallback(() => toggle(false), []);
    useClickOutside(popover, close);

    return (
        <div className="picker relative">
            <div
                className="w-12 h-12 rounded-lg cursor-pointer border border-gray-100"
                style={{ backgroundColor: color }}
                onClick={() => toggle(true)}
            />

            {isOpen && (
                <div className="absolute top-10 left-0 rounded-lg shadow-lg z-20" ref={popover}>
                    <HexAlphaColorPicker role='color' color={color} onChange={onChange} />
                </div>
            )}
        </div>
    );
};
