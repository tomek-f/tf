import { substr as runesSubstring } from 'runes';

function truncateSpecial(str: string, len: number) {
    let newStr = runesSubstring(str, 0, len).trim();

    if (newStr.length === str.length) {
        return str;
    }

    if (newStr.slice(-1) === '#') {
        newStr = newStr.slice(0, -1).trim();
    }

    return newStr + '…';
}

export default truncateSpecial;
