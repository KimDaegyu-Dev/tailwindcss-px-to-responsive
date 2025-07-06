# tailwindcss-px-to-responsive

[![npm version](https://img.shields.io/npm/v/tailwindcss-px-to-responsive)](https://www.npmjs.com/package/tailwindcss-px-to-responsive) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

English | [한국어](README_KO.md)

A Tailwind CSS plugin that automatically converts **px**-based utility classes to responsive units like **vw**, **vh**, or **rem**. Easily create a responsive design system by mapping pixel values to viewport or rem units, with full control over which utilities are affected.

---

## Features

- 📏 Convert px-based Tailwind utilities to vw, vh, or rem units
- 🖌️ Customizable: choose which utilities and units to convert
- 💡 Supports spacing, width, height, margin, padding, and more
- ⚡ Provides a React hook to keep viewport CSS variables (`--vw`, `--vh`) up to date

---

## Installation

```bash
npm install tailwindcss-px-to-responsive --save-dev
```

---

## Usage

### 1. Add the plugin to your Tailwind CSS config

```js
// tailwind.config.js
import pxToResponsive from "tailwindcss-px-to-responsive";

export default {
  plugins: [
    pxToResponsive([
      {
        utilities: ["px", "mx", "w"], // Utilities to convert
        unit: "vw", // Target unit: "vw", "vh", "rem", etc.
        max: 200, // Maximum value (optional)
        theme: "spacing", // Theme key to extend (optional)
      },
      { utilities: ["py", "h"], max: 400, unit: "vh" },
      { theme: "fontSize", max: 100, unit: "rem" },
    ]),
  ],
};
```

### 2. Enable viewport CSS variables (for vw/vh)

If you use `vw` or `vh` units, add the provided React hook to your root component to keep `--vw` and `--vh` up to date:

```tsx
import useResizeHook from "tailwindcss-px-to-responsive/src/useResizeHook";

function App() {
  useResizeHook();
  return <YourApp />;
}
```

---

## Options

| Option    | Type     | Description                                                      |
| --------- | -------- | ---------------------------------------------------------------- |
| utilities | string[] | Array of Tailwind utility keys to convert (e.g. ["w", "h", "p"]) |
| unit      | string   | Target unit ("vw", "vh", "rem", etc.)                            |
| max       | number   | Maximum value to generate (default: 100)                         |
| theme     | string   | Tailwind theme key to extend (e.g. "spacing", "width")           |

---

## Example

### Convert width utilities to vw

```js
pxToResponsive([{ utilities: ["w"], unit: "vw", max: 100 }]);
```

- `class="w-50"` → `width: calc(50 * var(--vw));`

### Convert padding and margin to rem

```js
pxToResponsive([{ utilities: ["p", "m"], unit: "rem", max: 32 }]);
```

- `class="p-16"` → `padding: 1rem;` (16px → 1rem)

---

## React Hook: useResizeHook

Keeps CSS variables `--vw` and `--vh` in sync with the actual viewport size. Returns the actual pixel width and height.

```tsx
import useResizeHook from "tailwindcss-px-to-responsive/src/useResizeHook";

function App() {
  const { actualWidth, actualHeight } = useResizeHook();
  return <div>...</div>;
}
```

---

## License

MIT
