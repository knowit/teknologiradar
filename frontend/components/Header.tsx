import Link from 'next/link';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import HeaderLogo from './logo/HeaderLogo';
import styles from './Header.module.css';
import { ForwardIcon } from './icons';

interface Props {
  forRoot: boolean;
}

const Header = ({ forRoot }: Props) => {
  const { asPath, locale } = useRouter();
  const { t } = useTranslation('common');

  const headerClassName = `${styles.header} ${forRoot ? styles.root : ''}`;
  // Only two languages for now
  const toLocale = locale === 'en' ? 'nb' : 'en';
  return (
    <>
      <Head>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <header className={headerClassName}>
        <div>&nbsp;</div>
        <h1>
          <Link href="/">
            <a>
              <HeaderLogo />
            </a>
          </Link>
        </h1>
        <Link href={asPath} locale={toLocale}>
          <a className={styles.localeSwitch}>
            {t(`languages.${toLocale}`)} <ForwardIcon />
          </a>
        </Link>
        {!forRoot && <div className={styles.separator} />}
      </header>
    </>
  );
};

export default Header;
