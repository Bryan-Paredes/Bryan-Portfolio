"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconButton } from "@/once-ui/components";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <IconButton size="m" variant="secondary" icon="refresh" />; // Placeholder
  }

  const isDark = theme === "dark";

  return (
    <IconButton
      size="m"
      variant="secondary"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      icon={isDark ? "eye" : "eyeOff"} // OnceUI doesn't have standard sun/moon, using eye/eyeOff as fallback or we can add custom icons later
      tooltip={isDark ? "Light mode" : "Dark mode"}
    />
  );
}
