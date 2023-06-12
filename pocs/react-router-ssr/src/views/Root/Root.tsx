import { Outlet, Route, Routes, useOutletContext, useParams } from 'react-router-dom';

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
    <Outlet context={{ contextData: 'context data' }} />
  </div>
);

const Bookid = () => {
  const { id } = useParams();
  const context = useOutletContext<{ contextData: string }>();

  return (
    <div>
      <p>Bookid</p>
      <div>
        Book {id} {context.contextData}
      </div>
    </div>
  );
};

// default with path="*" or index

export const Root = () => {
  return (
    <main className={styles.root}>
      <Routes>
        <Route
          element={
            <>
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
                        {!window && (
                          <Route element={<div>/b/conditional</div>} path="conditional" />
                        )}
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
                          <Route element={<div>/user/logout</div>} path="/logout" />
                        </Route>
                        <Route element={<AdminLayout />}>
                          <Route element={<div>/user/data</div>} path="/data" />
                          <Route element={<div>/user/plans</div>} path="/plans" />
                        </Route>
                        <Route element={<div>/user/not-found</div>} path="*" />
                      </Routes>
                    </div>
                  }
                  path="/user/*"
                />
                {/* index + Outlet */}
                <Route element={<BooksLayout />} path="/books/*">
                  <Route element={<div>/books/index</div>} index />
                  <Route element={<Bookid />} path=":id" />
                  <Route element={<div>/books/new</div>} path="new" />
                </Route>
                {/* index + Outlet - /books/* same as /books2 */}
                <Route element={<BooksLayout />} path="/books2">
                  <Route element={<div>/books2/index</div>} index />
                  <Route element={<Bookid />} path=":id" />
                  <Route element={<div>/books2/new</div>} path="new" />
                </Route>
                <Route path="/nested/*">
                  <Route element={<div>/nested/new</div>} path="new" />
                  <Route element={<div>/nested/old</div>} path="old" />
                  <Route element={<div>/nested/not-found</div>} path="*" />
                </Route>
                <Route element={<div>global not-found</div>} path="*" />
              </Routes>
              <div>component in router (rooter access) on every route</div>
            </>
          }
          path="*"
        />
      </Routes>
    </main>
  );
};
