import React from "react";
import { useTheme } from "./ThemeContext";

function SomeComponent() {
  const { theme } = useTheme();

  const containerStyle = {
    backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
    color: theme === "light" ? "#333" : "#f5f5f5",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      <h2>Themed Component</h2>
      <p>This component adapts its style based on the current theme.</p>
    </div>
  );
}

export default SomeComponent;
