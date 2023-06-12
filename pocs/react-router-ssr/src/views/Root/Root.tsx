import { Route, Routes } from 'react-router-dom';

import styles from './Root.module.css';

// const Elem = () => <div>elem</div>;

export const Root = () => {
  return (
    <main className={styles.root}>
      <Routes>
        <Route element={<div>/</div>} path="/" />
        <Route element={<div>/a</div>} path="/a" />
        <Route
          element={
            <div>
              {/* nestest routes b/* */}
              <Routes>
                <Route element={<div>/b/default</div>} path="" />
                <Route element={<div>/b/b</div>} path="b" />
                {/* conditional path */}
                {!window && <Route element={<div>/b/c</div>} path="c" />}
                <Route element={<div>/b/d</div>} path="d" />
                <Route element={<div>/b/not-found</div>} path="*" />
              </Routes>
            </div>
          }
          path="/b/*"
        />
        <Route element={<div>not-found</div>} path="*" />
      </Routes>
    </main>
  );
};
