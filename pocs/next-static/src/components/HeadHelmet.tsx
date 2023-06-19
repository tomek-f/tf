import { Helmet } from 'react-helmet-async';

interface Props {
  description?: string;
  title?: string;
}

const HeadHelmet = ({ description = 'next-static desc.', title }: Props) => (
  <Helmet>
    <title>{[title, 'next-static'].filter(Boolean).join(' | ')}</title>
    <meta content={description} name="description" />
  </Helmet>
);

export default HeadHelmet;
