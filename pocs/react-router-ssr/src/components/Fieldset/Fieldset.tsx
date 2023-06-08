import clsx from 'clsx';

import styles from './Fieldset.module.scss';

interface FieldsetProps
  extends React.DetailedHTMLProps<
    React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  > {
  children: React.ReactNode;
  legend: string;
  vertical?: boolean;
}

export const Fieldset = ({ children, legend, vertical = true, ...restProps }: FieldsetProps) => {
  return (
    <fieldset
      className={clsx(styles.root, { [styles.vertical]: vertical, [styles.horizontal]: !vertical })}
      {...restProps}
    >
      <legend className={styles.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
};
