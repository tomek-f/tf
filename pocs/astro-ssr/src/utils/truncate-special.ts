import { substr as runesSubstring } from 'runes';

function truncateSpecial(string_: string, length_: number) {
    let newString = runesSubstring(string_, 0, length_).trim();

    if (newString.length === string_.length) {
        return string_;
    }

    if (newString.slice(-1) === '#') {
        newString = newString.slice(0, -1).trim();
    }

    return newString + '…';
}

export default truncateSpecial;
