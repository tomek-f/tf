import { clsx } from 'clsx';

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Block = (props: Props) => {
    return (
        <div className={clsx('mt-8', props.className)}>{props.children}</div>
    );
};
