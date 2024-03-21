import {
  paddingStyles,
  PaddingTypes,
  ColorTypes,
  colorStyles,
  RoundedTypes,
  roundedStyles,
  ShadowTypes,
  shadowStrengthStyles,
} from "../StyleGuide";

import { useState } from "react";

export type ButtonProps = {
  index: number;
  padding?: PaddingTypes;
  backgroundColor?: ColorTypes;
  hoverBackgroundColor?: ColorTypes;
  clickedBackgroundColor?: ColorTypes;
  rounded?: RoundedTypes;
  shadowStrength?: ShadowTypes;
  children?: React.ReactNode;
  clicked?: boolean;
  onClick: (index: number) => void;
};

export const Button = ({
  index = 0,
  padding = "md",
  backgroundColor = "toggledOff",
  hoverBackgroundColor = "toggledOn",
  clickedBackgroundColor = "toggledOn",
  shadowStrength = "none",
  rounded = "none",
  children,
  clicked = false,
  onClick,
}: ButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick(index)}
      className={`${roundedStyles[rounded]} ${paddingStyles[padding]} ${shadowStrengthStyles[shadowStrength]} mx-2`}
      style={{
        backgroundColor: hover
          ? clicked
            ? colorStyles[clickedBackgroundColor]
            : colorStyles[hoverBackgroundColor]
          : clicked
            ? colorStyles[clickedBackgroundColor]
            : colorStyles[backgroundColor],
      }}
    >
      {children}
    </button>
  );
};
