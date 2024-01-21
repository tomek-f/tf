import { $QS } from '../utils/dom';

function addEvents() {
    console.log('header.ts', 'addEvents');

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

// it runs on every page swap
window.document.addEventListener('astro:page-load', addEvents);
