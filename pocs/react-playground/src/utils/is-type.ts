// TODO ? fix this
const nullish = [null, undefined];

const isType = (
    value: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    ...types: unknown[]
): boolean => !nullish.includes(value) && types.includes(value.constructor);

export default isType;
