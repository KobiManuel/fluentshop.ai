import React, { useState, forwardRef, useEffect } from "react";
import { ITextInputProps } from "@/components/types";

const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
  ({ label, placeholder, ...restProps }, ref) => {
    const [isFilled, setIsFilled] = useState(false);

    // const isMutableRefObject = (
    //   ref: React.Ref<HTMLInputElement>
    // ): ref is React.MutableRefObject<HTMLInputElement | null> => {
    //   return ref !== null && typeof ref === "object" && "current" in ref;
    // };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsFilled(!!e.target.value);
    };

    return (
      <>
        {label && (
          <label
            className={`input-label ${
              !!restProps.required && "required-label"
            }`}
            htmlFor="text-input"
          >
            {label}
          </label>
        )}
        <div
          className={`text-input ${isFilled ? "filled" : ""}`}
          style={{ marginTop: label ? "6px" : undefined }}
        >
          <input
            type="text"
            placeholder={placeholder}
            ref={ref}
            {...restProps}
            onChange={handleChange}
          />
        </div>
      </>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
