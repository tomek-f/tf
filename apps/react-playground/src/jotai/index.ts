import { atom } from 'jotai';

const textAtom = atom('hello');

const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

export { textAtom, uppercaseAtom };
