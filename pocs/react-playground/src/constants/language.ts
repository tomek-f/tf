export enum LANGUAGE_CODE {
  en = 'en-US',
  pl = 'pl-PL',
}

export const LANGUAGE_CODES_VALUES = Object.values(LANGUAGE_CODE);

export const LANGUAGE_CODES_KEYS = Object.keys(LANGUAGE_CODE);

export type LanguageCodeKeys = keyof typeof LANGUAGE_CODE;

export type LanguageCodeValues = `${LANGUAGE_CODE}`;

export type LanguageCode = LanguageCodeKeys | LanguageCodeValues;

export const LANGUAGE_CODE_DEFAULT = LANGUAGE_CODE.en;
