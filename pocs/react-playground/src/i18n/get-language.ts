import {
    LANGUAGE_CODE,
    LANGUAGE_CODE_DEFAULT,
    LANGUAGE_CODES_VALUES,
    type LanguageCode,
    type LanguageCodeKeys,
} from 'REACT_PG/constants/language';
import { LOCAL_STORAGE_KEYS } from 'REACT_PG/constants/local-storage';

export function getBrowserLanguage(): string {
    const language = (navigator.languages?.[0] ??
        navigator.language) as LanguageCode;

    // long-lang-codes array includes: (long-lang-code || language) ? long-lang-code : LANGUAGE_CODE_DEFAULT
    return LANGUAGE_CODES_VALUES.includes(
        LANGUAGE_CODE[language as LanguageCodeKeys] || language,
    )
        ? LANGUAGE_CODE[language as LanguageCodeKeys] || language
        : LANGUAGE_CODE_DEFAULT;
}

function getLanguage(): string {
    if (import.meta.env.DEV) {
        const developmentInterfaceLanguage = localStorage.getItem(
            LOCAL_STORAGE_KEYS.devInterfaceLanguage,
        ) as LanguageCodeKeys | null;

        if (
            developmentInterfaceLanguage &&
            LANGUAGE_CODE[developmentInterfaceLanguage]
        ) {
            return LANGUAGE_CODE[developmentInterfaceLanguage];
        }
    }

    return getBrowserLanguage() || LANGUAGE_CODE_DEFAULT;
}

export default getLanguage;
