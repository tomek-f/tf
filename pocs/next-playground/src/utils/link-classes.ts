import { clsx } from 'clsx';

interface Props {
    active?: boolean;
    className?: string;
}

export function linkClasses({ className, active }: Props) {
    return clsx(
        'transition-colors duration-300',
        active
            ? 'text-orange-700 dark:text-green-500'
            : 'text-blue-700 dark:text-yellow-500 hover:underline',
        className,
    );
}
