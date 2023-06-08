import styles from './HtmlContent.module.scss';

interface HtmlContentProps {
  children: React.ReactNode;
}

export const HtmlContent = ({ children }: HtmlContentProps) => {
  return <div className={styles.root}>{children}</div>;
};
