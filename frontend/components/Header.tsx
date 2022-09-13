import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";
const Header = () => {
  const { pathname } = useRouter();
  return (
    <div className={styles.header}>
      <div>
        {pathname !== "/" && (
          <Link href="/">
            <a className={styles.title}>
              Knowit <span className={styles.subTitle}>TechRadar 2021</span>
            </a>
          </Link>
        )}
      </div>
      Norsk
    </div>
  );
};

export default Header;
