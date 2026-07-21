// CSS style module
import styles from '/src/styles/ToolTip.module.css';

// Type imports
import type { ReactNode } from 'react';


export interface ToolTipProps {
  initialText: string,
  updatedText: string,
  buttonPressed: boolean,
  children?: ReactNode
}

export default function ToolTip({initialText, updatedText, buttonPressed, children}: ToolTipProps) {
  if (buttonPressed) {
    return (
      <div className={styles.tooltip}>
        <span className={styles.tooltiptext}>
          {updatedText}
        </span>

        {children}

      </div>
    )
  } else {
    return (
      <div className={styles.tooltip}>
        <span className={styles.tooltiptext}>
          {initialText}
        </span>

        {children}

      </div>
    )
  }
}
