import { HomeIcon } from 'lucide-react';

import { NavLink } from './NavLink';

export const Menu = () => {
    return (
        <div className="py-4">
            <div className="flex list-none flex-col gap-4 md:flex-row">
                <NavLink href="/">
                    <HomeIcon className="h-4 w-4" strokeWidth="1" />
                </NavLink>
                <NavLink href="/test-1">test-1</NavLink>
                <NavLink href="/test-2">test-2</NavLink>
                <NavLink href="/posts">posts</NavLink>
                <NavLink href="/posts-static">posts static</NavLink>
                <NavLink href="/graphql-client">graphql-client</NavLink>
                <NavLink href="/graphql-server">graphql-server</NavLink>
            </div>
            <div className="flex list-none flex-col gap-4 md:flex-row">
                <NavLink href="/zod-form">zod-form</NavLink>
                <NavLink href="/zod-server">zod-server</NavLink>
                <NavLink href="/form">form</NavLink>
                <NavLink href="/form-2">form 2</NavLink>
                <NavLink href="/turso">turso</NavLink>
                <NavLink href="/turso-headers">turso headers</NavLink>
                <NavLink href="/turso-blogs">turso blogs</NavLink>
            </div>
        </div>
    );
};
