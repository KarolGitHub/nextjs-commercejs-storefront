import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

const IconLink = () => <link rel="icon" href="/favicon.png" />;

const OG_TitleMetaLink = () => (
  <meta property="og:title" content="Commerce.js | storefront" />
);

const OG_DescriptionMetaLink = () => (
  <meta
    property="og:description"
    content="Storefront built with Next.js and Commerce.js"
  />
);
const DescriptionMetaLink = () => (
  <meta
    key="description"
    property="description"
    content="Storefront built with Next.js and Commerce.js"
  />
);
const OG_URLMetaLink = () => (
  <meta
    key="og:url"
    property="og:url"
    content="https://github.com/KarolGitHub/nextjs-commercejs-storefront"
  />
);
const OG_TypeMetaLink = () => (
  <meta key="og:type" property="og:type" content="website" />
);
const TwitterTitleMetaLink = () => (
  <meta
    key="twitter:title"
    property="twitter:title"
    content="Next.js Commerce.js Storefront"
  />
);
const TwitterDescriptionMetaLink = () => (
  <meta
    key="twitter:description"
    property="twitter:description"
    content="Next.js Commerce.js Storefront"
  />
);
const TwitterCardMetaLink = () => (
  <meta key="twitter:card" property="twitter:card" content="summary" />
);
const LuckiestGuyFontLink = () => (
  <link
    href="https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap"
    rel="stylesheet"
  />
);
const QuickSandFontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap"
    rel="stylesheet"></link>
);

const links = () => [
  IconLink(),
  OG_TitleMetaLink(),
  OG_DescriptionMetaLink(),
  DescriptionMetaLink(),
  OG_URLMetaLink(),
  OG_TypeMetaLink(),
  TwitterTitleMetaLink(),
  TwitterDescriptionMetaLink(),
  TwitterCardMetaLink(),
  LuckiestGuyFontLink(),
  QuickSandFontLink(),
];
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>{links()}</Head>
        <body
          className={
            process.env.NODE_ENV === 'production' ? 'debug-screens' : ''
          }>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
