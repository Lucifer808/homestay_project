import React from 'react';
import styled from 'styled-components';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppleIcon from '@mui/icons-material/Apple';
const RegisterpageContainerStyled = styled.div`
    width: 100vw;
    height: 100%;
`
const RegisterpageWrapperStyled = styled.div`
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const RegisterpageStyled = styled.div`
    padding: 2rem;
    width: 34rem;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const RegisterpageHeaderStyled = styled.h2`
    font-weight: 400;
`
const RegisterpageInputSideWrapperStyled = styled.div``
const RegisterpageInputSideHeaderStyled = styled.h2`
    font-weight: 300;
    margin: 2rem 0;
`
const RegisterpageInputSideStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: .8rem 0;
`
const RegisterpageInputTitleStyled = styled.span`
    display: block;
    font-size: .9rem;
    font-weight: 400;
`
const RegisterpageInputStyled = styled.input`
    margin: .3rem 0;
    padding: .8rem .3rem;
    outline: 0px;
    border: 1px solid #ccc;
    border-radius: .2rem;
    &:focus{
        border-color: rgb(83, 146, 249);
        outline: 0px;
        box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset, rgb(83 146 249) 0px 0px 6px;
    }
    &::placeholder{
        color: #ccc;
    }
`
const RegisterpageAceptEmailStyled = styled.div`
    display: flex;

`
const RegisterpageAceptEmailCheckStyled = styled.input`
    margin-bottom: auto;
`
const RegisterpageAceptEmailCheckTitleStyled = styled.span`
    display: inline-block;
    font-size: .9rem;
    margin-left: .4rem;
`
const RegisterpageLoginButtonStyled = styled.button`
    width: 100%;
    border: none;
    padding: .8rem .3rem;
    font-size: 1rem;
    margin: .6rem 0;
    border-radius: .2rem;
    cursor: pointer;
    background-color: rgb(83, 146, 249);
    color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px 1px;
    transition: all 0.15s ease-in-out 0s;
    :hover{
        background-color: rgb(135, 179, 251);
        border-color: rgb(135, 179, 251);
        color: rgb(255, 255, 255);
        transition: all 0.15s ease-in-out 0s;}
`
const LineThroughtWrapperStyled = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    background-color: transparent;
    padding: 0px;
`
const LineThroughtLeftStyled = styled.div`
    display: block;
    min-width: 1px;
    width: 100%;
    flex: 1 1 0%;
    margin: 0px;
    border-bottom: 1px solid rgb(221, 223, 226);
`
const LineThroughtRightStyled = styled.div`
    display: block;
    min-width: 1px;
    width: 100%;
    flex: 1 1 0%;
    margin: 0px;
    border-bottom: 1px solid rgb(221, 223, 226);
`
const LineThroughtContentWrapperStyled = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
`
const LineThroughtContentStyled = styled.span``
const LineThroughtAnotherLoginWrapperStyled = styled.div`
    width: 100%;
    margin: 1rem 0;
`
const LineThroughtAnotherLoginButtonWrapperStyled = styled.div`
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LineThroughtAnotherLoginButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: .6rem .3rem;
    border-radius: 4px;
    user-select: none;
    border: 1px solid #000;
    color: #000;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    transition: all 0.15s ease-in-out 0s;
    &:hover{
        background: rgb(255, 255, 255);
        overflow: hidden;
        transform: scale(1.02);
    }
`
const LineThroughtAnotherLoginButtonHalfStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48%;
    padding: .6rem .3rem;
    border-radius: 4px;
    user-select: none;
    border: 1px solid #000;
    color: #000;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    transition: all 0.15s ease-in-out 0s;
    &:hover{
        background: rgb(255, 255, 255);
        overflow: hidden;
        transform: scale(1.02);
    }
`
const LineThroughtFullStyled = styled.div`
    display: block;
    min-width: 1px;
    width: 100%;
    flex: 1 1 0%;
    margin: 0px;
    border-bottom: 1px solid rgb(221, 223, 226);
`
const LineThroughtNavigateLoginButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 1rem 0;
    padding: .9rem .3rem;
    border-radius: 4px;
    user-select: none;
    border: 1px solid rgb(83, 146, 249);
    color: rgb(83, 146, 249);
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    transition: all 0.15s ease-in-out 0s;
    &:hover{
        background-color: rgb(135, 179, 251);
        border-color: rgb(135, 179, 251);
        color: rgb(255, 255, 255);
        transition: all 0.15s ease-in-out 0s;
    }
`
const LineThroughtRegisterPolicyWrapperStyled = styled.span`
    display: block;
    font-size: .8rem;
    text-align: center;
`
const Registerpage = () => {
  return (
    <RegisterpageContainerStyled>
        <RegisterpageWrapperStyled>
            <RegisterpageStyled>
                <RegisterpageHeaderStyled>Đăng ký</RegisterpageHeaderStyled>
                <RegisterpageInputSideWrapperStyled>
                    <RegisterpageInputSideHeaderStyled>EMAIL</RegisterpageInputSideHeaderStyled>
                    <RegisterpageInputSideStyled>
                        <RegisterpageInputTitleStyled>Tên</RegisterpageInputTitleStyled>
                        <RegisterpageInputStyled placeholder='Tên'/>
                    </RegisterpageInputSideStyled>
                    <RegisterpageInputSideStyled>
                        <RegisterpageInputTitleStyled>Họ</RegisterpageInputTitleStyled>
                        <RegisterpageInputStyled placeholder='Họ'/>
                    </RegisterpageInputSideStyled>
                    <RegisterpageInputSideStyled>
                        <RegisterpageInputTitleStyled>Email</RegisterpageInputTitleStyled>
                        <RegisterpageInputStyled placeholder='Email'/>
                    </RegisterpageInputSideStyled>
                    <RegisterpageInputSideStyled>
                        <RegisterpageInputTitleStyled>Mật khẩu</RegisterpageInputTitleStyled>
                        <RegisterpageInputStyled placeholder='Mật khẩu'/>
                    </RegisterpageInputSideStyled>
                    <RegisterpageInputSideStyled>
                        <RegisterpageInputTitleStyled>Xác nhận mật khẩu</RegisterpageInputTitleStyled>
                        <RegisterpageInputStyled placeholder='Xác nhận mật khẩu'/>
                    </RegisterpageInputSideStyled>
                </RegisterpageInputSideWrapperStyled>
                <RegisterpageAceptEmailStyled>
                    <RegisterpageAceptEmailCheckStyled type="checkbox" />
                    <RegisterpageAceptEmailCheckTitleStyled>Nhận email khuyến mãi độc quyền từ Agoda. Tôi có thể bỏ đăng ký này về sau như đã nêu trong Chính sách Bảo mật.</RegisterpageAceptEmailCheckTitleStyled>
                </RegisterpageAceptEmailStyled>
                <RegisterpageLoginButtonStyled>Đăng nhập</RegisterpageLoginButtonStyled>
                <LineThroughtWrapperStyled>
                    <LineThroughtLeftStyled />
                    <LineThroughtContentWrapperStyled>
                        <LineThroughtContentStyled>Hoặc đăng nhập bằng</LineThroughtContentStyled>
                    </LineThroughtContentWrapperStyled>
                    <LineThroughtRightStyled />
                </LineThroughtWrapperStyled>
                <LineThroughtAnotherLoginWrapperStyled>
                    <LineThroughtAnotherLoginButtonStyled><GoogleIcon sx={{marginRight: '.4rem'}}/>Google</LineThroughtAnotherLoginButtonStyled>
                    <LineThroughtAnotherLoginButtonWrapperStyled>
                        <LineThroughtAnotherLoginButtonHalfStyled><FacebookOutlinedIcon sx={{marginRight: '.4rem'}}/>Facebook</LineThroughtAnotherLoginButtonHalfStyled>
                        <LineThroughtAnotherLoginButtonHalfStyled><AppleIcon sx={{marginRight: '.4rem'}}/>Apple</LineThroughtAnotherLoginButtonHalfStyled>
                    </LineThroughtAnotherLoginButtonWrapperStyled>
                </LineThroughtAnotherLoginWrapperStyled>
                <LineThroughtWrapperStyled>
                    <LineThroughtFullStyled />
                </LineThroughtWrapperStyled>
                <LineThroughtNavigateLoginButtonStyled>Bạn đã có tài khoản? Đăng nhập ngay</LineThroughtNavigateLoginButtonStyled>
                <LineThroughtRegisterPolicyWrapperStyled>Khi đăng nhập, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo mật của Looking.</LineThroughtRegisterPolicyWrapperStyled>
            </RegisterpageStyled>
        </RegisterpageWrapperStyled>
    </RegisterpageContainerStyled>
  )
}

export default Registerpage