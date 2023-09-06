import { useIntl } from 'react-intl';

export const useFormatMessageQuick = (id: string) => useIntl().formatMessage({ id });

const useFormatMessage = () => {
    const { formatMessage } = useIntl();

    return (id: string) => formatMessage({ id });
};

export default useFormatMessage;
