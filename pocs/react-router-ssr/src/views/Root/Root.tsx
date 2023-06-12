import { Route, Routes } from 'react-router-dom';

import styles from './Root.module.css';

// const Root = () => <div>Root</div>;

export const Root = () => {
  return (
    <main className={styles.root}>
      <Routes>
        <Route element={<div>root</div>} path="/" />
        <Route element={<div>a</div>} path="/a" />
        <Route
          element={
            <div>
              {/* nestest routes b/* */}
              <Routes>
                <Route
                  element={
                    <div>
                      b/<em>default</em>
                    </div>
                  }
                  path=""
                />
                <Route element={<div>b</div>} path="b" />
                {/* conditional path */}
                {!window && <Route element={<div>c</div>} path="c" />}
                <Route element={<div>d</div>} path="d" />
                <Route element={<div>not found</div>} path="*" />
              </Routes>
            </div>
          }
          path="/b/*"
        />
        <Route element={<div>not found</div>} path="*" />
      </Routes>
    </main>
  );
};
