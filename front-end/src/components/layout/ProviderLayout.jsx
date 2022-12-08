import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import FooterCopyright from './Home/FooterCopyright';
import flag1 from '../../assets/flag-vn.png';
import styled from 'styled-components';
import UserOptions from '../child/UserOptions';
import { selectIsAutheticated, selectUser } from '../../features/userSlice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
const HeaderAuthRightStyled = styled.div`
    display: flex;
`
const HeaderLoginButtonStyled = styled.button`
    border: none;
    border-radius: .3rem;
    width: 8rem;
    font-size: .9rem;
    background-color: transparent;
    padding: .8rem .4rem;
    height: 100%;
    cursor: pointer;
    color: rgb(135, 179, 251);
    transition: all .1s linear;
    &:hover{
        color: #fff;
        background-color: rgb(135, 179, 251);
    }
`
const HeaderRegisterButtonStyled = styled.button`
    border: .05rem solid rgb(135, 179, 251);
    border-radius: .3rem;
    width: 8rem;
    margin-left: 1rem;
    font-size: .9rem;
    background-color: transparent;
    padding: .8rem .4rem;
    height: 100%;
    cursor: pointer;
    color: rgb(135, 179, 251);
    transition: all .1s linear;
    &:hover{
        color: #fff;
        background-color: rgb(135, 179, 251);
    }
`
const ProviderLayout = () => {
    const usereData = useSelector(selectUser);
    const isAutheticated = useSelector(selectIsAutheticated);
  return (
    <>
        <EnterpriseWelcomepageHeaderContainerStyled>
          <EnterpriseWelcomepageHeaderWrapperStyled>
             <Link to="/" style={{textDecoration: "none", color: "#000"}}>
              <HeaderLogoStyled>Vluxstay</HeaderLogoStyled>
              </Link>
              <HeaderRightStyled>
                  <HeaderLanguageStyled src={flag1} />
                  { isAutheticated ? <UserOptions user={usereData} account={1}/> : (
                    <HeaderAuthRightStyled>
                        <Link to="/account/login">
                            <HeaderLoginButtonStyled>Đăng nhập</HeaderLoginButtonStyled>
                        </Link>
                        <Link to="/account/register">
                            <HeaderRegisterButtonStyled>Tạo tài khoản</HeaderRegisterButtonStyled>
                        </Link>
                    </HeaderAuthRightStyled>
                )}
              </HeaderRightStyled>
          </EnterpriseWelcomepageHeaderWrapperStyled>
        </EnterpriseWelcomepageHeaderContainerStyled>
        <Outlet />
        <Footer />
        <FooterCopyright />
    </>
  )
}

export default ProviderLayout