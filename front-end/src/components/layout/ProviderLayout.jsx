import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import FooterCopyright from './Home/FooterCopyright';
const ProviderLayout = () => {
  return (
    <div>
        <Outlet />
        <Footer />
        <FooterCopyright />
    </div>
  )
}

export default ProviderLayout