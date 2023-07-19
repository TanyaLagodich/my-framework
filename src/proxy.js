export const createReactivityObject = (obj, onChange) => {
    let trackedProps = new Map();
    const track = (target, prop) => {
        if (!trackedProps.has(prop)) {
            trackedProps.set(prop, onChange);
        }
    };

    return new Proxy(obj, {
        get(target, prop) {
            const value = Reflect.get(target, prop);
            track(target, prop);

            return value;
        },
        set(target, prop, value) {
            const oldValue = Reflect.get(target, prop);
            Reflect.set(target, prop, value);
            if (trackedProps.has(prop)) {
                const onChange = trackedProps.get(prop);
                onChange(prop, value, oldValue);
            }

            return true;
        }
    });
};

