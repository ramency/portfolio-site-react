// CSS style module
import styles from '/src/styles/CodeLangBadge.module.css';


export interface CodeLangBadgeProps {
  icon: string,
  text: string
}

export default function CodeLangBadge({icon, text}: CodeLangBadgeProps) {
  return (
    <div className={styles.CodeLangBadge}>

      <div className={styles.CodeLangIconContainer}>
        <img className={styles.CodeLangIcon} src={icon} alt={`${text} Programming Language Icon`} />
      </div>
      <span className={styles.CodeLangName}><b>{text}</b></span>

    </div>
  )
}
