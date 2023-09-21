import type { Component, JSX } from 'solid-js';
import { twMerge } from 'tailwind-merge';

// Component<Props> or just (props: Props)
const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input
            class={twMerge(
                'rounded-md bg-slate-800 p-3 mt-8',
                props.readonly && 'bg-neutral-400',
            )}
            type="text"
            {...props}
        />
    );
};

export default Input;
