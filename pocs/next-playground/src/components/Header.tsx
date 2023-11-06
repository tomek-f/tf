import Link from 'next/link';
import { fontAgbalumo } from 'src/app/fonts';

import Menu from './Menu';

// .font-agbalumo is a custom font in tailwind.config.ts
const Header = () => {
    return (
        <div className="navbar bg-base-300 flex-col rounded-md md:flex-row">
            <div className="flex-1">
                <Link
                    className={`font-agbalumo ${fontAgbalumo.variable} btn btn-ghost text-3xl normal-case`}
                    href="/"
                >
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
