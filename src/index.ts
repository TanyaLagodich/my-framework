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

import { h, render } from './dom';

const app: HTMLElement = document.querySelector('#app');
render(app, {
    model: 1,
    view(state, dispatch) {
        setTimeout(() => dispatch('increment'), 1000);

        return h('div', {}, [
            h('h1', {}, ['Hello']),
            h('p', {}, ['The value is: ', String(state)]),
        ]);
    },
    update(state, action) {
        switch (action) {
            case 'increment':
                return state + 1;
            default:
                return state;
        }
    },
});
