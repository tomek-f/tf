import { clsx } from 'clsx';
import type { Component, JSX } from 'solid-js';

const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = ({
    readonly,
    ...restProps
}) => {
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
