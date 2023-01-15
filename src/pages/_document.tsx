import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mystery+Quest&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <div id="modals" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
