import { BsGithub, BsLinkedin } from "react-icons/bs";

import styles from "./styles.module.scss";

export function Social() {
  return (
    <div className={styles.containerMenu}>
      <a className={styles.social} href="https://github.com/williankomada">
        <BsGithub size={24} color="#FFF" />
      </a>

      <a
        className={styles.social}
        href="https://www.linkedin.com/in/willian-komada-aa705a172/"
      >
        <BsLinkedin size={24} color="#FFF" />
      </a>
    </div>
  );
}
