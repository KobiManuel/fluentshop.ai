"use client";
import { Icon } from "../Atoms";
import styles from "./Button.module.scss";

interface ButtonProps {
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  mode?: "primary" | "secondary" | "tertiary";
  icon?: string;
  iconPosition?: "left" | "right";
  iconColor?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  size = "md",
  mode = "primary",
  icon = "",
  iconPosition = "left",
  iconColor = "#000",
  disabled = false,
  children,
}) => {
  const getButtonStyle = () => {
    if (disabled) {
      switch (mode) {
        case "secondary":
          return [
            styles.button,
            styles.secondaryButtonDisabled,
            styles[size],
          ].join(" ");
        case "tertiary":
          return [
            styles.button,
            styles.tertiaryButtonDisabled,
            styles[size],
          ].join(" ");
        default:
          return [
            styles.button,
            styles.primaryButtonDisabled,
            styles[size],
          ].join(" ");
      }
    } else {
      switch (mode) {
        case "secondary":
          return [styles.button, styles.secondaryButton, styles[size]].join(
            " "
          );
        case "tertiary":
          return [styles.button, styles.tertiaryButton, styles[size]].join(" ");
        default:
          return [styles.button, styles.primaryButton, styles[size]].join(" ");
      }
    }
  };

  return (
    <button
      className={
        icon ? `${getButtonStyle()} ${styles.withIcon}` : getButtonStyle()
      }
      disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <Icon icon={icon} width={16} height={16} color={iconColor} />
      )}
      {children}
      {icon && iconPosition === "right" && (
        <Icon icon={icon} width={16} height={16} color={iconColor} />
      )}
    </button>
  );
};

export default Button;
