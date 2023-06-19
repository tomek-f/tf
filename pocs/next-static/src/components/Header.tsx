import Link from 'next/link';

import ChangeLanguage from './ChangeLanguage';
import Menu from './Menu';

const Header = () => {
  return (
    <div className="navbar flex-col md:flex-row bg-base-300 rounded-md">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          next-static
        </Link>
      </div>
      <div className="flex-none">
        <Menu />
      </div>
      <div className="flex-none">
        <ChangeLanguage />
      </div>
    </div>
  );
};

export default Header;
