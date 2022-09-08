import React from 'react';
import styled from 'styled-components';
import flag1 from '../../assets/flag-vn.png';
import bag1 from '../../assets/Bags-heart.svg';
import { Link } from 'react-router-dom';
const HeaderStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500&display=swap');
    height: 100%;
    width: 100%;
`
const HeaderWrapperStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 4rem;
    padding: 0 2rem;
    background-color: #fff;
`
const HeaderLogoStyled = styled.h2`
    font-family: 'DynaPuff', cursive;
    margin-right: 1rem;
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
    z-index: 9999;
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
const HeaderLeftStyled = styled.div`
    display: flex;
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
const HeaderLanguageStyled = styled.img`
    margin: auto 1rem;
    width: 2rem;
    height: 1.4rem;
`
const HeaderMoneyStyled = styled.span`
    display: block;
    margin: auto .5rem;
    margin-right: 1rem;
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
const HeaderBottomStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.8rem;
    background-color: rgb(252, 237, 230);
`
const HeaderBottomImgStyled = styled.img``
const HeaderBottomContentStyled = styled.span`
    margin: 0 1rem;
`
const HeaderBottomButtonStyled = styled.button`
    border: .05rem solid rgb(135, 179, 251);
    border-radius: .3rem;
    width: 8rem;
    margin-left: 1rem;
    font-size: .8rem;
    font-weight: 600;
    background-color: transparent;
    height: 2rem;
    cursor: pointer;
    color: rgb(135, 179, 251);
    background-color: #fff;
    transition: all .1s linear;
    &:hover{
        color: #fff;
        background-color: rgb(135, 179, 251);
    }
`
const Header = () => {
  return (
    <HeaderStyled>
        <HeaderWrapperStyled>
            <HeaderLogoStyled>Looking</HeaderLogoStyled>
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
            <HeaderLeftStyled>
                <HeaderPartnerButtonStyled>Đăng ký cho thuê nhà</HeaderPartnerButtonStyled>
                <HeaderLanguageStyled src={flag1} />
                <HeaderMoneyStyled>đ</HeaderMoneyStyled>
                <Link to="/login">
                    <HeaderLoginButtonStyled>Đăng nhập</HeaderLoginButtonStyled>
                </Link>
                <HeaderRegisterButtonStyled>Tạo tài khoản</HeaderRegisterButtonStyled>
            </HeaderLeftStyled>
        </HeaderWrapperStyled>
        <HeaderBottomStyled>
            <HeaderBottomImgStyled src={bag1} />
            <HeaderBottomContentStyled>Đi nước ngoài ư? Hãy tìm hiểu những thông tin cập nhật về các hạn chế và hướng dẫn đi lại thời COVID-19.</HeaderBottomContentStyled>
            <HeaderBottomButtonStyled>Tìm hiểu thêm</HeaderBottomButtonStyled>
        </HeaderBottomStyled>
    </HeaderStyled>
  )
}

export default Header