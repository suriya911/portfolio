export type TTheme = "light" | "dark";

export interface IThemeContext {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
}
