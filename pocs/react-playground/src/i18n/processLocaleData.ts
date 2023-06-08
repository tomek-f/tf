// todo use it?
const processLocaleData = (
  languages: Array<string>,
  data: Array<{ default: Record<string, string> }>,
): Record<string, Record<string, string>> =>
  Object.assign(
    {},
    ...languages.map((language, idx) => ({
      [language]: data[idx].default,
    })),
  );

export default processLocaleData;
