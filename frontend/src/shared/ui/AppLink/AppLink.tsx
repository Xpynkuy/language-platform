import clsx from "clsx";
import { Link, type LinkProps } from "react-router-dom";
import styles from "./AppLink.module.scss";
interface AppLinkProps extends LinkProps {
  className?: string;
}
const AppLink = (props: AppLinkProps) => {
  const { className, to, children, ...other } = props;
  return (
    <Link to={to} className={clsx(styles.appLink, className)} {...other}>
      {children}
    </Link>
  );
};

export default AppLink;
