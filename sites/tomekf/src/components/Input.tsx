import { clsx } from 'clsx';
import type { JSX } from 'solid-js';

const Input = ({
    readonly,
    ...restProps
}: JSX.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            class={clsx(
                'text-black shadow appearance-none border rounded p-2',
                {
                    'bg-neutral-400': readonly,
                },
            )}
            readonly={readonly || false}
            type="text"
            {...restProps}
        />
    );
};

export default Input;
