import styled, { keyframes } from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const OpenMenuButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 22px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgb(0 123 255 / 0.4);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 999;
  backdrop-filter: blur(4px);
`;

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background: #f9f9fb;
  box-shadow: -6px 0 12px rgba(0, 0, 0, 0.15);
  padding: 70px 24px 24px 24px;
  animation: ${slideIn} 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px 0 0 8px;
`;

export const MenuItemContainer = styled.div<{ level: number }>`
  padding-left: ${({ level }) => level * 20}px;
  margin-bottom: 6px;
`;

export const ItemButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  font-size: 17px;
  font-weight: 500;
  color: #222;
  padding: 10px 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #e6f0ff;
    color: #0056b3;
  }

  &:focus-visible {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

export const ArrowDown = styled(FaAngleDown)`
  width: 16px;
  height: 16px;
  color: #888;
  user-select: none;
`;

export const ArrowUp = styled(FaAngleUp)`
  width: 16px;
  height: 16px;
  color: #0056b3;
  user-select: none;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  left: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e0e0e0;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #c0c0c0;
  }

  &:focus-visible {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

export const IconClose = styled(IoMdClose)`
  width: 20px;
  height: 20px;
  color: #333;
`;
