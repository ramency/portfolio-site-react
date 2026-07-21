// CSS style module
import styles from '/src/styles/AsideContainer.module.css';

// Static assets
import pfp from '../assets/pfp-red.png';

// Internal components
import ProfilePicture from './ProfilePicture.tsx';
import ButtonList from './ButtonList.tsx';
import SocialList from './SocialList.tsx';

// Library imports
import { useTranslations } from 'use-intl';


export default function AsideContainer() {
  const t = useTranslations('Aside');

  return (
    <aside className={styles.AsideContainer}>
      <div className={styles.Scroller}>

        <div className={styles.AsideCard__header}>
          <ProfilePicture img={pfp} alt="Profile Picture" />
          <h1 className={styles.AsideCard__title} >
            {t('Header.title')}
          </h1>
        </div>

        <div className={styles.AsideCard__body}>
          <ButtonList />
          <SocialList />
        </div>

      </div>
    </aside>
  )
}
