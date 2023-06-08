import styles from './Button.module.scss';

export const Button = ({
  disabled,
  type = 'button',
  ...restProps
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button
      className={styles.root}
      disabled={disabled}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...restProps}
    />
  );
};
