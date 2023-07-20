import { createElement } from './createElement';
import { hasChanged } from './hasChanged';

export const diff = (
    root: HTMLElement,
    oldNode: any,
    newNode: any,
    index: number = 0
) => {
    if (!oldNode) {
        root.appendChild(createElement(newNode));
    } else if (!newNode) {
        root.removeChild(root.childNodes[index])
    } else if (hasChanged(oldNode, newNode)) {
        root.replaceChild(createElement(newNode), root.childNodes[index]);
    } else if (typeof oldNode !== 'string' && typeof newNode !== 'string') {
        const newLength = newNode.children.length;
        const oldLength = oldNode.children.length;

        for (let i = 0; i < newLength || i < oldLength; i++) {
            diff(
                root.childNodes[index] as HTMLElement,
                newNode.children[i],
                oldNode.children[i],
                i,
            );
        }
    }
};
