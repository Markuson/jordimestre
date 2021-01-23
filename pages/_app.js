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
      {/* <link rel="icon" type="image/x-icon" href="/favicon.ico" /> */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="twitter:card" content="Soul Mountain is a project that blends music and mountaineering together." key="twcard" />
      <meta 
        name="description"
        content="Soul Mountain is a project that blends music and mountaineering together. Jordi Mestre has created a project that will allow him to play and record his compositions on top of his favourite summits, in order to mix the sounds with breathtaking images."
      />
      <meta property="og:url" content="http://soulmountain.cat" key="ogurl" />
      <meta property="og:image" content="/images/slide0.jpg" key="ogimage" />
      <meta property="og:site_name" content="Soul Mountain" key="ogsitename" />
      <meta property="og:title" content="Soul Mountain" key="ogtitle" />
      <meta 
        property="og:description" 
        content="Soul Mountain is a project that blends music and mountaineering together. Jordi Mestre has created a project that will allow him to play and record his compositions on top of his favourite summits, in order to mix the sounds with breathtaking images."
        key="ogdesc"
      />


    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp
