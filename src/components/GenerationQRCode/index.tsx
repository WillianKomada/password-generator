/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import styles from "./styles.module.scss";
import toast from "react-hot-toast";

export function GenerationQRCode() {
  const [generatedText, setGeneratedText] = useState("");
  const [qrcode, setQrcode] = useState("");

  const handleGenerateQRCode = () => {
    console.log(generatedText, qrcode);
    if (generatedText === "") {
      toast.error("The password generated is missing in field below!");
    } else {
      let googleChartApi =
        "https://chart.googleapis.com/chart?cht=qr&chs=278x278&chld=H&chl=";
      let contentQRCode = googleChartApi + encodeURIComponent(generatedText);

      setQrcode(contentQRCode);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <label>Cole a sua senha aqui:</label>

        <input
          type="text"
          value={generatedText}
          onChange={(e) => setGeneratedText(e.target.value)}
        />

        <button onClick={handleGenerateQRCode}>Gerar QRCode</button>

        {qrcode.length > 0 && (
          <div>
            <img src={qrcode} alt="QRCode Generated" width={200} height={200} />
          </div>
        )}
      </div>
    </div>
  );
}
