import { FC, ReactNode } from 'react';
import styles from './main.module.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Top from './components/Top';

type BaseLayoutType = {
  children: ReactNode[] | ReactNode;
};
const BaseLayout: FC<BaseLayoutType> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Top />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
