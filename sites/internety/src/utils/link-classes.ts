import { clsx } from 'clsx';

interface Props {
    active?: boolean;
    className?: string;
}

export function linkClasses({ className, active }: Props) {
    return clsx(
        'transition-colors duration-300',
        active
            ? 'text-lime-500 dark:text-lime-500'
            : 'text-sky-300 dark:text-sky-300 hover:underline',
        className,
    );
}
