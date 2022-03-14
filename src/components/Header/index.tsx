import Lottie from "lottie-react-web";

import lock from "../../lotties/lock.json";
import styles from "./styles.module.scss";

export function Header() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lock,
  };

  return (
    <header className={styles.header}>
      <Lottie options={defaultOptions} height={180} width={180} />
    </header>
  );
}
