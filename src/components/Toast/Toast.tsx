import React, { useEffect, useState } from "react";
import { ToastContainer, CloseButton, IconClose } from "./Toast.styled";

export type ToastProps = {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose?: () => void;
};

export const Toast: React.FC<ToastProps> = ({ message, type = "info", duration = 3000, onClose }) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);

  useEffect(() => {
    const autoCloseTimer = setTimeout(() => setIsClosing(true), duration);
    return () => clearTimeout(autoCloseTimer);
  }, [duration]);

  useEffect(() => {
    if (isClosing) {
      const closeAnimationTimer = setTimeout(() => {
        onClose?.();
      }, 300);
      return () => clearTimeout(closeAnimationTimer);
    }
  }, [isClosing, onClose]);

  const handleCloseButtonClick = () => {
    setIsClosing(true);
  };

  return (
    <ToastContainer type={type} leaving={isClosing} role="alert" aria-live="assertive">
      <span>{message}</span>
      <CloseButton onClick={handleCloseButtonClick} aria-label="Close notification">
        <IconClose />
      </CloseButton>
    </ToastContainer>
  );
};
