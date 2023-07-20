import { Store } from '../store';
import { diff } from './diff';

// types && interfaces
import type { Application } from '../types/vdom';
import type { Element } from '../types/vdom';

export const render = <M>(
    root: HTMLElement,
    { model, view, update }: Application<M>
) => {
    const store = new Store(model, update);
    let current: { type: string; props: any; children: Element[] } | string = null;

    store.subscribe((state) => {
        const rendered = view(state, store.dispatch.bind(store));

        setTimeout(() => {
            diff(root, current, rendered);
            current = rendered;
        });
    });
};
