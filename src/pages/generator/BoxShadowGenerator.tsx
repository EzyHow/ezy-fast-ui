import React, { useState } from 'react';
import CodeViewer from '../../components/CodeViewer';
import { Helmet } from 'react-helmet-async';

const BoxShadowGenerator: React.FC = () => {
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [blur, setBlur] = useState<number>(12);
  const [spread, setSpread] = useState<number>(2);
  const [color, setColor] = useState<string>('#f0f000');

  const boxShadow = `${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`;

  return (
    <div className="pt-16">
      <Helmet>
        <title>CSS Box Shadow Generator | Ezy Fast UI</title>
        <link rel="canonical" href="https://fastui.ezyhow.com/#/css-box-shadow-generator" />
      </Helmet>
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center">Box Shadow Generator</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="w-full px-6 mt-10 pt-10 flex flex-col gap-6 bg-gray-900 rounded-2xl">
          <div className="flex items-center">
            <label htmlFor="offsetX" className="w-24 font-bold text-xl">Offset X:</label>
            <input
              id="offsetX"
              type="range"
              value={offsetX}
              min={0}
              max={100}
              onChange={(e) => setOffsetX(Number(e.target.value))}
              className="border p-1 mr-4 w-72"
            />
            <input
              id="offsetX"
              type="number"
              value={offsetX}
              min={0}
              max={100}
              onChange={(e) => setOffsetX(Number(e.target.value))}
              className="border py-1 bg-gray-900 pl-4 rounded-md text-white w-20 text-center"
            />
            <p className='ml-2 text-xl'>px</p>
          </div>
          <div className="flex items-center">
            <label htmlFor="offsetY" className="w-24 font-bold text-xl">Offset Y:</label>
            <input
              id="offsetY"
              type="range"
              value={offsetY}
              min={0}
              max={100}
              onChange={(e) => setOffsetY(Number(e.target.value))}
              className="border p-1 mr-4 w-72"
            />
            <input
              id="offsetY"
              type="number"
              value={offsetY}
              min={0}
              max={100}
              onChange={(e) => setOffsetY(Number(e.target.value))}
              className="border py-1 bg-gray-900 pl-4 rounded-md text-white w-20 text-center"
            />
            <p className='ml-2 text-xl'>px</p>
          </div>
          <div className="flex items-center">
            <label htmlFor="blur" className="w-24 font-bold text-xl">Blur:</label>
            <input
              id="blur"
              type="range"
              value={blur}
              min={0}
              max={100}
              onChange={(e) => setBlur(Number(e.target.value))}
              className="border p-1 mr-4 w-72"
            />
            <input
              id="blur"
              type="number"
              value={blur}
              min={0}
              max={100}
              onChange={(e) => setBlur(Number(e.target.value))}
              className="border py-1 bg-gray-900 pl-4 rounded-md text-white w-20 text-center"
            />
            <p className='ml-2 text-xl'>px</p>
          </div>
          <div className="flex items-center">
            <label htmlFor="spread" className="w-24 font-bold text-xl">Spread:</label>
            <input
              id="spread"
              type="range"
              min={0}
              max={100}
              value={spread}
              onChange={(e) => setSpread(Number(e.target.value))}
              className="border p-1 mr-4 w-72"
            />
            <input
              id="spread"
              type="number"
              min={0}
              max={100}
              value={spread}
              onChange={(e) => setSpread(Number(e.target.value))}
              className="border py-1 bg-gray-900 pl-4 rounded-md text-white w-20 text-center"
            />
            <p className='ml-2 text-xl'>px</p>
          </div>
          <div className="flex items-center">
            <label htmlFor="color" className="w-24 font-bold text-xl">Color:</label>
            <input
              id="color"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="p-1 mr-4 w-16 h-16 "
            />
            <div></div>
          </div>
        </div>

        <div className="p-10 lg:p-28">
          <div className="rounded-2xl" style={{ boxShadow }}>
            <CodeViewer code={`
box-shadow: ${boxShadow};
-webkit-box-shadow: ${boxShadow};
-moz-box-shadow: ${boxShadow};

          `} language="css" heading='CSS' />

          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShadowGenerator;
