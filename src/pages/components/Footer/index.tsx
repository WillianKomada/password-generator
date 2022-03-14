import Lottie from "lottie-react-web";

import love from "../../../lotties/love.json";
import styles from "./styles.module.scss";

export function Footer() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: love,
  };

  return (
    <footer className={styles.container}>
      <p>Feito com </p>

      <div className={styles.lottieContainer}>
        <Lottie options={defaultOptions} height={80} width={80} />
      </div>

      <p>
        por <b> Willian Komada</b>
      </p>
    </footer>
  );
}
