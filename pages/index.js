import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="IV" />
        <p className="description">
          Under construction
        </p>
        <a href="https://clementine-porcupine-d9r5.squarespace.com/">Old website</a>
      </main>

      <Footer />
    </div>
  )
}
