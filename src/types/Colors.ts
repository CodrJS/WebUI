// a neat (hacky?) way of getting an array and type all at once
const ColorCodes = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indego",
  "violet",
  "sky",
  "fuchsia",
  "pink",
  "rose",
] as const;
export type ColorCodeType = typeof ColorCodes[number];
export type BgColorType = `bg-${ColorCodeType}-600`;
const BgColorsClasses: BgColorType[] = Array.from(
  ColorCodes,
  v => `bg-${v}-600`,
) as BgColorType[];

const Colors = {
  names: ColorCodes,
  bgClasses: BgColorsClasses,
};

export default Colors;
