import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '../src/AppRoutes';

describe('GradientGenerator Component', () => {

    const renderWithRouter = (initialEntries) => {
        return render(
            <HelmetProvider>
                <MemoryRouter initialEntries={initialEntries}>
                    <AppRoutes />
                </MemoryRouter>
            </HelmetProvider>
        );
    };

    it('renders the component', () => {
        renderWithRouter(['/css-gradient-generator']);
        expect(screen.getByText(/CSS Gradient Generator/i)).toBeInTheDocument();
    });

    it('updates gradient type to radial', () => {
        renderWithRouter(['/css-gradient-generator']);
        const select = screen.getByLabelText(/Gradient Type:/i) as HTMLSelectElement;
        fireEvent.change(select, { target: { value: 'radial' } });

        expect(select.value).toBe('radial');
        expect(screen.getByText(/radial-gradient/i)).toBeInTheDocument();
    });

    it('updates gradient type to linear and angle input works', () => {
        renderWithRouter(['/css-gradient-generator']);
        const select = screen.getByLabelText(/Gradient Type:/i) as HTMLSelectElement;
        fireEvent.change(select, { target: { value: 'linear' } });

        // Verify linear gradient is selected
        expect(select.value).toBe('linear');

        // Update angle
        const angleInput = screen.getByLabelText(/Angle \(degrees\):/i) as HTMLInputElement;
        fireEvent.change(angleInput, { target: { value: '90' } });

        // Check that the angle input is updated
        expect(angleInput.value).toBe('90');

    });

    it('updates color inputs and reflects in gradient preview', () => {
        renderWithRouter(['/css-gradient-generator']);

        // Update
        const colorInputs = screen.getAllByTestId('color-input') as HTMLInputElement[];
        // Minimum two colors will be required
        fireEvent.change(colorInputs[0], { target: { value: '#00ff00' } });
        fireEvent.change(colorInputs[1], { target: { value: '#00ffff' } });


        // Check that the gradient preview reflects these changes
        expect(screen.getByText(/linear-gradient/i)).toBeInTheDocument();
    });

    it('adds and removes colors correctly', () => {
        renderWithRouter(['/css-gradient-generator']);

        // Initial colors
        const initialColorInputs = screen.getAllByTestId('color') as HTMLInputElement[];
        expect(initialColorInputs).toHaveLength(2); // Initially there should be 2 colors

        // Add a new color
        const addColorButton = screen.getByText(/Add Color/i);
        fireEvent.click(addColorButton);

        // Verify new color input is present
        const colorInputsAfterAdd = screen.getAllByTestId('color') as HTMLInputElement[];
        expect(colorInputsAfterAdd).toHaveLength(3); // Should be 3 after adding

        // Remove a color
        const removeButtons = screen.getAllByTestId('remove-color');
        fireEvent.click(removeButtons[1]); // Remove the second color

        // Verify color input is removed
        const colorInputsAfterRemove = screen.getAllByTestId('color') as HTMLInputElement[];
        expect(colorInputsAfterRemove).toHaveLength(2); // Should be 2 after removing
    });

});
