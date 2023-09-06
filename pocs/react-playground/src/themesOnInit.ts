// THEMES >
if (
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.add('light');
}
// < THEMES

export {};
