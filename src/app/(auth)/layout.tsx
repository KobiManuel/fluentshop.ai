import React, { ReactNode } from "react";
import styles from "./layout.module.scss";
import floatingImg from "@/../../public/images/floating-bg.png";
import Image from "next/image";
import { Button, Icon, StardustGlow } from "@/components/Atoms/Atoms";

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
      <div className={styles["signup__right"]}>
        <div className={styles["signup__right-inner"]}>
          <Image src={floatingImg} alt="/" />
          <div className={styles["content-blur"]}>
            <div className={styles["content-blur__inner"]}>
              <div
                className="flex-column-center gap-32"
                style={{ width: "80%" }}
              >
                <StardustGlow />
                <div
                  className={`${styles["content-details"]} flex-column-center gap-4`}
                >
                  <h6>Welcome to fluentshop.ai</h6>
                  <p>Ready to create, sell, and grow?</p>
                  <p>Let’s get you started with Fluent!</p>
                </div>
              </div>
              <div
                className="flex-column-center gap-12"
                style={{ width: "fit-content" }}
              >
                <Button size="md" className={styles["first-btn"]}>
                  <span className={styles["step-indicator-1"]}>1</span> Create
                  an account
                </Button>
                <Button size="md" className={styles["second-btn"]}>
                  <span className={styles["step-indicator-2"]}>2</span> Business
                  Information
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingLayout;
