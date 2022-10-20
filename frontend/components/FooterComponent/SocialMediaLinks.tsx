import { InstagramIcon, LinkedinIcon, TwitterIcon } from '../icons';
import styles from './Footer.module.css';

export default function SocialMediaLinks() {
  return (
    <div className={styles.socialMediaIcons}>
      <a
        href={'https://www.instagram.com/weareknowit/'}
        target={'_blank'}
        rel="noreferrer noopener"
      >
        <InstagramIcon />
      </a>
      <a href={'https://www.linkedin.com/company/8067'} target={'_blank'} rel="noreferrer noopener">
        <LinkedinIcon />
      </a>
      <a href={'https://twitter.com/knowitab'} target={'_blank'} rel="noreferrer noopener">
        <TwitterIcon />
      </a>
    </div>
  );
}
