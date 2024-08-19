import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest';

import App from '../src/App'
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import HomePage from '../src/pages/homepage/HomePage';

describe('Renders homepage page correctly', async () => {
    it('Should render the page correctly', async () => {
        // Setup
        render(<HelmetProvider>
            <HashRouter>
                <HomePage />
            </HashRouter>
        </HelmetProvider>);
        const h1 = await screen.queryByText('Ezy Fast UI');

        // Expectations
        expect(h1).not.toBeNull();
    });

    it('Should have anchor tags with href to list of snippets', async () => {
        // Setup
        render(<HelmetProvider>
            <HashRouter>
                <HomePage />
            </HashRouter>
        </HelmetProvider>);
        const anchorTag1 = await screen.queryByText('Browse Snippets');
        const anchorTag2 = await screen.queryByText('Browse All Snippets');

        // Expectations
        expect(anchorTag1).not.toBeNull();
        expect(anchorTag1).toHaveAttribute('href', '#/list');

        expect(anchorTag2).not.toBeNull();
        expect(anchorTag2).toHaveAttribute('href', '#/list');
    });
});