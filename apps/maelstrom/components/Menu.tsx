import { Home } from 'lucide-react';

import NavLink from './NavLink';

const Menu = () => {
  return (
    <div className="list-none flex flex-col md:flex-row gap-4 p-4">
      <NavLink href="/">
        <Home className="h-4 w-4" strokeWidth="1" />
      </NavLink>
      <NavLink href="/posts" includes>
        posts
      </NavLink>
      <NavLink href="/countries-client">client</NavLink>
      <NavLink href="/countries-static">static</NavLink>
      <NavLink href="/countries-ssr">ssr</NavLink>
      <NavLink href="/graphql-client">graphql</NavLink>
      <NavLink href="/todos-client">todos</NavLink>
    </div>
  );
};

export default Menu;
