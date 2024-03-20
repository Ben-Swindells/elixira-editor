import {
  paddingStyles,
  PaddingTypes,
  ShadowTypes,
  shadowStrengthStyles,
} from "../StyleGuide";

export type GlassPanelProps = {
  shadowStrength?: ShadowTypes;
  padding?: PaddingTypes;
  rounded?: boolean;
  backgroundColor?: string;
  opacity?: number;
  children?: React.ReactNode;
};

export const GlassPanel = ({
  shadowStrength = "md",
  rounded = true,
  padding = "sm",
  children,
  backgroundColor = "black",
  opacity = 0.5,
}: GlassPanelProps) => {
  return (
    <div
      className={`${rounded ? "rounded-md" : ""} ${shadowStrengthStyles[shadowStrength]} ${paddingStyles[padding]} h-full w-full`}
      style={{
        backgroundColor: backgroundColor,
        opacity,
      }}
    >
      {children}
    </div>
  );
};
