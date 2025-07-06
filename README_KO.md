# tailwindcss-px-to-responsive

[![npm version](https://img.shields.io/npm/v/tailwindcss-px-to-responsive)](https://www.npmjs.com/package/tailwindcss-px-to-responsive) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

한국어 | [English](README.md)

Tailwind CSS의 px 단위 유틸리티를 **vw**, **vh**, **rem** 등 반응형 단위로 자동 변환해주는 Tailwind CSS 플러그인입니다. 픽셀(px) 단위를 뷰포트 기반(vw, vh) 또는 rem 단위로 쉽게 변환하여, 반응형 웹 개발을 더욱 간편하게 만들어줍니다.

---

## 주요 특징

- 📏 Tailwind px 유틸리티를 vw, vh, rem 등으로 변환
- 🖌️ 변환할 유틸리티와 단위, 최대값 등 자유롭게 설정 가능
- 💡 spacing, width, height, margin, padding 등 다양한 유틸리티 지원
- ⚡ 뷰포트 단위 CSS 변수(`--vw`, `--vh`) 자동 갱신용 React hook 제공

---

## 설치

```bash
npm install tailwindcss-px-to-responsive --save-dev
```

---

## 사용법

### 1. Tailwind CSS 설정에 플러그인 추가

```js
// tailwind.config.js
import pxToResponsive from "tailwindcss-px-to-responsive";

export default {
  plugins: [
    pxToResponsive([
      {
        utilities: ["px", "mx", "w"], // 변환할 유틸리티
        unit: "vw", // 변환 단위: "vw", "vh", "rem" 등
        max: 200, // 최대 값 (선택)
      },
      { utilities: ["py", "h"], max: 400, unit: "vh" },
      { theme: "fontSize", max: 100, unit: "rem" },
    ]),
  ],
};
```

### 2. 뷰포트 단위 CSS 변수 적용 (vw/vh 사용 시)

`vw`, `vh` 단위를 사용할 경우, 제공되는 React hook을 루트 컴포넌트에 적용하세요.

```tsx
import useResizeHook from "tailwindcss-px-to-responsive/src/useResizeHook";

function App() {
  useResizeHook(); // 뷰포트 변화 감지 및 --vw, --vh 변수 자동 갱신
  return <YourApp />;
}
```

---

## 옵션

| 옵션      | 타입     | 설명                                                       |
| --------- | -------- | ---------------------------------------------------------- |
| utilities | string[] | 변환할 Tailwind 유틸리티 키워드 배열 (예: ["w", "h", "p"]) |
| unit      | string   | 변환할 단위 ("vw", "vh", "rem" 등)                         |
| max       | number   | 생성할 최대 값 (기본값: 100)                               |
| theme     | string   | Tailwind theme 확장 키 (예: "spacing", "width" 등)         |

---

## 예시

### w 유틸리티를 vw로 변환

```js
pxToResponsive([{ utilities: ["w"], unit: "vw", max: 100 }]);
```

- `class="w-50"` → `width: calc(50 * var(--vw));`

### padding, margin을 rem으로 변환

```js
pxToResponsive([{ utilities: ["p", "m"], unit: "rem", max: 32 }]);
```

- `class="p-16"` → `padding: 1rem;` (16px → 1rem)

---

## React Hook: useResizeHook

뷰포트 크기 변화에 따라 CSS 변수(`--vw`, `--vh`)를 자동으로 갱신합니다. 실제 디바이스 픽셀 기준 뷰포트 크기를 반환합니다.

```tsx
import useResizeHook from "tailwindcss-px-to-responsive/src/useResizeHook";

function App() {
  const { actualWidth, actualHeight } = useResizeHook();
  return <div>...</div>;
}
```

---

## 라이선스

MIT
