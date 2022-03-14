/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import toast from "react-hot-toast";

import styles from "./styles.module.scss";

export function GenerationQRCode() {
  const [generatedText, setGeneratedText] = useState("");
  const [qrcode, setQrcode] = useState("");

  const handleGenerateQRCode = () => {
    console.log(generatedText, qrcode);
    if (generatedText === "") {
      toast.error("The password generated is missing in field below!");
    } else {
      let googleChartApi =
        "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chld=H&chl=";
      let contentQRCode = googleChartApi + encodeURIComponent(generatedText);

      setQrcode(contentQRCode);
    }
  };

  const handleClearInput = () => {
    setGeneratedText("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <label>Cole a sua senha aqui:</label>

        <div className={styles.inputContainer}>
          <input
            type="text"
            value={generatedText}
            onChange={(e) => setGeneratedText(e.target.value)}
          />
          <button onClick={handleClearInput}>
            <RiPencilLine size={24} />
          </button>
        </div>

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
