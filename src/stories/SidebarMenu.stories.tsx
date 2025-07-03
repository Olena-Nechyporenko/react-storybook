import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";
import type { MenuItem } from "../components/SidebarMenu/SidebarMenu";
import { useState } from "react";
import { OpenMenuButton } from "../components/SidebarMenu/SidebarMenu.styled";

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: { type: "object" },
    },
    onClose: {
      action: "onClose",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const oneLevelItems: MenuItem[] = [{ label: "Dashboard" }, { label: "Help" }];

const twoLevelItems: MenuItem[] = [
  { label: "Dashboard" },
  {
    label: "Settings",
    children: [{ label: "Profile" }, { label: "Billing" }],
  },
  { label: "Help" },
];

const SidebarMenuWithToggle = (args: React.ComponentProps<typeof SidebarMenu>) => {
  const [isOpenSidebarMenu, setIsOpenSidebarMenu] = useState<boolean>(false);

  return (
    <>
      <OpenMenuButton onClick={() => setIsOpenSidebarMenu(true)}>Open Menu</OpenMenuButton>

      {isOpenSidebarMenu && <SidebarMenu {...args} onClose={() => setIsOpenSidebarMenu(false)} />}
    </>
  );
};

export const OneLevel: Story = {
  render: (args) => <SidebarMenuWithToggle {...args} />,
  args: {
    items: oneLevelItems,
  },
};

export const TwoLevelNested: Story = {
  render: (args) => <SidebarMenuWithToggle {...args} />,
  args: {
    items: twoLevelItems,
  },
};
