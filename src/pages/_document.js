import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head>
      <script
          type="text/javascript"
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAPL-ejfLfY6XIFSI1mFKdnCtCtD_gZcFU&libraries=places`}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
