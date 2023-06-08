import { Link } from 'react-router-dom';

import { LinkClassNames } from 'REACT_PG/constants/linkClassNames';
import useFormatMessage from 'REACT_PG/hooks/useFormatMessage';

const Home = () => {
  const formatMessage = useFormatMessage();

  return (
    <>
      <p>{formatMessage('home.links')}</p>
      <ul className="list-disc list-inside ml-2 mt-2">
        <li>
          <Link
            className={LinkClassNames.default}
            rel="noopener noreferrer"
            target="_blank"
            to="https://www.linkedin.com/in/tomasz-fijo%C5%82/"
          >
            {formatMessage('home.link.linkedIn')}
          </Link>
        </li>
        <li>
          <Link
            className={LinkClassNames.default}
            rel="noopener noreferrer"
            target="_blank"
            to="https://www.npmjs.com/~tomekf"
          >
            {formatMessage('home.link.npm')}
          </Link>
        </li>
        <li>
          <Link
            className={LinkClassNames.default}
            rel="noopener noreferrer"
            target="_blank"
            to="https://github.com/tomek-f"
          >
            {formatMessage('home.link.github')}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
