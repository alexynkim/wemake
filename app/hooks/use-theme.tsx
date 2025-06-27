import { createContext, useContext, useEffect, useState } from "react";
import type { Theme } from "~/lib/themes";
import { getThemeById, getDefaultTheme } from "~/lib/themes";

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  isDark: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getDefaultTheme());
  const [isDark, setIsDark] = useState(false);

  // 로컬 스토리지에서 테마 설정 불러오기
  useEffect(() => {
    const savedThemeId = localStorage.getItem("theme");
    const savedDarkMode = localStorage.getItem("darkMode") === "true";

    if (savedThemeId) {
      const theme = getThemeById(savedThemeId);
      if (theme) {
        setCurrentTheme(theme);
      }
    }

    setIsDark(savedDarkMode);
  }, []);

  // 테마 변경 함수
  const setTheme = (themeId: string) => {
    const theme = getThemeById(themeId);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem("theme", themeId);
      applyTheme(theme, isDark);
    }
  };

  // 다크모드 토글 함수
  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    applyTheme(currentTheme, newDarkMode);
  };

  // CSS 변수 적용 함수
  const applyTheme = (theme: Theme, dark: boolean) => {
    const colors = dark ? theme.colors.dark : theme.colors.light;
    const root = document.documentElement;

    // 기존 테마 클래스 제거
    root.classList.remove("dark");
    if (dark) {
      root.classList.add("dark");
    }

    // CSS 변수 설정
    root.style.setProperty("--background", colors.background);
    root.style.setProperty("--foreground", colors.foreground);
    root.style.setProperty("--card", colors.card);
    root.style.setProperty("--card-foreground", colors.cardForeground);
    root.style.setProperty("--popover", colors.popover);
    root.style.setProperty("--popover-foreground", colors.popoverForeground);
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--primary-foreground", colors.primaryForeground);
    root.style.setProperty("--secondary", colors.secondary);
    root.style.setProperty(
      "--secondary-foreground",
      colors.secondaryForeground
    );
    root.style.setProperty("--muted", colors.muted);
    root.style.setProperty("--muted-foreground", colors.mutedForeground);
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--accent-foreground", colors.accentForeground);
    root.style.setProperty("--destructive", colors.destructive);
    root.style.setProperty("--border", colors.border);
    root.style.setProperty("--input", colors.input);
    root.style.setProperty("--ring", colors.ring);
    root.style.setProperty("--chart-1", colors.chart1);
    root.style.setProperty("--chart-2", colors.chart2);
    root.style.setProperty("--chart-3", colors.chart3);
    root.style.setProperty("--chart-4", colors.chart4);
    root.style.setProperty("--chart-5", colors.chart5);
    root.style.setProperty("--sidebar", colors.sidebar);
    root.style.setProperty("--sidebar-foreground", colors.sidebarForeground);
    root.style.setProperty("--sidebar-primary", colors.sidebarPrimary);
    root.style.setProperty(
      "--sidebar-primary-foreground",
      colors.sidebarPrimaryForeground
    );
    root.style.setProperty("--sidebar-accent", colors.sidebarAccent);
    root.style.setProperty(
      "--sidebar-accent-foreground",
      colors.sidebarAccentForeground
    );
    root.style.setProperty("--sidebar-border", colors.sidebarBorder);
    root.style.setProperty("--sidebar-ring", colors.sidebarRing);
  };

  // 테마 변경 시 CSS 변수 적용
  useEffect(() => {
    applyTheme(currentTheme, isDark);
  }, [currentTheme, isDark]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        isDark,
        toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
