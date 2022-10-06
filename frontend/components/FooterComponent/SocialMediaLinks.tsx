import Image from 'next/image';
import styles from './Footer.module.css';

export default function SocialMediaLinks() {
  return (
    <div className={styles.socialMediaIcons}>
      <Image src="/social-icons/instagram.svg" height={40} width={40} alt={'Instagram logo'} />
      <Image src="/social-icons/linkedIn.svg" height={40} width={40} alt={'LinkedIn logo'} />
      <Image src="/social-icons/twitter.svg" height={40} width={40} alt={'Twitter logo'} />
    </div>
  );
}
