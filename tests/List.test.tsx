import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest';

import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import List from '../src/pages/snippets/List';

describe('Renders list page correctly', async () => {
    it('Should render the page correctly', async () => {
        // Setup
        const { container } = render(<HelmetProvider>
            <HashRouter>
                <List />
            </HashRouter>
        </HelmetProvider>);

        const animationAnchorTag = container.querySelector('[href="#/list/animations"]');
        const snippetAnchorTag = container.querySelector('[href="#/list/snippets"]');

        // Expectations
        expect(animationAnchorTag).not.toBeNull();

        expect(snippetAnchorTag).not.toBeNull();
    });

});