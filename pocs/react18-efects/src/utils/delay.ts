const delay = <T = undefined>(ms: number, data?: T): Promise<T> =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(() => resolve(data as T), ms));

export default delay;
