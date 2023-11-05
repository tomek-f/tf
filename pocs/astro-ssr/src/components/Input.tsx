import type { Component, JSX } from 'solid-js';
import { twMerge } from 'tailwind-merge';

// Component<Props> or just (props: Props)
const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input
            class={twMerge(
                'mt-8 rounded-md bg-violet-900 p-3',
                props.readonly && 'bg-gray-400',
            )}
            type="text"
            {...props}
        />
    );
};

export default Input;
