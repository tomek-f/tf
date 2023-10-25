/* eslint-disable unicorn/prefer-module */
console.log('Hello world!!!');

// @ts-expect-error parcel-hmr
if (module.hot) {
    // @ts-expect-error parcel-hmr
    module.hot.accept(); // eslint-disable-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
}
