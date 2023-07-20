import { Attributes } from '../types/vdom';
import { removeAttribute } from './removeAttribute';
import { setAttribute } from './setAttribute';

export const updateAttributes = (
    el: HTMLElement,
    oldAttributes: Attributes,
    newAttributes: Attributes,
) => {

    const allAttributes = Object.keys({ ...oldAttributes, ...newAttributes });

    for (const attribute of allAttributes) {
        const oldVal = oldAttributes[attribute];
        const newVal = newAttributes[attribute];

        if (!newVal) {
            removeAttribute(el, attribute, oldVal);
        } else if (!oldVal || oldVal !== newVal) {
            removeAttribute(el, attribute, oldVal);
            setAttribute(el, attribute, newVal);
        }
    }
}
