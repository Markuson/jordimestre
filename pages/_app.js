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
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp
