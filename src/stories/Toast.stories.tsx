import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Toast } from "../components/Toast/Toast";
import type { ToastProps } from "../components/Toast/Toast";
import { ShowButton } from "../components/Toast/Toast.styled";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: { type: "text" },
    },
    type: {
      control: { type: "select" },
      options: ["success", "error", "info"],
    },
    duration: {
      control: { type: "number" },
    },
    onClose: {
      action: "closed",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const ToastWithVisibility = (args: ToastProps) => {
  const [isToastVisible, setIsToastVisible] = useState<boolean>(true);

  return isToastVisible ? (
    <Toast {...args} onClose={() => setIsToastVisible(false)} />
  ) : (
    <ShowButton onClick={() => setIsToastVisible(true)}>Show Toast</ShowButton>
  );
};

export const Success: Story = {
  render: (args) => <ToastWithVisibility {...args} />,
  args: {
    message: "Operation successful!",
    type: "success",
    duration: 2000,
  },
};

export const Error: Story = {
  render: (args) => <ToastWithVisibility {...args} />,
  args: {
    message: "Something went wrong",
    type: "error",
    duration: 3000,
  },
};

export const Info: Story = {
  render: (args) => <ToastWithVisibility {...args} />,
  args: {
    message: "Here is some information",
    type: "info",
    duration: 4000,
  },
};

export const WithManualClose: Story = {
  render: (args) => <ToastWithVisibility {...args} />,
  args: {
    message: "Close me manually",
    type: "info",
    duration: 10000,
  },
};
