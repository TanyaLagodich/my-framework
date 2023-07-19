// export class VDom {
//     constructor(tagName, props, children) {
//         console.log({ tagName });
//         this.tagName = tagName;
//         this.props = props;
//         this.children = children;
//    }
//
//    render() {
//         const element = document.createElement(this.tagName);
//
//         for (let prop in this.props) {
//             element.setAttribute(this.props, this.props[prop]);
//        }
//
//         this.children.forEach((child) => {
//             let childElement;
//
//             if (child instanceof VDom) {
//                 childElement = child.render();
//             } else {
//                 childElement = document.createTextNode(child);
//             }
//
//             element.appendChild(childElement);
//         });
//
//         console.log({ element })
//
//         return element;
//    }
//
//    update() {
//
//    }
// }
//
// export const parseToVDomString = (template) => {
//     // TODO подумать над регуляркой
//     // добавить возможность парсинга шаблонных строк и подстановку переменных
//     // парсить несколько тегов из строки
//     const regex = /<([a-zA-Z0-9]+)>\${([^}]*)}<\/\1>/;
//
//     const matches = [];
//     const match = regex.exec(template);
//     // TODO подумать
//     const tagName = match[1];
//     const content = match[2];
//     matches.push({ tagName, content });
//
//     const virtualDOM = matches.map(({ tagName, content }) => {
//         return new VDom(tagName, {}, [content]);
//     });
//
//     return virtualDOM;
// }

import { Store } from './store';

export const h = (type, props = {}, children = []) => ({
    type,
    props,
    children,
});

// const view = () =>
//     h('div', {}, [
//         h('h1', {}, ['Hello']),
//         h('p', {}, ['from virtual DOM!']),
//         h('p', {}, ['from virtual DOM!']),
//         h('p', {}, ['from virtual DOM!']),
//         h('p', {}, ['from virtual DOM!']),
//     ]);

export const render = (root, { model, view, update }) => {
    const store = new Store(model, update);

    store.subscribe((state) => {
        const rendered = view(state, store.dispatch.bind(store));

        setTimeout(() => {
            diff(root, null, rendered);
        });
    });
};

const createElement = (node) => {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const el = document.createElement(node.type);
    node.children.map(createElement).forEach(el.appendChild.bind(el));

    return el;
};


const diff = (
    root,
    oldNode,
    newNode,
    index = 0
) => {
    if (!oldNode) {
        root.appendChild(createElement(newNode));
    }
};


