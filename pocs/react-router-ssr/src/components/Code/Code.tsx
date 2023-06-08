import { memo } from 'react';

import styles from './Code.module.scss';

interface CodeProps {
  code: string;
}

export const Code = memo(function Code({ code }: CodeProps) {
  return <pre className={styles.root}>{code}</pre>;
});
