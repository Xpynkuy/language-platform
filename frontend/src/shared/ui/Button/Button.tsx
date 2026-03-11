import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "white" | "gray" | "black" | "danger";
type ButtonSize = "s" | "m" | "l";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export const Button = ({
  children,
  variant = "primary",
  size = "m",
  fullWidth = false,
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        {
          [styles.fullWidth]: fullWidth,
          [styles.disabled]: disabled,
        },
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
