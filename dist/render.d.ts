import { type Component, SvelteComponent } from 'svelte';
export declare const render: ({ template, props, options }: {
    template: Component<any, {}, string> | Component<SvelteComponent<any, any, any>>;
    props?: Record<string, any>;
    options?: {
        plainText?: boolean;
        pretty?: boolean;
    };
}) => string;
