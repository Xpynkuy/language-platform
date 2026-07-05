import { BurgerMenu } from "@features/burger-menu";
import AppLink from "@shared/ui/AppLink/AppLink";
import { Button } from "@shared/ui/Button/Button";
import { RoutePath } from "app/providers/router/routerConfig";
import styles from "./Header.module.scss";

const navigationLinks = [
  { to: RoutePath.main, label: "Главная", number: "01" },
  { to: RoutePath.alphabet, label: "Алфавит", number: "02" },
  { to: RoutePath.dictionary, label: "Словарь", number: "03" },
  { to: RoutePath.chat, label: "Онлайн чат", number: "04" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <AppLink to={RoutePath.main} className={styles.logo}>
          <span className={styles.top}>Korean</span>
          <span className={styles.bottom}>Booster</span>
        </AppLink>
        <div className={styles.links}>
          {navigationLinks.map((link) => (
            <AppLink
              to={link.to}
              className={styles.link}
              data-number={link.number}
              key={link.to}
            >
              {link.label}
            </AppLink>
          ))}
        </div>
        <AppLink to={RoutePath.login} noActive className={styles.login}>
          <Button variant="white">Войти</Button>
        </AppLink>
        <BurgerMenu links={navigationLinks} loginTo={RoutePath.login} />
      </nav>
    </header>
  );
};
