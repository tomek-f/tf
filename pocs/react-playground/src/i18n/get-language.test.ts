import {
    afterAll,
    beforeAll,
    beforeEach,
    describe,
    expect,
    test,
    vi,
    type SpyInstance,
} from 'vitest';

import {
    LANGUAGE_CODE,
    LANGUAGE_CODE_DEFAULT,
} from 'REACT_PG/constants/language';
import { getBrowserLanguage } from './get-language';

const getLanguageTestHelper = (value: string | null): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.navigator.languages[0] = value;
};

let languageGetter: SpyInstance;

const navigatorLanguage = navigator.language;
const navigatorLanguages = [...navigator.languages];
const navigatorLanguages0 = navigatorLanguages[0];

beforeAll(() => {
    languageGetter = vi.spyOn(window.navigator, 'language', 'get');
    Object.defineProperty(window.navigator, 'languages', {
        value: navigatorLanguages,
        configurable: true,
    });
    expect(window.navigator.languages[0]).toBe(navigatorLanguages0);
});

beforeEach(() => {
    languageGetter.mockReturnValue(navigatorLanguage);
    getLanguageTestHelper(navigatorLanguages0);
    expect(window.navigator.languages[0]).toBe(navigatorLanguages0);
    expect(window.navigator.language).toBe(navigatorLanguage);
});

afterAll(() => {
    vi.restoreAllMocks();
    Object.defineProperty(window.navigator, 'languages', {
        value: navigatorLanguages,
    });
});

describe('getBrowserLanguage', () => {
    test('navigator.languages[0]', () => {
        getLanguageTestHelper(LANGUAGE_CODE.pl);
        expect(window.navigator.languages[0]).toBe(LANGUAGE_CODE.pl);
        expect(window.navigator.language).toBe(navigatorLanguage);
        expect(getBrowserLanguage()).toBe(LANGUAGE_CODE.pl);
    });

    test('navigator.language', () => {
        getLanguageTestHelper(null);
        languageGetter.mockReturnValue(LANGUAGE_CODE.pl);
        expect(window.navigator.languages[0]).toBe(null);
        expect(window.navigator.language).toBe(LANGUAGE_CODE.pl);
        expect(getBrowserLanguage()).toBe(LANGUAGE_CODE.pl);
    });

    test('default', () => {
        getLanguageTestHelper(null);
        languageGetter.mockReturnValue(null);
        expect(window.navigator.languages[0]).toBe(null);
        expect(window.navigator.language).toBe(null);
        expect(getBrowserLanguage()).toBe(LANGUAGE_CODE_DEFAULT);
    });

    test('various', () => {
        getLanguageTestHelper('pl');
        expect(getBrowserLanguage()).toBe(LANGUAGE_CODE.pl);
        getLanguageTestHelper('pl-PL');
        expect(getBrowserLanguage()).toBe(LANGUAGE_CODE.pl);
        getLanguageTestHelper('yolo');
        expect(getBrowserLanguage()).toBe(LANGUAGE_CODE_DEFAULT);
        getLanguageTestHelper('en');
        expect(getBrowserLanguage()).toBe(LANGUAGE_CODE.en);
        getLanguageTestHelper('en-US');
        expect(getBrowserLanguage()).toBe(LANGUAGE_CODE.en);
    });
});
