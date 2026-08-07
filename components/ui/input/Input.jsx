import styles from "./Input.module.scss";
import { cn } from "@/lib/utils";

export function FormField({ label, error, children, htmlFor }) {
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={htmlFor} className={styles.label}>
          {label}
        </label>
      )}
      {children}
      {error && <span className={styles.errorText} role="alert">{error}</span>}
    </div>
  );
}

export function Input({ className, error, ...props }) {
  return (
    <input
      className={cn(styles.input, error && styles.error, className)}
      {...props}
    />
  );
}

export function Textarea({ className, error, ...props }) {
  return (
    <textarea
      className={cn(styles.textarea, error && styles.error, className)}
      {...props}
    />
  );
}

export function Select({ className, error, children, ...props }) {
  return (
    <select
      className={cn(styles.select, error && styles.error, className)}
      {...props}
    >
      {children}
    </select>
  );
}

export function FileInput({ className, error, ...props }) {
  return (
    <input
      type="file"
      className={cn(styles.input, styles.fileInput, error && styles.error, className)}
      {...props}
    />
  );
}
