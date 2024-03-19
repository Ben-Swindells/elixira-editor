export type ButtonProps = {
  type: "primary" | "secondary" | "midnight";
  label: string;
};

export const Button = ({
  type = "primary",
  label = "Button label",
}: ButtonProps) => {
  let buttonType = "";
  if (type === "primary") {
    buttonType = "bg-primary text-white";
  }
  return (
    <button className={`rounded-sm px-5 py-2 ${buttonType}`}>{label}</button>
  );
};
