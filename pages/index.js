import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Formulir Permintaan Akses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Formulir Permintaan Akses" />
        <hr />
        <p className="description">
          Silahkan isi data diri sesuai dengan Unit Bagian masing-masing, Terimakasih
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
