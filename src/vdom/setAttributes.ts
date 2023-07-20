import { Attributes } from '../types/vdom';
import { setAttribute } from './setAttribute';

export const setAttributes = (el: HTMLElement, attributes: Attributes) => {
    for (const [attribute, value] of Object.entries(attributes)) {
        setAttribute(el, attribute, value);
    }
}
