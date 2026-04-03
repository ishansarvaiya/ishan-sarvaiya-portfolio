import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "default" | "true-dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "default",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      return saved === "true-dark" ? "true-dark" : "default";
    } catch {
      return "default";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "true-dark") {
      root.setAttribute("data-theme", "true-dark");
    } else {
      root.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* storage unavailable — silent fail */
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "default" ? "true-dark" : "default"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
