'use client';

import type { IntlShape } from 'react-intl';

interface Config {
  intl: IntlShape | null;
  language: string | null;
}

const config: Config = {
  intl: null,
  language: null,
};

export default config;
