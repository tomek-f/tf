import config from 'REACT_PG/config';

const formatMessage = (id: string): string | React.ReactNode => config.intl?.formatMessage({ id });

export default formatMessage;
