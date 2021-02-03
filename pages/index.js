import Head from 'next/head'
import Card from '../components/Card'
import News from '../components/News'
import Twitter from '../components/Twitter'

export default function Home() {
  return (
    <div >
      <Head>
        <title>To The Moon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card />
      <News />
      <Twitter />
    </div>
  )
}