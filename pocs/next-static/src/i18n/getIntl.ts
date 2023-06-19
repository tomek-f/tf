import type { IntlShape } from 'react-intl';

import intls from './intls';

const getIntl = (locale: string): IntlShape => intls.get(locale);

export default getIntl;
