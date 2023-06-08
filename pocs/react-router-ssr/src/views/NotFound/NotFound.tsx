import { HtmlContent } from '../../components/HtmlContent/HtmlContent';
import { HtmlHead } from '../../components/HtmlHead/HtmlHead';

export const NotFound = () => {
  return (
    <HtmlContent>
      <HtmlHead title="404" />

      <h2>404</h2>
      <p>notFound</p>
    </HtmlContent>
  );
};
