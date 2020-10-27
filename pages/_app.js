import Head from 'next/head'
import '../styles/globals.css'
import 'uikit'

function MyApp({ Component, pageProps }) {

  const api = {
    lang: 'en'
  };

  return <div>
      <Head>
        <title>Soul Mountain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Component {...pageProps} />
    </div>
}

export default MyApp
