import { useEffect, useState } from "react";
import AppLink from "@shared/ui/AppLink/AppLink";
import { RoutePath } from "app/providers/router/routerConfig";
import styles from "./Header.module.scss";
import { Button } from "@shared/ui/Button/Button";

const navigationLinks = [
  { to: RoutePath.main, label: "Главная", number: "01" },
  { to: RoutePath.alphabet, label: "Алфавит", number: "02" },
  { to: RoutePath.dictionary, label: "Словарь", number: "03" },
  { to: RoutePath.chat, label: "Онлайн чат", number: "04" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 801px)");
    const handleResize = () => {
      if (desktopQuery.matches) {
        closeMenu();
      }
    };

    desktopQuery.addEventListener("change", handleResize);

    return () => desktopQuery.removeEventListener("change", handleResize);
  }, []);

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
        <button
          className={`${styles.burger} ${isMenuOpen ? styles.open : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.visible : ""}`}
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.mobileLinks}>
          {navigationLinks.map((link) => (
            <AppLink
              to={link.to}
              className={styles.mobileLink}
              data-number={link.number}
              key={link.to}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? undefined : -1}
            >
              {link.label}
            </AppLink>
          ))}
        </div>
        <AppLink
          to={RoutePath.login}
          noActive
          className={styles.mobileLogin}
          onClick={closeMenu}
          tabIndex={isMenuOpen ? undefined : -1}
        >
          Войти
        </AppLink>
      </div>
    </header>
  );
};
