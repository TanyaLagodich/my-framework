class MyFrame {

    render(selector, html) {
        const app = document.querySelector(selector);

        if (!app) {
            throw new Error('Selector isn\'t find');
        }

        app.innerHTML = html;
    }
}


new MyFrame().render('#app', '<h1>text</h1>');
// export default MyFrame;
