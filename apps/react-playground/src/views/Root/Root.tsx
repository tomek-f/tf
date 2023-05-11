import Head from 'REACT_PG/components/Head/Head';
import ThemeSwitcher from 'REACT_PG/components/ThemeSwitcher/ThemeSwitcher';
import { LinkClassNames } from 'REACT_PG/constants/linkClassNames';
import useFormatMessage from 'REACT_PG/hooks/useFormatMessage';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import Ratio from '../Ratio/Ratio';
import Test1 from '../Test1/Test1';
import Test2 from '../Test2/Test2';

const Root = () => {
  const formatMessage = useFormatMessage();

  return (
    <>
      <Head />
      <ThemeSwitcher />
      <div className="max-w-3xl" data-test="max-w-3xl" />
      <header className="pb-4">
        <h1 className="text-2xl font-bold">
          <Link to="/">{import.meta.env.VITE_APP_TITLE}</Link>
        </h1>
      </header>
      <nav className="flex flex-wrap items-center gap-2 pb-4">
        <NavLink
          className={({ isActive }) => (isActive ? LinkClassNames.active : LinkClassNames.default)}
          to="/"
        >
          {formatMessage('section.home')}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? LinkClassNames.active : LinkClassNames.default)}
          to="/ratio"
        >
          {formatMessage('section.ratio')}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? LinkClassNames.active : LinkClassNames.default)}
          to="/contact"
        >
          {formatMessage('section.contact')}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? LinkClassNames.active : LinkClassNames.default)}
          to="/test1"
        >
          Test1
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? LinkClassNames.active : LinkClassNames.default)}
          to="/test2"
        >
          Test2
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? LinkClassNames.active : LinkClassNames.default)}
          to="/404-test"
        >
          404-test
        </NavLink>
      </nav>
      <main className="pb-4">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Ratio />} path="/ratio" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Test1 />} path="/test1" />
          <Route element={<Test2 />} path="/test2" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Root;
