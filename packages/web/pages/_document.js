import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GOOGLE_API_KEY } from '../Config';
import Favicon from 'core/static/favicon.png';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#30C56D" />
          {/* If We Didb't Load It Here It Causes Font Flicking */}
          <link rel="icon" type="image/png" sizes="32x32" href={Favicon} />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,600,700"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/ionicons@4.5.0/dist/css/ionicons.min.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Should Remove It From Here . (Dynamic Import) */}
          <script
            type="text/javascript"
            src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`}
            async
          />
        </body>
      </Html>
    );
  }
}
