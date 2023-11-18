import Link from 'next/link';
import { fontAgbalumo } from 'src/app/fonts';

import { Menu } from './Menu';

// .font-agbalumo is a custom font in tailwind.config.ts
export const Header = () => {
    return (
        <div className="navbar bg-base-300 flex-col rounded-md md:flex-row">
            <div className="flex-1">
                <Link
                    className={`font-agbalumo ${fontAgbalumo.variable} bg-gradient-to-b from-emerald-800 to-emerald-500 bg-clip-text text-4xl text-transparent dark:from-pink-500 dark:to-pink-200`}
                    href="/"
                >
                    next playground
                </Link>
            </div>
            <div className="flex-none">
                <Menu />
            </div>
        </div>
    );
};
