export type GlassPanelProps = {
  shadowStrength: "sm" | "md" | "lg";
  padding: "sm" | "md" | "lg";
  rounded: boolean;
  children: React.ReactNode;
};

export const GlassPanel = ({
  shadowStrength = "md",
  rounded = true,
  children,
}: GlassPanelProps) => {
  return (
    <div
      className={`${rounded ? "rounded-md" : ""} p-5 bg-transparent shadow-${shadowStrength} h-full w-full`}
    >
      {children}
    </div>
  );
};
