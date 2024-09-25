import React from "react";
import styles from "./page.module.scss";
import { Icon } from "@/components/Atoms/Atoms";

const SignUp = () => {
  return (
    <section className={styles.signup}>
      <div className={styles["signup__left"]}>
        <div className={styles["logo-container"]}>
          <Icon icon="logo" width={136} height={32} />
        </div>
        <div className={styles.main}>
          <header>
            <h6>Sign Up</h6>
            <p>Let’s get you set up, fill in your details.</p>
          </header>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default SignUp;
