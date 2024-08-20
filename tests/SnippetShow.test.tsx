import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest';

import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import { snippets } from '../src/data/snippets';
import { animations } from '../src/data/animations';
import SnippetShow from '../src/pages/snippets/SnippetShow';



describe('Renders list page correctly', async () => {

    const renderWithRouter = (initialEntries) => {
        return render(
            <HelmetProvider>
                <MemoryRouter initialEntries={initialEntries}>
                    <Routes>
                        <Route path="/:type/:slug" element={<SnippetShow />} />
                    </Routes>
                </MemoryRouter>
            </HelmetProvider>
        );
    };

    it('Should render the snippet correctly', async () => {
        // Setup
        const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
        const { container } = renderWithRouter([`/snippet/${randomSnippet.slug}`]);
        const iframes = container.querySelectorAll('iframe');

        const snippetHeading = screen.queryAllByText(randomSnippet.name);
        const htmlBox = screen.queryByText('HTML');
        const cssBox = screen.queryByText('CSS');

        // Expectations
        expect(iframes.length).toBeGreaterThan(0);
        expect(iframes[0]).not.toBeNull();

        expect(iframes.length).toBe(1);
        expect(snippetHeading).not.toBeNull();

        expect(htmlBox).not.toBeNull();
        expect(cssBox).not.toBeNull();
    });

    it('Should render the animation correctly', async () => {
        // Setup
        const randomAnimation = animations[Math.floor(Math.random() * snippets.length)];
        const { container } = renderWithRouter([`/animations/${randomAnimation.slug}`]);
        const iframes = container.querySelectorAll('iframe');

        const animationHeading = screen.queryAllByText(randomAnimation.name);
        const htmlBox = screen.queryByText('HTML');
        const cssBox = screen.queryByText('CSS');

        // Expectations
        expect(iframes.length).toBeGreaterThan(0);
        expect(iframes[0]).not.toBeNull();

        expect(iframes.length).toBe(1);
        expect(animationHeading).not.toBeNull();

        expect(htmlBox).not.toBeNull();
        expect(cssBox).not.toBeNull();
    });

    it('Should render the snippet correctly with query parameters', async () => {
        // Setup
        const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
        const { container } = renderWithRouter([`/snippet/${randomSnippet.slug}?test=1`]);
        // const location = useLocation();
        // console.log('URL Path => ', location.pathname);
        const iframes = container.querySelectorAll('iframe');

        const snippetHeading = screen.queryAllByText(randomSnippet.name);
        const htmlBox = screen.queryByText('HTML');
        const cssBox = screen.queryByText('CSS');

        // Expectations
        expect(iframes.length).toBeGreaterThan(0);
        expect(iframes[0]).not.toBeNull();

        expect(iframes.length).toBe(1);
        expect(snippetHeading).not.toBeNull();

        expect(htmlBox).not.toBeNull();
        expect(cssBox).not.toBeNull();
    });

});