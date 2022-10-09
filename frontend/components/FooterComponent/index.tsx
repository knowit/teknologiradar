import styles from './Footer.module.css';
import type { LinkType } from './links';
import { learnMoreLinks, otherLanguages } from './links';
import SocialMediaLinks from './SocialMediaLinks';
import { useTranslation } from 'next-i18next';

export default function FooterComponent() {
  const { t } = useTranslation('footer');

  function renderLinks(links: LinkType[], external: boolean) {
    if (!links || links.length <= 0) {
      return null;
    }
    return (
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            {external ? (
              <a href={link.url} target={'_blank'} rel="noreferrer noopener">
                {t(`links.${link.title}`)}
              </a>
            ) : (
              <a href={link.url}>{t(`links.${link.title}`)}</a>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <footer className={styles.footer}>
      <div>
        <strong>{t('learnMoreAboutUs')}</strong>
        {renderLinks(learnMoreLinks, true)}
      </div>
      <div>
        <strong>{t('otherLanguages')}</strong>
        {renderLinks(otherLanguages, false)}
      </div>
      <SocialMediaLinks />
    </footer>
  );
}
