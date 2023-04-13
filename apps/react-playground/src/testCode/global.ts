// declare let foo: number; // for accessing global without window

declare global {
  interface Window {
    foo: number;
  }
}

window.foo = 1;

// -> 1
// console.log(foo); // eslint-disable-line no-console
// -> 1
// console.log(window.foo); // eslint-disable-line no-console

// hack (eslint?, TS?)
export {};
