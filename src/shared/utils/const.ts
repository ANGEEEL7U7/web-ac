export const IS_MOBILE: boolean =
  window.matchMedia("(pointer: coarse)").matches;

export const IS_DARK: boolean = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;
