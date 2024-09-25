import React, { useState, forwardRef, useEffect } from "react";
import { ITextInputProps } from "@/components/types";
import { Icon } from "@/components/Atoms/Atoms";

const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
  ({ label, placeholder, hint, ...restProps }, ref) => {
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
      <div className="text-input-container">
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
        <div className={`text-input ${isFilled ? "filled" : ""}`}>
          <input
            type={restProps.type}
            placeholder={placeholder}
            ref={ref}
            {...restProps}
            onChange={handleChange}
            aria-describedby={"hint"}
          />
          {hint || (restProps.type === "password" && <Icon icon="hint" />)}
        </div>
        {hint ||
          (restProps.type === "password" && (
            <span id="hint" className="hint">
              {restProps.type === "password"
                ? "Must be at least 8 characters"
                : hint}
            </span>
          ))}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
