import type { IntlShape } from 'react-intl';

import getLanguage from 'REACT_PG/i18n/getLanguage';

interface Config {
    intl: null | IntlShape;
    language: string;
}

const config: Config = {
    intl: null,
    language: getLanguage(),
};

export default config;
