// get known value of known object
const getKeyValue = <T, K extends keyof T>(object: T, key: K): T[K] =>
    object[key];

export default getKeyValue;
