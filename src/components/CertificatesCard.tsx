// CSS style module
import styles from '/src/styles/CertificatesCard.module.css';

// Type imports
import type { CardProps } from './MainCard.tsx';

// Library imports
import { useTranslations } from 'use-intl';


export default function CertificatesCard({id, mainCardClass}: CardProps) {
  const t = useTranslations('Main.Cards.Certificates');
  return (
    <article id={id} className={`${mainCardClass} ${styles.CertificatesCard}`}>
      <h2 className="Card__Title">{t('title')}</h2>

      <p>{t('description')}</p>
      <br />
      <h3>{t('subtitle')}</h3>

      <div className="Card__Body">

        <h4>{t('content.work.title')}</h4>

        <a href={t('content.work.cert_02.link')} target="_blank">{t('content.work.cert_02.text')}</a> <br />
        <a href={t('content.work.cert_01.link')} target="_blank">{t('content.work.cert_01.text')}</a> <br />
        <br />

        <h4>{t('content.school.title')}</h4>

        <a href={t('content.school.cert_02.link')} target="_blank">{t('content.school.cert_02.text')}</a> <br />
        <a href={t('content.school.cert_01.link')} target="_blank">{t('content.school.cert_01.text')}</a> <br />

      </div>
    </article>
  )
}
