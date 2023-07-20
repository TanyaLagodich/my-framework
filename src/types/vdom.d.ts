// types
export type Application<T> = {
    model: T;
    view: (state: T, dispatch: Function) => Element;
    update: (state: T, action: any) => T;
};

export type AttributeVal = number | string | boolean | Function;

export type Element = { type: string; props: any; children: Element[] } | string;

// interfaces
export interface Attributes {
    [x: string]: AttributeVal;
}


