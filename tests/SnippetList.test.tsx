import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest';

import { HashRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import SnippetList from '../src/pages/snippets/SnippetList';
import { snippets } from '../src/data/snippets';
import { animations } from '../src/data/animations';

describe('Renders list page correctly', async () => {

    const renderWithRouter = (initialEntries) => {
        return render(
            <HelmetProvider>
                <MemoryRouter initialEntries={initialEntries}>
                    <Routes>
                        <Route path="/list/:type" element={<SnippetList />} />
                    </Routes>
                </MemoryRouter>
            </HelmetProvider>
        );
    };

    it('Should render the page correctly', async () => {
        // Setup
        const { container } = render(<HelmetProvider>
            <HashRouter>
                <SnippetList />
            </HashRouter>
        </HelmetProvider>);

        const iframes = container.querySelectorAll('iframe');

        const viewCodeElements = screen.queryAllByText('View Code');


        // Expectations
        expect(iframes.length).toBeGreaterThan(0);
        expect(iframes[0]).not.toBeNull();

        expect(iframes.length).toBe(snippets.length);

        expect(viewCodeElements.length).toBeGreaterThan(0);

    });

    it('Should render the list of snippets', async () => {
        // Setup
        const { container } = renderWithRouter(['/list/snippets']);
        const iframes = container.querySelectorAll('iframe');

        const snippetsHeading = screen.queryByText('Ezy Fast UI Snippets Collection');

        // Expectations
        expect(iframes.length).toBeGreaterThan(0);
        expect(iframes[0]).not.toBeNull();

        expect(iframes.length).toBe(snippets.length);
        expect(snippetsHeading).not.toBeNull();
    });

    it('Should render the list of animations', async () => {
        // Setup
        const { container } = renderWithRouter(['/list/animations']);
        const iframes = container.querySelectorAll('iframe');

        const animationsHeading = screen.queryByText('Ezy Fast UI Animations Collection');

        // Expectations
        expect(iframes.length).toBeGreaterThan(0);
        expect(iframes[0]).not.toBeNull();

        expect(iframes.length).toBe(animations.length);
        expect(animationsHeading).not.toBeNull();
    });

});