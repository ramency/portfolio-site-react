// CSS style module
import styles from '/src/styles/ToolBar.module.css';

// Internal components
import ThemePicker from './ThemePicker';
import LangPicker from "./LangPicker.tsx";

// Type imports
import type { ThemeContextType } from "../context/ThemeContext.tsx";
import type { Language } from "../types/language.ts";

export interface ToolBarProps {
  changeTheme: (t: ThemeContextType) => void,
  changeLanguage: (l: Language) => void,
}


export default function ToolBar(
  { changeTheme, changeLanguage }: ToolBarProps
) {

  return(
    <div className={styles.ToolBar} >
      <ThemePicker changeTheme={changeTheme} />
      <LangPicker changeLanguage={changeLanguage} />
    </div>
  )
}
