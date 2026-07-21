// CSS style module
import styles from '/src/styles/CodeLangContainer.module.css';

// Static assets
import htmlIcon from '/icons/html5.svg';
import cssIcon from '/icons/css.svg'
import javascriptIcon from '/icons/javascript.svg';
import typescriptIcon from '/icons/typescript.svg';
import reactIcon from '/icons/react.svg';
import viteIcon from '/icons/vite.svg';
import rustIcon from '/icons/rust.svg';
import adobeIcon from '/icons/adobe.svg';
import javaIcon from '/icons/java.svg'
import kotlinIcon from '/icons/kotlin.svg';
import csharpIcon from '/icons/csharp.svg';
import cIcon from '/icons/c.svg';

// Internal components
import CodeLangBadge from './CodeLangBadge.tsx';

export default function CodeLangContainer ( ) {
  return (
    <section className={styles.CodeLangContainer}>
      <CodeLangBadge icon={htmlIcon} text="HTML" />
      <CodeLangBadge icon={cssIcon} text="CSS" />
      <CodeLangBadge icon={javascriptIcon} text="JavaScript" />
      <CodeLangBadge icon={typescriptIcon} text="TypeScript" />
      <CodeLangBadge icon={reactIcon} text="React" />
      <CodeLangBadge icon={viteIcon} text="Vite" />
      <CodeLangBadge icon={rustIcon} text="Rust" />
      <CodeLangBadge icon={adobeIcon} text="ActionScript" />
      <CodeLangBadge icon={javaIcon} text="Java" />
      <CodeLangBadge icon={kotlinIcon} text="Kotlin" />
      <CodeLangBadge icon={csharpIcon} text="C#" />
      <CodeLangBadge icon={cIcon} text="C" />
    </section>
  )
}
