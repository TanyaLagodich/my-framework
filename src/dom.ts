import { Store } from './store';

type Element = { type: string; props: any; children: Element[] } | string;

type Application<T> = {
    model: T;
    view: (state: T, dispatch: Function) => Element;
    update: (state: T, action: any) => T;
};
export const h = (
    type: string,
    props: any = {},
    children: any[] = []
) => ({
    type,
    props,
    children,
});

export const render = (
    root: HTMLElement,
    { model, view, update }: Application<number>
) => {
    const store = new Store(model, update);
    let current: Element | null = null;

    store.subscribe((state) => {
        const rendered = view(state, store.dispatch.bind(store));

        setTimeout(() => {
            diff(root, current, rendered);
            current = rendered;
        });
    });
};

const createElement = (node: any) => {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const el = document.createElement(node.type);
    node.children.map(createElement).forEach(el.appendChild.bind(el));

    return el;
};

const hasChanged = (node1: Element, node2: Element) => {
    if (typeof node1 === 'string' || typeof node2 === 'string') {
        return node1 !== node2;
    } else {
        return node1.type !== node2.type;
    }
};

const diff = (
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

// TODO https://kkalamarski.me/handling-attributes-and-event-listeners-lets-code-a-virtual-dom-4
