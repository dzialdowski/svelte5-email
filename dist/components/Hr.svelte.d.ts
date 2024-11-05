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
declare const Hr: $$__sveltets_2_IsomorphicComponent<Omit<HTMLAttributes<HTMLHRElement>, "style"> & {
    style?: StandardLonghandProperties & StandardProperties & StandardShorthandProperties;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type Hr = InstanceType<typeof Hr>;
export default Hr;
