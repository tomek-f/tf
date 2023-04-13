const nullish = [null, undefined];

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const isType = (
  val: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  ...types: unknown[]
): boolean => !nullish.includes(val) && types.includes(val.constructor);
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */

export default isType;
