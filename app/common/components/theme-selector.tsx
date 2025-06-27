import { Palette, Moon, Sun, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/common/components/ui/dropdown-menu";
import { Button } from "~/common/components/ui/button";
import { useTheme } from "~/hooks/use-theme";
import { themes } from "~/lib/themes";
import { cn } from "~/lib/utils";

export function ThemeSelector() {
  const { currentTheme, setTheme, isDark, toggleDarkMode } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <Palette className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>테마 선택</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className={cn(
              "flex items-center justify-between cursor-pointer",
              currentTheme.id === theme.id && "bg-accent"
            )}
          >
            <div className="flex items-center gap-2">
              <div
                className="size-4 rounded-full border"
                style={{
                  backgroundColor: isDark
                    ? theme.colors.dark.primary
                    : theme.colors.light.primary,
                }}
              />
              <span>{theme.name}</span>
            </div>
            {currentTheme.id === theme.id && (
              <span className="text-xs text-muted-foreground">
                <Check className="size-4" />
              </span>
            )}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={toggleDarkMode}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-2">
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            {isDark ? "On" : "On"}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
