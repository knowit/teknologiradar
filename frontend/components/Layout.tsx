import { ReactNode } from "react";
import Header from "./Header";
import styles from "./Layout.module.css";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
