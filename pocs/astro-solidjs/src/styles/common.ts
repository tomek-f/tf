export const primaryCss = 'text-sky-500';

export const linkDefaultCss = primaryCss;

export const linkActiveCss = 'text-fuchsia-500 cursor-default';

export const linkHoverCss = 'hover:text-sky-300 hover:underline';

export const linkTransitionCss = 'transition-colors duration-300';

// sync with .custom-html a
export const linkCss = `text-base ${linkDefaultCss} ${linkTransitionCss} ${linkHoverCss}`;
