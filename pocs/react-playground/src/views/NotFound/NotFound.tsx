import Head from 'REACT_PG/components/Head/Head';
import { useFormatMessageQuick } from 'REACT_PG/hooks/useFormatMessage';

const NotFound = () => {
    return (
        <>
            <Head title="404" />
            <p>404</p>
            <p>{useFormatMessageQuick('notFound.message')}</p>
        </>
    );
};

export default NotFound;
