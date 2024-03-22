import { GlassPanel } from "../GlassPanel";
import { BoxIcon } from "../Icons";
import { useState } from "react";

export type DropdownProps = {
  backgroundColor?: string;
  buttonBackgroundColor?: string;
  hoverBackgroundColor?: string;
  items: DropdownItemProps[];
};

type DropdownItemProps = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

export const Dropdown = ({
  backgroundColor = "rgba(255, 0, 255, 0.5)",
  buttonBackgroundColor = "rgba(255, 0, 255, 1)",
  hoverBackgroundColor = "rgba(255, 0, 255, 0.9)",
  items = [
    {
      icon: <BoxIcon color="white" />,
      label: "Add cube",
      onClick: () => console.log("Add cube"),
    },
    {
      icon: <BoxIcon color="white" />,
      label: "Add sphere",
      onClick: () => console.log("Add sphere"),
    },
  ],
}: DropdownProps) => {
  return (
    <GlassPanel rounded={true} backgroundColor={backgroundColor}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: index === items.length - 1 ? 0 : "5px",
          }}
        >
          <DropdownButton
            key={index}
            icon={item.icon}
            label={item.label}
            buttonBackgroundColor={buttonBackgroundColor}
            hoverBackgroundColor={hoverBackgroundColor}
            onClick={item.onClick}
          />
        </div>
      ))}
    </GlassPanel>
  );
};

type DropdownButtonProps = {
  buttonBackgroundColor: string;
  hoverBackgroundColor: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

const DropdownButton = ({
  onClick = () => {},
  buttonBackgroundColor,
  hoverBackgroundColor,
  icon,
  label,
}: DropdownButtonProps) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick()}
      style={{
        color: "white",
        display: "flex",
        alignItems: "center",
        width: "180px",
        padding: "5px",
        backgroundColor: hover ? hoverBackgroundColor : buttonBackgroundColor,

        borderRadius: "0.375rem",
      }}
    >
      <div
        style={{
          paddingRight: "5px",
        }}
      >
        {icon}
      </div>
      <span
        style={{
          fontSize: "14px",
        }}
      >
        {label}
      </span>
    </button>
  );
};
