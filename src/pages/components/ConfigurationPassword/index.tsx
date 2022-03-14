import styles from "./styles.module.scss";

export function ConfigurationPassword() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.inputContainer}>
          <label>Números: </label>
          <input type="checkbox" />
        </div>

        <div className={styles.inputContainer}>
          <label>Maiúsculas: </label>
          <input type="checkbox" />
        </div>

        <div className={styles.inputContainer}>
          <label>Minúscular: </label>
          <input type="checkbox" />
        </div>

        <div className={styles.inputContainer}>
          <label>Simbolos: </label>
          <input type="checkbox" />
        </div>

        <div className={styles.inputContainer}>
          <label>Caracteres: </label>
          <input type="number" min={5} max={30} />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button>Gerar Senha</button>

        <span>$%wN+0acxm$x$G:</span>
      </div>
    </div>
  );
}
