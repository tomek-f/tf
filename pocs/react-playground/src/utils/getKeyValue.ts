// get known value of known object
const getKeyValue = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

export default getKeyValue;
