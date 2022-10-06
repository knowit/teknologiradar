import footerStyle from './Footer.module.css';
import type { LinkType } from './links';
import { learnMoreLinks, otherLanguages } from './links';

export default function FooterComponent() {
  function renderLinks(links: LinkType[]) {
    if (!links || links.length <= 0) {
      return null;
    }
    return (
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <footer className={footerStyle.footer}>
      <div>
        <strong>Learn more about us</strong>
        {renderLinks(learnMoreLinks)}
      </div>
      <div>
        <strong>Other languages</strong>
        {renderLinks(otherLanguages)}
      </div>
      <div>del 3</div>
    </footer>
  );
}
