export enum Direction {
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
    Up = 'UP',
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

console.log(Direction);
console.log(Direction2, Direction2.Left, Direction2[101]);
console.log(Direction3.Left, Direction3['101']);
