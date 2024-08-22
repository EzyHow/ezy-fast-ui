import React, { useState } from 'react';
import CodeViewer from '../../components/CodeViewer';
import { Helmet } from 'react-helmet-async';
import { PopoverPicker } from '../../components/PopoverColorPicker';
import { HexColorInput } from 'react-colorful';

const BoxShadowGenerator: React.FC = () => {
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [blur, setBlur] = useState<number>(30);
  const [spread, setSpread] = useState<number>(12);
  const [color, setColor] = useState<string>('#f0f00088');
  const [oldBrowserSupport, setOldBrowserSupport] = useState(false);
  const [outputBoxBackgroundColor, setOutputBoxBackgroundColor] = useState<string>('#ffffffff');

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 px-6 py-10">
        <div>
          <h3 className="text-xl font-bold text-white text-center mb-2">Configuration</h3>
          <div className="p-10 bg-gray-900 rounded-2xl">
            <div className="flex justify-end mb-4 text-right">
              <label className="inline font-bold">Old Browser Support:</label>
              <input
                type="checkbox"
                checked={oldBrowserSupport}
                onChange={(e) => setOldBrowserSupport(e.target.checked)}
                className="w-5 h-5 ml-2"
              />

            </div>

            <div className="border border-gray-500 px-4 py-2 rounded-lg relative mb-8">
              <label htmlFor="color" className="absolute -top-3 bg-gray-900 left-3 font-bold text-normal">Output Box Background Color:</label>

              <div className="flex justify-between pt-2">
                <PopoverPicker color={outputBoxBackgroundColor} onChange={setOutputBoxBackgroundColor} css='w-24 md:w-24 lg:w-48 ' />
                <HexColorInput alpha prefixed color={outputBoxBackgroundColor} onChange={setOutputBoxBackgroundColor} className='border py-1 bg-gray-900 pl-4 uppercase rounded-md text-white w-32 ml-4' />
              </div>

            </div>

            <div className="h-[1px] w-72 mx-auto bg-gray-400 mt-6"></div>

            <div className="text-center mt-3 mb-5 text-xl">
              Box Shadow Properties
            </div>

            <div className="border border-gray-500 px-4 py-2 rounded-lg relative mb-8">
              <label htmlFor="color" className="absolute -top-3 bg-gray-900 left-3 font-bold text-normal">Color:</label>

              <div className="flex justify-between pt-2">
                <PopoverPicker color={color} onChange={setColor} css='w-24 md:w-24 lg:w-48 ' />
                <HexColorInput alpha prefixed color={color} onChange={setColor} className='border py-1 bg-gray-900 pl-4 uppercase rounded-md text-white w-32 ml-4' />
              </div>

            </div>
            <div className="border border-gray-500 px-4 py-2 rounded-lg relative mb-8">
              <label htmlFor="offsetX" className="absolute -top-3 bg-gray-900 left-3 font-bold text-normal">Offset X</label>
              <div className="flex">

                <input
                  id="offsetX"
                  type="range"
                  value={offsetX}
                  min={0}
                  max={500}
                  onChange={(e) => setOffsetX(Number(e.target.value))}
                  className="border p-1 mr-4 flex-1"
                />
                <input
                  id="offsetX"
                  type="number"
                  value={offsetX}
                  onChange={(e) => setOffsetX(Number(e.target.value))}
                  className="border py-1 bg-gray-900 pl-4 rounded-md text-white w-20 text-center"
                />
                <p className='ml-2 text-xl'>px</p>
              </div>
            </div>
            <div className="border border-gray-500 px-4 py-2 rounded-lg relative mb-8">
              <label htmlFor="offsetY" className="absolute -top-3 bg-gray-900 left-3 font-bold text-normal">Offset Y:</label>
              <div className="flex">
                <input
                  id="offsetY"
                  type="range"
                  value={offsetY}
                  min={0}
                  max={100}
                  onChange={(e) => setOffsetY(Number(e.target.value))}
                  className="border p-1 mr-4 flex-1"
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
            </div>
            <div className="border border-gray-500 px-4 py-2 rounded-lg relative mb-8">
              <label htmlFor="blur" className="absolute -top-3 bg-gray-900 left-3 font-bold text-normal">Blur:</label>
              <div className="flex">
                <input
                  id="blur"
                  type="range"
                  value={blur}
                  min={0}
                  max={100}
                  onChange={(e) => setBlur(Number(e.target.value))}
                  className="border p-1 mr-4 flex-1"
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
            </div>
            <div className="border border-gray-500 px-4 py-2 rounded-lg relative mb-8">
              <label htmlFor="spread" className="absolute -top-3 bg-gray-900 left-3 font-bold text-normal">Spread:</label>
              <div className="flex">
                <input
                  id="spread"
                  type="range"
                  min={0}
                  max={100}
                  value={spread}
                  onChange={(e) => setSpread(Number(e.target.value))}
                  className="border p-1 mr-4 flex-1"
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
            </div>

          </div>
        </div>

        <div>
          <div className=''>
            <h3 className="text-xl font-bold text-white text-center mb-2">Output</h3>
            <div className="p-10 lg:p-28 rounded-lg" style={{ backgroundColor: outputBoxBackgroundColor }}>
              <div className="rounded-2xl" style={{ boxShadow }}>
                <CodeViewer code={oldBrowserSupport ? `
box-shadow: ${boxShadow};
-webkit-box-shadow: ${boxShadow};
-moz-box-shadow: ${boxShadow};

          `
                  : `
box-shadow: ${boxShadow};
          `

                } language="css" heading='CSS' />

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BoxShadowGenerator;
