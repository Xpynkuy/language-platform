import clsx from "clsx";
import { NavLink, type NavLinkProps } from "react-router-dom";
import styles from "./AppLink.module.scss";
interface AppLinkProps extends NavLinkProps {
  className?: string;
  variant?: "default" | "button";
  noActive?: boolean;
}
const AppLink = (props: AppLinkProps) => {
  const {
    className,
    variant = "default",
    noActive,
    to,
    children,
    ...other
  } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          styles.appLink,
          styles[variant],
          isActive && !noActive && styles.active,
          className,
        )
      }
      {...other}
    >
      {children}
    </NavLink>
  );
};

export default AppLink;
