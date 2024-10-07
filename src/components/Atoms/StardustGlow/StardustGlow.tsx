"use client";

import { Icon } from "../Atoms";
import styles from "./StardustGlow.module.scss";

const StardustGlow = () => {
  return (
    <div className={styles["stardust-glow"]}>
      <Icon
        style={{ boxShadow: "0 0 10px 0px white", borderRadius: "50%" }}
        icon="stardust-glow"
        width={60}
        height={60}
      />
    </div>
  );
};

export default StardustGlow;
