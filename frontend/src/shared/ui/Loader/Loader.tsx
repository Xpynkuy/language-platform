import styles from "./Loader.module.scss";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
};

export default Loader;
