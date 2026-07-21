// Library imports
import { useTranslations } from 'use-intl';

export default function CodeTextContainer() {
  const t = useTranslations('Main.Cards.Projects.content');
  return (
    <section className="Lang__TextContainer">
      <h5><b>{t('web.title')}</b></h5>

      <p>
        {t('web.description')}
      </p> <br />

      <a href="https://wiki.bplace-community.art/view/Main_Page" target="_blank">{t('web.links.link_01')}</a>
      <br />
      <a href="https://github.com/ramency/portfolio-site-react" target="_blank">{t('web.links.link_02')}</a>
      <br />
      <br />


      <h5><b>{t('rust.title')}</b></h5>

      <p>
        {t('rust.description')}
      </p> <br />

      <a href="https://github.com/ramency/gb_emulator " target="_blank">{t('rust.links.link_01')}</a>
      <br />
      <br />


      <h5><b>{t('actionscript.title')}</b></h5>

      <p>
        {t('actionscript.description')}
      </p> <br />

      <a href="https://www.nexusmods.com/skyrimspecialedition/mods/150997" target="_blank">{t('actionscript.links.link_01')}</a>
      <br />
      <br />


      <h5><b>{t('java_kotlin.title')}</b></h5>

      <p>
        {t('java_kotlin.description')}
      </p> <br />

      <a href="https://github.com/ramency/more-o-copper" target="_blank">{t('java_kotlin.links.link_01')}</a>
      <br />
      <a href="https://github.com/ramency/Kaffeemaschine" target="_blank">{t('java_kotlin.links.link_02')}</a>
      <br />
      <br />


      <h5><b>{t('csharp.title')}</b></h5>

      <p>
        {t('csharp.description')}
      </p><br />

      <a href="https://github.com/ramency/ruby" target="_blank">{t('csharp.links.link_01')}</a>
      <br />
      <br />


      <h5><b>{t('c.title')}</b></h5>

      <p>
        {t('c.description')}
      </p> <br />

    </section>
  )
}
