// CSS style module
import styles from '/src/styles/ResumeCard.module.css';

// Internal types
import type { CardProps } from "./MainCard.tsx";

// Library imports
import { useTranslations } from 'use-intl';


export default function ResumeCard({id, mainCardClass}: CardProps) {
  const t = useTranslations('Main.Cards.Resume');
  return (
    <article id={id} className={`${mainCardClass} ${styles.ResumeCard}`}>
      <h2 className="Card__Title">{t('title')}</h2>

      <div className="Card__Body">

        <section className={styles.ResumeItem}>
          <sub>{t('content.app_BBW_Abensberg.date')}</sub>
          <h3>{t('content.app_BBW_Abensberg.title')}</h3>
          <sup>{t('content.app_BBW_Abensberg.company')}</sup>
          <ul>
            <li>{t('content.app_BBW_Abensberg.bullet_point_01')}</li>
            <li>{t('content.app_BBW_Abensberg.bullet_point_02')}</li>
            <li>{t('content.app_BBW_Abensberg.bullet_point_03')}</li>
          </ul>
        </section>

        <section className={styles.ResumeItem}>
          <sub>{t('content.etc_Rehab.date')}</sub>
          <h3>{t('content.etc_Rehab.title')}</h3>
          <sup>{t('content.etc_Rehab.company')}</sup>
          <ul>
            <li>{t('content.etc_Rehab.bullet_point_01')}</li>
            <li>{t('content.etc_Rehab.bullet_point_02')}</li>
            <li>{t('content.etc_Rehab.bullet_point_03')}</li>
          </ul>
        </section>

        <section className={styles.ResumeItem}>
          <sub>{t('content.app_MIFCOM.date')}</sub>
          <h3>{t('content.app_MIFCOM.title')}</h3>
          <sup>{t('content.app_MIFCOM.company')}</sup>
          <ul>
            <li>{t('content.app_MIFCOM.bullet_point_01')}</li>
            <li>{t('content.app_MIFCOM.bullet_point_02')}</li>
            <li>{t('content.app_MIFCOM.bullet_point_03')}</li>
            <li>{t('content.app_MIFCOM.bullet_point_04')}</li>
            <li>{t('content.app_MIFCOM.bullet_point_05')}</li>
          </ul>
        </section>

        <section className={styles.ResumeItem}>
        <sub>{t('content.int_MIFCOM.date')}</sub>
          <h3>{t('content.int_MIFCOM.title')}</h3>
          <sup>{t('content.int_MIFCOM.company')}</sup>
          <ul>
            <li>{t('content.int_MIFCOM.bullet_point_01')}</li>
            <li>{t('content.int_MIFCOM.bullet_point_02')}</li>
            <li>{t('content.int_MIFCOM.bullet_point_03')}</li>
          </ul>
        </section>

        <section className={styles.ResumeItem}>
          <sub>{t('content.int_retail.date')}</sub>
          <h3>{t('content.int_retail.title')}</h3>
          <sup>{t('content.int_retail.company')}</sup>
          <ul>
            <li>{t('content.int_retail.bullet_point_01')}</li>
            <li>{t('content.int_retail.bullet_point_02')}</li>
            <li>{t('content.int_retail.bullet_point_03')}</li>
            <li>{t('content.int_retail.bullet_point_04')}</li>
            <li>{t('content.int_retail.bullet_point_05')}</li>
          </ul>
        </section>

        <section className={styles.ResumeItem}>
          <sub>{t('content.int_kindergarden.date')}</sub>
          <h3>{t('content.int_kindergarden.title')}</h3>
          <sup>{t('content.int_kindergarden.company')}</sup>
          <ul>
            <li>{t('content.int_kindergarden.bullet_point_01')}</li>
            <li>{t('content.int_kindergarden.bullet_point_02')}</li>
            <li>{t('content.int_kindergarden.bullet_point_03')}</li>
          </ul>
        </section>

      </div>
    </article>
  )
}
