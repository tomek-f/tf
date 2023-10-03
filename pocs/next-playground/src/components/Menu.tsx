import { HomeIcon } from 'lucide-react';

import NavLink from './NavLink';

const Menu = () => {
    return (
        <div className="flex list-none flex-col gap-4 py-4 md:flex-row">
            <NavLink href="/">
                <HomeIcon className="h-4 w-4" strokeWidth="1" />
            </NavLink>
            <NavLink href="/test-1">test-1</NavLink>
            <NavLink href="/test-2">test-2</NavLink>
            <NavLink href="/posts">posts</NavLink>
            <NavLink href="/posts-static">posts static</NavLink>
            <NavLink href="/graphql-client">graphql-client</NavLink>
            <NavLink href="/graphql-server">graphql-server</NavLink>
            <NavLink href="/zod-form">zod-form</NavLink>
            <NavLink href="/zod-server">zod-server</NavLink>
        </div>
    );
};

export default Menu;
