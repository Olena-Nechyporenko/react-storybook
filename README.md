# Storybook

## Setup Instructions

### 1. Clone the repository:

```bash
git clone https://github.com/Olena-Nechyporenko/react-storybook.git
cd react-storybook
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Storybook

```bash
npm run storybook
```

### 4. Open your browser and go to http://localhost:6006 to view components and their states.

## Components Overview

### Input

- **Supports types:** `text`, `password`, `number`.

- **Props:**

  - `clearable` (boolean): Show clear button.
  - `value` and `onChange` for controlled usage.

- **Features:**
  - Password visibility toggle.
  - Number input validation.
  - Clear input button.

### SidebarMenu

Sidebar navigation menu with support for nested items.

**Props:**

- `items`: array of menu items with optional children.
- `onClose`: function called when sidebar closes.

**Features:**

- Expand/collapse nested menu items.
- Overlay click to close.
- Animated slide-in from right.

### Toast

Notification component with message and type.

**Props:**

- `message` (string): Notification text.
- `type` (one of `"info" | "success" | "warning" | "error"`).
- `duration` (number): Auto-dismiss time in milliseconds.
- `onClose`: callback on close.

**Features:**

- Auto-dismiss with fade out.
- Manual close button.
- ARIA roles for accessibility.

## Screenshots

![Storybook](/assets/storybook.png) _Storybook_

![Storybook](/assets/input-1.png) _Input_

![Storybook](/assets/input-2.png) _Input_

![Storybook](/assets/input-3.png) _Input_

![Storybook](/assets/toast-1.png) _Toast_

![Storybook](/assets/toast-2.png) _Toast_

![Storybook](/assets/menu-1.png) _SidebarMenu_

![Storybook](/assets/menu-2.png) _SidebarMenu_
