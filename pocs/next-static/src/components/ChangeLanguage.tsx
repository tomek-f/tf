import { useRouter } from 'next/navigation';

import config from '../config';
import intls from '../i18n/intls';

const ChangeLanguage = () => {
  const router = useRouter();
  const onClick = async () => {
    const newLanguage = config.language === 'en-US' ? 'pl-PL' : 'en-US';
    const { default: unused, ...rest } = await import(`../i18n/locales/${newLanguage}.json`);

    console.log({ newLanguage, rest });

    intls.add(newLanguage, rest);
    config.language = newLanguage;
    router.refresh();
  };

  return (
    <button onClick={onClick} type="button">
      Change language
    </button>
  );
};

export default ChangeLanguage;
