import { Nunito_Sans, Roboto_Mono } from 'next/font/google';

export const robotoMono = Roboto_Mono({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-roboto-mono', // used in tailwind.config.ts
    weight: ['400'],
});

export const nunitoSans = Nunito_Sans({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-nunito-sans', // used in tailwind.config.ts
});
