// CSS style module
import styles from '/src/styles/MainCard.module.css';

// Internal components
import InfoCard from './InfoCard.tsx';
import ProjectsCard from './ProjectsCard.tsx';
import ResumeCard from './ResumeCard.tsx';
import CertificatesCard from './CertificatesCard.tsx';


export interface MainCardProps {
  id: string,
  content?: string
}

export interface CardProps {
  id: string;
  mainCardClass: string;
}

export default function MainCard({id, content}: MainCardProps) {
  switch (content) {
    case 'info':
      return (
        <InfoCard id={id} mainCardClass={styles.MainCard} />
      );
    case 'projects':
      return (
        <ProjectsCard id={id} mainCardClass={styles.MainCard} />
      );
    case 'resume':
      return (
        <ResumeCard id={id} mainCardClass={styles.MainCard} />
      );
    case 'certificates':
      return (
        <CertificatesCard id={id} mainCardClass={styles.MainCard} />
      );
    default:
      return (
        <article id={id} className={styles.MainCard}>

          <div className="Card__Body">
            {content}
          </div>

        </article>
      );
  }
}
