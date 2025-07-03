import React, { useEffect, useState } from "react";
import { InputWrapper, StyledInput, IconButton, IconOpenEye, IconClosedEye, IconRemove } from "./Input.styled";

type InputProps = {
  type?: string;
  clearable?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({
  type = "text",
  clearable = false,
  value,
  defaultValue = "",
  onChange,
}) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (type === "number") {
      const isValidNumber = newValue === "" || newValue === "-" || /^-?\d*\.?\d*$/.test(newValue);
      if (!isValidNumber) return;
    }

    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleClearInput = () => {
    setInputValue("");
    onChange?.("");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const getInputType = () => {
    if (type === "password") {
      return isPasswordVisible ? "text" : "password";
    }
    return type;
  };

  return (
    <InputWrapper>
      <StyledInput type={getInputType()} value={inputValue} onChange={handleInputChange} hasClear={clearable} />
      {type === "password" && (
        <IconButton onClick={togglePasswordVisibility} aria-label="Toggle password visibility">
          {isPasswordVisible ? <IconOpenEye /> : <IconClosedEye />}
        </IconButton>
      )}
      {clearable && inputValue && (
        <IconButton
          onClick={handleClearInput}
          style={{ right: type === "password" ? "30px" : "5px" }}
          aria-label="Clear input"
        >
          <IconRemove />
        </IconButton>
      )}
    </InputWrapper>
  );
};
