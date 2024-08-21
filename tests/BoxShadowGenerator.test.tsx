import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest';

import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import AppRoutes from '../src/AppRoutes';



describe('Renders list page correctly', async () => {

    const renderWithRouter = (initialEntries) => {
        return render(
            <HelmetProvider>
                <MemoryRouter initialEntries={initialEntries}>
                    <AppRoutes />
                </MemoryRouter>
            </HelmetProvider>
        );
    };

    it('Should render the box shadow generator correctly', async () => {
        // Setup
        const { container } = renderWithRouter([`/css-box-shadow-generator`]);

        const heading = screen.queryByText("Box Shadow Generator");
        const cssBox = screen.queryByText('CSS');

        expect(heading).not.toBeNull();

        expect(cssBox).not.toBeNull();

    });


});