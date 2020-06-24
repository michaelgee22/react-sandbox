import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://www.paypal.com/sdk/js?client-id=AVXhU2PW14ToxUo32Usgtaiwc9p9Hn_Vxq0rB5rMZV_7Ms4IrNyR-61qqxvczyAT67MoMKkb5S_HClDj"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument