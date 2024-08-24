import React, { useState } from 'react';
import CodeViewer from '../../components/CodeViewer';
import { Helmet } from 'react-helmet-async';
import { PopoverPicker } from '../../components/PopoverColorPicker';
import { HexColorInput } from 'react-colorful';
import './BoxShadow.css';

interface Shadow {
  key: number;
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  color: string;
  inset: boolean;
}

const BoxShadowGenerator: React.FC = () => {
  const [shadows, setShadows] = useState<Shadow[]>([
    { key: 0, offsetX: 0, offsetY: 0, blur: 30, spread: 12, color: '#f0f00088', inset: false }
  ]);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [oldBrowserSupport, setOldBrowserSupport] = useState(false);
  const [outputOuterBoxBackgroundColor, setOutputOuterBoxBackgroundColor] = useState<string>('#ffffffff');
  const [outputBoxBackgroundColor, setOutputBoxBackgroundColor] = useState<string>('#ffa0a0ff');

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState<boolean>(false);

  const [lastKey, setLastKey] = useState<number>(0);

  React.useEffect(() => {
    const handleResize = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleShadowChange = (index: number, key: keyof Shadow, value: number | string | boolean) => {
    setShadows(prevShadows =>
      prevShadows.map((shadow, i) =>
        i === index ? { ...shadow, [key]: value } : shadow
      )
    );
  };

  const addShadow = () => {
    setShadows([
      ...shadows,
      { key: (lastKey + 1), offsetX: 0, offsetY: 0, blur: 30, spread: 12, color: '#f0f00088', inset: false }
    ]);
    setLastKey(lastKey + 1);
    setSelectedTab(shadows.length); // Switch to the new shadow tab
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowScrollButtons(scrollWidth > clientWidth);
    }
  };

  const removeShadow = (index: number) => {
    if (shadows.length > 1) {
      setShadows(shadows.filter((_, i) => i !== index));
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
      if (selectedTab >= shadows.length - 1) {
        setSelectedTab(shadows.length - 2); // Ensure the selected tab is valid
      }
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const boxShadow = shadows.map((shadow, index) =>
    `${index > 0 ? '\n\t\t\t' : ''}${shadow.inset ? 'inset ' : ''}${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
  ).join(', ');

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
          <div className="p-10 bg-gray-800 rounded-2xl">
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
              <label htmlFor="color" className="absolute -top-3 bg-gray-800 left-3 font-bold text-normal">Box Color:</label>
              <div className="flex justify-between pt-2">
                <PopoverPicker color={outputBoxBackgroundColor} onChange={setOutputBoxBackgroundColor} css='w-12 md:w-24 lg:w-48 ' />
                <HexColorInput alpha prefixed color={outputBoxBackgroundColor} onChange={setOutputBoxBackgroundColor} className='border py-1 bg-gray-900 pl-4 uppercase rounded-md text-white w-32 ml-4' />
              </div>
            </div>

            <div className="border border-gray-500 px-4 py-2 rounded-lg relative mb-8">
              <label htmlFor="color" className="absolute -top-3 bg-gray-800 left-3 font-bold text-normal">Output BG Color:</label>
              <div className="flex justify-between pt-2">
                <PopoverPicker color={outputOuterBoxBackgroundColor} onChange={setOutputOuterBoxBackgroundColor} css='w-12 md:w-24 lg:w-48 ' />
                <HexColorInput alpha prefixed color={outputOuterBoxBackgroundColor} onChange={setOutputOuterBoxBackgroundColor} className='border py-1 bg-gray-900 pl-4 uppercase rounded-md text-white w-32 ml-4' />
              </div>
            </div>

            <div className="text-center mt-3 mb-5 text-xl">Box Shadow Properties</div>

            <div className="text-center mb-4">
              <button
                onClick={addShadow}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 active:translate-y-1"
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

                <span className='inline-block ml-2'>Add Shadow</span>
              </button>
            </div>

            <div className="mb-0">
              <div className="flex space-x-4 overflow-x-auto overflow-y-hidden relative">
                {showScrollButtons && (
                  // Left Arrow
                  <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white  px-4 py-2 rounded-r-md z-50 "
                  >
                    &lt;
                  </button>
                )}
                <div className='flex space-x-4 overflow-x-auto overflow-y-hidden py-1 px-8 scrollbar-hidden' ref={scrollContainerRef}>
                  {shadows.map((shadow, index) => (
                    <button
                      key={shadow.key}
                      className={`py-2 px-4 font-semibold whitespace-nowrap ${selectedTab === index ? 'bg-gray-900 text-white border-t border-l border-r border-gray-500  translate-y-1' : 'text-gray-300'} z-20 hover:bg-gray-600 rounded-t-lg`}
                      onClick={() => setSelectedTab(index)}
                    >
                      Shadow {index + 1}
                    </button>
                  ))}
                </div>
                {/* Right Arrow */}
                {showScrollButtons && (
                  <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-md z-50 background-transparent"
                  >
                    &gt;
                  </button>
                )}
              </div>
            </div>

            {shadows && shadows.map((shadow, index) => (
              <React.Fragment key={shadow.key}> {index === selectedTab && (
                <div key={shadow.key} className="border bg-gray-900 border-gray-500 px-4 py-2 rounded-b-lg relative mb-8">
                  {/* <label className="absolute -top-3 bg-gray-900 left-3 font-bold text-normal">Shadow {index + 1}</label> */}

                  {shadows.length > 1 && (
                    <div className="text-right mt-2">
                      <button
                        type="button"
                        onClick={() => removeShadow(index)}
                        className="ml-2 px-2 py-1 bg-red-600 text-white rounded"
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
                    </div>
                  )}

                  <div className="mb-6 my-4">
                    <div className="flex flex-wrap lg:flex-nowrap  items-center mr-2 border border-gray-500 px-4 py-2 rounded-lg  mb-4">
                      <label className="inline-block whitespace-nowrap">Offset X:</label>
                      <input
                        type="range"
                        value={shadow.offsetX}
                        min={-500}
                        max={500}
                        onChange={(e) => handleShadowChange(index, 'offsetX', Number(e.target.value))}
                        className="border p-1 mx-4 w-full"
                      />
                      <div className="w-full flex justify-end items-center">
                        <input
                          type="number"
                          value={shadow.offsetX}
                          onChange={(e) => handleShadowChange(index, 'offsetX', Number(e.target.value))}
                          className="border py-1 bg-gray-900 pl-4 rounded-md text-white w-12 md:w-20 text-center"
                        />
                        <p className='ml-2 text-xl'>px</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap lg:flex-nowrap items-center mr-2 border border-gray-500 px-4 py-2 rounded-lg mb-4">
                      <label className="inline-block whitespace-nowrap">Offset Y:</label>
                      <input
                        type="range"
                        value={shadow.offsetY}
                        min={-500}
                        max={500}
                        onChange={(e) => handleShadowChange(index, 'offsetY', Number(e.target.value))}
                        className="border p-1 mx-4 w-full"
                      />
                      <div className="w-full flex justify-end items-center">
                        <input
                          type="number"
                          value={shadow.offsetY}
                          onChange={(e) => handleShadowChange(index, 'offsetY', Number(e.target.value))}
                          className="border py-1 bg-gray-900 pl-4 rounded-md text-white w-12 md:w-20 text-center"
                        />
                        <p className='ml-2 text-xl'>px</p>
                      </div>
                    </div>

                  </div>
                  <div className=" mb-4">
                    <div className="flex flex-wrap lg:flex-nowrap items-center mr-2 border border-gray-500 px-4 py-2 rounded-lg mb-4">
                      <label className="inline-block whitespace-nowrap">Blur:</label>
                      <input
                        type="range"
                        value={shadow.blur}
                        min={0}
                        max={100}
                        onChange={(e) => handleShadowChange(index, 'blur', Number(e.target.value))}
                        className="border p-1 mx-4 w-full"
                      />
                      <div className="w-full flex justify-end items-center">
                        <input
                          type="number"
                          value={shadow.blur}
                          onChange={(e) => handleShadowChange(index, 'blur', Number(e.target.value))}
                          className="border py-1 bg-gray-900 pl-4 rounded-md text-white w-12 md:w-20 text-center"
                        />
                        <p className='ml-2 text-xl'>px</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap lg:flex-nowrap items-center mr-2 border border-gray-500 px-4 py-2 rounded-lg mb-4">
                      <label className="inline-block whitespace-nowrap">Spread:</label>
                      <input
                        type="range"
                        value={shadow.spread}
                        min={-100}
                        max={100}
                        onChange={(e) => handleShadowChange(index, 'spread', Number(e.target.value))}
                        className="border p-1 mx-4 w-full"
                      />
                      <div className="w-full flex justify-end items-center">
                        <input
                          type="number"
                          value={shadow.spread}
                          onChange={(e) => handleShadowChange(index, 'spread', Number(e.target.value))}
                          className="border py-1 bg-gray-900 pl-4 rounded-md text-white w-12 md:w-20 text-center"
                        />
                        <p className='ml-2 text-xl'>px</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap lg:flex-nowrap items-center mr-2 border border-gray-500 px-4 py-2 rounded-lg mb-4">
                      <label className="inline-block whitespace-nowrap">Color:</label>
                      <div className="w-full flex justify-end items-center">
                        <PopoverPicker color={shadow.color} onChange={(color) => handleShadowChange(index, 'color', color)} css='w-12 md:w-16 lg:w-32 ' />
                        <HexColorInput alpha prefixed color={shadow.color} onChange={(color) => handleShadowChange(index, 'color', color)} className='border py-1 bg-gray-900 pl-4 uppercase rounded-md text-white w-32 ml-4' />
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <input
                        type="checkbox"
                        checked={shadow.inset}
                        onChange={(e) => handleShadowChange(index, 'inset', e.target.checked)}
                        className="mr-2 w-4 h-4 "
                      />
                      <label className='text-white text-xl'>Inset</label>
                    </div>
                  </div>

                </div>
              )}
              </React.Fragment>
            ))}


          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white text-center mb-2">Output</h3>
          <div className="p-10 lg:p-28 rounded-lg" style={{ backgroundColor: outputOuterBoxBackgroundColor }}>
            <div className="rounded-2xl w-full h-72 border border-gray-600" style={{ boxShadow, backgroundColor: outputBoxBackgroundColor }}></div>
          </div>
          <div className="mt-2">
            <h4 className='text-xl font-bold text-white text-center mt-4'>CSS Code</h4>
            <CodeViewer code={oldBrowserSupport ? `
box-shadow: ${boxShadow};
-webkit-box-shadow: ${boxShadow};
-moz-box-shadow: ${boxShadow};
              ` : `
box-shadow: ${boxShadow};
              `} language="css" heading='CSS' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShadowGenerator;
