import { HomeIcon } from 'lucide-react';

import NavLink from './NavLink';

const Menu = () => {
  return (
    <div className="list-none flex flex-col md:flex-row gap-4 p-4">
      <NavLink href="/">
        <HomeIcon className="h-4 w-4" strokeWidth="1" />
      </NavLink>
      <NavLink href="/test-1" includes>
        test 1
      </NavLink>
      <NavLink href="/test-2" includes>
        test 2
      </NavLink>
    </div>
  );
};

export default Menu;
