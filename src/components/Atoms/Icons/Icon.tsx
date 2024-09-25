"use client";
import React from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "../../types";
import GoogleColored from "../../../../public/icons/google-colored.svg";
import Checkmark from "../../../../public/icons/checkmark.svg";
import Logo from "../../../../public/icons/fluentshop-ai.svg";
import Stardust from "../../../../public/icons/stardust.svg";

const Icon = ({
  icon,
  color,
  onClick,
  rotation,
  width = 16,
  height = 16,
  position,
  cursor,
  activeLinks = true,
}: IconProps) => {
  const uIcons: Record<string, React.ComponentType<any>> = {
    "google-colored": GoogleColored,
    checkmark: Checkmark,
    logo: Logo,
    stardust: Stardust,
  };
  const isSpinner = icon === "spinner" || icon === "spinner-alt";
  const isGrey = activeLinks !== true;

  const IconComponent = uIcons[icon];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={`${styles["icon"]} space-ui-icon ${
        isSpinner ? styles.spinner : ""
      } ${isGrey ? styles.isGrey : ""}`}
      style={{
        cursor: cursor || "pointer",
        width: width,
        height: height,
        transform: rotation,
        position: position,
      }}
      onClick={onClick}
    />
  );
};

export default Icon;
