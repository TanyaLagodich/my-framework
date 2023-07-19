import { createReactivityObject } from "./proxy";
import { VDom, parseToVDomString } from "./VDom";

export class Component {
    constructor({ template, data, watch, methods }) {
        // нужно привязывать контекст через bind
        this.template = template;
        this.data = data();
        this.data = createReactivityObject(this.data, watch.bind(this.data));
        this.methods = methods;
    }

    render() {
        return parseToVDomString(this.template(), this.data);
    }
}
