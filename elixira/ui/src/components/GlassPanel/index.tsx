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
  children?: React.ReactNode;
};

export const GlassPanel = ({
  shadowStrength = "md",
  rounded = true,
  padding = "sm",
  children,
  backgroundColor = "rgba(0, 0, 0, 0.3)",
}: GlassPanelProps) => {
  return (
    <div
      className={`${rounded ? "rounded-md" : ""} ${shadowStrengthStyles[shadowStrength]} ${paddingStyles[padding]} h-full w-full`}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </div>
  );
};
