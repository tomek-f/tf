import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body
        className="font-light text-base bg-stone-300 dark:bg-gray-900 text-black dark:text-white p-8 min-h-screen"
        data-debug="_document"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
