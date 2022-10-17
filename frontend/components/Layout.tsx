import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import styles from './Layout.module.css';
import FooterComponent from './FooterComponent';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();
  const isRootPage = pathname === '/';

  return (
    <div className={styles.main}>
      <Header forRoot={isRootPage} />
      {children}
      <FooterComponent />
    </div>
  );
};

export default Layout;
