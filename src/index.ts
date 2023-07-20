// import { Component } from "./component";
// import { title } from './title';
//
// class MyFrame {
//
//     render(selector, html) {
//         const app = document.querySelector(selector);
//
//         if (!app) {
//             throw new Error('Selector isn\'t find');
//         }
//
//         const newComponent = new Component(html).render();
//         newComponent.forEach((comp) => {
//             app.appendChild(comp.render())
//         });
//     }
// }
//
//
//
// // пример использования
// new MyFrame().render('#app', title);
// export default MyFrame;
//

import { h } from './vdom/element';
import { render } from './vdom/render';

const app = document.querySelector<HTMLDivElement>('#app');

interface Model {
    email: string;
    password: string;
}

render<Model>(app, {
    model: { email: 'test@example.com', password: 'aVerySecretPassword' },
    view(state) {
        return h('div', {}, [
            h('form', { method: 'POST', action: '#' }, [
                h('input', { type: 'email', value: state.email }),
                h('input', { type: 'password', value: state.password }),
                h('button', { type: 'submit' }, ['Submit']),
            ]),
        ]);
    },
    update(state) {
        return state;
    },
});
