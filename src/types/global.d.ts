import { Theme } from "../utils/theme";

declare module "@react-navigation/native" {
  export function useTheme(): Theme;
}