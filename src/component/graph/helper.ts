import Color from "color";
import randomColor from "randomcolor";

export const STATIC_COLORS = [
  "#4c5b73",
  "#E8554E",
  "#F19C65",
  "#FFD265",
  "#2AA876",
  "#0A7B83"
];

export const getStaticColors = (
  count: number = 10,
  option?: {
    light: boolean;
  }
): string[] => {
  // 랜덤컬러
  let randomColors = randomColor({
    count: count - STATIC_COLORS.length
  });

  // For 타입스크립트
  if (typeof randomColors === "string") {
    randomColors = [...STATIC_COLORS, randomColors];
  } else {
    randomColors = [...STATIC_COLORS, ...randomColors];
  }
  if (option && option.light) {
    randomColors = randomColors.map(color =>
      Color(color)
        .lighten(0.15)
        .toString()
    );
  }

  return randomColors;
};
