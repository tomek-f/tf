import { createSignal /* , type Component */, type JSX } from 'solid-js';

import Input from './Input';

const ratio = (a: number, b: number, c: number): number => (b * c) / a;

const Ratio /* : Component */ = () => {
    const [a, setA] = createSignal<number | string>(10);
    const [b, setB] = createSignal<number | string>(20);
    const [c, setC] = createSignal<number | string>(5);
    const [x, setX] = createSignal<number | string>(10);

    const onInput: JSX.ChangeEventHandlerUnion<HTMLInputElement, Event> = (
        event,
    ): void => {
        const target = event.target;
        const value = parseFloat(target.value) || target.value; // sometimes NaN or string

        switch (target.name) {
            case 'a':
                setA(value);
                break;
            case 'b':
                setB(value);
                break;
            default:
                setC(value);
        }

        if (typeof value === 'string') {
            setX('🤯');

            return;
        }

        const temp = {
            a: a(),
            b: b(),
            c: c(),
            [target.name]: value,
        };
        const newX = ratio(
            temp.a as number,
            temp.b as number,
            temp.c as number,
        );

        setX(!Number.isNaN(newX) && Number.isFinite(newX) ? newX : '🤯');
    };

    return (
        <div class="animate-float md:animate-float-long motion-reduce:animate-none">
            <div>a - b</div>
            <div>c - x</div>
            <div>x = (b * c) / a</div>
            <div class="grid gap-2 grid-cols-2 max-w-lg mx-auto mt-4">
                <Input
                    class="text-black shadow appearance-none border rounded p-2"
                    name="a"
                    onChange={onInput}
                    placeholder="a"
                    type="number"
                    value={a()}
                />
                <Input
                    class="text-black shadow appearance-none border rounded p-2"
                    name="b"
                    onChange={onInput}
                    placeholder="b"
                    type="number"
                    value={b()}
                />
                <Input
                    class="text-black shadow appearance-none border rounded p-2"
                    name="c"
                    onChange={onInput}
                    placeholder="c"
                    type="number"
                    value={c()}
                />
                <Input
                    class="text-black shadow appearance-none border rounded p-2 bg-neutral-400"
                    name="x"
                    readOnly
                    type="text"
                    value={x()}
                />
            </div>
        </div>
    );
};

export default Ratio;
