// Пример создания компонента
export const title = {
    template: function() {
        return '<h1>${title}</h1>';
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
