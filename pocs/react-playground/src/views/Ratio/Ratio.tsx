import { useState } from 'react';

import Head from 'REACT_PG/components/Head/Head';
import Input from 'REACT_PG/components/Input/Input';
import useFormatMessage from 'REACT_PG/hooks/useFormatMessage';

const ratio = (a: number, b: number, c: number): number => (b * c) / a;

const Ratio = () => {
    const formatMessage = useFormatMessage();
    const [a, setA] = useState<number | string>(10);
    const [b, setB] = useState<number | string>(20);
    const [c, setC] = useState<number | string>(5);
    const [x, setX] = useState<number | string>(10);

    const onInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = parseFloat(event.target.value) || event.target.value;

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

        const temp = {
            a,
            b,
            c,
            [event.target.name]: value,
        };
        const newX = ratio(temp.a as number, temp.b as number, temp.c as number);

        setX(!Number.isNaN(newX) && Number.isFinite(newX) ? newX : '🤯');
    };

    return (
        <>
            <Head title={formatMessage('section.ratio')} />
            {Math.random()}
            <div>a - b</div>
            <div>c - x</div>
            <div>x = (b * c) / a</div>
            <div className="grid gap-2 grid-cols-2 max-w-lg mx-auto mt-4">
                <Input name="a" onChange={onInput} placeholder="a" type="number" value={a} />
                <Input name="b" onChange={onInput} placeholder="b" type="number" value={b} />
                <Input name="c" onChange={onInput} placeholder="c" type="number" value={c} />
                <Input name="x" readOnly type="text" value={x} />
            </div>
        </>
    );
};

export default Ratio;
