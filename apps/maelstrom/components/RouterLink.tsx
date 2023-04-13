import Link, { type LinkProps } from 'next/link';

// import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { linkClasses } from '../utils/linkClasses';

interface Props extends LinkProps {
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const RouterLink = ({ children, className, href, active = false, ...rest }: Props) => {
  if (!href || !children) {
    return null;
  }

  return (
    <Link className={linkClasses({ active, className })} href={href} {...rest}>
      {children}
    </Link>
  );
};

export default RouterLink;
