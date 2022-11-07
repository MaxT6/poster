// This file is special and allows you to add items across the entire porject.
// Below is the default code of the _document.js file, which is obtained from nextjs.org

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Aleo:wght@300&family=Arizonia&family=Bungee+Inline&family=Catamaran:wght@100;200;400&family=Henny+Penny&family=Michroma&family=Monsieur+La+Doulaise&family=Nabla&family=Playfair+Display+SC:ital@0;1&family=Poppins:ital,wght@0,400;0,700;1,500&family=Press+Start+2P&family=Quantico:ital,wght@0,400;0,700;1,400&family=Questrial&family=Sen&family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Pasted from Google Fonts */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
