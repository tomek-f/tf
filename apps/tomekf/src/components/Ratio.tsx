import { useState } from 'react';
import { Box } from 'lucide-react';

import Input from './Input';

const ratio = (a: number, b: number, c: number): number => (b * c) / a;

const Ratio = () => {
  const [a, setA] = useState<number | string>(10);
  const [b, setB] = useState<number | string>(20);
  const [c, setC] = useState<number | string>(5);
  const [x, setX] = useState<number | string>(10);

  const onInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
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
      a,
      b,
      c,
      [target.name]: value,
    };
    const newX = ratio(temp.a as number, temp.b as number, temp.c as number);

    setX(!Number.isNaN(newX) && Number.isFinite(newX) ? newX : '🤯');
  };

  return (
    <>
      {/* hero icons: adjustments-vertical */}
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <Box className="h-10 w-10" strokeWidth="1" />

      <div>a - b</div>
      <div>c - x</div>
      <div>x = (b * c) / a</div>
      <div className="grid gap-2 grid-cols-2 max-w-lg mx-auto mt-4">
        <Input
          className="text-black shadow appearance-none border rounded p-2"
          name="a"
          onChange={onInput}
          placeholder="a"
          type="number"
          value={a}
        />
        <Input
          className="text-black shadow appearance-none border rounded p-2"
          name="b"
          onChange={onInput}
          placeholder="b"
          type="number"
          value={b}
        />
        <Input
          className="text-black shadow appearance-none border rounded p-2"
          name="c"
          onChange={onInput}
          placeholder="c"
          type="number"
          value={c}
        />
        <Input
          className="text-black shadow appearance-none border rounded p-2 bg-gray-400"
          name="x"
          readOnly
          type="text"
          value={x}
        />
      </div>
    </>
  );
};

export default Ratio;
