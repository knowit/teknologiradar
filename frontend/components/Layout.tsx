import { ReactNode } from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import styles from "./Layout.module.css";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();
  const isRootPage = pathname === "/";
  return (
    <div className={styles.main}>
      <Header forRoot={isRootPage} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
