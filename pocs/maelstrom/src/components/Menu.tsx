import { HomeIcon } from 'lucide-react';

import NavLink from './NavLink';

const Menu = () => {
  return (
    <div className="list-none flex flex-col md:flex-row gap-4 py-4">
      <NavLink href="/">
        <HomeIcon className="h-4 w-4" strokeWidth="1" />
      </NavLink>
      <NavLink href="/test-1" includes>
        test-1
      </NavLink>
      <NavLink href="/test-2" includes>
        test-2
      </NavLink>
      <NavLink href="/TODO-posts" includes>
        TODO-posts
      </NavLink>
      <NavLink href="/graphql-client" includes>
        graphql-client
      </NavLink>
      <NavLink href="/graphql-server" includes>
        graphql-server
      </NavLink>
    </div>
  );
};

export default Menu;
