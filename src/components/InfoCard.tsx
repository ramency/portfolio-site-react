// Internal types
import type { CardProps } from "./MainCard.tsx";

// Library imports
import { useTranslations } from 'use-intl';


export default function InfoCard({id, mainCardClass}: CardProps) {
  const t = useTranslations('Main.Cards.About_Me');
  return (
    <article id={id} className={`${mainCardClass} InfoCard`}>
      <h2 className="Card__Title">{t('title')}</h2>

      <div className="Card__Body">

        <h3>{t('subtitle')}</h3>

        <p>{t('content.p_01')}</p>
        <br />
        <p>{t('content.p_02')}</p>

      </div>
    </article>
  )
}
