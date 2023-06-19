'use client';

import type { IntlShape } from 'react-intl';

interface Config {
  intl: null | IntlShape;
  language: string;
}

const config: Config = {
  intl: null,
  language: 'en-US',
};

export default config;
