// CSS style module
import styles from '/src/styles/LinkButton.module.css';

export interface LinkButtonProps {
  link: string,
  text: string,
}

export default function LinkButton({link, text}: LinkButtonProps) {
  return (
    <a className={styles.LinkButton} href={link}>
      <h3>{text}</h3>
    </a>
  )
}
