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
      <body className="p-8" data-debug="_document">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
