import React from 'react';

type Props = {
    color: string;
    locked: boolean;
    onClick: () => void;
    onToggleLock: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ColorCard: React.FC<Props> = ({ color, locked, onClick, onToggleLock }) => {
    return (
        <div
            className="h-28 w-28 m-2 flex flex-col items-center justify-center text-white rounded-lg shadow-md cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            <span className="text-xl font-semibold uppercase">{color}</span>
            <button className="text-2xl transition-all duration-500" onClick={onToggleLock}>
                {locked ? '🔒' : '🔓'}
            </button>
        </div>
    );
};

export default ColorCard;
