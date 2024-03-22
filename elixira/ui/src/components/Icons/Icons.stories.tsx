import React from "react";
import * as Icons from ".";

export default {
  title: "Elixira UI/Icons",
  component: null, // Since this story is a collection of components, `component` is not needed.
};

export const AllIcons = () => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {Object.entries(Icons).map(([IconName, IconComponent]) => (
      <div
        key={IconName}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <IconComponent />
        <span>{IconName}</span>
      </div>
    ))}
  </div>
);
