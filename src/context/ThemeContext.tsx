import { createContext } from "react";

export type ThemeContextType = "Theme__Sand" | "Theme__Ocean" | "Theme__Grass"; // TODO: Add dark + light, system and purple

export const ThemeContext = createContext<ThemeContextType>('Theme__Sand');
