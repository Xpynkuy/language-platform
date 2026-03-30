import { useNavigate } from "react-router";
import styles from "./NotFoundPage.module.scss";
import { Button } from "@shared/ui/Button/Button";
import monkey from "../assets/monkey.png";
export const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.error}>404</h1>
      <h2 className={styles.title}>Страница не найдена</h2>
      <img src={monkey} alt="404 monkey" className={styles.img} />
      <span className={styles.notif}>
        Мы не смогли найти страницу, которую вы ищете.
      </span>
      <Button onClick={goHome} size="m">
        Вернуться на главную
      </Button>
    </div>
  );
};
