import { useEffect, useState } from "react";
import type { NavLinkProps } from "react-router-dom";
import AppLink from "@shared/ui/AppLink/AppLink";
import styles from "./BurgerMenu.module.scss";

export type BurgerMenuLink = {
  to: NavLinkProps["to"];
  label: string;
  number: string;
};

interface BurgerMenuProps {
  links: BurgerMenuLink[];
  loginTo: NavLinkProps["to"];
}

export const BurgerMenu = ({ links, loginTo }: BurgerMenuProps) => {
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
    <>
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
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.visible : ""}`}
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <AppLink
              to={link.to}
              className={styles.mobileLink}
              data-number={link.number}
              key={String(link.to)}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? undefined : -1}
            >
              {link.label}
            </AppLink>
          ))}
        </div>
        <AppLink
          to={loginTo}
          noActive
          className={styles.mobileLogin}
          onClick={closeMenu}
          tabIndex={isMenuOpen ? undefined : -1}
        >
          Войти
        </AppLink>
      </div>
    </>
  );
};
