import Link from 'next/link';
import { /* HomeIcon, */ MenuIcon, XIcon } from 'lucide-react';

import { NavLink } from './NavLink';

// .font-roboto-mono is a custom font in tailwind.config.ts
export const Header = () => {
    return (
        <header className="z-50 flex w-full flex-wrap sm:flex-nowrap sm:justify-start">
            <nav className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center justify-between">
                    <Link
                        className={`focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-slate-800 dark:from-pink-500 dark:to-pink-200`}
                        href="/"
                    >
                        <svg
                            className={`h-auto w-20 fill-lime-500 transition-colors duration-300 hover:fill-lime-300 sm:w-32`}
                            viewBox="0 0 220 75"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5.7 0v35H0V0h5.7Zm30 0v35h-5.6L17.9 10.8V35h-5.5V0h5.5l12.3 24.4V0h5.5ZM54 0v35h-5.7V0H54Zm8.8 0v4.9H39.6V0h23.2Zm23.7 30.1V35h-15v-4.9h15ZM73 0v35h-5.7V0H73Zm11.5 14.6v4.8h-13v-4.8h13ZM86.3 0v4.9H71.5V0h14.8Zm4.9 0h10.4c2.3 0 4.2.4 5.8 1.2 1.6.8 2.8 2 3.6 3.6a13.4 13.4 0 0 1 .5 10.4 9 9 0 0 1-5.7 5.4l-1.7 1h-8.8v-5h6.2a5 5 0 0 0 2.8-.7c.7-.5 1.3-1.2 1.6-2a8.9 8.9 0 0 0 0-6.1c-.2-1-.7-1.7-1.4-2.2-.8-.4-1.7-.7-2.9-.7H97V35h-5.8V0Zm16 35-6.5-15.7h6l6.7 15.4v.3h-6.1Zm33.6-35v35h-5.6l-12.1-24.2V35h-5.6V0h5.6l12.2 24.4V0h5.5Zm25.7 30.1V35h-15v-4.9h15ZM153 0v35h-5.8V0h5.8Zm11.4 14.6v4.8h-13v-4.8h13Zm2-14.6v4.9h-14.8V0h14.8Zm17.8 0v35h-5.7V0h5.7Zm8.8 0v4.9h-23.2V0H193Zm8.6 0 6 16.6 6-16.6h6.4l-9.5 22.1V35h-5.8V22.1L195.2 0h6.4ZM9.6 48.4v26.2h-2V48.4h2Zm7.6 0v1.9H0v-2h17.2Zm20.3 10.3v5.6c0 1.8-.2 3.3-.6 4.6-.4 1.3-1 2.5-1.7 3.4-.8.9-1.7 1.5-2.7 2-1 .5-2.3.7-3.6.7-1.3 0-2.5-.2-3.5-.7a8 8 0 0 1-2.8-2c-.7-1-1.3-2-1.7-3.4-.4-1.3-.6-2.8-.6-4.6v-5.6c0-1.8.2-3.3.6-4.6.4-1.4 1-2.5 1.7-3.4.7-.9 1.7-1.5 2.7-2 1-.5 2.3-.7 3.6-.7 1.3 0 2.5.2 3.6.7 1 .5 2 1.1 2.7 2a9 9 0 0 1 1.7 3.4c.4 1.3.6 2.8.6 4.6Zm-2 5.6v-5.7c0-1.4-.2-2.7-.5-3.7a8 8 0 0 0-1.3-2.8 5.1 5.1 0 0 0-2-1.6 8.2 8.2 0 0 0-5.6 0 6.8 6.8 0 0 0-3.3 4.4c-.3 1-.4 2.3-.4 3.7v5.7c0 1.5.1 2.7.4 3.8a6.8 6.8 0 0 0 3.3 4.4 8.2 8.2 0 0 0 5.6 0 6.8 6.8 0 0 0 3.3-4.4c.3-1 .4-2.3.4-3.8Zm8.2-15.9h2.1l8 23 8.2-23h2l-9.3 26.2h-1.6l-9.4-26.2Zm-.6 0h1.8l.3 14.8v11.4H43V48.4Zm19.8 0h1.8v26.2h-2V63.2l.2-14.8ZM79 50l-7.8 24.6h-2.1l8.5-26.2H79v1.5Zm6.8 24.6L78.1 50v-1.5h1.4L88 74.6h-2.2Zm-1.2-9.3v2h-12v-2h12Zm19.9 2.8c0-.7-.1-1.3-.3-1.9-.2-.5-.5-1-1-1.5a7 7 0 0 0-1.8-1.2 21 21 0 0 0-2.9-1.2 24 24 0 0 1-3-1.2c-1-.5-1.7-1-2.3-1.6a6 6 0 0 1-1.5-2c-.3-.7-.5-1.6-.5-2.7 0-1 .2-2 .6-2.8.3-.8.9-1.5 1.5-2.1a7 7 0 0 1 2.4-1.4 9 9 0 0 1 7.1.6 7 7 0 0 1 2.7 2.8c.6 1.2 1 2.5 1 4h-2.1c0-1.2-.3-2.2-.7-3.1-.4-.9-1-1.6-2-2-.7-.6-1.7-.9-3-.9-1.1 0-2.1.3-3 .7-.8.4-1.4 1-1.8 1.7a5.3 5.3 0 0 0-.3 4.2c.2.5.5 1 1 1.4.5.5 1 .9 1.8 1.3s1.7.7 2.8 1l3.1 1.4c1 .4 1.7 1 2.4 1.6a6 6 0 0 1 1.4 2.1 7.8 7.8 0 0 1-.1 5.7 7 7 0 0 1-1.6 2.2c-.7.5-1.5 1-2.4 1.3a9.8 9.8 0 0 1-6.1 0c-1-.3-2-.7-2.7-1.4a7 7 0 0 1-2-2.4 8 8 0 0 1-.7-3.6h2.1c0 1 .2 2 .5 2.8a5.3 5.3 0 0 0 3.5 2.8c.8.2 1.5.4 2.3.4 1.1 0 2.1-.3 3-.7a4.5 4.5 0 0 0 2.6-4.3Zm21.5 4.6v2h-15.3v-2H126Zm-.5-22.7-14.3 24.6H110V73l14.3-24.5h1.3V50Zm-.9-1.6v1.9h-14.3v-2h14.3Zm16.8 0v26.2h-2V48.4h2Zm10.2 12v2h-10.8v-2h10.8Zm1.6-12v1.9h-12.4v-2h12.4Zm7 0v26.2h-2.1V48.4h2.1Zm16.4 18.4V48.4h2.1v18.4a10 10 0 0 1-.9 4.5 6.5 6.5 0 0 1-2.4 2.7 6 6 0 0 1-3.5 1c-1.3 0-2.5-.3-3.6-.8a6 6 0 0 1-2.4-2.6 9.6 9.6 0 0 1-.8-4.2h2.1c0 1.2.2 2.3.6 3.1a4 4 0 0 0 1.6 2 4.8 4.8 0 0 0 4.9-.2c.7-.4 1.3-1.1 1.7-2 .4-1 .6-2.1.6-3.5Zm24.8-8.1v5.6c0 1.8-.2 3.3-.6 4.6-.4 1.3-1 2.5-1.7 3.4-.8.9-1.7 1.5-2.7 2-1 .5-2.3.7-3.6.7-1.3 0-2.5-.2-3.5-.7a9 9 0 0 1-2.8-2c-.7-1-1.3-2-1.7-3.4-.4-1.3-.6-2.8-.6-4.6v-5.6c0-1.8.2-3.3.6-4.6.4-1.4 1-2.5 1.7-3.4.8-.9 1.7-1.5 2.7-2 1.1-.5 2.3-.7 3.6-.7 1.3 0 2.5.2 3.6.7 1 .5 2 1.1 2.7 2a9 9 0 0 1 1.7 3.4c.4 1.3.6 2.8.6 4.6Zm-2 5.6v-5.7c0-1.4-.2-2.7-.5-3.7a8 8 0 0 0-1.3-2.8 5.1 5.1 0 0 0-2-1.6 8.2 8.2 0 0 0-5.6 0 6.8 6.8 0 0 0-3.3 4.4c-.3 1-.4 2.3-.4 3.7v5.7c0 1.5.1 2.7.4 3.8.3 1.1.8 2 1.3 2.7.6.8 1.3 1.3 2 1.7a8.2 8.2 0 0 0 5.6 0 6.8 6.8 0 0 0 3.3-4.4c.3-1 .4-2.3.4-3.8Zm14.2-6.2v1.7l-9 3.4v-1.7l9-3.4Zm6.4 14.6v2h-11.5v-2H220Zm-11-24.3v26.2h-2V48.4h2ZM0 41h220v1H0z"></path>
                        </svg>
                    </Link>

                    <div className="sm:hidden">
                        <button
                            className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 p-2 align-middle font-medium text-gray-400 transition-all before:shadow-sm hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-slate-800"
                            id="header-button"
                            type="button"
                        >
                            <MenuIcon
                                className="h-4 w-4"
                                id="header-icon-1"
                                strokeWidth="1"
                            />
                            <XIcon
                                className="hidden h-4 w-4"
                                id="header-icon-2"
                                strokeWidth="1"
                            />
                        </button>
                    </div>
                </div>
                <div
                    className="hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
                    id="header-menu"
                >
                    <div className="mt-5 flex flex-col gap-3 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:pl-5">
                        <NavLink href="/info">info</NavLink>
                        <NavLink href="/contact">contact</NavLink>

                        {/* <div className="hidden">
                            <NavLink href="/blog">blog</NavLink>
                            <NavLink href="/test">test</NavLink>
                            <NavLink href="/">
                                <HomeIcon className="h-4 w-4" strokeWidth="1" />
                            </NavLink>
                            <NavLink href="/test-1">test-1</NavLink>
                            <NavLink href="/test-2">test-2</NavLink>
                            <NavLink href="/posts">posts</NavLink>
                            <NavLink href="/posts-static">posts static</NavLink>
                            <NavLink href="/graphql-client">
                                graphql-client
                            </NavLink>
                            <NavLink href="/graphql-server">
                                graphql-server
                            </NavLink>
                            <NavLink href="/zod-form">zod-form</NavLink>
                            <NavLink href="/zod-server">zod-server</NavLink>
                            <NavLink href="/form">form</NavLink>
                            <NavLink href="/form-2">form 2</NavLink>
                            <NavLink href="/turso">turso</NavLink>
                            <NavLink href="/turso-headers">
                                turso headers
                            </NavLink>
                            <NavLink href="/turso-blogs">turso blogs</NavLink>
                        </div> */}
                    </div>
                </div>
            </nav>
        </header>
    );
};
