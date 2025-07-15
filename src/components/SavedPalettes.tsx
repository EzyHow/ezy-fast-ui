import React from 'react';
import { Palette } from '../types';

type Props = {
    savedPalettes: Palette[];
    onSelect: (palette: Palette) => void;
};

const SavedPalettes: React.FC<Props> = ({ savedPalettes, onSelect }) => {
    return (
        <div className="saved-section">
            <hr className='my-4' />
            <h3 className='text-2xl font-bold mb-4 text-center'>💡 Saved Palettes</h3>
            <div className="saved-palettes flex justify-center items-center gap-4 flex-wrap">
                {savedPalettes.map((p, idx) => (
                    <div key={idx} className="saved-palette p-4 rounded-lg" onClick={() => onSelect(p)}>
                        <p className='text-xl font-semibold'>{p.name}</p>
                        <div className="preview">
                            {p.colors.map((c, i) => (
                                <span key={i} style={{ backgroundColor: c }} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedPalettes;
