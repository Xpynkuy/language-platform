import { useEffect, useState } from "react";
import { About } from "../sections/AboutSection/About";
import { Contact } from "../sections/ContactSection/Contact";
import { FeaturesSection } from "../sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "../sections/HeroSection/HeroSection";
import styles from "./MainPage.module.scss";

const navigationItems = [
  { id: "features", label: "Features" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const MainPage = () => {
  const [activeSection, setActiveSection] = useState(navigationItems[0].id);

  useEffect(() => {
    const sections = navigationItems
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
  }, []);

  return (
    <div className={styles.container}>
      <HeroSection />
      <FeaturesSection />
      <About />
      <Contact />
      <nav className={styles.anchorNav} aria-label="Навигация по лендингу">
        {navigationItems.map((item) => (
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
    </div>
  );
};
