import { Helmet } from 'react-helmet-async';

interface HtmlHeadProps {
  title?: string;
}

export const HtmlHead = ({ title }: HtmlHeadProps) => {
  return (
    <Helmet>
      <title>{[title, 'dev-recriutment'].filter(Boolean).join(' | ')}</title>
    </Helmet>
  );
};
