// Internal components
import CodeLangContainer from "./CodeLangContainer.tsx";

// Type imports
import type { CardProps } from "./MainCard.tsx";

// Library imports
import { useTranslations } from 'use-intl';
import CodeTextContainer from "./CodeTextContainer.tsx";


export default function ProjectsCard({id, mainCardClass}: CardProps) {
  const t = useTranslations('Main.Cards.Projects');
  return (
    <article id={id} className={mainCardClass}>
      <h2 className="Card__Title">{t('title')}</h2>

      <div className="Card__Body">

        <h4>{t('subtitle')}</h4>

        <CodeLangContainer />
        <CodeTextContainer />

      </div>
    </article>
  )
}
