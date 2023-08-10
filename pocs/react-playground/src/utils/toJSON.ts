const toJSON = (
  value: unknown,
  // destructuring with rename, default value and type
  // { pretty: renamed = false }: { pretty: boolean },
  pretty = false,
): string => {
  // console.log(value, pretty); // eslint-disable-line no-console

  return JSON.stringify(value, null, pretty ? 2 : 0);
};

export default toJSON;
