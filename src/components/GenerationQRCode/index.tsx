import Image from "next/image";
import styles from "./styles.module.scss";

export function GenerationQRCode() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <label>Cole a sua senha aqui:</label>

        <input type="text" />

        <button id="qrGenerate">Gerar QRCode</button>

        <div>
          <Image src="/download.png" alt="qrcode" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
