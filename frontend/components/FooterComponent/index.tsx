import styles from './Footer.module.css';
import type { LinkType } from './links';
import { learnMoreLinks, otherLanguages } from './links';
import SocialMediaLinks from './SocialMediaLinks';

export default function FooterComponent() {
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
                {link.title}
              </a>
            ) : (
              <a href={link.url}>{link.title}</a>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <footer className={styles.footer}>
      <div>
        <strong>Learn more about us</strong>
        {renderLinks(learnMoreLinks, true)}
      </div>
      <div>
        <strong>Other languages</strong>
        {renderLinks(otherLanguages, false)}
      </div>
      <SocialMediaLinks />
    </footer>
  );
}
