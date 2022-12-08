import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../layout/Footer';
import FooterCopyright from '../layout/Home/FooterCopyright';
import flag1 from '../../assets/flag-vn.png';
import styled from 'styled-components';
import UserOptions from '../child/UserOptions';
import { selectIsAutheticated, selectUser } from '../../features/userSlice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const HeaderStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500&display=swap');
    height: 100%;
    width: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`
const HeaderLogoStyled = styled.h2`
    font-family: 'DynaPuff', cursive;
    margin-right: 1rem;
    color: #000;
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
const HeaderWrapperStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 4rem;
    padding: 0 8rem;
    background-color: #fff;
`
const HeaderMiddleWrapStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: auto 4rem;
`
const HeaderAddressStyled = styled.span`
    cursor: pointer;
    font-weight: 500;
    transition: all .1s linear;
    &:hover{
        color: rgb(135, 179, 251);
    }
`
const HeaderAddressNewStyled = styled.span`
    position: relative;
    cursor: pointer;
    font-weight: 500;
    transition: all .1s linear;
    &:hover{
        color: rgb(135, 179, 251);
    }
`
const PesudoStyled = styled.div `
    position: absolute;
    top: -1rem;
    z-index: 9;
    width: 1.9rem;
    height: 1rem;
    border-radius: .1rem;
    color: #fff;
    font-weight: bold;
    background-color: rgb(225, 44, 44);
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after{
        content: '';
        position: absolute;
        border-width: 0 20px 4px;
        border-style: solid;
        right: -13px;
        color: rgb(225, 44, 44);
        bottom: -4px;
        border-color: transparent transparent transparent rgb(225, 44, 44);
    }
`
const PesudoContentStyled = styled.span`
    display: block;
    color: #fff;
    font-size: .8rem;
    font-weight: 300;
`
const HeaderPartnerButtonStyled = styled.button`
    border: .05rem solid rgb(255, 85, 125);
    border-radius: .3rem;
    width: 12rem;
    font-size: .9rem;
    background-color: transparent;
    padding: .8rem .4rem;
    height: 100%;
    cursor: pointer;
    color: rgb(255, 85, 125);
    transition: all .1s linear;
    &:hover{
        color: #fff;
        background-color: rgb(255, 85, 125);
    }
`
const HeaderMoneyStyled = styled.span`
    display: block;
    margin: auto .5rem;
    margin-right: 1rem;
`
const AccountLayout = () => {
  const usereData = useSelector(selectUser);
  const [ account, setAccount ] = useState(1);
  const isAutheticated = useSelector(selectIsAutheticated);
  return (
      <div>
      <HeaderStyled>
        <HeaderWrapperStyled>
            <Link to="/" style={{textDecoration: "none", color: "#000"}}>
                <HeaderLogoStyled>Vluxstay</HeaderLogoStyled>
            </Link>
            <HeaderMiddleWrapStyled>
                <HeaderAddressStyled>Khách sạn</HeaderAddressStyled>
                <HeaderAddressStyled>Chỗ ở</HeaderAddressStyled>
                <HeaderAddressStyled>Ưu đãi cho hôm nay</HeaderAddressStyled>
                <HeaderAddressStyled>Căn hộ</HeaderAddressStyled>
                <HeaderAddressNewStyled>
                    Hoạt động
                    <PesudoStyled>
                        <PesudoContentStyled>Mới!</PesudoContentStyled>
                    </PesudoStyled>
                </HeaderAddressNewStyled>
            </HeaderMiddleWrapStyled>
            <HeaderRightStyled>
                <Link to="/homes">
                    <HeaderPartnerButtonStyled>Đăng ký cho thuê nhà</HeaderPartnerButtonStyled>
                </Link>
                <HeaderLanguageStyled src={flag1} />
                <HeaderMoneyStyled>₫</HeaderMoneyStyled>
                { isAutheticated ? <UserOptions user={usereData} account={account}/> : (
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
        </HeaderWrapperStyled>
      </HeaderStyled>
      <Outlet />
      <Footer />
      <FooterCopyright />
      </div>
  )
}

export default AccountLayout