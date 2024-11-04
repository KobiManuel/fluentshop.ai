"use client";

import { TextInput } from "@/components/Input/Input";
import styles from "./page.module.scss";
import { Button } from "@/components/Atoms/Atoms";
import { useRef, useState } from "react";
import { ImperativeHandle } from "@/components/types";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { updateAuthData } from "@/redux/slices/authSlice";

const VerifyEmail = () => {
  const inputRefs = useRef<(ImperativeHandle | null)[]>([]);
  const [disableButton, setDisableButton] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const { email_address } = useSelector((state: any) => state.auth.value);

  const addToRefs = (el: ImperativeHandle | null, index: number) => {
    inputRefs.current[index] = el;
  };

  const checkIfAllInputsFilled = () => {
    const allFilled = inputRefs.current.every(
      (input) => input?.getValue() && input.getValue().length > 0
    );
    console.log("all filled", allFilled);
    if (allFilled) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  };

  const handleSubmit = () => {
    const values = inputRefs.current.map((input) => input?.getValue() || "");
    console.log("OTP Values:", values.join(""));
    dispatch(
      updateAuthData({
        onboarding_stage: 2,
      })
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const maxLength = 1;
    const newCharacter =
      e.nativeEvent instanceof InputEvent ? e.nativeEvent.data : "";

    if (inputRefs?.current[index]!.getValue()?.length > maxLength) {
      console.log("yessss");
      inputRefs?.current[index]?.setValue(
        inputRefs?.current[index].getValue().slice(0, maxLength)
      );
      if (newCharacter && inputRefs.current[index + 1]) {
        inputRefs?.current[index + 1]!.focus();
        inputRefs?.current[index + 1]!.setValue(newCharacter);
      }
    }

    if (
      e.nativeEvent instanceof InputEvent &&
      e.nativeEvent.inputType === "deleteContentBackward"
    ) {
      console.log("Backspace key pressed");
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
    console.log("logged");
    checkIfAllInputsFilled();
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    e.preventDefault();

    const pastedText = e.clipboardData
      .getData("text/plain")
      .trim()
      .split(" ")
      .join("");

    for (let i = 0; i < pastedText.length; i++) {
      const currentIndex = index + i;
      if (currentIndex < inputRefs.current.length) {
        inputRefs.current[currentIndex]?.setValue(pastedText[i]);

        if (
          i < pastedText.length - 1 &&
          currentIndex + 1 < inputRefs.current.length
        ) {
          inputRefs.current[currentIndex + 1]?.focus();
        }
      }
    }
    checkIfAllInputsFilled();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      console.log("Backspace key pressed");
      if (index > 0 && inputRefs.current[index]?.getValue()?.length === 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
    checkIfAllInputsFilled();
  };

  if (!email_address) {
    router.push("/sign-up");
  } else
    return (
      <form
        className={styles.main}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <header>
          <h6>Email Verification</h6>
          <p>Check your email.</p>
        </header>
        <div className={styles.inner}>
          <div className={styles["otp-container"]}>
            <div className={styles["otp-container__inner"]}>
              {[0, 1, 2, 3].map((_, index) => (
                <TextInput
                  key={index}
                  placeholder="0"
                  ref={(el) => addToRefs(el, index)}
                  // ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                  onPaste={(e) => handlePaste(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  type="number"
                  isError={!disableButton}
                />
              ))}
            </div>
            <p className={styles.hint}>
              A code was sent to <span>{email_address}</span>
            </p>
          </div>
          <div className="flex-column gap-64">
            <div className="flex-column gap-16">
              <Button size="xl" mode="transparent">
                Change Email
              </Button>
              <Button size="xl" disabled={true}>
                Resend OTP
              </Button>
              <span className={styles.timer}>00:59</span>
            </div>
            <Button size="xl" type="submit" disabled={!disableButton}>
              Continue
            </Button>
          </div>
          <p className={styles.prompt}>
            By clicking “Continue”, you agree to the <br /> <b>Terms of Use</b>{" "}
            and {""}
            <b>Privacy Policy.</b>
          </p>
        </div>
      </form>
    );
};

export default VerifyEmail;
