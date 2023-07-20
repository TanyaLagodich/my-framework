import { Attributes } from '../types/vdom';

export const setAttributes = (el: HTMLElement, attributes: Attributes) => {
    for (const [attribute, value] of Object.entries(attributes)) {
        el.setAttribute(attribute, String(value));
    }
}
