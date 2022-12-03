import React, { useEffect } from 'react';
import styled from 'styled-components';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { loginUser } from '../features/userSlice';
const LoginpageContainerStyled = styled.div``
const LoginpageWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const LoginpageStyled = styled.div`
    padding: 1rem;
    width: 34rem;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const LoginpageInputSideWrapperStyled = styled.form``
const LoginpageInputSideHeaderStyled = styled.h2`
    font-weight: 300;
    margin: 2rem 0;
`
const LoginpageInputSideStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: .8rem 0;
`
const LoginpageInputTitleStyled = styled.span`
    display: block;
    font-size: .9rem;
    font-weight: 400;
`
const LoginpageInputStyled = styled.input`
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
`
const LoginpageLoginButtonStyled = styled.button`
    width: 100%;
    border: none;
    padding: .8rem .3rem;
    font-size: 1rem;
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
const LoginpageNavigateWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
`
const LoginpageNavigateTitleStyled = styled.span`
    text-decoration: none;
    font-size: .9rem;
    line-height: 20px;
    font-weight: 400;
    color: rgb(83, 146, 249);
    cursor: pointer;
    :hover{
        color: rgb(135, 179, 251);
        text-decoration: underline;
    }
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
const LineThroughtLoginPolicyWrapperStyled = styled.span`
    display: block;
    font-size: .8rem;
    text-align: center;
`
const LoginPopup = (props) => {
    const { setOpenPopup } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAutheticated = useSelector((state) => state.user.isAutheticated);
    const formik = useFormik({
      initialValues: {
          email: "",
          password: ""
      },
      onSubmit: (values) => {
          dispatch(loginUser(values));
      }
    })
    useEffect(()=>{
      if(isAutheticated){
          setOpenPopup(false);
      }
    },[isAutheticated])
  return (
    <LoginpageContainerStyled>
        <LoginpageWrapperStyled>
            <LoginpageStyled>
                <LoginpageInputSideWrapperStyled onSubmit={formik.handleSubmit}>
                    <LoginpageInputSideHeaderStyled>EMAIL</LoginpageInputSideHeaderStyled>
                    <LoginpageInputSideStyled>
                        <LoginpageInputTitleStyled>Email</LoginpageInputTitleStyled>
                        <LoginpageInputStyled 
                         placeholder='Email' 
                         name='email'
                         type='email' 
                         onChange={formik.handleChange}
                        />
                    </LoginpageInputSideStyled>
                    <LoginpageInputSideStyled>
                        <LoginpageInputTitleStyled>Mật khẩu</LoginpageInputTitleStyled>
                        <LoginpageInputStyled 
                         placeholder='Mật khẩu'
                         type='password' 
                         name='password' 
                         onChange={formik.handleChange}
                        />
                    </LoginpageInputSideStyled>
                    <LoginpageLoginButtonStyled type='submit'>Đăng nhập</LoginpageLoginButtonStyled>
                    <LoginpageNavigateWrapperStyled>
                        <Link to="/register" style={{textDecoration: 'none'}}>
                            <LoginpageNavigateTitleStyled>Tạo tài khoản</LoginpageNavigateTitleStyled>
                        </Link>
                        <LoginpageNavigateTitleStyled>Quên mật khẩu?</LoginpageNavigateTitleStyled>
                    </LoginpageNavigateWrapperStyled>
                </LoginpageInputSideWrapperStyled>
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
                <LineThroughtLoginPolicyWrapperStyled>Khi đăng nhập, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo mật của Looking.</LineThroughtLoginPolicyWrapperStyled>
            </LoginpageStyled>
        </LoginpageWrapperStyled>
    </LoginpageContainerStyled>
  )
}

export default LoginPopup