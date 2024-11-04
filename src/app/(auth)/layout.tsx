import React, { ReactNode } from "react";
import styles from "./layout.module.scss";
import { Icon } from "@/components/Atoms/Atoms";
import OnboardingBanner from "@/components/OnboardingBanner/OnboardingBanner";

interface layoutProps {
  children: ReactNode;
}

const OnboardingLayout: React.FC<layoutProps> = ({ children }) => {
  return (
    <section className={styles.signup}>
      <div className={styles["signup__left"]}>
        <div className={styles["logo-container"]}>
          <Icon icon="logo" width={136} height={32} />
        </div>
        {children}
      </div>
      <OnboardingBanner />
    </section>
  );
};

export default OnboardingLayout;
