// export const $id = <T extends HTMLElement = HTMLElement>(id: string) =>
//     // eslint-disable-next-line unicorn/prefer-query-selector
//     document.getElementById(id) as T | null;

export const $QS = <T extends HTMLElement = HTMLElement>(selector: string) =>
    document.querySelector<T>(selector);

export const $QSA = <T extends HTMLElement = HTMLElement>(selector: string) =>
    document.querySelectorAll<T>(selector);
