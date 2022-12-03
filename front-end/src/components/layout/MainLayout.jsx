import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FooterCopyright from './Home/FooterCopyright';
const MainLayout = () => {
  const location = useLocation();
  return (
    <div>
        { location.pathname !== "/payment/info"  && <Header /> }
        <Outlet />
        <Footer />
        <FooterCopyright />
    </div>
  )
}

export default MainLayout