import styled from "styled-components";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeOff } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

export const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledInput = styled.input<{ hasClear: boolean }>`
  padding: 8px ${(props) => (props.hasClear ? "30px" : "8px")} 8px 8px;
  width: 200px;

  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  color: #333;

  border: 1.5px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 6px rgba(0, 123, 255, 0.3);
  }
`;

export const IconButton = styled.button`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #272727;
  background: none;
  border: none;
  cursor: pointer;
`;

export const IconOpenEye = styled(MdOutlineRemoveRedEye)`
  width: 20px;
  height: 20px;
`;

export const IconClosedEye = styled(LuEyeOff)`
  width: 20px;
  height: 20px;
`;

export const IconRemove = styled(IoMdClose)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;
