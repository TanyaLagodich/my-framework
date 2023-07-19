export class VDom {
    constructor(tagName, props, children) {
        console.log({ tagName });
        this.tagName = tagName;
        this.props = props;
        this.children = children;
   }

   render() {
        const element = document.createElement(this.tagName);

        for (let prop in this.props) {
            element.setAttribute(this.props, this.props[prop]);
       }

        this.children.forEach((child) => {
            let childElement;

            if (child instanceof VDom) {
                childElement = child.render();
            } else {
                childElement = document.createTextNode(child);
            }

            element.appendChild(childElement);
        });

        console.log({ element })

        return element;
   }
}

export const parseToVDomString = (template) => {
    // TODO подумать над регуляркой
    // добавить возможность парсинга шаблонных строк и подстановку переменных
    // парсить несколько тегов из строки
    const regex = /<([a-zA-Z0-9]+)>\${([^}]*)}<\/\1>/;

    const matches = [];
    const match = regex.exec(template);
    // TODO подумать
    const tagName = match[1];
    const content = match[2];
    matches.push({ tagName, content });

    const virtualDOM = matches.map(({ tagName, content }) => {
        return new VDom(tagName, {}, [content]);
    });

    return virtualDOM;
}
