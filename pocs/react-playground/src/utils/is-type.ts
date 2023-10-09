// TODO ? fix this
// eslint-disable-next-line unicorn/prefer-set-has
const nullish = [null, undefined];

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const isType = (
    value: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    ...types: unknown[]
): boolean => !nullish.includes(value) && types.includes(value.constructor);
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */

export default isType;
