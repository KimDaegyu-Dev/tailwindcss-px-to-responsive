/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import { spacing, possibleUtilities } from "./utilities";

function numbeToUnit(value, unit) {
  const cleanValue = (typeof value === "string" ? value : `${value}`).trim();
  const remDivder = getComputedStyle(document.documentElement).fontSize;
  const number = parseFloat(cleanValue);
  if (!number) return value;
  if (unit === "vw") return number === 0 ? "0" : `calc(${number} * var(--vw))`;
  if (unit === "vh") return number === 0 ? "0" : `calc(${number} * var(--vh))`;
  if (unit === "rem") return number === 0 ? "0" : `${number / remDivder}rem`;
  return value;
}

const makeNumberValues = (max = 100, unit = "") => {
  if (unit === "rem") {
    const remDivder = getComputedStyle(document.documentElement).fontSize;
    for (let i = 1; i <= max; i++) {
      values[i] = `${i / remDivder}rem`;
      values[`-${i}`] = `-${i / remDivder}rem`;
    }
  } else {
    for (let i = 1; i <= max; i++) {
      values[i] = `${i}`;
      values[`-${i}`] = `-${i}`;
    }
  }
  return values;
};

function numberToResponsive(utilities = []) {
  const utilityMap = {};
  for (const utility of utilities) {
    utilityMap[utility.utilityNames] = (value) => {
      return numbeToUnit(value, utility.unit);
    };
  }
  return plugin(function ({ matchUtilities, theme }) {
    matchUtilities(utilityMap);
  });
}

module.exports = (options) => {
  const utilities = [];
  const preset = {
    theme: {
      extend: {},
    },
    plugins: [numberToResponsive(utilities)],
  };
  for (const option of options) {
    if (option.utilities) {
      for (const utility of option.utilities) {
        for (const possibleUtility of possibleUtilities) {
          if (possibleUtility.has(utility)) {
            preset.theme.extend[possibleUtility.toString()] = makeNumberValues(
              option.max
            );
            utilities.push({
              utilityNames: utility,
              unit: option.unit,
            });
          }
        }
      }
    }
    if (option.theme) {
      if (spacing.has(option.theme)) {
        preset.theme.extend[option.theme] = makeNumberValues(option.max);
      } else {
        preset.theme.extend[option.theme] = makeNumberValues(
          option.max,
          option.unit
        );
      }
    }
  }
  return preset;
};
