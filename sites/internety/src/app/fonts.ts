import { Nunito_Sans } from 'next/font/google';

export const nunitoSans = Nunito_Sans({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-nunito-sans', // used in tailwind.config.ts
});
