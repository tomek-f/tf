/* eslint-disable  unicorn/prevent-abbreviations */
/// <reference types="astro/client" />

interface Window {
    htmx: {
        process: (element: HTMLElement) => void;
    };
}
