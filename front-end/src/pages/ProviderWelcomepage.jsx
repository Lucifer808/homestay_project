import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import flag1 from '../assets/flag-vn.png';
import provider_welcome from '../assets/provider_welcome.jpeg';
import provider_go_live from '../assets/provider-go-live.png';
import provider_set_prices from '../assets/provider-set-prices.png';
import provider_sign_in_sign_up from '../assets/provider-sign-in-sign-up.png';
import provider_upload_details from '../assets/provider-upload-details.png';
const ProviderWelcomepageContainerStyled = styled.div`
    height: 100%;
    width: 100%;
`
const ProviderWelcomepageWrapperStyled = styled.div``
const ProviderWelcomepageHeaderContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const ProviderWelcomepageHeaderWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80rem;
    height: 100%;
`
const HeaderLogoStyled = styled.h2`
    font-family: 'DynaPuff', cursive;
    margin-right: 1rem;
`
const HeaderRightStyled = styled.div`
    display: flex;
`
const HeaderLanguageStyled = styled.img`
    margin: auto 1rem;
    width: 2rem;
    height: 1.4rem;
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
const ProviderWelcomepageHeaderTopStyled = styled.div`
    position: relative;
`
const ProviderWelcomepageImageStyled = styled.img`
    height: 40rem;
    width: 100%;
    object-fit: cover;
    filter: brightness(90%);
`
const ProviderWelcomepageModalWrapperStyled = styled.div`
    position: absolute;
    z-index: 1;
    padding: 3rem;
    width: 40rem;
    height: 20rem;
    background-color: hsla(0,0%,100%,.9);
    top: 0;
    margin: 10rem;
`
const ProviderWelcomepageModalHeaderStyled = styled.h1``
const ProviderWelcomepageModalSubHeaderStyled = styled.h2`
    margin: 1rem 0;
    font-weight: 300;
`
const ProviderWelcomepageModalButtonRegisterStyled = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    color: #fff;
    background-color: #ff567d;
    border-color: #ff567d;
    border: none;
    border-radius: .2rem;
    cursor: pointer;
    margin: .4rem 0;
    &:hover{
        color: #fff;
        background-color: #ff2356;
        border-color: #ff194e;
    }
`
const ProviderWelcomepageModalRegisterWrapperStyled = styled.div``
const ProviderWelcomepageModalRegisterLeftStyled = styled.span``
const ProviderWelcomepageModalRegisterRightStyled = styled.span`
    font-size: 1.1rem;
    text-decoration: underline;
    cursor: pointer;
`
const ProviderWelcomepageHeaderBottomStyled = styled.div`
    margin: 4rem 0;
`
const ProviderWelcomepageHeaderBottomTitleWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProviderWelcomepageHeaderBottomTitleStyled = styled.h2`
    
`
const ProviderWelcomepageHeaderBottomContentContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const ProviderWelcomepageHeaderBottomContentWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: 1rem;
    width: 14rem;
`
const ProviderWelcomepageHeaderBottomContentImageStyled = styled.img`
    width: 8rem;
`
const ProviderWelcomepageHeaderBottomContentStyled = styled.p`
    font-weight: 500;
    margin: auto;
`
const ProviderWelcomepage = () => {
  return (
    <ProviderWelcomepageContainerStyled>
        <ProviderWelcomepageHeaderContainerStyled>
            <ProviderWelcomepageHeaderWrapperStyled>
                <HeaderLogoStyled>Looking</HeaderLogoStyled>
                <HeaderRightStyled>
                    <HeaderLanguageStyled src={flag1} />
                    <Link to="/login">
                        <HeaderLoginButtonStyled>Đăng nhập</HeaderLoginButtonStyled>
                    </Link>
                    <Link to="/register">
                        <HeaderRegisterButtonStyled>Tạo tài khoản</HeaderRegisterButtonStyled>
                    </Link>
                </HeaderRightStyled>
            </ProviderWelcomepageHeaderWrapperStyled>
        </ProviderWelcomepageHeaderContainerStyled>
        <ProviderWelcomepageWrapperStyled>
            <ProviderWelcomepageHeaderTopStyled>
                <ProviderWelcomepageImageStyled src={provider_welcome} />
                <ProviderWelcomepageModalWrapperStyled>
                    <ProviderWelcomepageModalHeaderStyled>Ghi danh nhà của bạn tại đây.</ProviderWelcomepageModalHeaderStyled>
                    <ProviderWelcomepageModalSubHeaderStyled>
                        Độc giả toàn cầu, trọng điểm châu Á. Nhận các đặt phòng bạn đã bỏ lỡ bằng cách ghi danh miễn phí trên hệ thống, ngay hôm nay!
                    </ProviderWelcomepageModalSubHeaderStyled>
                    <Link to="homes">
                        <ProviderWelcomepageModalButtonRegisterStyled>ĐĂNG NHÀ NGAY</ProviderWelcomepageModalButtonRegisterStyled>
                    </Link>
                    <ProviderWelcomepageModalRegisterWrapperStyled>
                        <ProviderWelcomepageModalRegisterLeftStyled>Bạn đã bắt đầu thủ tục đăng ký rồi à?</ProviderWelcomepageModalRegisterLeftStyled>
                        <ProviderWelcomepageModalRegisterRightStyled>Tiếp tục</ProviderWelcomepageModalRegisterRightStyled>
                    </ProviderWelcomepageModalRegisterWrapperStyled>
                </ProviderWelcomepageModalWrapperStyled>
            </ProviderWelcomepageHeaderTopStyled>
            <ProviderWelcomepageHeaderBottomStyled>
                <ProviderWelcomepageHeaderBottomTitleWrapperStyled>
                    <ProviderWelcomepageHeaderBottomTitleStyled>Tất cả những gì bạn cần làm là</ProviderWelcomepageHeaderBottomTitleStyled>
                    <ProviderWelcomepageHeaderBottomContentContainerStyled>
                        <ProviderWelcomepageHeaderBottomContentWrapperStyled>
                            <ProviderWelcomepageHeaderBottomContentImageStyled src={provider_sign_in_sign_up} />
                            <ProviderWelcomepageHeaderBottomContentStyled>Đăng nhâp hoặc đăng ký tài khoản</ProviderWelcomepageHeaderBottomContentStyled>
                        </ProviderWelcomepageHeaderBottomContentWrapperStyled>
                        <ProviderWelcomepageHeaderBottomContentWrapperStyled>
                            <ProviderWelcomepageHeaderBottomContentImageStyled src={provider_upload_details} />
                            <ProviderWelcomepageHeaderBottomContentStyled>Đăng tải hình ảnh và thông tin về nơi ở</ProviderWelcomepageHeaderBottomContentStyled>
                        </ProviderWelcomepageHeaderBottomContentWrapperStyled>
                        <ProviderWelcomepageHeaderBottomContentWrapperStyled>
                            <ProviderWelcomepageHeaderBottomContentImageStyled src={provider_set_prices} />
                            <ProviderWelcomepageHeaderBottomContentStyled>Cài đặt mức giá và chọn ngày có phòng trống</ProviderWelcomepageHeaderBottomContentStyled>
                        </ProviderWelcomepageHeaderBottomContentWrapperStyled>
                        <ProviderWelcomepageHeaderBottomContentWrapperStyled>
                            <ProviderWelcomepageHeaderBottomContentImageStyled src={provider_go_live} />
                            <ProviderWelcomepageHeaderBottomContentStyled>Xem căn hộ của bạn được quảng bá đến du khách</ProviderWelcomepageHeaderBottomContentStyled>
                        </ProviderWelcomepageHeaderBottomContentWrapperStyled>
                    </ProviderWelcomepageHeaderBottomContentContainerStyled>
                </ProviderWelcomepageHeaderBottomTitleWrapperStyled>
            </ProviderWelcomepageHeaderBottomStyled>
        </ProviderWelcomepageWrapperStyled>
    </ProviderWelcomepageContainerStyled>
  )
}

export default ProviderWelcomepage