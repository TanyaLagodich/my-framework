

import Button from './components/button/button';
import Component from "./components/component";

console.log(Button);
class MyFrame {

    render(selector, component) {
        const app = document.querySelector(selector);

        if (!app) {
            throw new Error('Selector isn\'t find');
        }

        app.innerHTML = component;
    }
}


new MyFrame()
    .render(
        '#app',
        Button,
    );
// export default MyFrame;
