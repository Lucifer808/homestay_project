import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import FooterCopyright from './Home/FooterCopyright';
import flag1 from '../../assets/flag-vn.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const EnterpriseWelcomepageHeaderContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    background-color: #1174a6;
`
const EnterpriseWelcomepageHeaderWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80rem;
    height: 100%;
`
const HeaderLogoStyled = styled.h2`
    font-family: 'DynaPuff', cursive;
    margin-right: 1rem;
    color: #fff;
`
const HeaderRightStyled = styled.div`
    display: flex;
`
const HeaderLanguageStyled = styled.img`
    margin: auto 1rem;
    width: 2rem;
    height: 1.4rem;
`
const EnterpriseLayout = () => {
  return (
    <>
        <EnterpriseWelcomepageHeaderContainerStyled>
          <EnterpriseWelcomepageHeaderWrapperStyled>
            <Link to="/" style={{textDecoration: "none", color: "#000"}}>
              <HeaderLogoStyled>Vluxstay</HeaderLogoStyled>
              </Link>
              <HeaderRightStyled>
                  <HeaderLanguageStyled src={flag1} />
              </HeaderRightStyled>
          </EnterpriseWelcomepageHeaderWrapperStyled>
        </EnterpriseWelcomepageHeaderContainerStyled>
        <Outlet />
        <Footer />
        <FooterCopyright />
    </>
  )
}

export default EnterpriseLayout