import Component from '../component';
import buttonTemplate from './button.handlebars';

export default new Component(
    buttonTemplate,
    { text: 'text' }
)
    .render();
