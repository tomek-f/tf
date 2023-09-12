import { clsx } from 'clsx';
import type { Component, JSX } from 'solid-js';

// Component<Props> or just (props: Props)
const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input
            class={clsx(
                'text-black shadow appearance-none border rounded p-2',
                {
                    'bg-neutral-400': props.readonly,
                },
            )}
            type="text"
            {...props}
        />
    );
};

export default Input;
