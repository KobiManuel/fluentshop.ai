"use client";
import Image from "next/image";
import styles from "./OnboardingBanner.module.scss";
import floatingImg from "@/../../public/images/floating-bg.png";
import { Button, Icon, StardustGlow } from "../Atoms/Atoms";
import { useSelector } from "react-redux";

const OnboardingBanner = () => {
  const { onboarding_stage } = useSelector((state: any) => state.auth.value);

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
              <Button
                size="md"
                className={`${styles["first-btn"]} ${
                  onboarding_stage === 1 ? styles["active-stage"] : ""
                }`}
              >
                <span className={styles["step-indicator"]}>
                  {onboarding_stage !== 1 ? (
                    <Icon icon="tick" color="white" width={12} height={12} />
                  ) : (
                    1
                  )}
                </span>{" "}
                Create an account
              </Button>
              <Button
                size="md"
                className={`${styles["second-btn"]} ${
                  onboarding_stage === 2 ? styles["active-stage"] : ""
                }`}
              >
                <span className={styles["step-indicator"]}>
                  {onboarding_stage === 3 ? (
                    <Icon icon="tick" color="white" width={12} height={12} />
                  ) : (
                    2
                  )}
                </span>{" "}
                Business Information
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingBanner;
