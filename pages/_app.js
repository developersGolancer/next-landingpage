import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/globals.css";
import "../components/navbar/navbar.scss";
import "../components/header/header.scss";
import "../components/levels/levels.scss";
import "../components/footer/footer.scss";
import "../components/ModalBox/modalBox.scss";
import "../components/work-with/work-with.scss";
import "../components/trust-future/trust.scss";
import "../components/why-go-lancer/why-go-lancer.scss";
import "../components/who-we-are/who-we-are.scss";
import "../components/about-header/about-header.scss";
import "../components/how-work/how-work.scss";
import "../components/job-success/job-success.scss";
import Navbar from "../components/navbar";
import Head from "next/head";
import Footer from "../components/footer";

config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GoLancer</title>
        <meta name="description" content="Golancer is a web app for traning" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
