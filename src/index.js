import { createReactivityObject } from './proxy';

class Component {
    data = {};
    constructor({ template, data, watch, methods }) {
        // нужно привязывать контекст через bind
        this.template = template;
        this.data = data();
        this.data = createReactivityObject(this.data, watch.bind(this.data));
        this.methods = methods;
    }

    render() {
        return this.template(this.data, this.methods);
    }
}

class MyFrame {

    render(selector, html) {
        const app = document.querySelector(selector);

        if (!app) {
            throw new Error('Selector isn\'t find');
        }

        const newComponent = new Component(html);
        app.innerHTML = newComponent.render();
    }
}

// Пример создания компонента
const title = {
    template: function({ title }) {
        return `<h1>${title}</h1>`;
    },
    data() {
        return {
            title: 'Works',
        };
    },
    watch: function(prop, value, oldValue) {
        console.log('reactivity works', prop, value, oldValue);
    },
    methods: {
        timeout() {
            setTimeout(() => {
                this.data.title = 'title2';
                console.log('setTimeout', { title }, this)
            }, 1000)
        }
    }
};


// пример использования
new MyFrame().render('#app', title);
export default MyFrame;
