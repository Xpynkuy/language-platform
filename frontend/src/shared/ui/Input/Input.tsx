import { forwardRef, type InputHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...rest }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={clsx(styles.wrapper, className)}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={clsx(styles.input, { [styles.hasError]: !!error })}
          {...rest}
        />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";
