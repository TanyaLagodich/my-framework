export default class Component {

    constructor(template, props) {
        this.template = template;
        this.props = props;
    }
    render() {
        return this.template(this.props);
    }
}
