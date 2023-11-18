'use client';

import { usePathname } from 'next/navigation';

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
        <RouterLink active={active} className={className} href={href}>
            {children}
        </RouterLink>
    );
};
