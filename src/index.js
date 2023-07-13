

import Button from "./components/button";
import buttonTemplate from './components/button.handlebars';
import Component from "./components/component";


class MyFrame {

    render(selector, component, props) {
        const app = document.querySelector(selector);

        if (!app) {
            throw new Error('Selector isn\'t find');
        }

        app.innerHTML = new Component(component, props).render();
    }
}


new MyFrame()
    .render(
        '#app',
        buttonTemplate,
        { text: 'Press me' },
    );
// export default MyFrame;
