import { Outlet, Route, Routes } from 'react-router-dom';

import styles from './Root.module.css';

const LoginLayout = () => (
  <div>
    <p>LoginLayout</p>
    <Outlet />
  </div>
);

const AdminLayout = () => (
  <div>
    <p>AdminLayout</p>
    <Outlet />
  </div>
);

const BooksLayout = () => (
  <div>
    <p>BooksLayout</p>
    <Outlet />
  </div>
);

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
                <Route element={<div>/b/default</div>} path="/" />
                <Route element={<div>/b/inner</div>} path="inner" />
                {/* conditional path */}
                {!window && <Route element={<div>/b/conditional</div>} path="conditional" />}
                <Route element={<div>/b/not-found</div>} path="*" />
              </Routes>
            </div>
          }
          path="/b/*"
        />
        <Route
          element={
            <div>
              {/* Outlet */}
              <Routes>
                <Route element={<LoginLayout />}>
                  <Route element={<div>/user/default</div>} path="/" />
                  <Route element={<div>/user/signin</div>} path="/signin" />
                  <Route element={<div>/user/signup</div>} path="/signup" />
                  <Route element={<div>/user/forget</div>} path="/forget" />
                  <Route element={<div>/user/logoy</div>} path="/logoy" />
                </Route>
                <Route element={<AdminLayout />}>
                  <Route element={<div>/user/data</div>} path="/data" />
                  <Route element={<div>/user/plans</div>} path="/plans" />
                </Route>
              </Routes>
            </div>
          }
          path="/user/*"
        />
        {/* index + Outlet */}
        <Route element={<BooksLayout />} path="/books">
          <Route element={<div>/books/index</div>} index />
          <Route element={<div>/books/:id</div>} path=":id" />
          <Route element={<div>/books/new</div>} path="new" />
        </Route>
        <Route element={<div>not-found</div>} path="*" />
      </Routes>
    </main>
  );
};
