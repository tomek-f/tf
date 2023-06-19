import { useRouter } from 'next/navigation';

import config from '../config';
import intls from '../i18n/intls';

const ChangeLanguage = () => {
  const router = useRouter();
  const onClick = async () => {
    const { default: unused, ...rest } = await import('../i18n/locales/pl-PL.json');

    intls.add('pl-PL', rest);
    config.language = 'pl-PL';
    router.refresh();
  };

  return (
    <button onClick={onClick} type="button">
      Change language
    </button>
  );
};

export default ChangeLanguage;
