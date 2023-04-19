import { LANGUAGE_CODE_DEFAULT } from 'REACT_PG/constants/language';
import { createIntl, createIntlCache, type IntlShape, type MessageDescriptor } from 'react-intl';

const intlCache = createIntlCache();

// react-intl's methods are very sensitive for a lack of id, so we are making sure id is provided
export const augmentedIntl = (locale: string, messages: Record<string, string>): IntlShape => {
  const intl = createIntl(
    {
      locale,
      messages,
    },
    intlCache,
  );

  return new Proxy(intl, {
    get(target, key: string) {
      if (key === 'formatMessage') {
        return ({ id, ...restMessage }: MessageDescriptor, values: Record<string, string>) => {
          let newId;

          if (!id) {
            newId = 'ERR_INTL_NO_ID';

            const error = new Error(`intl get: formatMessage ${locale} ${newId}`);

            if (import.meta.env.DEV) {
              console.error(error); // eslint-disable-line no-console
            }
          }

          return target.formatMessage({ id: newId || id, ...restMessage }, values);
        };
      }
      // add additional methods if needed (used in intl form intls or react-intl's Components)

      return Reflect.get(target, key);
    },
  });
};

const data: { [x: string]: IntlShape } = {};

const intls = {
  add(locale: string, messages: Record<string, string>): void {
    data[locale] = augmentedIntl(locale, messages);
  },
  get(locale: string): IntlShape {
    return data[locale];
  },
};

// dirty intl for jest/vitest
if (import.meta.env.MODE === 'test') {
  const messages = new Proxy(
    {},
    {
      get(target, key) {
        return key;
      },
      // https://github.com/formatjs/formatjs/commit/269adc4a81af5d0cfe84ab02bd5242b4335e4a00
      getOwnPropertyDescriptor(target, key) {
        return {
          configurable: true,
          enumerable: true,
          value: key,
        };
      },
    },
  );

  intls.add(LANGUAGE_CODE_DEFAULT, messages);
}

export default intls;
