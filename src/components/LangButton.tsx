// CSS style module
import styles from '/src/styles/LangButton.module.css';

// Type imports
import type { Language } from '../types/language.ts';


export interface LangButtonProps {
  language: Language;
  flag: string;
  changeLanguage: (l: Language) => void,
}

export function LangButton({language, flag, changeLanguage}: LangButtonProps) {
  return (
    <div className={styles.LangButton}>
      <img
        className={styles.img}
        src={flag}
        alt={language}
        onClick={() => {
          changeLanguage(language)
        }}
      />
    </div>
  )
}
