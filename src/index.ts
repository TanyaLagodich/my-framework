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
    text: string;
    todos: string[];
}
enum Actions {
    UPDATE_TEXT = 'UPDATE_TEXT',
    ADD_TODO = 'ADD_TODO',
}

render<Model>(app, {
    model: { text: '', todos: [] },
    view(state, dispatch) {
        return h(
            'main',
            {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                },
            },
            [
                h('h1', {}, ['To-do List']),
                h(
                    'ul',
                    {},
                    state.todos.map((todo) => h('li', {}, [todo]))
                ),
                h('div', {}, [
                    h('input', {
                        value: state.text,
                        onInput: (e: any) =>
                            dispatch({ type: Actions.UPDATE_TEXT, payload: e.target.value }),
                    }),
                    h(
                        'button',
                        {
                            style: { marginLeft: '5px' },
                            onClick: () => dispatch({ type: Actions.ADD_TODO }),
                        },
                        ['Add To-do']
                    ),
                ]),
            ]
        );
    },
    update(state, action) {
        switch (action.type) {
            case Actions.UPDATE_TEXT:
                return { ...state, text: action.payload };
            case Actions.ADD_TODO:
                if (!state.text) return state;

                return { ...state, text: '', todos: [...state.todos, state.text] };
            default:
                return state;
        }
    },
});
