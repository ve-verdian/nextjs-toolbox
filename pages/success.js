import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Form Akses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Pesan Terkirim!!!</h1>
        <p>Terimakasih sudah menggunakan form online <Link href="/"><a>Kembali</a></Link>.</p>
      </main>

      <Footer />
    </div>
  )
}
