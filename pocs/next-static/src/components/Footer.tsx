import { BoxIcon } from 'lucide-react';

import ThemeSwitcher from './ThemeSwitcher';

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-base-300 text-base-content rounded-md">
      <div className="items-center grid-flow-col">
        <BoxIcon className="h-10 w-10" strokeWidth="1" />
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <ThemeSwitcher />
      </div>
    </footer>
  );
};

export default Footer;
