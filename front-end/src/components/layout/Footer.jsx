import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const FooterContainerStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500&display=swap');
    width: 100vw;
    height: 100%;
    background-color: #f6f5f5;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FooterWrapperStyled = styled.div`
    display: flex;
    width: 80rem;
    height: 100%;
    justify-content: space-between;
    padding: 1rem 0;
`
const FooterLogoStyled = styled.h2`
    font-family: 'DynaPuff', cursive;
    margin-top: 1rem;
`
const FooterMiddleWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 2rem;
`
const FooterMiddleContentWrapperStyled = styled.div`
    margin: 0 1rem;
`
const FooterMiddleContentHeaderStyled = styled.h4`
    margin: 1rem 0;
`
const FooterMiddleContentStyled = styled.span`
    display: block;
    margin: .8rem 0;
    cursor: pointer;
    transition: all linear .1s;
    :hover{
        color: #f65e39;
    }
`
const FooterRightWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
`
const FooterRightContentHeaderStyled = styled.h4`
    margin: 1rem 0;
`
const FooterIconWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Footer = () => {
  return (
    <FooterContainerStyled>
        <FooterWrapperStyled>
            <FooterLogoStyled>Looking</FooterLogoStyled>
            <FooterMiddleWrapperStyled>
                <FooterMiddleContentWrapperStyled>
                    <FooterMiddleContentHeaderStyled>Top Homestay được yêu thích</FooterMiddleContentHeaderStyled>
                    <FooterMiddleContentStyled>Homestay Đà Lạt</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Homestay TP.Hồ Chí Minh</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Homestay Đà Nẵng</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Homestay Sapa</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Homestay Hà Nội</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Homestay Hạ Long</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Homestay Hội An</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Homestay Phan Thiết</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Homestay Vũng Tàu</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Homestay Tam Đảo</FooterMiddleContentStyled>
                </FooterMiddleContentWrapperStyled>
                <FooterMiddleContentWrapperStyled>
                    <FooterMiddleContentHeaderStyled>Không gian yêu thích</FooterMiddleContentHeaderStyled>
                    <FooterMiddleContentStyled>Căn hộ dịch vụ</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Biệt thự</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Nhà riêng</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Studio</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Travel Guide</FooterMiddleContentStyled>
                </FooterMiddleContentWrapperStyled>
                <FooterMiddleContentWrapperStyled>
                    <FooterMiddleContentHeaderStyled>Về chúng tôi</FooterMiddleContentHeaderStyled>
                    <FooterMiddleContentStyled>Blog</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Điều khoản hoạt động</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Trang thông tin dành cho chủ nhà</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Cơ hội nghề nghiệp</FooterMiddleContentStyled>
                    <FooterMiddleContentStyled>Tạp chí du lịch</FooterMiddleContentStyled>
                </FooterMiddleContentWrapperStyled>
            </FooterMiddleWrapperStyled>
            <FooterRightWrapperStyled>
                <FooterRightContentHeaderStyled>Theo dõi chúng tôi</FooterRightContentHeaderStyled>
                <FooterIconWrapperStyled>
                    <InstagramIcon style={{cursor: 'pointer' }}/>
                    <FacebookIcon style={{cursor: 'pointer' }}/>
                    <TwitterIcon style={{cursor: 'pointer' }}/>
                </FooterIconWrapperStyled>
            </FooterRightWrapperStyled>
        </FooterWrapperStyled>
    </FooterContainerStyled>
  )
}

export default Footer