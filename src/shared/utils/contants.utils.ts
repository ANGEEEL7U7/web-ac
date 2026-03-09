import defaultTheme from "tailwindcss/defaultTheme";

export const IS_MOBILE: boolean =
  window.matchMedia("(pointer: coarse)").matches;

export const IS_DARK: boolean = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

type _breaksType = keyof typeof defaultTheme.screens;
export const BreakPoints = Object.fromEntries(
  Object.entries(defaultTheme.screens).map(([k, v]) => [k, parseFloat(v) * 16]),
) as Record<_breaksType, number>;
