import { render, screen } from '@testing-library/react'
import { describe, expect, it, should } from 'vitest';

import AppRoutes from '../src/AppRoutes'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';

describe('Renders App page correctly', async () => {
    it('Should render the page correctly', async () => {
        // Setup
        const { container } = render(<HelmetProvider><BrowserRouter><AppRoutes /></BrowserRouter></HelmetProvider>);

        // Expectations
        expect(container.childElementCount).toBeGreaterThanOrEqual(1);
    });

    it('Should render the HomePage by default', async () => {
        // Setup
        render(<HelmetProvider><BrowserRouter><AppRoutes /></BrowserRouter></HelmetProvider>);

        // Expectations
        const h1 = await screen.queryByText('Ezy Fast UI');
        expect(h1).not.toBeNull();
    });
});