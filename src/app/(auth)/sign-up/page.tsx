"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";
import { Button, Icon } from "@/components/Atoms/Atoms";
import { Checkbox, TextInput } from "@/components/Input/Input";
import Link from "next/link";

interface ImperativeHandle {
  getValue: () => string;
  focus: () => void;
}

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const [notEqualValues, setNotEqualValues] = useState(false);
  const [hint, setHint] = useState("");

  const passwordRef = useRef<ImperativeHandle>(null);
  const confirmPasswordRef = useRef<ImperativeHandle>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (notEqualValues) {
      return;
    }
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form values:", formValues);
  };

  const handleChange = () => {
    const passwordValue = passwordRef?.current?.getValue();
    const confirmPasswordValue = confirmPasswordRef?.current?.getValue();
    if (passwordValue !== confirmPasswordValue) {
      setNotEqualValues(true);
      setHint("not identical to password");
    } else {
      setNotEqualValues(false);
      setHint("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.main}>
      <header>
        <h6>Sign Up</h6>
        <p>Let’s get you set up, fill in your details.</p>
      </header>
      <div className={styles.inner}>
        <div className="half-width-container">
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            required={true}
            name="firstName"
          />
          <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            required={true}
            name="lastName"
          />
        </div>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          required={true}
          type="email"
          name="email"
        />
        <TextInput
          label="Password"
          placeholder="••••••••••"
          required={true}
          type="password"
          name="password"
          ref={passwordRef}
          onChange={handleChange}
        />
        <TextInput
          label="Confirm Password"
          placeholder="••••••••••"
          required={true}
          type="password"
          name="confirmPassword"
          ref={confirmPasswordRef}
          isError={notEqualValues}
          onChange={handleChange}
          hint={hint}
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
          <Button size="xl" type="submit">
            Continue
          </Button>
          <button className={styles["google-btn"]}>
            <Icon icon="google-colored" width={24} height={24} />
            Sign Up with Google
          </button>
        </div>
      </div>
      <p className={styles.question}>
        Already have an account? <Link href={"/"}> Log in now</Link>{" "}
      </p>
    </form>
  );
};

export default SignUp;
