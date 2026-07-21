// CSS style module
import styles from '/src/styles/SocialList.module.css';

// Static assets
import githubIcon from '/icons/github-mono.svg'
import wakatimeIcon from '/icons/wakatime-mono.svg'
import discordIcon from '/icons/discord-mono.svg'
import atIcon from '/icons/at-solid-full.svg'

// Internal components
import SocialButton from './SocialButton.tsx';


const githubLink: string = 'https://github.com/ramency';
const wakatimeLink: string = 'https://wakatime.com/@ramency';
const discordLink: string = ''; // Empty -> Username gets copied
const emailLink: string = 'mailto:c.szanto@ramency.dev';

export default function SocialList() {
  return (
    <div className={styles.SocialList} >

      <SocialButton id="sb-github" link={githubLink} icon={githubIcon} />
      <SocialButton id="sb-wakatime" link={wakatimeLink} icon={wakatimeIcon} />
      <SocialButton id="sb-discord" link={discordLink} icon={discordIcon} />
      <SocialButton id="sb-email" link={emailLink} icon={atIcon} />

    </div>
  )
}
