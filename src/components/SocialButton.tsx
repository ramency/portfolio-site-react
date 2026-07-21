// CSS style module
import styles from '/src/styles/SocialButton.module.css';

// Internal components
import ToolTip from './ToolTip.tsx';

// Library imports
import { useTranslations } from 'use-intl';
import { useState } from 'react';


export interface SocialButtonProps {
  id: string,
  link: string,
  icon: string
}

const discordUsername = 'ramency';

export default function SocialButton({id, link, icon}: SocialButtonProps) {
  const t = useTranslations('Aside.Body.links.ext')

  const [buttonPressed, setButtonPressed] = useState<boolean>(false)

  if (id == 'sb-discord') {
    return (
      <ToolTip initialText={t('discord.tooltip')} updatedText={t('discord.tooltip_copied')} buttonPressed={buttonPressed}>
        <button className={styles.SocialButton} id={id} onClick={() => copyDiscord(setButtonPressed)}>
          <img src={icon} alt="icon" />
        </button>
      </ToolTip>
    )
  } else {
    return (
      <a className={styles.SocialButton} id={id} href={link}>
        <img src={icon} alt="icon" />
      </a>
    )
  }
}

function copyDiscord(setButtonPressed: Function) {
  navigator.clipboard.writeText(discordUsername).then(r => console.log(`Promise ${r} returned. Copied the text: ` + discordUsername));
  setButtonPressed(true);
  setTimeout(() => setButtonPressed(false), 3000);
}
