// CSS style module
import styles from '../styles/ProfilePicture.module.css';


export interface ProfilePictureProps {
  img: string,
  alt: string
}

export default function ProfilePicture({img, alt}: ProfilePictureProps) {
  return (
    <div className="PFP__Container">
      <img className={styles.PFP} src={img} alt={alt} />
    </div>
  )
}
