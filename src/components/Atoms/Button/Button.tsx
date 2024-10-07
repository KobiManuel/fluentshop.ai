"use client";
import { CSSProperties, ReactNode } from "react";
import { Icon as DefaultIcon } from "../Atoms"; // Assuming the default Icon component is imported
import styles from "./Button.module.scss";
import { IconProps } from "@/components/types";

interface ButtonProps {
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  mode?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  children: ReactNode;
  width?: number;
  style?: CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> & { Icon: React.FC<IconProps> } = ({
  size = "md",
  mode = "primary",
  disabled = false,
  width,
  style,
  className,
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
      className={`${getButtonStyle()} ${className || ""}`.trim()}
      disabled={disabled}
      style={{ width: `${width}%`, ...style }}
    >
      {children}
    </button>
  );
};
Button.Icon = ({
  icon,
  color = "#000",
  width = 16,
  height = 16,
}: IconProps) => {
  return (
    <>
      <DefaultIcon icon={icon} width={width} height={height} color={color} />
    </>
  );
};

export default Button;
