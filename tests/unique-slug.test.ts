// tests/slugUniqueness.test.ts
import { describe, it, expect } from 'vitest';
import { snippets } from '../src/data/snippets';
import { animations } from '../src/data/animations';

describe('Slug Uniqueness', () => {

    it('snippets should have unique slugs', () => {
        const slugs = snippets.map(snippet => snippet.slug);
        const uniqueSlugs = new Set(slugs);

        expect(uniqueSlugs.size).toBe(slugs.length);
    });

    it('animations should have unique slugs', () => {
        const slugs = animations.map(animation => animation.slug);
        const uniqueSlugs = new Set(slugs);

        expect(uniqueSlugs.size).toBe(slugs.length);
    });

});
