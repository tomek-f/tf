import Link from 'next/link';

import Menu from './Menu';

const Header = () => {
    return (
        <div className="navbar bg-base-300 flex-col rounded-md md:flex-row">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl normal-case" href="/">
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
