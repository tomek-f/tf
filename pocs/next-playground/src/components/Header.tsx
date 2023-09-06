import Link from 'next/link';

import Menu from './Menu';

const Header = () => {
    return (
        <div className="navbar flex-col md:flex-row bg-base-300 rounded-md">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" href="/">
                    next-playground
                </Link>
            </div>
            <div className="flex-none">
                <Menu />
            </div>
        </div>
    );
};

export default Header;
