import {
  Link,
  matchPath,
  Outlet,
  Route,
  Routes,
  useLocation,
  useMatch,
  useOutletContext,
  useParams,
} from 'react-router-dom';

import { history } from '../../router/history';

import styles from './Root.module.css';

const LoginLayout = () => (
  <div>
    <div>LoginLayout</div>
    <Outlet />
  </div>
);

const AdminLayout = () => (
  <div>
    <div>AdminLayout</div>
    <Outlet />
  </div>
);

const BooksLayout = () => (
  <div>
    <div>BooksLayout</div>
    <Outlet context={{ contextData: 'context data' }} />
  </div>
);

const Bookid = () => {
  const { id } = useParams();
  const context = useOutletContext<{ contextData: string }>();

  return (
    <div>
      <div>Bookid</div>
      <div>
        Book {id} {context.contextData}
      </div>
    </div>
  );
};

const Nested2Id = () => {
  const params = useParams();

  return (
    <div>
      <div>Nested2Id</div>
      <Link to="../">../</Link>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
};

// default with path="*", '/' or index

export const Root = () => {
  const location = useLocation();
  const match1 = useMatch({ path: location.pathname });
  const match2 = useMatch({ path: '/nested2/:id/', end: false });
  const match3 = matchPath({ path: '/nested2/:id/:id2/elo/:id3', end: false }, location.pathname);
  const match4 = matchPath({ path: '/nested2/:id', end: false }, location.pathname);
  const match5 = matchPath({ path: '/nested3/:id', end: false }, location.pathname);
  const match6 = matchPath({ path: '/e/:id', end: false }, location.pathname);
  const match7 = matchPath({ path: '/e', end: false }, location.pathname);

  console.log({ match1, match2, match3, match4, match5, match6, match7 });

  // @ts-expect-error elo
  window.elo = {};
  // @ts-expect-error elo
  window.elo.history = history;

  return (
    <main className={styles.root}>
      <Link to="b/conditional">conditional</Link>
      <Routes>
        <Route
          element={
            <>
              <Routes>
                <Route element={<div>/</div>} path="/" />
                <Route element={<div>/a</div>} path="/a" />
                {!!window && (
                  <>
                    <Route element={<div>/c</div>} path="/c" />
                    <Route element={<div>/d</div>} path="/d" />
                  </>
                )}
                <Route element={<div>/b/a</div>} path="b/a" />
                <Route
                  element={
                    <div className={styles.spec}>
                      <Link to="/b/conditional">conditional</Link>
                      {/* nestest routes b/* */}
                      <Routes>
                        <Route element={<div>/b/default</div>} path="/" />
                        <Route element={<div>/b/inner</div>} path="inner" />
                        {/* conditional path */}
                        {!!window && (
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
                    <div className={styles.spec}>
                      <Link to="../">../</Link>
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
                <Route path="/nested2/:id/*">
                  <Route element={<Nested2Id />} path=":id2/elo/:id3" />
                  <Route element={<div>/nested2/not-found</div>} path="*" />
                </Route>
                <Route path="/nested3/*">
                  <Route element={<div>/nested3/new</div>} path="new" />
                  <Route element={<div>/nested3/old</div>} path="old" />
                  <Route element={<div>/nested3/not-found</div>} path="*" />
                </Route>
                <Route element={<div>e</div>} path="e" />
                <Route element={<div>e/&lt;id&gt;</div>} path="e/:id" />
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
