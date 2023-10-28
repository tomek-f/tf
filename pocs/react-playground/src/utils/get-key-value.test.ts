// copilot chat generated
import { describe, expect, it } from 'vitest';

import getKeyValue from './get-key-value';

describe('getKeyValue', () => {
    it('should return the value of the specified key', () => {
        const object = { baz: 42, foo: 'bar' };

        expect(getKeyValue(object, 'foo')).toBe('bar');
        expect(getKeyValue(object, 'baz')).toBe(42);
    });

    // it('should handle undefined and null objects', () => {
    //   expect(getKeyValue(undefined, 'foo')).toBeUndefined();
    //   expect(getKeyValue(null, 'foo')).toBeNull();
    // });

    it('should handle non-existent keys', () => {
        const object = { foo: 'bar' };

        // @ts-expect-error baz does not exist on obj
        expect(getKeyValue(object, 'baz')).toBeUndefined();
    });
});
