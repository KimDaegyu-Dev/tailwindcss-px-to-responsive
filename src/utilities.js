//  padding, margin, width, minWidth, maxWidth, height, minHeight, maxHeight, gap, inset, space, translate, scrollMargin, and scrollPadding
const spacing = new Map([
  ["padding", "padding"],
  ["margin", "margin"],
  ["width", "width"],
  ["minWidth", "min-width"],
  ["maxWidth", "max-width"],
  ["height", "height"],
  ["minHeight", "min-height"],
  ["maxHeight", "max-height"],
  ["gap", "gap"],
  ["borderSpacing", "border-spacing"],
  ["flexBasis", "flex-basis"],
  ["inset", "inset"],
  ["scrollMargin", "scroll-margin"],
  ["scrollPadding", "scroll-padding"],
  ["space", "space"],
  ["textIndent", "text-indent"],
  // translate: "translate",
  ["size", "size"],
  ["spacing", "spacing"],
]);
const spacingHorizontal = new Map([
  ["px", ["padding-left", "padding-right"]],
  ["mx", ["margin-left", "margin-right"]],
  ["w", ["width", "min-width", "max-width"]],
  ["min-w", "min-width"],
  ["max-w", "max-width"],
  ["gap-x", "gap-x"],
  ["inset-left", "inset-inline-start"],
  ["inset-right", "inset-inline-end"],
  ["inset-x", ["inset-inline-start", "inset-inline-end"]],
  ["start", "inset-inline-start"],
  ["end", "inset-inline-end"],
  ["left", "inset-inline-start"],
  ["right", "inset-inline-end"],
  ["scroll-left", "scroll-margin-left"],
  ["scroll-right", "scroll-margin-right"],
  ["scroll-mx", ["scroll-margin-left", "scroll-margin-right"]],
  ["scroll-ml", "scroll-margin-left"],
  ["scroll-mr", "scroll-margin-right"],
  ["scroll-ms", "scroll-margin-start"],
  ["scroll-me", "scroll-margin-end"],
  ["scroll-ps", "scroll-padding-start"],
  ["scroll-pe", "scroll-padding-end"],
  ["scroll-pl", "scroll-padding-left"],
  ["scroll-pr", "scroll-padding-right"],
  ["scroll-px", ["scroll-padding-left", "scroll-padding-right"]],
  ["border-spacing-x", "border-spacing-x"],
]);
const spacingVertical = new Map([
  ["py", ["padding-top", "padding-bottom"]],
  ["my", ["margin-top", "margin-bottom"]],
  ["h", ["height", "min-height", "max-height"]],
  ["min-h", "min-height"],
  ["max-h", "max-height"],
  ["gap-y", "gap-y"],
  ["inset-top", "inset-block-start"],
  ["inset-bottom", "inset-block-end"],
  ["inset-y", ["inset-block-start", "inset-block-end"]],
  ["top", "inset-block-start"],
  ["bottom", "inset-block-end"],
  ["border-spacing-y", "border-spacing-y"],
  ["scroll-my", ["scroll-margin-top", "scroll-margin-bottom"]],
  ["scroll-mt", "scroll-margin-top"],
  ["scroll-mb", "scroll-margin-bottom"],
  ["scroll-pt", "scroll-padding-top"],
  ["scroll-pb", "scroll-padding-bottom"],
  ["scroll-py", ["scroll-padding-top", "scroll-padding-bottom"]],
]);
const padding = new Map([
  ["p", "padding"],
  ["pt", "padding-top"],
  ["pr", "padding-right"],
  ["pb", "padding-bottom"],
  ["pl", "padding-left"],
  ["px", ["padding-left", "padding-right"]],
  ["py", ["padding-top", "padding-bottom"]],
  ["ps", "padding-inline-start"],
  ["pe", "padding-inline-end"],
]);

const margin = new Map([
  ["m", "margin"],
  ["mt", "margin-top"],
  ["mr", "margin-right"],
  ["mb", "margin-bottom"],
  ["ml", "margin-left"],
  ["mx", ["margin-left", "margin-right"]],
  ["my", ["margin-top", "margin-bottom"]],
  ["ms", "margin-inline-start"],
  ["me", "margin-inline-end"],
]);

const width = new Map([
  ["w", "width"],
  ["min-w", "min-width"],
  ["max-w", "max-width"],
]);

const height = new Map([
  ["h", "height"],
  ["min-h", "min-height"],
  ["max-h", "max-height"],
]);
const gap = new Map([
  ["gap", "gap"],
  ["gap-x", "gap-x"],
  ["gap-y", "gap-y"],
]);

const border = new Map([
  ["border", "border-width"],
  ["border-t", "border-top-width"],
  ["border-r", "border-right-width"],
  ["border-b", "border-bottom-width"],
  ["border-l", "border-left-width"],
  ["border-x", ["border-left-width", "border-right-width"]],
  ["border-y", ["border-top-width", "border-bottom-width"]],
]);
const borderSpacing = new Map([
  ["border-spacing", ["border-spacing-x", "border-spacing-y"]],
  ["border-spacing-x", "border-spacing-x"],
  ["border-spacing-y", "border-spacing-y"],
]);
const textIndent = new Map([["indent", "text-indent"]]);
const size = new Map([
  ["size", ["width", "height"]],
  ["size-min", ["min-width", "min-height"]],
  ["size-max", ["max-width", "max-height"]],
]);
const flexBasis = new Map([["basis", "flex-basis"]]);
const inset = new Map([
  ["inset", "inset"],
  ["inset-left", "inset-inline-start"],
  ["inset-right", "inset-inline-end"],
  ["inset-top", "inset-block-start"],
  ["inset-bottom", "inset-block-end"],
  ["inset-x", ["inset-inline-start", "inset-inline-end"]],
  ["inset-y", ["inset-block-start", "inset-block-end"]],
  ["start", "inset-inline-start"],
  ["end", "inset-inline-end"],
  ["top", "top"],
  ["right", "right"],
  ["bottom", "bottom"],
  ["left", "left"],
]);
const scrollMargin = new Map([
  ["scroll-m", "scroll-margin"],
  ["scroll-mx", ["scroll-margin-left", "scroll-margin-right"]],
  ["scroll-my", ["scroll-margin-top", "scroll-margin-bottom"]],
  ["scroll-ms", "scroll-margin-start"],
  ["scroll-me", "scroll-margin-end"],
  ["scroll-mt", "scroll-margin-top"],
  ["scroll-mb", "scroll-margin-bottom"],
  ["scroll-ml", "scroll-margin-left"],
  ["scroll-mr", "scroll-margin-right"],
]);
const scrollPadding = new Map([
  ["scroll-p", "scroll-padding"],
  ["scroll-px", ["scroll-padding-left", "scroll-padding-right"]],
  ["scroll-py", ["scroll-padding-top", "scroll-padding-bottom"]],
  ["scroll-ps", "scroll-padding-start"],
  ["scroll-pe", "scroll-padding-end"],
  ["scroll-pt", "scroll-padding-top"],
  ["scroll-pb", "scroll-padding-bottom"],
  ["scroll-pl", "scroll-padding-left"],
  ["scroll-pr", "scroll-padding-right"],
]);

const space = new Map([["space", "space"]]);
const possibleUtilities = [
  [padding, "padding"],
  [margin, "margin"],
  [width, "width"],
  [height, "height"],
  [gap, "gap"],
  [border, "border"],
  [textIndent, "text-indent"],
  [size, "size"],
  [flexBasis, "flex-basis"],
  [inset, "inset"],
  [scrollMargin, "scroll-margin"],
  [scrollPadding, "scroll-padding"],
  [space, "space"],
  [spacing, "spacing"],
  [borderSpacing, "border-spacing"],
];

export {
  padding,
  margin,
  width,
  height,
  gap,
  border,
  textIndent,
  size,
  flexBasis,
  inset,
  scrollMargin,
  scrollPadding,
  space,
  spacing,
  borderSpacing,
  possibleUtilities,
};
