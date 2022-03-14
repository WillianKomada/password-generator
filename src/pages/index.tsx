import Head from "next/head";
import { Social } from "../components/Social";
import { ConfigurationPassword } from "./../components/ConfigurationPassword";
import { Footer } from "./../components/Footer";
import { GenerationQRCode } from "./../components/GenerationQRCode";
import { Header } from "./../components/Header";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Password Generator</title>
      </Head>

      <Header />

      <div className={styles.content}>
        <ConfigurationPassword />
        <GenerationQRCode />
        <Social />
      </div>

      <Footer />
    </div>
  );
}
