import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { HtmlContent } from '../../../components/HtmlContent/HtmlContent';
import { useAppSelector } from '../../../hooks/store';

import styles from './Header.module.scss';

const blockClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
};

export const Header = () => {
  const productID = useAppSelector((state) => state.config.productID);

  return (
    <header className={styles.root}>
      <HtmlContent>
        <h1>JSON Config builder</h1>
        <p>productID {productID}</p>
      </HtmlContent>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) => clsx(styles.navLink, { [styles.active]: isActive })}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(styles.navLink, styles.disabled, { [styles.active]: isActive })
          }
          onClick={blockClick}
          to="/form-meta"
        >
          Meta
        </NavLink>
        <NavLink
          className={({ isActive }) => clsx(styles.navLink, { [styles.active]: isActive })}
          to="/form-options"
        >
          Options
        </NavLink>
        <NavLink
          className={({ isActive }) => clsx(styles.navLink, { [styles.active]: isActive })}
          to="/form-values"
        >
          Values
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(styles.navLink, styles.farRight, styles.disabled, { [styles.active]: isActive })
          }
          onClick={blockClick}
          to="/export-json-file"
        >
          Export JSON file
        </NavLink>
      </nav>
    </header>
  );
};
