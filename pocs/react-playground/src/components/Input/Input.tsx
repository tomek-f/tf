import { clsx } from 'clsx';

const Input = ({
    readOnly,
    ...restProps
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    return (
        <input
            className={clsx('text-black shadow appearance-none border rounded p-2', {
                'bg-gray-400': readOnly,
            })}
            readOnly={readOnly}
            type="text"
            {...restProps}
        />
    );
};

export default Input;
