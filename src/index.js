import { Component } from "./component";
import { title } from './title';

class MyFrame {

    render(selector, html) {
        const app = document.querySelector(selector);

        if (!app) {
            throw new Error('Selector isn\'t find');
        }

        const newComponent = new Component(html).render();
        newComponent.forEach((comp) => {
            app.appendChild(comp.render())
        });
    }
}



// пример использования
new MyFrame().render('#app', title);
export default MyFrame;
