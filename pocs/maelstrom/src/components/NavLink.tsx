'use client';

import { usePathname } from 'next/navigation';

import RouterLink from './RouterLink';

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  includes?: boolean;
}

const NavLink = ({ children, className, href, includes = false }: Props) => {
  const pathname = usePathname();
  const active = includes ? pathname?.includes(href) : pathname === href;

  return (
    <RouterLink active={active} className={className} href={href}>
      {children}
    </RouterLink>
  );
};

export default NavLink;
