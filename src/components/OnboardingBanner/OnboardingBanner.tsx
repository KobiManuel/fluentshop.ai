"use client";
import Image from "next/image";
import styles from "./OnboardingBanner.module.scss";
import floatingImg from "@/../../public/images/floating-bg.png";
import { Button, StardustGlow } from "../Atoms/Atoms";

const OnboardingBanner = () => {
  return (
    <div className={styles["signup__right"]}>
      <div className={styles["signup__right-inner"]}>
        <Image src={floatingImg} alt="/" />
        <div className={styles["content-blur"]}>
          <div className={styles["content-blur__inner"]}>
            <div className="flex-column-center gap-32" style={{ width: "80%" }}>
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
                <span className={styles["step-indicator-1"]}>1</span> Create an
                account
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
  );
};

export default OnboardingBanner;
