import { useEffect, useState } from 'react';

import { linkClasses } from '../utils/linkClasses';

type Theme = 'dark' | 'light' | 'auto';

// THEMES >
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>('auto');

  if (process.env.NODE_ENV === 'development') {
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

  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
    setTheme((localStorage.getItem('theme') as Theme) || 'auto');
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
// < THEMES

export default ThemeSwitcher;
