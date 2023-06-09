import { Route, Routes } from 'react-router-dom';

import { NotFound } from '../../NotFound/NotFound';

const Root = () => <div>Root</div>;
const A = () => <div>A</div>;
const B = () => <div>B</div>;
const C = () => <div>C</div>;
const D = () => <div>D</div>;
const E = () => <div>E</div>;
// const F = () => <div>F</div>;
// const G = () => <div>G</div>;
// const H = () => <div>H</div>;
// const I = () => <div>I</div>;
// const J = () => <div>J</div>;
// const K = () => <div>K</div>;

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Root />} path="/" />
        <Route element={<A />} path="/a" />
        <Route
          element={
            <div>
              <Routes>
                <Route element={<B />} path="b" />
                {!window && <Route element={<C />} path="c" />}
                <Route element={<D />} path="d" />
                <Route element={<E />} path="" />
                <Route element={<NotFound />} path="*" />
              </Routes>
            </div>
          }
          path="/b/*"
        />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </main>
  );
};
