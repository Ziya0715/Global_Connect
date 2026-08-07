import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./Button.module.scss";

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  type = "button",
  disabled,
  onClick,
  fullWidth,
  ...props
}) {
  const classes = cn(
    styles.button,
    styles[variant],
    size !== "md" && styles[size],
    fullWidth && styles.fullWidth,
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
