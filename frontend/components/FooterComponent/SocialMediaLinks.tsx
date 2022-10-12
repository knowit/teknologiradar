import Image from 'next/image';
import styles from './Footer.module.css';

export default function SocialMediaLinks() {
  return (
    <div className={styles.socialMediaIcons}>
      <a
        href={'https://www.instagram.com/weareknowit/'}
        target={'_blank'}
        rel="noreferrer noopener"
      >
        <Image src="/social-icons/instagram.svg" height={40} width={40} alt={'Instagram logo'} />
      </a>
      <a href={'https://www.linkedin.com/company/8067'} target={'_blank'} rel="noreferrer noopener">
        <Image src="/social-icons/linkedIn.svg" height={40} width={40} alt={'LinkedIn logo'} />
      </a>
      <a href={'https://twitter.com/knowitab'} target={'_blank'} rel="noreferrer noopener">
        <Image src="/social-icons/twitter.svg" height={40} width={40} alt={'Twitter logo'} />
      </a>
    </div>
  );
}
