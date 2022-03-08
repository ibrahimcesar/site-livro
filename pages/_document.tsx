import Document, { DocumentContext, Head, Html, Main, NextScript} from 'next/document'

class Doc extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;300;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

}

export default Doc;