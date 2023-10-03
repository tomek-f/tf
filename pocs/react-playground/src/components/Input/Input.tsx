import { clsx } from 'clsx';

const Input = ({
    readOnly,
    ...restProps
}: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>) => {
    return (
        <input
            className={clsx(
                'appearance-none rounded border p-2 text-black shadow',
                {
                    'bg-gray-400': readOnly,
                },
            )}
            readOnly={readOnly}
            type="text"
            {...restProps}
        />
    );
};

export default Input;
