// copilot chat generated
import { describe, expect, it } from 'vitest';

import toJSON from './toJSON';

describe('toJSON', () => {
    it('should return a JSON string with no indentation when pretty is false', () => {
        const value = { foo: 'bar' };
        const result = toJSON(value, false);

        expect(result).toBe('{"foo":"bar"}');
    });

    it('should return a JSON string with indentation when pretty is true', () => {
        const value = { foo: 'bar' };
        const result = toJSON(value, true);

        expect(result).toBe('{\n  "foo": "bar"\n}');
    });

    it('should handle null and undefined values', () => {
        const result1 = toJSON(null, false);

        expect(result1).toBe('null');

        const result2 = toJSON(undefined, true);

        expect(result2).toBe(undefined);
    });
});
