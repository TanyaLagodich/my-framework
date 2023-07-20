import { Application } from './types/vdom';
import { render } from './vdom/render';


export class MyFrame {
    render<M>(root: HTMLElement, component: Application<M>) {
        render(root, component);
    }
}
