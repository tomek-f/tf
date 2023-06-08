import { HtmlHead } from '../../components/HtmlHead/HtmlHead';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

import styles from './Root.module.scss';

export const Root = () => {
  return (
    <>
      <HtmlHead />

      <div className={styles.root}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};
