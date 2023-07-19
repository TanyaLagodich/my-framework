type UpdateFn<T> = (state: T, action: any) => T;

export class Store<T> {

    private listeners: Array<(state: T) => void> = [];
    constructor(private state: T, private update: UpdateFn<T>) {

        setTimeout(() => {
            this.dispatch(['INIT_STORE']);
        });
    }

    subscribe(listener: (state: T) => void) {
        this.listeners.push(listener);
    }

    dispatch(action: any) {
        this.state = this.update(this.state, action);

        this.listeners.forEach((listener) => listener(this.state));
    }
}
