import { setAttributes } from './setAttributes';

export const createElement = (node: any) => {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const el = document.createElement(node.type);
    setAttributes(el, node.props);
    node.children.map(createElement).forEach(el.appendChild.bind(el));

    return el;
};
