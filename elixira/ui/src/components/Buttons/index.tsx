import {
  paddingStyles,
  PaddingTypes,
  ColorTypes,
  colorStyles,
} from "../StyleGuide";

export type ButtonProps = {
  padding?: PaddingTypes;
  backgroundColor?: ColorTypes;
  children?: React.ReactNode;
};

export const Button = ({
  padding = "md",
  backgroundColor = "toggledOn",
  children,
}: ButtonProps) => {
  return (
    <button
      className={`rounded-sm ${paddingStyles[padding]}`}
      style={{
        backgroundColor: colorStyles[backgroundColor],
      }}
    >
      {children}
    </button>
  );
};
