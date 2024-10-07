"use client";
import React, { useRef, useState } from "react";
import styles from "./page.module.scss";
import { Button, Icon, StardustGlow } from "@/components/Atoms/Atoms";
import { Checkbox, TextInput } from "@/components/Input/Input";
import Link from "next/link";
import floatingImg from "../../../public/images/floating-bg.png";

import Image from "next/image";

const SignUp = () => {
  const [checked, setChecked] = useState(false);

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
            <span
              className="flex-center-vertical gap-8 pointer"
              onClick={() => setChecked(!checked)}
            >
              <Checkbox checked={checked} />
              <p className="b3-500">Keep me signed in</p>
            </span>
            <div
              className={`full-width flex-column gap-16 ${styles["btn-container"]}`}
            >
              <Button size="xl">Continue</Button>
              <button className={styles["google-btn"]}>
                <Icon icon="google-colored" width={24} height={24} />
                Sign Up with Google
              </button>
            </div>
          </div>
          <p className={styles.question}>
            Already have an account? <Link href={"/"}> Log in now</Link>{" "}
          </p>
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
                  <p>
                    Ready to create, sell, and grow? Let’s get you started with
                    Fluent!
                  </p>
                </div>
              </div>
              <div className="flex-column-center full-width gap-12">
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

export default SignUp;
