const calculateRatio = (a = 0, b = 0, c = 0): number => (b * c) / a;
// const $id = <T extends HTMLElement = HTMLElement>(id: string) =>
//     document.getElementById(id) as T | null;
const $ = <T extends HTMLElement = HTMLElement>(selector: string) =>
    document.querySelector<T>(selector);
// const $$ = <T extends HTMLElement = HTMLElement>(selector: string) =>
//     document.querySelectorAll<T>(selector);

const $a = $<HTMLInputElement>('#a');
const $b = $<HTMLInputElement>('#b');
const $c = $<HTMLInputElement>('#c');
const $x = $<HTMLInputElement>('#x');

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

const onInput = (event: Event): void => {
    if (!(event.target instanceof HTMLInputElement)) {
        return;
    }

    state[event.target.name as StateKeys] = Number(event.target.value);
    state.x = calculateRatio(state.a, state.b, state.c);
    $x.value = state.x.toString();
};

$a.addEventListener('input', onInput);
$b.addEventListener('input', onInput);
$c.addEventListener('input', onInput);
