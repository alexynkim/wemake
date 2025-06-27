export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
}

export interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  border: string;
  input: string;
  ring: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
  sidebar: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
}

export const themes: Theme[] = [
  {
    id: "default",
    name: "Default",
    description: "Default theme",
    colors: {
      light: {
        background: "oklch(1 0 0)",
        foreground: "oklch(0.141 0.005 285.823)",
        card: "oklch(1 0 0)",
        cardForeground: "oklch(0.141 0.005 285.823)",
        popover: "oklch(1 0 0)",
        popoverForeground: "oklch(0.141 0.005 285.823)",
        primary: "oklch(0.723 0.219 149.579)",
        primaryForeground: "oklch(0.982 0.018 155.826)",
        secondary: "oklch(0.967 0.001 286.375)",
        secondaryForeground: "oklch(0.21 0.006 285.885)",
        muted: "oklch(0.967 0.001 286.375)",
        mutedForeground: "oklch(0.552 0.016 285.938)",
        accent: "oklch(0.967 0.001 286.375)",
        accentForeground: "oklch(0.21 0.006 285.885)",
        destructive: "oklch(0.577 0.245 27.325)",
        border: "oklch(0.92 0.004 286.32)",
        input: "oklch(0.92 0.004 286.32)",
        ring: "oklch(0.723 0.219 149.579)",
        chart1: "oklch(0.646 0.222 41.116)",
        chart2: "oklch(0.6 0.118 184.704)",
        chart3: "oklch(0.398 0.07 227.392)",
        chart4: "oklch(0.828 0.189 84.429)",
        chart5: "oklch(0.769 0.188 70.08)",
        sidebar: "oklch(0.985 0 0)",
        sidebarForeground: "oklch(0.141 0.005 285.823)",
        sidebarPrimary: "oklch(0.723 0.219 149.579)",
        sidebarPrimaryForeground: "oklch(0.982 0.018 155.826)",
        sidebarAccent: "oklch(0.967 0.001 286.375)",
        sidebarAccentForeground: "oklch(0.21 0.006 285.885)",
        sidebarBorder: "oklch(0.92 0.004 286.32)",
        sidebarRing: "oklch(0.723 0.219 149.579)",
      },
      dark: {
        background: "oklch(0.141 0.005 285.823)",
        foreground: "oklch(0.985 0 0)",
        card: "oklch(0.21 0.006 285.885)",
        cardForeground: "oklch(0.985 0 0)",
        popover: "oklch(0.21 0.006 285.885)",
        popoverForeground: "oklch(0.985 0 0)",
        primary: "oklch(0.696 0.17 162.48)",
        primaryForeground: "oklch(0.393 0.095 152.535)",
        secondary: "oklch(0.274 0.006 286.033)",
        secondaryForeground: "oklch(0.985 0 0)",
        muted: "oklch(0.274 0.006 286.033)",
        mutedForeground: "oklch(0.705 0.015 286.067)",
        accent: "oklch(0.274 0.006 286.033)",
        accentForeground: "oklch(0.985 0 0)",
        destructive: "oklch(0.704 0.191 22.216)",
        border: "oklch(1 0 0 / 10%)",
        input: "oklch(1 0 0 / 15%)",
        ring: "oklch(0.527 0.154 150.069)",
        chart1: "oklch(0.488 0.243 264.376)",
        chart2: "oklch(0.696 0.17 162.48)",
        chart3: "oklch(0.769 0.188 70.08)",
        chart4: "oklch(0.627 0.265 303.9)",
        chart5: "oklch(0.645 0.246 16.439)",
        sidebar: "oklch(0.21 0.006 285.885)",
        sidebarForeground: "oklch(0.985 0 0)",
        sidebarPrimary: "oklch(0.696 0.17 162.48)",
        sidebarPrimaryForeground: "oklch(0.393 0.095 152.535)",
        sidebarAccent: "oklch(0.274 0.006 286.033)",
        sidebarAccentForeground: "oklch(0.985 0 0)",
        sidebarBorder: "oklch(1 0 0 / 10%)",
        sidebarRing: "oklch(0.527 0.154 150.069)",
      },
    },
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "Ocean theme",
    colors: {
      light: {
        background: "oklch(0.98 0.005 240)",
        foreground: "oklch(0.15 0.01 240)",
        card: "oklch(1 0 0)",
        cardForeground: "oklch(0.15 0.01 240)",
        popover: "oklch(1 0 0)",
        popoverForeground: "oklch(0.15 0.01 240)",
        primary: "oklch(0.6 0.15 220)",
        primaryForeground: "oklch(0.98 0.005 240)",
        secondary: "oklch(0.95 0.01 240)",
        secondaryForeground: "oklch(0.2 0.01 240)",
        muted: "oklch(0.95 0.01 240)",
        mutedForeground: "oklch(0.5 0.01 240)",
        accent: "oklch(0.95 0.01 240)",
        accentForeground: "oklch(0.2 0.01 240)",
        destructive: "oklch(0.6 0.2 20)",
        border: "oklch(0.9 0.01 240)",
        input: "oklch(0.9 0.01 240)",
        ring: "oklch(0.6 0.15 220)",
        chart1: "oklch(0.6 0.15 220)",
        chart2: "oklch(0.5 0.1 200)",
        chart3: "oklch(0.4 0.08 180)",
        chart4: "oklch(0.7 0.12 240)",
        chart5: "oklch(0.8 0.1 260)",
        sidebar: "oklch(0.98 0.005 240)",
        sidebarForeground: "oklch(0.15 0.01 240)",
        sidebarPrimary: "oklch(0.6 0.15 220)",
        sidebarPrimaryForeground: "oklch(0.98 0.005 240)",
        sidebarAccent: "oklch(0.95 0.01 240)",
        sidebarAccentForeground: "oklch(0.2 0.01 240)",
        sidebarBorder: "oklch(0.9 0.01 240)",
        sidebarRing: "oklch(0.6 0.15 220)",
      },
      dark: {
        background: "oklch(0.1 0.01 240)",
        foreground: "oklch(0.95 0.005 240)",
        card: "oklch(0.15 0.01 240)",
        cardForeground: "oklch(0.95 0.005 240)",
        popover: "oklch(0.15 0.01 240)",
        popoverForeground: "oklch(0.95 0.005 240)",
        primary: "oklch(0.6 0.15 220)",
        primaryForeground: "oklch(0.1 0.01 240)",
        secondary: "oklch(0.2 0.01 240)",
        secondaryForeground: "oklch(0.95 0.005 240)",
        muted: "oklch(0.2 0.01 240)",
        mutedForeground: "oklch(0.7 0.01 240)",
        accent: "oklch(0.2 0.01 240)",
        accentForeground: "oklch(0.95 0.005 240)",
        destructive: "oklch(0.7 0.2 20)",
        border: "oklch(0.3 0.01 240)",
        input: "oklch(0.3 0.01 240)",
        ring: "oklch(0.6 0.15 220)",
        chart1: "oklch(0.6 0.15 220)",
        chart2: "oklch(0.5 0.1 200)",
        chart3: "oklch(0.4 0.08 180)",
        chart4: "oklch(0.7 0.12 240)",
        chart5: "oklch(0.8 0.1 260)",
        sidebar: "oklch(0.15 0.01 240)",
        sidebarForeground: "oklch(0.95 0.005 240)",
        sidebarPrimary: "oklch(0.6 0.15 220)",
        sidebarPrimaryForeground: "oklch(0.1 0.01 240)",
        sidebarAccent: "oklch(0.2 0.01 240)",
        sidebarAccentForeground: "oklch(0.95 0.005 240)",
        sidebarBorder: "oklch(0.3 0.01 240)",
        sidebarRing: "oklch(0.6 0.15 220)",
      },
    },
  },
  {
    id: "sunset",
    name: "Sunset",
    description: "Sunset theme",
    colors: {
      light: {
        background: "oklch(0.98 0.005 60)",
        foreground: "oklch(0.15 0.01 60)",
        card: "oklch(1 0 0)",
        cardForeground: "oklch(0.15 0.01 60)",
        popover: "oklch(1 0 0)",
        popoverForeground: "oklch(0.15 0.01 60)",
        primary: "oklch(0.7 0.2 30)",
        primaryForeground: "oklch(0.98 0.005 60)",
        secondary: "oklch(0.95 0.01 60)",
        secondaryForeground: "oklch(0.2 0.01 60)",
        muted: "oklch(0.95 0.01 60)",
        mutedForeground: "oklch(0.5 0.01 60)",
        accent: "oklch(0.95 0.01 60)",
        accentForeground: "oklch(0.2 0.01 60)",
        destructive: "oklch(0.6 0.2 20)",
        border: "oklch(0.9 0.01 60)",
        input: "oklch(0.9 0.01 60)",
        ring: "oklch(0.7 0.2 30)",
        chart1: "oklch(0.7 0.2 30)",
        chart2: "oklch(0.6 0.15 45)",
        chart3: "oklch(0.5 0.1 60)",
        chart4: "oklch(0.8 0.15 15)",
        chart5: "oklch(0.9 0.1 75)",
        sidebar: "oklch(0.98 0.005 60)",
        sidebarForeground: "oklch(0.15 0.01 60)",
        sidebarPrimary: "oklch(0.7 0.2 30)",
        sidebarPrimaryForeground: "oklch(0.98 0.005 60)",
        sidebarAccent: "oklch(0.95 0.01 60)",
        sidebarAccentForeground: "oklch(0.2 0.01 60)",
        sidebarBorder: "oklch(0.9 0.01 60)",
        sidebarRing: "oklch(0.7 0.2 30)",
      },
      dark: {
        background: "oklch(0.1 0.01 60)",
        foreground: "oklch(0.95 0.005 60)",
        card: "oklch(0.15 0.01 60)",
        cardForeground: "oklch(0.95 0.005 60)",
        popover: "oklch(0.15 0.01 60)",
        popoverForeground: "oklch(0.95 0.005 60)",
        primary: "oklch(0.7 0.2 30)",
        primaryForeground: "oklch(0.1 0.01 60)",
        secondary: "oklch(0.2 0.01 60)",
        secondaryForeground: "oklch(0.95 0.005 60)",
        muted: "oklch(0.2 0.01 60)",
        mutedForeground: "oklch(0.7 0.01 60)",
        accent: "oklch(0.2 0.01 60)",
        accentForeground: "oklch(0.95 0.005 60)",
        destructive: "oklch(0.7 0.2 20)",
        border: "oklch(0.3 0.01 60)",
        input: "oklch(0.3 0.01 60)",
        ring: "oklch(0.7 0.2 30)",
        chart1: "oklch(0.7 0.2 30)",
        chart2: "oklch(0.6 0.15 45)",
        chart3: "oklch(0.5 0.1 60)",
        chart4: "oklch(0.8 0.15 15)",
        chart5: "oklch(0.9 0.1 75)",
        sidebar: "oklch(0.15 0.01 60)",
        sidebarForeground: "oklch(0.95 0.005 60)",
        sidebarPrimary: "oklch(0.7 0.2 30)",
        sidebarPrimaryForeground: "oklch(0.1 0.01 60)",
        sidebarAccent: "oklch(0.2 0.01 60)",
        sidebarAccentForeground: "oklch(0.95 0.005 60)",
        sidebarBorder: "oklch(0.3 0.01 60)",
        sidebarRing: "oklch(0.7 0.2 30)",
      },
    },
  },
];

export function getThemeById(id: string): Theme | undefined {
  return themes.find((theme) => theme.id === id);
}

export function getDefaultTheme(): Theme {
  return themes[0];
}
