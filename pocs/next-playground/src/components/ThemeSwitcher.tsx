'use client';

import { useEffect, useState } from 'react';

import { linkClasses } from '../utils/link-classes';

type Theme = 'dark' | 'light' | 'auto';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<Theme>('auto');

    if (process.env.NODE_ENV === 'development') {
        // double log from StrictMode
        // console.log('Root', theme);
    }

    const isThemeDark = theme === 'dark';
    const isThemeLight = theme === 'light';
    const isThemeAuto = theme === 'auto';

    const onClickThemeDarkMode = () => {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
    };

    const onClickThemeLightMode = () => {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setTheme('light');
    };

    const onClickThemeSystem = () => {
        document.documentElement.classList.remove('dark', 'light');
        localStorage.removeItem('theme');
        if (
            !localStorage.getItem('theme') &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.add('light');
        }
        setTheme('auto');
    };

    useEffect(() => {
        const fromLS = localStorage.getItem('theme') as Theme;

        if (
            fromLS === 'dark' ||
            (!fromLS &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.add('light');
        }
        setTheme(fromLS || 'auto');
    }, []);

    return (
        <div className="flex flex-wrap items-center gap-2 pb-4">
            theme:
            <button
                className={linkClasses({ active: isThemeDark })}
                onClick={onClickThemeDarkMode}
                type="button"
            >
                dark
            </button>
            <button
                className={linkClasses({ active: isThemeLight })}
                onClick={onClickThemeLightMode}
                type="button"
            >
                light
            </button>
            <button
                className={linkClasses({ active: isThemeAuto })}
                onClick={onClickThemeSystem}
                type="button"
            >
                auto
            </button>
        </div>
    );
};

export default ThemeSwitcher;
