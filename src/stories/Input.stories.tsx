import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../components/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Input/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "number"],
    },
    clearable: {
      control: { type: "boolean" },
    },
    value: {
      control: { type: "text" },
    },
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    clearable: false,
  },
};

export const TextClearable: Story = {
  args: {
    type: "text",
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    clearable: false,
  },
};

export const PasswordClearable: Story = {
  args: {
    type: "password",
    clearable: true,
  },
};

export const Number: Story = {
  args: {
    type: "number",
    clearable: false,
  },
};

export const NumberClearable: Story = {
  args: {
    type: "number",
    clearable: true,
  },
};
