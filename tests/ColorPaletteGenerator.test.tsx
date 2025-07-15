import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ColorPaletteGenerator from '../src/pages/tools/color-palette-generator/ColorPaletteGenerator';

describe('ColorPaletteGenerator', () => {
    beforeEach(() => {
        localStorage.clear();
        window.history.replaceState({}, '', '/');
    });

    it('renders title and buttons', () => {
        render(<ColorPaletteGenerator />);
        expect(screen.getByText(/Color Palette Generator/i)).toBeInTheDocument();
        expect(screen.getByText(/Generate New Palette/i)).toBeInTheDocument();
        expect(screen.getByText(/💾 Save Palette/i)).toBeInTheDocument();
    });

    it('generates a new palette when button is clicked', () => {
        render(<ColorPaletteGenerator />);
        const initialHex = screen.getAllByText(/^#/i)[0]?.textContent;
        const btn = screen.getByText(/Generate New Palette/i);
        fireEvent.click(btn);
        const newHex = screen.getAllByText(/^#/i)[0]?.textContent;
        expect(newHex).not.toBe(initialHex);
    });

    it('saves palette to localStorage', () => {
        vi.spyOn(window, 'prompt').mockReturnValue('My Test Palette');
        render(<ColorPaletteGenerator />);
        fireEvent.click(screen.getByText(/💾 Save Palette/i));
        const data = JSON.parse(localStorage.getItem('savedPalettes') || '[]');
        expect(data).toHaveLength(1);
        expect(data[0].name).toBe('My Test Palette');
    });

    it('toggles theme', () => {
        render(<ColorPaletteGenerator />);
        const btn = screen.getByRole('button', { name: /dark/i });
        fireEvent.click(btn);
        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });
});
