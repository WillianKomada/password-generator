import { ConfigurationPassword } from "./../components/ConfigurationPassword";
import { Footer } from "./../components/Footer";
import { GenerationQRCode } from "./../components/GenerationQRCode";
import { Header } from "./../components/Header";
import { Social } from "./../components/Social";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <ConfigurationPassword />
        <GenerationQRCode />
        {/* <Social /> */}
      </div>

      <Footer />
    </div>
  );
}
