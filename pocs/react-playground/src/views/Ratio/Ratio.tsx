import { useState } from 'react';

import Head from 'REACT_PG/components/Head/Head';
import Input from 'REACT_PG/components/Input/Input';
import useFormatMessage from 'REACT_PG/hooks/ use-format-message';

const ratio = (a: number, b: number, c: number): number => (b * c) / a;

const Ratio = () => {
    const formatMessage = useFormatMessage();
    const [a, setA] = useState<number | string>(10);
    const [b, setB] = useState<number | string>(20);
    const [c, setC] = useState<number | string>(5);
    const [x, setX] = useState<number | string>(10);

    const onInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value =
            Number.parseFloat(event.target.value) || event.target.value;

        switch (event.target.name) {
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

        const temporary = {
            a,
            b,
            c,
            [event.target.name]: value,
        };
        const newX = ratio(
            temporary.a as number,
            temporary.b as number,
            temporary.c as number,
        );

        setX(!Number.isNaN(newX) && Number.isFinite(newX) ? newX : '🤯');
    };

    return (
        <>
            <Head title={formatMessage('section.ratio')} />
            {Math.random()}
            <div>a - b</div>
            <div>c - x</div>
            <div>x = (b * c) / a</div>
            <div className="mx-auto mt-4 grid max-w-lg grid-cols-2 gap-2">
                <Input
                    name="a"
                    onChange={onInput}
                    placeholder="a"
                    type="number"
                    value={a}
                />
                <Input
                    name="b"
                    onChange={onInput}
                    placeholder="b"
                    type="number"
                    value={b}
                />
                <Input
                    name="c"
                    onChange={onInput}
                    placeholder="c"
                    type="number"
                    value={c}
                />
                <Input name="x" readOnly type="text" value={x} />
            </div>
        </>
    );
};

export default Ratio;
