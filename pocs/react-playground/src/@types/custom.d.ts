type Dictionary = Record<string, string>;

type ValueOf<T> = T[keyof T];

// Element -> HTMLElement | SVGElement | … -> HTMLDivElement | SVGSVGElement | …
type EventDefault<T = Event> = (event: T) => void;
type OnClickDefault<T = Element> = EventDefault<React.MouseEvent<T>>;
type OnChangeDefault<T = Element> = EventDefault<React.ChangeEvent<T>>;
type OnSelectDefault<T = Element> = EventDefault<React.ChangeEvent<T>>;
type OnBlurDefault<T = Element> = EventDefault<React.FocusEvent<T>>;
type OnFocusDefault<T = Element> = EventDefault<React.FocusEvent<T>>;
type OnKeyboardEventDefault<T = Element> = EventDefault<React.KeyboardEvent<T>>;

type CallbackDefault = () => void;

type ReactReducer<S, A> = (state: S, action: A) => S;

type Timeout = ReturnType<typeof setTimeout>;

type Nullable<T> = T | null;
// NonNullable is an utiliy type
type NonUndefined<T> = T extends undefined ? never : T;

type SomeObject = object;

type ArrayOfSomeObjectType = SomeObject[];
