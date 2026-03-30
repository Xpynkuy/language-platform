import styles from "./HeroSection.module.scss";
export const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <h2 className={styles.title}>Korean Booster</h2>
      <span className={styles.desc}>
        Хочешь понимать корейский и свободно говорить?
        <br />
        С нашей платформой ты учишься через реальные диалоги и современные
        методы.
        <br />
        Никакой скуки — только практика и результат.
      </span>
    </div>
  );
};
