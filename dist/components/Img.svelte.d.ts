import type { StandardLonghandProperties, StandardProperties, StandardShorthandProperties } from 'csstype';
import type { HTMLAttributes } from 'svelte/elements';
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const Img: $$__sveltets_2_IsomorphicComponent<Omit<HTMLAttributes<HTMLImageElement>, "style"> & {
    style?: StandardProperties & StandardLonghandProperties & StandardShorthandProperties;
    alt: string;
    src: string;
    width: string;
    height: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type Img = InstanceType<typeof Img>;
export default Img;
