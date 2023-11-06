import { Agbalumo, Nunito_Sans } from 'next/font/google';

export const fontAgbalumo = Agbalumo({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-agbalumo', // used in tailwind.config.ts
    weight: ['400'],
});

export const nunitoSans = Nunito_Sans({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-nunito-sans', // used in tailwind.config.ts
});
