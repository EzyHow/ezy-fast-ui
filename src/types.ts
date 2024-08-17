const Categories = [
    'Button', 'Loader', 'Checkbox'
] as const;
export default Categories;

export interface CodeSnippetData {
    name: string;
    hint?: string;
    slug: string;
    category: typeof Categories[number];
    tags: string[];
    css: string;
    html: string;
    js?: string;
    hiddenStyle?: string;
}