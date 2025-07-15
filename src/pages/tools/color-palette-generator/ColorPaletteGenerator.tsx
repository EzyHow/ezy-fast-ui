import React, { useState, useEffect } from 'react';

import './ColorPaletteGenerator.css';
import './themes.css';
import { Palette } from '../../../types';
import ColorCard from '../../../components/ColorCard';
import SavedPalettes from '../../../components/SavedPalettes';
import { Helmet } from 'react-helmet-async';

const generateColor = (): string =>
    `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

const parsePaletteFromURL = (): string[] | null => {
    const params = new URLSearchParams(window.location.search);
    const palette = params.get('palette');
    return palette ? palette.split('-').map(c => `#${c}`) : null;
};

const generatePalette = (length: number, locked: (string | null)[]): string[] => {
    return Array.from({ length }).map((_, i) =>
        locked[i] ? locked[i] : generateColor()
    );
};

const ColorPaletteGenerator: React.FC = () => {
    const [lockedColors, setLockedColors] = useState<(string | null)[]>(Array(5).fill(null));
    const [colors, setColors] = useState<string[]>([]);
    const [savedPalettes, setSavedPalettes] = useState<Palette[]>(
        JSON.parse(localStorage.getItem('savedPalettes') || '[]')
    );
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const urlColors = parsePaletteFromURL();
        if (urlColors && urlColors.length === 5) {
            setColors(urlColors);
        } else {
            setColors(generatePalette(5, lockedColors));
        }
    }, []);

    const regenerateColors = () => {
        const newColors = generatePalette(5, lockedColors);
        setColors(newColors);
        updateURL(newColors);
    };

    const toggleLock = (index: number) => {
        const updatedLocks = [...lockedColors];
        updatedLocks[index] = lockedColors[index] ? null : colors[index];
        setLockedColors(updatedLocks);
    };

    const copyToClipboard = async (hex: string) => {
        await navigator.clipboard.writeText(hex);
        alert(`${hex} copied to clipboard`);
    };

    const savePalette = () => {
        const name = prompt('Enter a name for your palette:');
        if (!name) return;
        const newPalette: Palette = { name, colors };
        const updated = [...savedPalettes, newPalette];
        setSavedPalettes(updated);
        localStorage.setItem('savedPalettes', JSON.stringify(updated));
    };

    const loadSavedPalette = (palette: Palette) => {
        setColors(palette.colors);
        updateURL(palette.colors);
    };

    const updateURL = (palette: string[]) => {
        const hexString = palette.map(c => c.replace('#', '')).join('-');
        const newURL = `${window.location.pathname}?palette=${hexString}`;
        window.history.replaceState(null, '', newURL);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="pt-16">
            <Helmet>
                <title>Color Palette Generator | Ezy Fast UI</title>
                <link rel="canonical" href="https://fastui.ezyhow.com/color-palette-generator" />
            </Helmet>
            <div className="w-full">
                <h1 className="text-4xl font-bold text-center">🎨 Color Palette Generator</h1>
            </div>
            <div className="palette-container">

                <div className="flex gap-2 justify-center mb-4 items-center flex-wrap">
                    {colors.map((color, i) => (
                        <ColorCard
                            key={i}
                            color={color}
                            locked={!!lockedColors[i]}
                            onClick={() => copyToClipboard(color)}
                            onToggleLock={(e) => {
                                e.stopPropagation();
                                toggleLock(i);
                            }}
                        />
                    ))}
                </div>

                <div className="flex justify-center items-center flex-wrap gap-4">

                    <button className="ezy-outline-button-1" onClick={regenerateColors}>
                        🎨 Generate New Palette
                    </button>
                    <button className="ezy-outline-button-1" onClick={savePalette}>
                        💾 Save Palette
                    </button>
                </div>

                <div className="mx-4 sm:mx-20">
                    <SavedPalettes savedPalettes={savedPalettes} onSelect={loadSavedPalette} />
                </div>
            </div>
        </div>
    );
};

export default ColorPaletteGenerator;
