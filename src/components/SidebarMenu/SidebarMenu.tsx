import React, { useState } from "react";
import {
  MenuItemContainer,
  ItemButton,
  ArrowDown,
  ArrowUp,
  Overlay,
  Sidebar,
  CloseButton,
  IconClose,
} from "./SidebarMenu.styled";

export type MenuItem = {
  label: string;
  children?: MenuItem[];
};

type SidebarMenuProps = {
  items: MenuItem[];
  onClose?: () => void;
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ items, onClose }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpandItem = (label: string) => {
    setExpandedItems((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const renderMenuItems = (menuItems: MenuItem[], depthLevel = 0) =>
    menuItems.map((item) => (
      <MenuItemContainer key={item.label} level={depthLevel}>
        <ItemButton onClick={() => item.children && toggleExpandItem(item.label)}>
          {item.label}
          {item.children && (expandedItems[item.label] ? <ArrowUp /> : <ArrowDown />)}
        </ItemButton>
        {item.children && expandedItems[item.label] && renderMenuItems(item.children, depthLevel + 1)}
      </MenuItemContainer>
    ));

  return (
    <Overlay onClick={onClose}>
      <Sidebar onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <IconClose />
        </CloseButton>
        {renderMenuItems(items)}
      </Sidebar>
    </Overlay>
  );
};
