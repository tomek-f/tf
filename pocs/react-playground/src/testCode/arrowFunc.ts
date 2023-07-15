const sum = (x: number, y: number): number => x + y;

// interface Sum2 {
//   (x: number, y: number): number;
// }
type Sum2 = (x: number, y: number) => number;

export const sum2: Sum2 = (x, y) => x + y;

type Sum3 = (x: number, y: number) => number;

export const sum3: Sum3 = (x, y) => x + y;

export default sum;
