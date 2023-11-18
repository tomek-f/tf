import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { linkClasses } from '../utils/link-classes';

interface Props
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    active?: boolean;
}

export const ButtonLink = ({
    children,
    className,
    active = false,
    ...rest
}: Props) => {
    return (
        <button
            className={linkClasses({ active, className })}
            type="button"
            {...rest}
        >
            {children}
        </button>
    );
};
