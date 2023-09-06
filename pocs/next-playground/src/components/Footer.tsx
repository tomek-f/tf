import { BoxIcon } from 'lucide-react';

import ThemeSwitcher from './ThemeSwitcher';

const Footer = () => {
    return (
        <footer className="footer items-center py-4 bg-base-300 text-base-content rounded-md">
            <div>footer.info</div>
            <div className="items-center grid-flow-col">
                <BoxIcon className="h-10 w-10" strokeWidth="1" />
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <ThemeSwitcher />
            </div>
        </footer>
    );
};

export default Footer;
