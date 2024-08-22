import React, { useState } from 'react';
import { HexColorInput } from 'react-colorful';
import { PopoverPicker } from '../../components/PopoverColorPicker';
import { Helmet } from 'react-helmet-async';
import CodeViewer from '../../components/CodeViewer';

const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}FF`;
}

const GradientGenerator: React.FC = () => {
    const [colors, setColors] = useState<{ color: string; stop: number }[]>([
        { color: '#ff7e5fff', stop: 30 },
        { color: '#feb47bff', stop: 60 },
    ]);
    const [angle, setAngle] = useState(45);
    const [gradientType, setGradientType] = useState<'linear' | 'radial'>('linear');
    const [oldBrowserSupport, setOldBrowserSupport] = useState(false);


    const handleColorChange = (index: number, color: string) => {
        const newColors = [...colors];
        newColors[index].color = color;
        setColors(newColors);
    };

    const handleStopChange = (index: number, stop: number) => {
        const newColors = [...colors];
        newColors[index].stop = stop;
        setColors(newColors);
    };


    const handleAddColor = () => {
        setColors([...colors, { color: randomColor(), stop: 100 }]); // Add a default color with 100% stop and full opacity
    };

    const handleRemoveColor = (index: number) => {
        if (colors.length > 2) { // Ensure at least 2 colors remain
            const newColors = colors.filter((_, i) => i !== index);
            setColors(newColors);
        }
    };

    const getGradient = () => {
        if (gradientType === 'linear') {
            if (oldBrowserSupport) {
                return `
    background: -moz-linear-gradient(${angle}deg, ${colors.map(c => `${c.color} ${c.stop}%`).join(', ')})
    background: -webkit-linear-gradient(${angle}deg, ${colors.map(c => `${c.color} ${c.stop}%`).join(', ')})
    background: linear-gradient(${angle}deg, ${colors.map(c => `${c.color} ${c.stop}%`).join(', ')})
            `;
            }
            return `
    background: linear-gradient(${angle}deg, ${colors.map(c => `${c.color} ${c.stop}%`).join(', ')});
            `;
        } else {
            if (oldBrowserSupport) {
                return `
    background: -moz-radial-gradient(circle, ${colors.map(c => `${c.color} ${c.stop}%`).join(', ')});
    background: -webkit-radial-gradient(circle, ${colors.map(c => `${c.color} ${c.stop}%`).join(', ')});
    background: radial-gradient(circle, ${colors.map(c => `${c.color} ${c.stop}%`).join(', ')});
            `;
            }
            return `
    background: radial-gradient(circle, ${colors.map(c => `${c.color} ${c.stop}%`).join(', ')});
            `;
        }
    };

    const gradient = gradientType === 'linear'
        ?
        `linear-gradient(${angle}deg, ${colors.map(c => `${c.color} ${c.stop}%`).join(', ')})`
        :
        `radial-gradient(circle, ${colors.map(c => `${c.color} ${c.stop}%`).join(', ')})`;


    return (
        <div className="pt-8">
            <Helmet>
                <title>CSS Gradient Generator | Ezy Fast UI</title>
                <link rel="canonical" href="https://fastui.ezyhow.com/#/css-gradient-generator" />
            </Helmet>
            <div className="p-6 mx-auto ">
                <h1 className="text-3xl font-bold mb-8 text-center">CSS Gradient Generator</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-gray-900 p-8 rounded-xl">

                        <div className="flex items-center justify-end mb-2 text-right">
                            <label className="inline font-bold">Old Browser Support:</label>
                            <input
                                type="checkbox"
                                checked={oldBrowserSupport}
                                onChange={(e) => setOldBrowserSupport(e.target.checked)}
                                className="w-5 h-5 ml-2"
                            />

                        </div>

                        <div className="mb-8">
                            <label className="block font-medium mb-1" htmlFor='gradient'>Gradient Type:</label>
                            <select
                                id="gradient"
                                value={gradientType}
                                onChange={(e) => setGradientType(e.target.value as 'linear' | 'radial')}
                                className="w-full border border-gray-700 rounded p-2 bg-gray-900 text-gray-100"
                            >
                                <option value="linear">Linear Gradient</option>
                                <option value="radial">Radial Gradient</option>
                            </select>
                        </div>

                        {gradientType === 'linear' && (
                            <div className="mb-4">
                                <div className="flex justify-between">
                                    <label className="block font-medium mb-1" htmlFor='angle'>Angle (degrees):</label>
                                    <span className="text-gray-100 text-right">
                                        {angle}°
                                    </span>
                                </div>
                                <input
                                    id='angle'
                                    type="range"
                                    min={0}
                                    max={360}
                                    value={angle}
                                    onChange={(e) => setAngle(Number(e.target.value))}
                                    className="w-full border border-gray-700 rounded p-2 bg-gray-900 text-gray-100"
                                />
                            </div>
                        )}

                        <div className="mb-8">
                            <div className="flex justify-between mb-6 items-center">
                                <label className="block font-medium">Colors:</label>
                                <button
                                    type="button"
                                    onClick={handleAddColor}
                                    className="mt-2 px-4 py-2 font-bold bg-rose-600 text-white rounded-lg shadow-lg hover:bg-rose-700 active:translate-y-1 transition-transform duration-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        className="h-6 w-6 inline-block"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                    <span className="ml-1">Add Color</span>
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-8">

                                {colors.map((color, index) => (
                                    <div key={index} className="flex flex-col mb-2 border border-gray-100 p-4 rounded-lg w-full relative">
                                        {/* <input
                                    type="color"
                                    value={color.color}
                                    onChange={(e) => handleColorChange(index, e.target.value)}
                                    className="w-12 h-12 border border-gray-700 rounded"
                                /> */}
                                        <div className="flex mb-4" data-testid={`color`}>
                                            <PopoverPicker color={color.color} onChange={(color) => handleColorChange(index, color)} />
                                            <HexColorInput data-testid={`color-input`} className='ml-4 w-28 uppercase bg-gray-900 text-white px-2 py-1 rounded-md' color={color.color} onChange={(color) => handleColorChange(index, color)} alpha prefixed />
                                        </div>
                                        <div className='flex w-full items-center'>
                                            <label className="block font-medium mb-1" htmlFor='stop'>Stop:</label>
                                            <input
                                                type="range"
                                                value={color.stop}
                                                onChange={(e) => handleStopChange(index, Number(e.target.value))}
                                                className="ml-2 flex-1 w-full border border-gray-700 rounded p-2 bg-gray-900 text-gray-100"
                                                min={0}
                                                max={100}
                                                step={0.1}
                                            />
                                            <span className="ml-2 text-gray-100">{color.stop}%</span>
                                        </div>


                                        {colors.length > 2 && (
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveColor(index)}
                                                className="ml-2 px-2 py-1 bg-red-600 text-white rounded absolute top-2 right-2"
                                                data-testid={`remove-color`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    className="w-6 h-6"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                    ></path>
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                    <div className="">
                        <div className="block font-medium mb-1">Preview:</div>
                        <div
                            className="h-64 bg-gray-600 rounded-lg"
                            style={{ background: gradient }}
                        >
                        </div>

                        <div className="mt-4">
                            <CodeViewer code={
                                getGradient() as string
                            }
                                language='css' heading='CSS' />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default GradientGenerator;
