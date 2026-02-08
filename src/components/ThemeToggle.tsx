"use client";

import { ToggleButton, useTheme } from "@once-ui-system/core";
import React, { useEffect, useState } from "react";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    setCurrentTheme(
      document.documentElement.getAttribute("data-theme") || "light",
    );
  }, [theme]);

  const icon = currentTheme === "dark" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  const handleToggle = () => {
    setTheme(nextTheme);
  };

  return (
    <ToggleButton
      size="l"
      prefixIcon={icon}
      onClick={handleToggle}
      onTouchEnd={(e: React.TouchEvent) => {
        e.preventDefault();
        handleToggle();
      }}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
};
