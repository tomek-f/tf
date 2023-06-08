import { Route, Routes } from 'react-router-dom';

import { FormOptions } from '../../FormOptions/FormOptions';
import { FormValues } from '../../FormValues/FormValues';
import { Home } from '../../Home/Home';
import { NotFound } from '../../NotFound/NotFound';

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<FormOptions />} path="/form-options" />
        <Route element={<FormValues />} path="/form-values" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </main>
  );
};
