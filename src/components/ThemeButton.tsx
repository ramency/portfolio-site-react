// CSS style module
import styles from '/src/styles/ThemeButton.module.css';

// Type imports
import type { ThemeContextType } from '../context/ThemeContext.tsx';


export interface ThemeButtonProps {
  themeChoice: ThemeContextType;
  updateTheme: (nt: ThemeContextType) => void;
}

export default function ThemeButton({themeChoice, updateTheme}: ThemeButtonProps) {
  const styleClasses = [
    `${styles.ThemeButton}`,
    styles[themeChoice],
  ]

  return (
    <>
      <a
        className={styleClasses.join(' ')}
        onClick={() => updateTheme(themeChoice)}
      >
      </a>
    </>
  )
}
