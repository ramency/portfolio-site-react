// CSS style module
import styles from '/src/styles/ThemePicker.module.css';

// Internal components
import ThemeButton from "./ThemeButton.tsx";

// Context & Type imports
import { ThemeContext, type ThemeContextType } from "../context/ThemeContext.tsx";

// Library imports
import { use } from "react";


export default function ThemePicker(
  {changeTheme}: { changeTheme: (t: ThemeContextType) => void },
) {
  const theme = use<ThemeContextType>(ThemeContext);

  function updateTheme(nt: ThemeContextType) {
    if (nt !== theme) {
      changeTheme(nt);
    }
  }

  return (
    <div className={styles.ThemePicker}>
      <ThemeButton themeChoice={"Theme__Sand"} updateTheme={updateTheme} />
      <ThemeButton themeChoice={"Theme__Ocean"} updateTheme={updateTheme} />
      <ThemeButton themeChoice={"Theme__Grass"} updateTheme={updateTheme} />
    </div>
  )
}
