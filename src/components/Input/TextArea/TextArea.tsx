import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { ITextAreaProps } from "@/components/types";
import { validateEmail } from "@/app/global";

interface ImperativeHandle {
  getValue: () => string;
  setValue: (value: string) => void;
  focus: () => void;
}

const TextArea = forwardRef<ImperativeHandle, ITextAreaProps>(
  ({ label, placeholder, hint, isError, ...restProps }, ref) => {
    const [isFilled, setIsFilled] = useState(false);
    const [hasError, setHasError] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement | null>(null);

    useImperativeHandle(ref, () => ({
      getValue: () => {
        return inputRef.current ? inputRef.current.value : "";
      },
      setValue: (value: string) => {
        if (inputRef.current) {
          inputRef.current.value = value;
          setIsFilled(!!value);
          // validateInput(value);
        }
      },
      focus: () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
    }));

    const validateInput = (value: string) => {
      if (!value) {
        setHasError(false);
        return;
      }

      if (restProps?.type === "password") {
        const isValid = value.length >= 8;
        setHasError(!isValid);
      } else if (restProps?.type === "email") {
        const isValid = validateEmail(value);
        setHasError(!isValid);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setIsFilled(!!e.target.value);
      validateInput(value);

      if (restProps.onChange) {
        restProps.onChange(e);
      }
    };

    return (
      <div className="text-input-container">
        {label && (
          <label
            className={`input-label ${
              !!restProps.required && "required-label"
            }`}
            htmlFor={restProps.id || `text-input-textarea-${label}`}
          >
            {label}
          </label>
        )}
        <div
          className={`text-input textarea ${isFilled ? "filled" : ""} ${
            hasError || isError ? "error" : ""
          }`}
        >
          <textarea
            type={restProps.type}
            placeholder={placeholder || "Enter a description..."}
            ref={inputRef}
            {...restProps}
            onChange={handleChange}
            aria-describedby={"hint"}
            id={restProps.id || `text-input-textarea-${label}`}
            aria-invalid={hasError}
          />
        </div>
        {(hasError || isError) && (
          <span
            id="hint"
            className={`hint ${
              hasError && restProps?.type !== "password" && "error"
            }`}
          >
            {hint
              ? hint
              : restProps.type === "password"
              ? "Must be at least 8 characters"
              : restProps.type === "email"
              ? "must be a valid email"
              : ""}
          </span>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
