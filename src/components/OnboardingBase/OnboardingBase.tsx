import React from "react";
import { Icon } from "../Atoms/Atoms";
import styles from "./OnboardingBase.module.scss";
import floatingImg from "@/../../public/images/floating-bg.png";
import { Button, StardustGlow } from "../Atoms/Atoms";
import Image from "next/image";

const OnboardingBase = () => {
  return (
    <section className={styles.signup}>
      <div className={styles["signup__left"]}>
        <div className={styles["logo-container"]}>
          <Icon icon="logo" width={136} height={32} />
        </div>
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

export default OnboardingBase;
