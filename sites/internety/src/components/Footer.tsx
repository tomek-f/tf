import { BoxIcon } from 'lucide-react';

import { ThemeSwitcher } from './ThemeSwitcher';

export const Footer = () => {
    return (
        <footer className="footer bg-base-300 text-base-content items-center rounded-md py-4">
            <div>footer.info</div>
            <div className="grid-flow-col items-center">
                <BoxIcon className="h-10 w-10" strokeWidth="1" />
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <ThemeSwitcher />
            </div>
        </footer>
    );
};
