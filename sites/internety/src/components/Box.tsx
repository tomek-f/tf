import { clsx } from 'clsx';

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Box = (props: Props) => {
    return (
        <div
            className={clsx(
                'mt-8 rounded-md bg-slate-800 p-3',
                props.className,
            )}
        >
            {props.children}
        </div>
    );
};
