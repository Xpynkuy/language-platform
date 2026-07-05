import { About } from "../sections/AboutSection/About";
import { Contact } from "../sections/ContactSection/Contact";
import { FeaturesSection } from "../sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "../sections/HeroSection/HeroSection";
import { AnchorNavigation } from "./AnchorNavigation/AnchorNavigation";
import styles from "./MainPage.module.scss";

const navigationItems = [
  { id: "features", label: "Features" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <FeaturesSection />
      <About />
      <Contact />
      <AnchorNavigation items={navigationItems} />
    </div>
  );
};
