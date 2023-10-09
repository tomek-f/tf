import Head from 'REACT_PG/components/Head/Head';
import useFormatMessage from 'REACT_PG/hooks/ use-format-message';

const Contact = () => (
    <>
        <Head title={useFormatMessage()('section.contact')} />
        <p>nip: 8111641723</p>
        <p>regon: 369009950</p>
        <p>gmail: tomekfijol</p>
    </>
);

export default Contact;
