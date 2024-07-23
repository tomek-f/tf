'use client';

import { usePathname } from 'next/navigation';

import { linkClasses } from '../utils/link-classes';
import { RouterLink } from './RouterLink';

interface Props {
    children: React.ReactNode;
    className?: string;
    href: string;
}

export const NavLink = ({ children, className, href }: Props) => {
    const pathname = usePathname();
    const active = pathname === href || pathname?.startsWith(`${href}/`);

    return (
        <RouterLink
            active={active}
            className={linkClasses({
                active,
                className: `${className} text-lg md:text-xl`,
            })}
            href={href}
        >
            {children}
        </RouterLink>
    );
};
