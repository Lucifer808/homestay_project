import React from 'react';
import styled from 'styled-components';
import flag1 from '../assets/flag-vn.png';
import provider_multi_unit from '../assets/provider-multi-unit.png';
import provider_single_unit from '../assets/provider-single-unit.png';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import { Link, useNavigate } from 'react-router-dom';
const ProviderMainContainerStyled = styled.div`
    height: 100%;
    width: 100%;
`
const ProviderMainWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
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
const ProviderMainBottomWrapperStyled = styled.div`
    width: 80rem;
    display: flex;
    flex-direction: column;
    margin: 4rem 0;
`
const ProviderMainBottomContentWrapperStyled = styled.div`
    border: 1px solid #ccc;
    padding: 1rem;
`
const ProviderMainBottomHeaderStyled = styled.h3`
    display: block;
`
const ProviderMainBottomSubHeaderStyled = styled.p`
    font-weight: 300;
    margin: 1rem 0;
`
const ProviderMainBottomContentHeaderStyled = styled.p`
    font-size: .9rem;
    padding: 1rem 0;
    font-weight: 600;
`
const ProviderMainBottomContentBottonWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ProviderMainBottomContentLeftWrapperStyled = styled.div`
    border-radius: .2rem;
    border: 1px solid #ccc;
`
const ProviderMainBottomContentImageStyled = styled.img`
    object-fit: cover;
    height: 20rem;
    width: 36rem;
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
`
const ProviderMainBottomContentRightWrapperStyled = styled.div`
    border: 1px solid #ccc;
    border-radius: .2rem;
    width: 36rem;
`
const ProviderMainBottomSubContentWrapperStyled = styled.div`
    display: flex;
`
const ProviderMainBottomSubContentContainerStyled = styled.div`
    padding: 1rem;
`
const ProviderMainBottomSubContentRightWrapperStyled = styled.div`
    margin-left: 1rem;
    height: 4rem;
`
const ProviderMainBottomSubContentRightButtonStyled = styled.button`
    background-color: #fff;
    color: #5392f9;
    border-radius: 4px;
    border: 1px solid #5392f9;
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    cursor: pointer;
    &:hover{
        color: #fff;
        background-color: #0c5478;
        border-color: #0b4d6e;
    }
`
const ProviderMainBottomSubContentRightContentStyled = styled.h4``
const ProviderMainBottomSubContentRightSubContentStyled = styled.p`
    font-size: .8rem;
    margin: .4rem 0;
`
const ProviderMainpage = () => {
  const navigate = useNavigate();
  const handleNewProviderInfo = () => {
    const ac_propertyRegistrationId = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    const roomTypeId = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    navigate(`/provider?p=${ac_propertyRegistrationId}&roomTypeId=${roomTypeId}`);
  }
  return (
    <ProviderMainContainerStyled>
        <ProviderWelcomepageHeaderContainerStyled>
            <ProviderWelcomepageHeaderWrapperStyled>
            <Link to="/" style={{textDecoration: "none", color: "#000"}}>
                
                <HeaderLogoStyled>Vluxstay</HeaderLogoStyled>
                </Link>
                <HeaderRightStyled>
                    <HeaderLanguageStyled src={flag1} />
                    <Link to="/account/login">
                        <HeaderLoginButtonStyled>Đăng nhập</HeaderLoginButtonStyled>
                    </Link>
                    <Link to="/account/register">
                        <HeaderRegisterButtonStyled>Tạo tài khoản</HeaderRegisterButtonStyled>
                    </Link>
                </HeaderRightStyled>
            </ProviderWelcomepageHeaderWrapperStyled>
        </ProviderWelcomepageHeaderContainerStyled>
        <ProviderMainWrapperStyled>
            <ProviderMainBottomWrapperStyled>
                <ProviderMainBottomHeaderStyled>Điều nào sau đây mô tả đúng nhất về quý đối tác?</ProviderMainBottomHeaderStyled>
                <ProviderMainBottomSubHeaderStyled>Hãy chọn một, và chúng tôi sẽ đưa quý đối tác đến bước tiếp theo để triển khai nhanh.</ProviderMainBottomSubHeaderStyled>
                <ProviderMainBottomContentWrapperStyled>
                    <ProviderMainBottomContentHeaderStyled>Loại hình chỗ nghỉ</ProviderMainBottomContentHeaderStyled>
                    <ProviderMainBottomContentBottonWrapperStyled>
                        <ProviderMainBottomContentLeftWrapperStyled>
                            <ProviderMainBottomContentImageStyled src={provider_single_unit}/>
                            <ProviderMainBottomSubContentContainerStyled>
                                <ProviderMainBottomSubContentWrapperStyled>
                                    <HouseOutlinedIcon style={{fontSize: '2rem'}}/>
                                    <ProviderMainBottomSubContentRightWrapperStyled>
                                        <ProviderMainBottomSubContentRightContentStyled>
                                            Người quản lý Chỗ nghỉ Độc lập
                                        </ProviderMainBottomSubContentRightContentStyled>
                                        <ProviderMainBottomSubContentRightSubContentStyled>
                                            Quản lý một hoặc nhiều chỗ nghỉ là căn đơn lẻ như nhà, căn hộ, hoặc căn chung cư
                                        </ProviderMainBottomSubContentRightSubContentStyled>
                                    </ProviderMainBottomSubContentRightWrapperStyled>
                                </ProviderMainBottomSubContentWrapperStyled>
                                <ProviderMainBottomSubContentRightButtonStyled onClick={handleNewProviderInfo}>Chọn</ProviderMainBottomSubContentRightButtonStyled>
                            </ProviderMainBottomSubContentContainerStyled>
                        </ProviderMainBottomContentLeftWrapperStyled>
                        <ProviderMainBottomContentRightWrapperStyled>
                            <ProviderMainBottomContentImageStyled src={provider_multi_unit}/>
                            <ProviderMainBottomSubContentContainerStyled>
                                <ProviderMainBottomSubContentWrapperStyled>
                                    <HouseOutlinedIcon style={{fontSize: '2rem'}}/>
                                    <ProviderMainBottomSubContentRightWrapperStyled>
                                        <ProviderMainBottomSubContentRightContentStyled>
                                            Người quản lý Khách sạn hoặc Tòa nhà
                                        </ProviderMainBottomSubContentRightContentStyled>
                                        <ProviderMainBottomSubContentRightSubContentStyled>
                                            Quản lý một hoặc nhiều tòa nhà nhiều căn như khách sạn, phòng ngủ và ăn sáng, căn hộ dịch vụ, hoặc tòa nhà chung cư cho thuê
                                        </ProviderMainBottomSubContentRightSubContentStyled>
                                    </ProviderMainBottomSubContentRightWrapperStyled>
                                </ProviderMainBottomSubContentWrapperStyled>
                                <Link to="/enterprise">
                                    <ProviderMainBottomSubContentRightButtonStyled>Chọn</ProviderMainBottomSubContentRightButtonStyled>
                                </Link>
                            </ProviderMainBottomSubContentContainerStyled>
                        </ProviderMainBottomContentRightWrapperStyled>
                    </ProviderMainBottomContentBottonWrapperStyled>
                </ProviderMainBottomContentWrapperStyled>
            </ProviderMainBottomWrapperStyled>
        </ProviderMainWrapperStyled>
    </ProviderMainContainerStyled>
  )
}

export default ProviderMainpage