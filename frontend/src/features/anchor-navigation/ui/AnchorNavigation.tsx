import { useEffect, useState } from "react";
import styles from "./AnchorNavigation.module.scss";

export type AnchorNavigationItem = {
  id: string;
  label: string;
};

interface AnchorNavigationProps {
  items: AnchorNavigationItem[];
}

export const AnchorNavigation = ({ items }: AnchorNavigationProps) => {
  const [activeSection, setActiveSection] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-38% 0px -48%",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className={styles.anchorNav} aria-label="Навигация по лендингу">
      {items.map((item) => (
        <a
          className={`${styles.anchorLink} ${
            activeSection === item.id ? styles.active : ""
          }`}
          href={`#${item.id}`}
          key={item.id}
          aria-label={item.label}
          aria-current={activeSection === item.id ? "location" : undefined}
          onClick={() => setActiveSection(item.id)}
        />
      ))}
    </nav>
  );
};
