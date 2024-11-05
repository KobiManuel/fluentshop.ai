"use client";
import { Button } from "@/components/Atoms/Atoms";
import { Checkbox, TextArea, TextInput } from "@/components/Input/Input";
import React from "react";
import styles from "./page.module.scss";

const BusinessInformation = () => {
  return (
    <form className={styles.main}>
      <header>
        <h6>Business Information</h6>
        <p>Share your business info to unlock tailored services.</p>
      </header>
      <div className={styles.inner}>
        <TextInput
          label="Brand Name"
          placeholder="Enter your brand name"
          required={true}
          name="brandName"
        />
        <TextArea label="Description" required={true} />
        <span
          className="flex-center-vertical gap-8 pointer"
          //   onClick={() => setChecked(!checked)}
        >
          <Checkbox checked={false} />
          <p className="b3-500">Keep me signed in</p>
        </span>
        <Button size="xl" type="submit">
          Continue
        </Button>
      </div>
    </form>
  );
};

export default BusinessInformation;
