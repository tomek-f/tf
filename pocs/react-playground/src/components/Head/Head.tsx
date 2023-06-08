import { Helmet } from 'react-helmet-async';

interface Props {
  title?: string;
}

const Head = ({ title }: Props) => (
  <Helmet>
    <title>{[title, import.meta.env.VITE_APP_TITLE].filter(Boolean).join(' | ')}</title>
  </Helmet>
);

export default Head;
