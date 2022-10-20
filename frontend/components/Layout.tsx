import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import styles from './Layout.module.css';
import FooterComponent from './FooterComponent';
import { InfoModalProvider } from './InfoModal';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();
  const isRootPage = pathname === '/';

  return (
    <>
      <InfoModalProvider>
        <div className={styles.main}>
          <Header forRoot={isRootPage} />
          {children}
          <FooterComponent />
        </div>
      </InfoModalProvider>
    </>
  );
};

export default Layout;
