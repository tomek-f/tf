export enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

export enum Direction2 {
  Up = 98,
  Down,
  Left,
  Right,
}

// not supported in CRA (const enums)
const enum Direction3 {
  Up = 98,
  Down,
  Left,
  Right,
}

/* eslint-disable no-console */
console.log(Direction);
console.log(Direction2, Direction2.Left, Direction2[101]);
console.log(Direction3.Left, Direction3['101']);
/* eslint-enable no-console */
