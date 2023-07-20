import { AttributeVal } from '../types/vdom';

export const setAttribute = (
    el: HTMLElement,
    attribute: string,
    value: AttributeVal,
) => {
    if (attribute === 'style') {
        const styles = Object.entries(value);

        for (const [key, val] of styles) {
            // @ts-ignore
            el.style[key] = val;
        }
    } else if (attribute === 'value') {
        // @ts-ignore
        el.value = value;
    } else if (/^on/.test(attribute)) {
        el.addEventListener(
            attribute.slice(2).toLowerCase(),
            value as EventListener
        );
    } else {
        el.setAttribute(attribute, String(value));
    }
}
