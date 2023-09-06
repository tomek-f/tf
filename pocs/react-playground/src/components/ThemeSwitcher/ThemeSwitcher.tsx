import { useState } from 'react';
import { clsx } from 'clsx';

import { LinkClassNames } from 'REACT_PG/constants/linkClassNames';

type Theme = 'dark' | 'light' | 'auto';

// THEMES >
const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<Theme>(
        (localStorage.getItem('theme') as Theme) || 'auto',
    );

    if (import.meta.env.DEV) {
        // double log from StrictMode
        // eslint-disable-next-line no-console
        console.log('Root', theme);
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

    return (
        <div className="flex flex-wrap items-center gap-2 pb-4">
            theme:
            <button
                className={clsx({
                    [LinkClassNames.default]: !isThemeDark,
                    [LinkClassNames.active]: isThemeDark,
                })}
                onClick={onClickThemeDarkMode}
                type="button"
            >
                dark
            </button>
            <button
                className={clsx({
                    [LinkClassNames.default]: !isThemeLight,
                    [LinkClassNames.active]: isThemeLight,
                })}
                onClick={onClickThemeLightMode}
                type="button"
            >
                light
            </button>
            <button
                className={clsx({
                    [LinkClassNames.default]: !isThemeAuto,
                    [LinkClassNames.active]: isThemeAuto,
                })}
                onClick={onClickThemeSystem}
                type="button"
            >
                auto
            </button>
        </div>
    );
};
// < THEMES

export default ThemeSwitcher;
