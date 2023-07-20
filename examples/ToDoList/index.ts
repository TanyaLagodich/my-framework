import { h } from '../../src/vdom/element';
import { MyFrame } from "../../src";
import {Application} from "../../src/types/vdom";

interface Model {
    text: string;
    todos: string[];
}
enum Actions {
    UPDATE_TEXT = 'UPDATE_TEXT',
    ADD_TODO = 'ADD_TODO',
}

const app = document.querySelector<HTMLDivElement>('#app');

const component: Application<Model> = {
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
}

new MyFrame()
    .render<Model>(app, component);
