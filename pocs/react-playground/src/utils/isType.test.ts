// copilot chat generated
import { describe, expect, it } from 'vitest';

import isType from './isType';

describe('isType', () => {
    it('should return true if the value is an instance of the specified type', () => {
        expect(isType('hello', String)).toBe(true);
        expect(isType(42, Number)).toBe(true);
        expect(isType([], Array)).toBe(true);
        expect(isType({}, Object)).toBe(true);
    });

    it('should return false if the value is not an instance of the specified type', () => {
        expect(isType('hello', Number)).toBe(false);
        expect(isType(42, String)).toBe(false);
        expect(isType([], Object)).toBe(false);
        expect(isType({}, Array)).toBe(false);
    });

    it('should return false if the value is null or undefined', () => {
        expect(isType(null, Object)).toBe(false);
        expect(isType(undefined, Object)).toBe(false);
    });
});
