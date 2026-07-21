// CSS style module
import styles from '/src/styles/LangPicker.module.css';

// Static assets
import de from '/icons/germany.png';
import en from '/icons/united-states.png';

// Type imports
import type { Language } from '../types/language.ts';

// Internal components
import { LangButton } from './LangButton.tsx';


export interface LangPickerProps {
  changeLanguage: (l: Language) => void,
}

export default function LangPicker({changeLanguage}: LangPickerProps) {
  return (
    <div className={styles.LangPicker}>
      <LangButton language="de" flag={de} changeLanguage={changeLanguage} />
      <LangButton language="en" flag={en} changeLanguage={changeLanguage} />
    </div>
  )
}
