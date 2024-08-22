import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest';

import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import AppRoutes from '../src/AppRoutes';



describe('Renders privacy policy page correctly', async () => {

    const renderWithRouter = (initialEntries) => {
        return render(
            <HelmetProvider>
                <MemoryRouter initialEntries={initialEntries}>
                    <AppRoutes />
                </MemoryRouter>
            </HelmetProvider>
        );
    };

    it('Should render the privacy policy correctly', async () => {
        // Setup
        const { container } = renderWithRouter([`/privacy-policy`]);

        const privacyPolicies = screen.queryAllByText("Privacy Policy");
        const introduction = screen.queryByText('Introduction');

        expect(privacyPolicies).not.toBeNull();
        expect(privacyPolicies.length).toBeGreaterThan(0);

        expect(introduction).not.toBeNull();

    });


});