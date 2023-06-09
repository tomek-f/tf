import { Main } from './Main/Main';

import styles from './Root.module.css';

export const Root = () => {
  return (
    <div className={styles.root}>
      <Main />
    </div>
  );
};
