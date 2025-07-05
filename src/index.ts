/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import { spacing, possibleUtilities } from "./utilities";

// px 값을 vw, vh, rem 등으로 변환
function numberToUnit(value: string | number, unit: string): string {
  const cleanValue = (typeof value === "string" ? value : `${value}`).trim();
  const remDivider = 16;
  const number = parseFloat(cleanValue);
  if (!number) return value as string;
  if (unit === "vw") return number === 0 ? "0" : `calc(${number} * var(--vw))`;
  if (unit === "vh") return number === 0 ? "0" : `calc(${number} * var(--vh))`;
  if (unit === "rem") return number === 0 ? "0" : `${number / remDivider}rem`;
  return value as string;
}

// 1~max까지의 값 객체 생성
function makeNumberValues(max = 100, unit = ""): Record<string, string> {
  const values: Record<string, string> = {};
  const remDivider = 16;
  for (let i = 1; i <= max; i++) {
    if (unit === "rem") {
      values[i] = `${i / remDivider}rem`;
      values[`-${i}`] = `-${i / remDivider}rem`;
    } else {
      values[i] = `${i}`;
      values[`-${i}`] = `-${i}`;
    }
  }
  return values;
}

// 유틸리티별 플러그인 생성
function createUtilityPlugin(
  utilityMap: Map<string, string | string[]>,
  util: string,
  unit: string,
  max: number
) {
  // utilityNames: 배열(예: ["h"])
  return plugin(function ({ matchUtilities }: { matchUtilities: any }) {
    const cssProp = utilityMap.get(util);
    matchUtilities(
      {
        [util]: (value: string | number) => {
          if (Array.isArray(cssProp)) {
            const style: Record<string, string> = {};
            for (const prop of cssProp) {
              style[prop] = numberToUnit(value, unit);
            }
            return style;
          } else {
            return { [cssProp as string]: numberToUnit(value, unit) };
          }
        },
      },
      { values: makeNumberValues(max, unit) }
    );
  });
}

// 메인 preset 생성 함수
export default (
  options: {
    utilities?: string[];
    max?: number;
    unit?: string;
    theme?: string;
  }[]
) => {
  const plugins: any[] | undefined = [];
  const themeExtend: Record<string, any> = {};
  for (const option of options) {
    if (option.utilities) {
      for (const [utilityMap, themeKey] of possibleUtilities) {
        for (const util of option.utilities) {
          if (utilityMap.has(util)) {
            // 플러그인: 해당 유틸리티만
            plugins.push(
              createUtilityPlugin(
                utilityMap,
                util,
                option.unit || "",
                option.max || 100
              )
            );
          }
        }
      }
    }
    if (option.theme) {
      let next;
      if (spacing.has(option.theme)) {
        next = makeNumberValues(option.max);
      } else {
        next = makeNumberValues(option.max || 100, option.unit || "");
      }
      themeExtend[option.theme] = next;
    }
  }
  // var(--vh, --vw) 기본값 생성
  return {
    theme: { extend: themeExtend },
    plugins,
  };
};
