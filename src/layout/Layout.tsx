import type { ReactNode } from "react";
import { Footer } from "../pages/landing-page/footer/Footer";
import { Header } from "../pages/landing-page/header/Header";
import { Toolbar } from "@mui/material";
import { useLocation } from "react-router-dom";

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
}
