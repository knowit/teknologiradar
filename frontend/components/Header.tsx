import Link from "next/link";
import Head from "next/head";
import HeaderLogo from "./logo/HeaderLogo";
import styles from "./Header.module.css";

interface Props {
  forRoot: boolean;
}

const Header = ({ forRoot }: Props) => {
  const headerClassName = `${styles.header} ${forRoot ? styles.root : ""}`;
  return (
    <>
      <Head>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <header className={headerClassName}>
        <h1>
          <Link href="/">
            <a>
              <HeaderLogo />
            </a>
          </Link>
        </h1>
        {!forRoot && <div className={styles.separator} />}
      </header>
    </>
  );
};

export default Header;
