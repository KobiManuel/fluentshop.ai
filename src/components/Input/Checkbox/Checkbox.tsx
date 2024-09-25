"use client";

import { Icon } from "@/components/Atoms/Atoms";
import { ICheckboxProps } from "@/components/types";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ checked }: ICheckboxProps) => {
  return (
    <button className={`${styles.checkbox} ${checked && styles.checked}`}>
      {checked && <Icon icon="tick" width={10} height={10} />}
    </button>
  );
};

export default Checkbox;
