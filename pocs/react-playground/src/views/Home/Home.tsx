import { Link } from 'react-router-dom';

import { LinkClassNames } from 'REACT_PG/constants/link-class-names';
import useFormatMessage from 'REACT_PG/hooks/ use-format-message';

const Home = () => {
    const formatMessage = useFormatMessage();

    return (
        <>
            <p>{formatMessage('home.links')}</p>
            <ul className="ml-2 mt-2 list-inside list-disc">
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
