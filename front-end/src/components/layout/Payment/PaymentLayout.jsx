import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../../components/layout/Footer';
import FooterCopyright from '../Home/FooterCopyright';
const PaymentLayout = () => {
  return (
    <div>
        <Outlet />
        <Footer />
        <FooterCopyright />
    </div>
  )
}

export default PaymentLayout