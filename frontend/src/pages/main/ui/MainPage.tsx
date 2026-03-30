import { FeaturesSection } from "../sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "../sections/HeroSection/HeroSection";
import styles from './MainPage.module.scss'
export const MainPage = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};
