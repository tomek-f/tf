'use client';

import {
  LANGUAGE_CODE,
  LANGUAGE_CODE_DEFAULT,
  LANGUAGE_CODES_VALUES,
  type LanguageCode,
  type LanguageCodeKeys,
} from '../constants/language';

export function getBrowserLanguage(): string {
  const language = (navigator.languages?.[0] ?? navigator.language) as LanguageCode;

  // long-lang-codes array includes: (long-lang-code || language) ? long-lang-code : LANGUAGE_CODE_DEFAULT
  return LANGUAGE_CODES_VALUES.includes(LANGUAGE_CODE[language as LanguageCodeKeys] || language)
    ? LANGUAGE_CODE[language as LanguageCodeKeys] || language
    : LANGUAGE_CODE_DEFAULT;
}

function getLanguage(): string {
  console.log(
    getBrowserLanguage(),
    LANGUAGE_CODE_DEFAULT,
    getBrowserLanguage() || LANGUAGE_CODE_DEFAULT,
  );

  return getBrowserLanguage() || LANGUAGE_CODE_DEFAULT;
}

export default getLanguage;
