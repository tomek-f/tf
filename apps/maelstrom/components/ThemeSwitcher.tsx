import { useEffect, useState } from 'react';
import { ArrowUpDown, Moon, Sun } from 'lucide-react';

import ButtonLink from './ButtonLink';

enum Theme {
  dark = 'dark',
  light = 'light',
  auto = 'auto',
}

type Themes = `${Theme}`;

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Themes>(Theme.auto);

  // if (process.env.NODE_ENV === 'development') {
  //   console.log('Root', theme);
  // }

  const isThemeDark = theme === Theme.dark;
  const isThemeLight = theme === Theme.light;
  const isThemeAuto = theme === Theme.auto;
  const onClickThemeDarkMode = () => {
    document.documentElement.dataset.theme = Theme.dark;
    localStorage.setItem('theme', Theme.dark);
    setTheme(Theme.dark);
  };

  const onClickThemeLightMode = () => {
    document.documentElement.dataset.theme = Theme.light;
    localStorage.setItem('theme', Theme.light);
    setTheme(Theme.light);
  };

  const onClickThemeSystem = () => {
    document.documentElement.classList.remove(Theme.dark, Theme.light);
    localStorage.removeItem('theme');
    if (
      !localStorage.getItem('theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.dataset.theme = Theme.dark;
    } else {
      document.documentElement.dataset.theme = Theme.light;
    }
    setTheme(Theme.auto);
  };

  useEffect(() => {
    if (
      localStorage.getItem('theme') === Theme.dark ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.dataset.theme = Theme.dark;
    } else {
      document.documentElement.dataset.theme = Theme.light;
    }
    setTheme((localStorage.getItem('theme') as Theme) || Theme.auto);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-4">
      theme:
      <ButtonLink active={isThemeDark} onClick={onClickThemeDarkMode}>
        <Moon className="h-4 w-4 text-info" strokeWidth="1" />
        dark
      </ButtonLink>
      <ButtonLink active={isThemeLight} onClick={onClickThemeLightMode}>
        <Sun className="h-4 w-4 text-warning" strokeWidth="1" />
        light
      </ButtonLink>
      <ButtonLink active={isThemeAuto} onClick={onClickThemeSystem}>
        <ArrowUpDown className="h-4 w-4 text-base-content" strokeWidth="1" />
        auto
      </ButtonLink>
    </div>
  );
};

export default ThemeSwitcher;
