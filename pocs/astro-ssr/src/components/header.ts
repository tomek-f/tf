import { $QS } from '../utils/dom';

function addEvents(event: Event) {
    console.log('header', event.type);

    const button = $QS('#header-button');
    const menu = $QS('#header-menu');
    const icon1 = $QS('#header-icon-1');
    const icon2 = $QS('#header-icon-2');

    if (!button || !menu || !icon1 || !icon2) {
        return;
    }

    button.addEventListener('click', () => {
        const isHidden = menu.classList.toggle('hidden');

        console.log('click');
        icon1.classList.toggle('hidden', !isHidden);
        icon2.classList.toggle('hidden', isHidden);
    });
}

// window.document.addEventListener('astro:after-swap', addEvents);
// window.addEventListener('DOMContentLoaded', addEvents);
window.document.addEventListener('astro:page-load', addEvents);
