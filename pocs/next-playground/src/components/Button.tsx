import { clsx } from 'clsx';

type Props = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const Button = (props: Props) => {
    return (
        <button
            className={clsx(
                'bg-orange-500 text-white hover:bg-yellow-500',
                'transition-colors duration-200 ease-in-out',
                'rounded px-2 py-1 font-medium',
            )}
            type="button"
            {...props}
        />
    );
};
