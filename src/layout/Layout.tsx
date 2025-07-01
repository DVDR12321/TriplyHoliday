import { Toolbar } from '@mui/material';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer } from '../pages/landing-page/footer/Footer';
import { Header } from '../pages/landing-page/header/Header';

type LayoutType = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutType) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Header />
      {!isHomePage && <Toolbar />}
      {children}
      <Footer />
    </>
  );
};
