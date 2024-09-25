"use client";
import React, { useRef } from "react";
import styles from "./page.module.scss";
import { Icon } from "@/components/Atoms/Atoms";
import { TextInput } from "@/components/Input/Input";

const SignUp = () => {
  const inputRef = useRef(null);
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
          <div className={styles.inner}>
            <div className="half-width-container">
              <TextInput
                label="First Name"
                placeholder="Enter your first name"
                ref={inputRef}
                required={true}
              />
              <TextInput
                label="Last Name"
                placeholder="Enter your last name"
                ref={inputRef}
                required={true}
              />
            </div>
            <TextInput
              label="Email"
              placeholder="Enter your email"
              ref={inputRef}
              required={true}
              type="email"
            />
            <TextInput
              label="Password"
              placeholder="••••••••••"
              ref={inputRef}
              required={true}
              type="password"
            />
            <TextInput
              label="Confirm Password"
              placeholder="••••••••••"
              ref={inputRef}
              required={true}
              type="password"
            />
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default SignUp;
