import type { Element } from '../types/vdom';

export const hasChanged = (node1: Element, node2: Element) => {
    if (typeof node1 === 'string' || typeof node2 === 'string') {
        return node1 !== node2;
    } else {
        return node1.type !== node2.type;
    }
};
