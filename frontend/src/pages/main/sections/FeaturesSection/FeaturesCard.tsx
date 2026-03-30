import { Link } from "react-router";
import styles from "./FeaturesCard.module.scss";

interface CardProps {
  title: string;
  descriptions: string;
  to: string;
  icon?: React.ReactNode;
  className?: string; 
}

export const FeaturesCard = (props: CardProps) => {
  const { title, descriptions, to, icon, className } = props;

  return (
    <Link to={to} className={`${styles.card} ${className || ""}`}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.descriptions}>{descriptions}</p>
      </div>
      {icon && <div className={styles.icon}>{icon}</div>}
    </Link>
  );
};
