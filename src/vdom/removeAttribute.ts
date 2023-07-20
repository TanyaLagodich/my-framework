import { AttributeVal } from '../types/vdom';

export const removeAttribute = (
    el: HTMLElement,
    attribute: string,
    value: AttributeVal,
) => {
    if (attribute === 'style') {
        const styles = Object.entries(value);

        for (const [key] of styles) {
            el.style.removeProperty(key);
        }
    } else if (attribute === 'value') {
        // @ts-ignore
        el.value = '';
    }  else if (/^on/.test(attribute)) {
        el.removeEventListener(
            attribute.slice(2).toLowerCase(),
            value as EventListener
        );
    } else {
        el.removeAttribute(attribute);
    }
}
