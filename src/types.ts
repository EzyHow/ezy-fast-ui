export const CodeSnippetCategories = [
    'Button', 'Loader', 'Checkbox'
] as const;

export const AnimationCategories = [
    'Hover', 'Entry', 'Exit'
] as const;

export interface CodeSnippetData {
    name: string;
    hint?: string;
    slug: string;
    category: typeof CodeSnippetCategories[number] | typeof AnimationCategories[number];
    tags: string[];
    css: string;
    html: string;
    js?: string;
    hiddenStyle?: string;
    showReplayButton?: boolean;
}