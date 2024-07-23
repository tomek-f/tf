import { Nunito_Sans, Roboto_Mono } from 'next/font/google';

export const robotoMono = Roboto_Mono({
    adjustFontFallback: false,
    display: 'swap',
    subsets: ['latin'],
    weight: ['400'],
});

export const nunitoSans = Nunito_Sans({
    adjustFontFallback: false,
    display: 'swap',
    subsets: ['latin'],
});
