import {
    // type JSX,
    // createEffect,
    // createMemo, // for expensive calculations
    createSignal,
} from 'solid-js';

import Input from './Input';

const ratio = (a = 0, b = 0, c = 0): number => (b * c) / a;

// TODO ? support for exponential numbers, eg. 2e3, 3e+8
const Ratio = () => {
    const [a, setA] = createSignal<number | string>(10);
    const [b, setB] = createSignal<number | string>(20);
    const [c, setC] = createSignal<number | string>(5);
    const x = () => ratio(a() as number, b() as number, c() as number);

    // createEffect(() => console.log('x is', x()));

    // // not needed as solidjs does not need this kind of optimization
    // const onInput: JSX.ChangeEventHandlerUnion<HTMLInputElement, Event> = (
    //     event,
    // ): void => {
    //     switch (event.target.name) {
    //         case 'a':
    //             setA(event.target.value);
    //             break;
    //         case 'b':
    //             setB(event.target.value);
    //             break;
    //         default:
    //             setC(event.target.value);
    //     }
    // };

    return (
        <>
            <div>a - b</div>
            <div>c - x</div>
            <div>x = (b * c) / a</div>
            <div class="grid gap-2 grid-cols-2 max-w-lg mx-auto mt-4">
                <Input
                    name="a"
                    onInput={(event) => setA(event.target.value)}
                    placeholder="a"
                    type="number"
                    value={a()}
                />
                <Input
                    name="b"
                    onInput={(event) => setB(event.target.value)}
                    placeholder="b"
                    type="number"
                    value={b()}
                />
                <Input
                    name="c"
                    onInput={(event) => setC(event.target.value)}
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
