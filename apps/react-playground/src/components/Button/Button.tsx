import classnames from 'classnames';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = (props: Props) => {
  return (
    <button
      className={classnames(
        'text-white bg-orange-500 hover:bg-yellow-500',
        'transition-colors duration-200 ease-in-out',
        'px-2 py-1 font-medium rounded',
      )}
      type="button"
      {...props}
    />
  );
};

export default Button;
