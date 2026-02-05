"use client";

import { ToggleButton, useTheme } from "@once-ui-system/core";
import React, { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.scss";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    setCurrentTheme(
      document.documentElement.getAttribute("data-theme") || "light",
    );
  }, []);

  useEffect(() => {
    setCurrentTheme(
      document.documentElement.getAttribute("data-theme") || "light",
    );
  }, [theme]);

  const icon = currentTheme === "dark" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";

    return (
      <div className={styles.themeToggleWrapper}>
        <ToggleButton
          size="l"
          prefixIcon={icon}
          onClick={() => setTheme(nextTheme)}
          aria-label={`Switch to ${nextTheme} mode`}
        />
      </div>
    );
};
