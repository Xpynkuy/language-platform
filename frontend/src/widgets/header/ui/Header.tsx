import AppLink from "@shared/ui/AppLink/AppLink";
import { RoutePath } from "app/providers/router/routerConfig";
import styles from "./Header.module.scss";
import { Button } from "@shared/ui/Button/Button";
export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <AppLink to={RoutePath.main} className={styles.logo}>
          <span className={styles.top}>Korean</span>
          <span className={styles.bottom}>Booster</span>
        </AppLink>
        <div className={styles.links}>
          <AppLink to={RoutePath.main}>Главная</AppLink>
          <AppLink to={RoutePath.alphabet}>Алфавит</AppLink>
          <AppLink to={RoutePath.dictionary}>Словарь</AppLink>
          <AppLink to={RoutePath.chat}>Онлайн чат</AppLink>
          <AppLink to='/' noActive>
            <Button variant="white">Войти</Button>
          </AppLink>
        </div>
      </nav>
    </header>
  );
};
