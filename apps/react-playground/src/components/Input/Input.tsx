import classnames from 'classnames';

const Input = ({
  readOnly,
  ...restProps
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <input
      className={classnames('text-black shadow appearance-none border rounded p-2', {
        'bg-gray-400': readOnly,
      })}
      readOnly={readOnly}
      type="text"
      {...restProps}
    />
  );
};

export default Input;
