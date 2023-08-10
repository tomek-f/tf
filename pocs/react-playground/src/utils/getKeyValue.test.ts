// copilot chat generated
import { describe, expect, it } from 'vitest';

import getKeyValue from './getKeyValue';

describe('getKeyValue', () => {
  it('should return the value of the specified key', () => {
    const obj = { foo: 'bar', baz: 42 };

    expect(getKeyValue(obj, 'foo')).toBe('bar');
    expect(getKeyValue(obj, 'baz')).toBe(42);
  });

  // it('should handle undefined and null objects', () => {
  //   expect(getKeyValue(undefined, 'foo')).toBeUndefined();
  //   expect(getKeyValue(null, 'foo')).toBeNull();
  // });

  it('should handle non-existent keys', () => {
    const obj = { foo: 'bar' };

    // @ts-expect-error baz does not exist on obj
    expect(getKeyValue(obj, 'baz')).toBeUndefined();
  });
});
