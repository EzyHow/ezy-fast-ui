// tests/slugUniqueness.test.ts
import { describe, it, expect } from 'vitest';
import { snippets } from '../src/data/snippets';
import { animations } from '../src/data/animations';
import { CodeSnippetCategories, AnimationCategories } from '../src/types';

describe('Category Exists or not', () => {

    it('snippets category should match with given categories in types file', () => {

        type categoriesType = typeof CodeSnippetCategories[number];
        const categories = snippets.map(snippet => snippet.category) as categoriesType[];
        const uniqueCategories = new Set(categories);

        let categoryExists = true;

        for (const category of uniqueCategories) {
            if (!CodeSnippetCategories.includes(category)) {
                categoryExists = false;
                break;
            }
        }

        expect(categoryExists).toBe(true);
    });

    it('animation category should match with given categories in types file', () => {

        type categoriesType = typeof AnimationCategories[number];
        const categories = animations.map(animation => animation.category) as categoriesType[];
        const uniqueCategories = new Set(categories);

        let categoryExists = true;

        for (const category of uniqueCategories) {
            if (!AnimationCategories.includes(category)) {
                categoryExists = false;
                break;
            }
        }

        expect(categoryExists).toBe(true);
    });

});
