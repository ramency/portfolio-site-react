// Static assets
import styles from '/src/styles/MainContainer.module.css';

// Internal components
import MainCard from './MainCard.tsx';

export default function MainContainer() {
  return (
    <main className={styles.MainContainer} >
      <div className={styles.Scroller} >
        <MainCard id="info" content="info" />
        <MainCard id="projects" content="projects" />
        <MainCard id="resume" content="resume" />
        <MainCard id="certificates" content="certificates" />
      </div>
    </main>
  )
}
