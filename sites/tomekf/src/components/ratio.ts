import { $QS } from '../utils/dom';

const calculateRatio = (a = 0, b = 0, c = 0): number => (b * c) / a;

function addEvents() {
    const $a = $QS<HTMLInputElement>('#a');
    const $b = $QS<HTMLInputElement>('#b');
    const $c = $QS<HTMLInputElement>('#c');
    const $x = $QS<HTMLInputElement>('#x');

    if (!$a || !$b || !$c || !$x) {
        throw new Error('Elements not found!');
    }

    const state = {
        a: Number($a.value),
        b: Number($b.value),
        c: Number($c.value),
        x: Number($x.value),
    };

    type StateKeys = keyof typeof state;

    const onInput = (eventInput: Event): void => {
        if (!(eventInput.target instanceof HTMLInputElement)) {
            return;
        }

        state[eventInput.target.name as StateKeys] = Number(
            eventInput.target.value,
        );
        state.x = calculateRatio(state.a, state.b, state.c);
        $x.value = state.x.toString();
    };

    $a.addEventListener('input', onInput);
    $b.addEventListener('input', onInput);
    $c.addEventListener('input', onInput);
}

// window.addEventListener('DOMContentLoaded', addEvents);

// TODO if it's start running it runs on every page swap
window.document.addEventListener('astro:page-load', () => {
    const $ratio = $QS<HTMLInputElement>('#ratio');

    console.log('ratio.ts', { $ratio });

    if ($ratio) {
        addEvents();
    }
});

// window.document.addEventListener('astro:before-preparation', (event: Event) => {
//     console.log('ratio', event.type);
// });
// window.document.addEventListener('astro:after-preparation', (event: Event) => {
//     console.log('ratio', event.type);
// });
// window.document.addEventListener('astro:before-swap', (event: Event) => {
//     console.log('ratio', event.type);
// });
// window.document.addEventListener('astro:after-swap', (event: Event) => {
//     console.log('ratio', event.type);
// });
// window.document.addEventListener('astro:page-load', (event: Event) => {
//     console.log('ratio', event.type);
// });
