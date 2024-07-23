/// <reference types="astro/client" />

interface Window {
    htmx: {
        process: (element: HTMLElement) => void;
    };
}
