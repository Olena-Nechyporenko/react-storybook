import styled, { keyframes, css } from "styled-components";
import { IoMdClose } from "react-icons/io";
import type { ToastProps } from "./Toast";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(100%); }
  to { opacity: 1; transform: translateX(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(100%); }
`;

export const ShowButton = styled.button`
  font-size: 15px;
  font-weight: 600;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const getBackgroundColor = (type: ToastProps["type"]): string => {
  switch (type) {
    case "success":
      return "#4caf50";
    case "error":
      return "#f44336";
    case "info":
      return "#f59629d2";
    default:
      return "#2196f3";
  }
};

export const ToastContainer = styled.div<{ type: ToastProps["type"]; leaving: boolean }>`
  font-size: 16px;
  font-weight: 600;
  position: fixed;
  bottom: 20px;
  right: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-color: ${({ type }) => getBackgroundColor(type)};
  border-radius: 4px;
  color: #fff;
  min-width: 250px;
  padding: 16px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  animation: ${({ leaving }) =>
    leaving
      ? css`
          ${fadeOut} 0.3s forwards
        `
      : css`
          ${fadeIn} 0.3s forwards
        `};
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  color: #fff;
  padding: 0;
  cursor: pointer;
`;

export const IconClose = styled(IoMdClose)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;
