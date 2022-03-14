import { useState } from "react";
import { RiClipboardLine } from "react-icons/ri";
import toast from "react-hot-toast";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "../../utils/Characters";

import styles from "./styles.module.scss";

export function ConfigurationPassword() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const handleGeneratePassword = () => {
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      toast.error("You must Select atleast one option!");
    }
    let charactersGenerate = "";

    if (includeLowercase) {
      charactersGenerate = charactersGenerate + lowerCaseLetters;
    }

    if (includeUppercase) {
      charactersGenerate = charactersGenerate + upperCaseLetters;
    }

    if (includeNumbers) {
      charactersGenerate = charactersGenerate + numbers;
    }

    if (includeSymbols) {
      charactersGenerate = charactersGenerate + specialCharacters;
    }

    setPassword(createPassword(charactersGenerate));
  };

  const createPassword = (charactersGenerate: String) => {
    let password = "";
    const charactersGenerateLength = charactersGenerate.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(
        Math.random() * charactersGenerateLength
      );
      password = password + charactersGenerate.charAt(characterIndex);
    }
    return password;
  };

  const copyToClipboard = () => {
    const newTextArea = document.createElement("textarea");
    newTextArea.innerText = password;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand("copy");
    newTextArea.remove();
  };

  const handleCopyPassword = () => {
    if (password === "") {
      toast.error("Nothing To Copy!");
    } else {
      copyToClipboard();
      toast.success("Password successfully copied to clipboard!");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.inputContainer}>
          <label htmlFor="include-numbers">Include numbers: </label>
          <input
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            type="checkbox"
            id="include-numbers"
            name="include-numbers"
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="uppercase-letters">Include uppercase letters: </label>
          <input
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            type="checkbox"
            id="uppercase-letters"
            name="uppercase-letters"
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="lowercase-letters">Include lowercase letters: </label>
          <input
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
            type="checkbox"
            id="lowercase-letters"
            name="lowercase-letters"
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="include-symbols">Include symbols: </label>
          <input
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            type="checkbox"
            id="include-symbols"
            name="include-symbols"
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="password-strength">Password length: </label>
          <input
            defaultValue={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            type="range"
            id="password-strength"
            name="password-strength"
            min={5}
            max={20}
          />
          <output>{passwordLength}</output>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={handleGeneratePassword}>Generate Password</button>

        <div className={styles.clipboard}>
          <span>{password}</span>

          <button onClick={handleCopyPassword}>
            <RiClipboardLine size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
