import { useRouter } from 'next/router';

import RouterLink from './RouterLink';

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  includes?: boolean;
}

const NavLink = ({ children, className, href, includes = false }: Props) => {
  const router = useRouter();
  const active = includes ? router.asPath.includes(href) : router.asPath === href;

  return (
    <RouterLink active={active} className={className} href={href}>
      {children}
    </RouterLink>
  );
};

export default NavLink;
