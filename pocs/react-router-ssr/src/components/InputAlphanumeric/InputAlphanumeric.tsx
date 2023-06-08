import styles from './InputAlphanumeric.module.scss';

export interface InputAlphanumericProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: 'text' | 'number';
}

export const InputAlphanumeric = ({
  disabled,
  readOnly,
  type = 'text',
  ...restProps
}: InputAlphanumericProps) => {
  return (
    <input
      className={styles.root}
      disabled={disabled}
      readOnly={readOnly}
      type={type}
      {...restProps}
    />
  );
};
