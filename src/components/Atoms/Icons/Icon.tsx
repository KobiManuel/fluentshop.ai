"use client";
import React from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "../../types";
import GoogleColored from "../../../../public/icons/google-colored.svg";
import Checkmark from "../../../../public/icons/checkmark.svg";
import Logo from "../../../../public/icons/fluentshop-ai.svg";
import Stardust from "../../../../public/icons/stardust.svg";
import HelpCircle from "../../../../public/icons/help-circle.svg";
import InfoCircle from "../../../../public/icons/info-circle.svg";
import Email from "../../../../public/icons/sms.svg";
import Blur from "../../../../public/icons/blur.svg";
import StardustGlow from "../../../../public/icons/stardust-glow1.svg";

const Icon = ({
  icon,
  color = "",
  onClick,
  rotation,
  width = 16,
  height = 16,
  position,
  cursor,
  activeLinks = true,
  style,
}: IconProps) => {
  const uIcons: Record<string, React.ComponentType<any>> = {
    "google-colored": GoogleColored,
    tick: Checkmark,
    logo: Logo,
    stardust: Stardust,
    hint: HelpCircle,
    email: Email,
    error: InfoCircle,
    blur: Blur,
    "stardust-glow": StardustGlow,
  };
  const isSpinner = icon === "spinner" || icon === "spinner-alt";
  const isGrey = activeLinks !== true;

  const IconComponent = uIcons[icon];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={`${styles["icon"]} space-ui-icon ${styles[color]} ${
        isSpinner ? styles.spinner : ""
      } ${isGrey ? styles.isGrey : ""}`}
      style={{
        cursor: cursor || "pointer",
        width: width,
        height: height,
        transform: rotation,
        position: position,
        ...style,
      }}
      onClick={onClick}
    />
  );
};

export default Icon;
