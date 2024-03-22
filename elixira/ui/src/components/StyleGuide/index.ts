export type PaddingTypes = "sm" | "md" | "lg";
export type ShadowTypes = "none" | "sm" | "md" | "lg";
export type RoundedTypes = "none" | "sm" | "md" | "lg";
export type ColorTypes = "toggledOn" | "toggledOff";

export const paddingStyles = {
  sm: "p-2",
  md: "p-5",
  lg: "p-8",
};

export const roundedStyles = {
  none: "",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-xl",
};

export const shadowStrengthStyles = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

export const colorStyles = {
  toggledOff: "#8142ff",
  toggledOn: "#ff00ff",
};
