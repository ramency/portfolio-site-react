// Internal components
import LinkButton from './LinkButton';

// Library imports
import { useTranslations } from 'use-intl';


export default function ButtonList() {
  const t = useTranslations('Aside.Body.links.loc')
  return (
    <div className="ButtonList">

      <LinkButton link="#info" text={t('about_me')} />
      <LinkButton link="#projects" text={t('projects')} />
      <LinkButton link="#resume" text={t('resume')} />
      <LinkButton link="#certificates" text={t('certificates')} />

    </div>
  )
}
