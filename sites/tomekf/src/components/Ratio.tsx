import {
    /* createEffect, */ createMemo,
    createSignal,
    type JSX,
} from 'solid-js';

import Input from './Input';

const ratio = (a = 0, b = 0, c = 0): number => (b * c) / a;

const Ratio /* : Component */ = () => {
    const [a, setA] = createSignal<number | string>(10);
    const [b, setB] = createSignal<number | string>(20);
    const [c, setC] = createSignal<number | string>(5);
    const x = createMemo(() =>
        ratio(a() as number, b() as number, c() as number),
    );

    // createEffect(() => console.log('x is', x()));

    // TODO ? support for exponential numbers, eg. 2e3, 3e+8
    const onInput: JSX.ChangeEventHandlerUnion<HTMLInputElement, Event> = (
        event,
    ): void => {
        switch (event.target.name) {
            case 'a':
                setA(event.target.value);
                break;
            case 'b':
                setB(event.target.value);
                break;
            default:
                setC(event.target.value);
        }
    };

    return (
        <>
            <div>a - b</div>
            <div>c - x</div>
            <div>x = (b * c) / a</div>
            <div class="grid gap-2 grid-cols-2 max-w-lg mx-auto mt-4">
                <Input
                    name="a"
                    onInput={onInput}
                    placeholder="a"
                    type="number"
                    value={a()}
                />
                <Input
                    name="b"
                    onInput={onInput}
                    placeholder="b"
                    type="number"
                    value={b()}
                />
                <Input
                    name="c"
                    onInput={onInput}
                    placeholder="c"
                    type="number"
                    value={c()}
                />
                <Input readonly value={x()} />
            </div>
        </>
    );
};

export default Ratio;
