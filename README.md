# my-framework
**пет-проект с *учебной* целью**

V1
- есть Virtual DOM
- метод `h` для создания компонента
- динамические обновления в браузере после изменения состояния компонента

Примеры приложений в папке `examples`

### Структура компонента

```typescript
// h - функция для рендеринга
// применимает три параметра: 
// type: string, (тег)
// props: any = {}, (аттрибуты)
// children: any[] = [] (дочерние теги или текст)
import { h } from '../../src/vdom/element';

 class Component {
    model: Record<any>
    view(state, dispatch) {
        return h(
            'main',
            {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                },
            },
            [
                h(
                    'h1', {}, ['To-do List']
                )
            ]),
            h(
                'button',
                {
                    style: {marginLeft: '5px'},
                    // события передаются через предлог on
                    onClick: () => dispatch({type: Actions.ADD_TODO}),
                },
                ['Add To-do']
            )
    }
    update(state, action) {
        // делать что-то после обновления состояния компонента
    }
}
```
