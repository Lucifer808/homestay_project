import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import SingleBedOutlinedIcon from '@mui/icons-material/SingleBedOutlined';
import { Country }  from 'country-state-city';
import PaymentStepperProvider from '../../child/PaymentStepperProvider';
import { selectUser, selectIsAutheticated } from '../../../features/userSlice'; 
import { useSelector } from 'react-redux';
import { selectBookingInfo } from '../../../features/customerSlice';
import Rating from '@mui/material/Rating';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import Popup from '../../admin/components/Popup';
import LoginPopup from '../../../pages/LoginPopup';
import UserOptions from '../../child/UserOptions';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PaymentpageContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    @import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500&display=swap');
`
const PaymentpageHeaderContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 8px 0px;
`
const PaymentpageHeaderWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80vw;
    padding: .4rem 0;
`
const HeaderLogoStyled = styled.h2`
    font-family: 'DynaPuff', cursive;
    text-align: left;
`
const PaymentpageHeaderStepWrapperStyled = styled.div`
    width: 60%;
`
const PaymentpageBottomContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin: 2rem 0;
    height: 100%;
`
const PaymentpageBottomWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 80vw;
`
const PaymentpageBottomRightWrapperStyled = styled.div`
    flex: 2;
    height: 100%;
    margin-left: 1rem;
`
const PaymentpageBottomRightTopWrapperStyled = styled.div`
    display: flex;
    padding: 1rem;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`
const PaymentpageBottomRightTopLeftImageWrapperStyled = styled.div`
    flex: 1;
`
const PaymentpageBottomRightTopLeftImageStyled = styled.img`
    width: 100%;
    height: 8rem;
    object-fit: cover;
    border-radius: .2rem;
`
const PaymentpageBottomRightTopRightInfoWrapperStyled = styled.div`
    flex: 2;
    padding: 0 1rem;
`
const PaymentpageBottomRightTopRightInfoTitleStyled = styled.p`
    font-size: 1.2rem;
    margin-bottom: .2rem;
`
const PaymentpageBottomRightTopRightInfoSubContentStyled = styled.p`
    font-size: .9rem;
    font-weight: 300;
    margin-top: .2rem;
`
const PaymentpageBottomRightMiddleWrapperStyled = styled.div`
    margin: 1rem 0;
    padding: 1rem;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 8px 0px;
`
const PaymentpageBottomRightMiddleDateStyled = styled.p`
    font-size: .9rem;
    font-weight: 600;
`
const PaymentpageBottomRightMiddleTitleStyled = styled.p`
    font-size: .9rem;
    font-weight: 500;
    margin: 1rem 0;
`
const RoomCardRightReviewWrapperStyled = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid #ccc;
`
const RoomCardRightReviewContentWrapperStyled = styled.div`
    width: 100%;
    height: 100%;
    margin-right: .6rem;
`
const RoomCardRightReviewContentTopStyled = styled.span`
    font-size: .9rem;
    display: block;
    color: rgb(62, 108, 234);
`
const RoomCardRightReviewContentBottomStyled = styled.span`
    display: block;
    font-size: .8rem;
    color: #888;
`
const RoomCardRightReviewPointWrapperStyled = styled.div`
    position: relative;
    background-color: rgb(62, 108, 234);
    height: 2.2rem;
    width: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 0;
`
const RoomCardRightReviewPointContentStyled = styled.span`
    display: block;
    color: #fff;
`
const PaymentpageBottomRightMiddleContentWrapperStyled = styled.div`
    display: flex;
    padding: 1rem 0;
`
const PaymentpageBottomRightMiddleContentImageWrapperStyled = styled.div`
    flex: 1;
`
const PaymentpageBottomRightMiddleContentImageStyled = styled.img`
    width: 100%;
    height: 8rem;
    object-fit: cover;
    border-radius: .2rem;
`
const PaymentpageBottomRightMiddleAdvancedContainerStyled = styled.div`
    flex: 2;
    margin-left: 1rem;
`
const PaymentpageBottomRightMiddleAdvancedWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: .4rem 0;
`
const PaymentpageBottomRightMiddleAdvancedContentStyled = styled.span`
    font-size: .8rem;
    margin-left: .4rem;
`
const PaymentpageBottomRightBottomWrapperStyled = styled.div`
    height: 100%;
    margin: 1rem 0;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 8px 0px;
`
const PaymentpageBottomRightBottomUpWrapperStyled = styled.div`
    padding: 1rem;
    background-color: #f9f9f9;
    border-bottom: 1px solid #ccc;
    .cross {
    position: relative;
    display: inline-block;
    }
    .cross::before, .cross::after {
        content: '';
        width: 100%;
        position: absolute;
        right: 0;
        top: 50%;
    }
    .cross::before {
        border-bottom: 3px solid red;
        -webkit-transform: skewY(-10deg);
        transform: skewY(-10deg);
    }
` 
const PaymentpageBottomRightBottomUpContentWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
` 
const PaymentpageBottomRightBottomUpContentLeftStyled = styled.p`
    font-size: .9rem;
` 
const PaymentpageBottomRightBottomUpContentRightStyled = styled.p`
    font-size: .9rem;
` 
const PaymentpageBottomRightBottomDownWrapperStyled = styled.div`
    padding: 1rem;
`
const PaymentpageBottomRightBottomDownContentWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const PaymentpageBottomRightBottomDownContentLeftStyled = styled.span`
    font-weight: 600;
`
const PaymentpageBottomRightBottomDownTagWrapperStyled = styled.div`
    margin-top: 1rem;
`
const PaymentpageBottomRightBottomDownTagTitleStyled = styled.span`
    font-size: .8rem;
    font-weight: 600;
`
const PaymentpageBottomRightBottomDownTagContentStyled = styled.span`
    font-size: .8rem;
`
const PaymentpageBottomLeftBottomWrapperStyled = styled.div`
    padding: 1rem;
    margin: 1rem 0;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`
const PaymentpageBottomLeftBottomButtonWrapperStyled = styled.div`
    margin: 1rem 0;
    text-align: right;
`
const PaymentpageBottomLeftBottomButtonTitleStyled = styled.p`
    font-size: .9rem;
`
const PaymentpageBottomLeftBottomButtonContentStyled = styled.button`
    color: #fff;
    background-color: rgb(83, 146, 249);
    cursor: pointer;
    padding: 1rem 4rem;
    outline: none;
    border: none;
    &:hover{
        background-color: rgb(135, 179, 251);
        border-color: rgb(135, 179, 251);
        color: rgb(255, 255, 255);
        transition: all 0.15s ease-in-out 0s;
    }
`
const HeaderLoginButtonStyled = styled.button`
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
const PaymentpageBottomLeftWrapperStyled = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const PaymentpageBottomLeftTopWrapperStyled = styled.div`
    padding: 2rem 1rem;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`
const PaymentpageBottomLeftTopTitleWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const PaymentpageBottomLeftTopTitleStyled = styled.span`
    font-size: 1.2rem;
    margin-left: .4rem;
`
const PaymentpageBottomLeftTopInputTitleStyled = styled.p`
    margin: 1rem 0 .4rem 0; 
    font-size: .9rem;
`
const PaymentpageBottomLeftTopInputStyled = styled.input`
    width: 100%;
    padding: .7rem;
    border: 1px solid rgb(50, 169, 35);
    border-radius: .2rem;
    &:focus{
        border-color: rgb(83, 146, 249);
        outline: 0px;
        box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset, rgb(83 146 249) 0px 0px 6px;
    }
`
const PaymentpageBottomLeftTopInputHalfContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const PaymentpageBottomLeftTopInputHalfWrapperStyled = styled.div``
const PaymentpageBottomLeftTopInputHalfStyled = styled.input`
    width: 23rem;
    padding: .7rem;
    border: 1px solid rgb(50, 169, 35);
    border-radius: .2rem;
    &:focus{
        border-color: rgb(83, 146, 249);
        outline: 0px;
        box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset, rgb(83 146 249) 0px 0px 6px;
    }
`
const PaymentpageBottomLeftTopSelectHalfStyled = styled.select`
    width: 23rem;
    padding: .7rem;
    border: 1px solid rgb(50, 169, 35);
    border-radius: .2rem;
    &:focus{
        border-color: rgb(83, 146, 249);
        outline: 0px;
        box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset, rgb(83 146 249) 0px 0px 6px;
    }
`
const PaymentpageBottomLeftTopOptionHalfStyled = styled.option`` 
const PaymentpageBottomLeftTopCheckboxStyled = styled.input`
    margin: 1rem 0;
`
const PaymentpageBottomLeftTopCheckboxTitleStyled = styled.span`
    font-weight: 300;
    margin-left: .4rem;
`
const PaymentpageBottomLeftMiddleWrapperStyled = styled.div`
    padding: 2rem 1rem;
    margin: 1rem 0;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`
const PaymentpageBottomLeftMiddleTitleStyled = styled.p`
    font-weight: 600;
`
const PaymentpageBottomLeftMiddleSubTitleStyled = styled.p`
    font-weight: 300;
    font-size: .9rem;
    margin: 1rem 0;
`
const PaymentpageBottomLeftMiddleAdvanceWrapperStyled = styled.div`
    background-color: #f9f9f9;
    padding: 1rem;
`
const PaymentpageBottomLeftMiddleAdvanceTitleStyled = styled.p`
    font-weight: 300;
    font-size: .9rem;
`
const PaymentpageBottomLeftMiddleAdvanceChoiceWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;
`
const PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-child(2){
        margin-left: 10rem;
    }
`
const PaymentpageBottomLeftMiddleAdvanceSubChoiceInputStyled = styled.input`
    margin-right: .4rem;
`
const PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled = styled.span`
    margin-left: .4rem;
    font-size: .9rem;
    font-weight: 300;
`
const PaymentpageBottomLeftMiddleMoreAdvanceWrapperStyled = styled.div`
    margin: 1rem 0;
    border: 1px solid #ccc;
    padding: 1rem;
`
const PaymentpageBottomLeftMiddleMoreAdvanceTopTitleStyled = styled.p`
    color: rgb(83, 146, 249);
    text-decoration: underline;
    margin-top: 1rem;
    cursor: pointer;
`
const PaymentpageBottomLeftMiddleMoreAdvanceTitleStyled = styled.p`
    font-size: .9rem;
    font-weight: 300;
`
const PaymentpageBottomLeftMiddleMoreAdvanceTopDescWrapperStyled = styled.div`
    padding: 1.8rem 0 0 0;
`
const PaymentpageBottomLeftMiddleMoreAdvanceTopDescTitleStyled = styled.p`
    font-size: .9rem;
    margin-bottom: 1rem;
`
const PaymentpageBottomLeftMiddleMoreAdvanceTopDescStyled = styled.textarea`
    padding: .4rem;
`
const PaymentFristStep = () => {
    const navigate = useNavigate();
    const [openPopup, setOpenPopup] = useState(false);
    const isAutheticated = useSelector(selectIsAutheticated);
    const selectBookingInfoData = useSelector(selectBookingInfo);
    const pathName = process.env.REACT_APP_BACK_END_PUBLIC_URL;
    const usereData = useSelector(selectUser);
    const initialValueF = {
        userName: usereData?.user?.userName || " ",
        userEmail: usereData?.user?.email || " ",
        userPhoneNumber: " ",
        nameOfAccommodation: selectBookingInfoData?.data?.[0]?.nameOfAccommodation || "An Lam Retreats Ninh Van Bay",
        userRegion: " ",
        smoke: " ",
        bed: " ",
        message: " "
    }
    const [values, setValues] = useState(initialValueF);
    const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValues({
        ...values,
        [name]: value
    })
  }
  const handleNext = () => {
    sessionStorage.setItem("orderInfo", JSON.stringify(values));
    navigate("/payment/checkout")
  };
  const handlePopupLogin = () => {
    setOpenPopup(true);
  }
  return (
    <PaymentpageContainerStyled>
        <PaymentpageHeaderContainerStyled>
            <PaymentpageHeaderWrapperStyled>
            <Link to="/" style={{textDecoration: "none", color: "#000"}}>
                <HeaderLogoStyled>Vluxstay</HeaderLogoStyled>
                </Link>
                <PaymentpageHeaderStepWrapperStyled>
                    <PaymentStepperProvider activeStep={0} />
                </PaymentpageHeaderStepWrapperStyled>
                { isAutheticated ? <UserOptions user={usereData} /> : (
                    <HeaderLoginButtonStyled onClick={handlePopupLogin}>Đăng nhập</HeaderLoginButtonStyled>
                )}
            </PaymentpageHeaderWrapperStyled>
        </PaymentpageHeaderContainerStyled>
        <PaymentpageBottomContainerStyled>
            <PaymentpageBottomWrapperStyled>
                <PaymentpageBottomLeftWrapperStyled>
                    <PaymentpageBottomLeftTopWrapperStyled>
                        <PaymentpageBottomLeftTopTitleWrapperStyled>
                            <RecordVoiceOverOutlinedIcon style={{color: 'rgb(62, 108, 234)'}}/>
                            <PaymentpageBottomLeftTopTitleStyled>Thông tin liên lạc</PaymentpageBottomLeftTopTitleStyled>
                        </PaymentpageBottomLeftTopTitleWrapperStyled>
                        <PaymentpageBottomLeftTopInputTitleStyled>Họ và tên</PaymentpageBottomLeftTopInputTitleStyled>
                        <PaymentpageBottomLeftTopInputStyled 
                            placeholder='Nhập họ và tên...' 
                            name='userName' 
                            disabled={usereData ? true : false} 
                            value={values.userName}
                            onChange={handleChangeInput}
                        />
                        <PaymentpageBottomLeftTopInputTitleStyled>Email</PaymentpageBottomLeftTopInputTitleStyled>
                        <PaymentpageBottomLeftTopInputStyled 
                            placeholder='Nhập email...' name='userEmail' 
                            disabled={usereData ? true : false} 
                            value={values.userEmail}/>
                        <PaymentpageBottomLeftTopInputHalfContainerStyled>
                            <PaymentpageBottomLeftTopInputHalfWrapperStyled>
                                <PaymentpageBottomLeftTopInputTitleStyled>Số điện thoại (không bắt buộc)</PaymentpageBottomLeftTopInputTitleStyled>
                                <PaymentpageBottomLeftTopInputHalfStyled 
                                    name='userPhoneNumber'
                                    type="tel"
                                    onChange={handleChangeInput}
                                />
                            </PaymentpageBottomLeftTopInputHalfWrapperStyled>
                            <PaymentpageBottomLeftTopInputHalfWrapperStyled>
                                <PaymentpageBottomLeftTopInputTitleStyled>Quốc gia cư trú</PaymentpageBottomLeftTopInputTitleStyled>
                                <PaymentpageBottomLeftTopSelectHalfStyled name='userRegion' onChange={handleChangeInput}>
                                {Country && Country.getAllCountries().map((item) => (
                                    <PaymentpageBottomLeftTopOptionHalfStyled key={item.isoCode} value={item.name}>{item.name}</PaymentpageBottomLeftTopOptionHalfStyled>
                                ))}
                                </PaymentpageBottomLeftTopSelectHalfStyled>
                            </PaymentpageBottomLeftTopInputHalfWrapperStyled>
                        </PaymentpageBottomLeftTopInputHalfContainerStyled>
                        <PaymentpageBottomLeftTopCheckboxStyled type="checkbox"/>
                        <PaymentpageBottomLeftTopCheckboxTitleStyled>Tôi không ở phòng nào tại khách sạn này. Tôi đặt phòng giúp cho người khác.</PaymentpageBottomLeftTopCheckboxTitleStyled>
                    </PaymentpageBottomLeftTopWrapperStyled>
                    <PaymentpageBottomLeftMiddleWrapperStyled>
                        <PaymentpageBottomLeftMiddleTitleStyled>Hãy cho chúng tôi biết quý khách cần gì</PaymentpageBottomLeftMiddleTitleStyled>
                        <PaymentpageBottomLeftMiddleSubTitleStyled>Các yêu cầu được đáp ứng trên cơ sở phục vụ cho khách đến trước. Chúng tôi sẽ gửi các yêu cầu của quý khách ngay sau khi quý khách đặt phòng.</PaymentpageBottomLeftMiddleSubTitleStyled>
                        <PaymentpageBottomLeftMiddleAdvanceWrapperStyled>
                            <PaymentpageBottomLeftMiddleAdvanceTitleStyled>Quy định hút thuốc (nếu có phòng):</PaymentpageBottomLeftMiddleAdvanceTitleStyled>
                            <PaymentpageBottomLeftMiddleAdvanceChoiceWrapperStyled>
                                <PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                                    <PaymentpageBottomLeftMiddleAdvanceSubChoiceInputStyled type="radio" name="smoke" value="Phòng không hút thuốc" onChange={handleChangeInput}/>
                                    <SmokeFreeIcon style={{color: '#555'}}/>
                                    <PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>Phòng không hút thuốc</PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>
                                </PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                                <PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                                    <PaymentpageBottomLeftMiddleAdvanceSubChoiceInputStyled type="radio" name="smoke" value="Phòng hút thuốc" onChange={handleChangeInput}/>
                                    <SmokingRoomsIcon style={{color: '#555'}}/>
                                    <PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>Phòng hút thuốc</PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>
                                </PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                            </PaymentpageBottomLeftMiddleAdvanceChoiceWrapperStyled>
                            <PaymentpageBottomLeftMiddleAdvanceTitleStyled>Chọn loại giường (nếu có phòng):</PaymentpageBottomLeftMiddleAdvanceTitleStyled>
                            <PaymentpageBottomLeftMiddleAdvanceChoiceWrapperStyled>
                                <PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                                    <PaymentpageBottomLeftMiddleAdvanceSubChoiceInputStyled type="radio" name="bed" value="Giường đôi" onChange={handleChangeInput}/>
                                    <KingBedOutlinedIcon style={{color: '#555'}}/>
                                    <PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>Tôi muốn lấy giường lớn</PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>
                                </PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                                <PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled style={{marginLeft: '9.6rem'}}>
                                    <PaymentpageBottomLeftMiddleAdvanceSubChoiceInputStyled type="radio" name="bed" value="2 giường đơn" onChange={handleChangeInput}/>
                                    <SingleBedOutlinedIcon style={{color: '#555'}}/>
                                    <SingleBedOutlinedIcon style={{color: '#555'}}/>
                                    <PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>Tôi muốn lấy phòng 2 giường</PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>
                                </PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                            </PaymentpageBottomLeftMiddleAdvanceChoiceWrapperStyled>
                        </PaymentpageBottomLeftMiddleAdvanceWrapperStyled>
                        <PaymentpageBottomLeftMiddleMoreAdvanceTopTitleStyled>Thêm yêu cầu đặc biệt</PaymentpageBottomLeftMiddleMoreAdvanceTopTitleStyled>
                        <PaymentpageBottomLeftMiddleMoreAdvanceWrapperStyled>
                            <PaymentpageBottomLeftMiddleMoreAdvanceTitleStyled>Vui lòng lưu ý tất cả các yêu cầu chỉ được đáp ứng tùy theo khách sạn.</PaymentpageBottomLeftMiddleMoreAdvanceTitleStyled>
                            <PaymentpageBottomLeftMiddleMoreAdvanceTopDescWrapperStyled>
                                <PaymentpageBottomLeftMiddleMoreAdvanceTopDescTitleStyled>Vui lòng nhập lời nhắn tại đây</PaymentpageBottomLeftMiddleMoreAdvanceTopDescTitleStyled>
                                <PaymentpageBottomLeftMiddleMoreAdvanceTopDescStyled cols="107" rows="8" name='message' onChange={handleChangeInput}/>
                            </PaymentpageBottomLeftMiddleMoreAdvanceTopDescWrapperStyled>
                        </PaymentpageBottomLeftMiddleMoreAdvanceWrapperStyled>
                    </PaymentpageBottomLeftMiddleWrapperStyled>
                </PaymentpageBottomLeftWrapperStyled>
                <PaymentpageBottomRightWrapperStyled>
                    <PaymentpageBottomRightTopWrapperStyled>
                        <PaymentpageBottomRightTopLeftImageWrapperStyled>
                            <PaymentpageBottomRightTopLeftImageStyled src={`${pathName+selectBookingInfoData?.data?.[0]?.acim_id?.[0]?.path}`} />
                        </PaymentpageBottomRightTopLeftImageWrapperStyled>
                        <PaymentpageBottomRightTopRightInfoWrapperStyled>
                            <PaymentpageBottomRightTopRightInfoTitleStyled>{selectBookingInfoData?.data?.[0]?.nameOfAccommodation}</PaymentpageBottomRightTopRightInfoTitleStyled>
                            <Rating name="size-small" value={selectBookingInfoData?.data?.[0]?.rating || 5} size="small" readOnly/>
                            <PaymentpageBottomRightTopRightInfoSubContentStyled>{`${selectBookingInfoData?.data?.[0]?.acci_id?.name}, ${selectBookingInfoData?.data?.[0]?.acst_id?.name}, ${selectBookingInfoData?.data?.[0]?.acct_id?.name}`}</PaymentpageBottomRightTopRightInfoSubContentStyled>
                        </PaymentpageBottomRightTopRightInfoWrapperStyled>
                    </PaymentpageBottomRightTopWrapperStyled>
                    <PaymentpageBottomRightMiddleWrapperStyled>
                        <PaymentpageBottomRightMiddleDateStyled>{`${selectBookingInfoData?.checkIn} đến ${selectBookingInfoData?.checkOut}`}</PaymentpageBottomRightMiddleDateStyled>
                        {/* <PaymentpageBottomRightMiddleDateStyled>{`${format(new Date(selectBookingInfoData?.checkIn), 'dd LLLL yyyy', { locale: vi })} - ${format(new Date(selectBookingInfoData?.checkOut), 'dd LLLL yyyy', { locale: vi })}`}</PaymentpageBottomRightMiddleDateStyled> */}
                        <PaymentpageBottomRightMiddleTitleStyled>{selectBookingInfoData?.numOfRoom} x {selectBookingInfoData?.data?.[0]?.trac_id?.[0]?.name}</PaymentpageBottomRightMiddleTitleStyled>
                        <RoomCardRightReviewWrapperStyled>
                            <RoomCardRightReviewContentWrapperStyled>
                                <RoomCardRightReviewContentTopStyled>Tuyệt vời</RoomCardRightReviewContentTopStyled>
                                <RoomCardRightReviewContentBottomStyled>1.509 Bài đánh giá</RoomCardRightReviewContentBottomStyled>
                            </RoomCardRightReviewContentWrapperStyled>
                            <RoomCardRightReviewPointWrapperStyled>
                                <RoomCardRightReviewPointContentStyled>8.5</RoomCardRightReviewPointContentStyled>
                            </RoomCardRightReviewPointWrapperStyled>
                        </RoomCardRightReviewWrapperStyled>
                        <PaymentpageBottomRightMiddleContentWrapperStyled>
                            <PaymentpageBottomRightMiddleContentImageWrapperStyled>
                                <PaymentpageBottomRightMiddleContentImageStyled src={`${pathName+selectBookingInfoData?.data?.[0]?.acim_id?.[0]?.path}`} />
                            </PaymentpageBottomRightMiddleContentImageWrapperStyled>
                            <PaymentpageBottomRightMiddleAdvancedContainerStyled>
                                <PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                    <PermIdentityOutlinedIcon />
                                    <PaymentpageBottomRightMiddleAdvancedContentStyled>{selectBookingInfoData?.numOfRoom} phòng, {selectBookingInfoData?.numOfAudlts} người lớn</PaymentpageBottomRightMiddleAdvancedContentStyled>
                                </PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                <PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                    <Diversity3OutlinedIcon />
                                    <PaymentpageBottomRightMiddleAdvancedContentStyled>Tối đa {selectBookingInfoData?.data?.[0]?.trac_id?.[0]?.trro_id?.[0]?.noOfAdult} người lớn, {selectBookingInfoData?.data?.[0]?.trac_id?.[0]?.trro_id?.[0]?.noOfChildren} Trẻ em (0-12 tuổi)</PaymentpageBottomRightMiddleAdvancedContentStyled>
                                </PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                <PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                    <CheckOutlinedIcon style={{color: 'rgb(50, 169, 35)'}}/>
                                    <PaymentpageBottomRightMiddleAdvancedContentStyled>Bãi đậu xe</PaymentpageBottomRightMiddleAdvancedContentStyled>
                                </PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                <PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                    <CheckOutlinedIcon style={{color: 'rgb(50, 169, 35)'}}/>
                                    <PaymentpageBottomRightMiddleAdvancedContentStyled>Nước uống chào đón</PaymentpageBottomRightMiddleAdvancedContentStyled>
                                </PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                <PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                    <CheckOutlinedIcon style={{color: 'rgb(50, 169, 35)'}}/>
                                    <PaymentpageBottomRightMiddleAdvancedContentStyled>Cà phê & trà</PaymentpageBottomRightMiddleAdvancedContentStyled>
                                </PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                <PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                    <CheckOutlinedIcon style={{color: 'rgb(50, 169, 35)'}}/>
                                    <PaymentpageBottomRightMiddleAdvancedContentStyled>Nước uống</PaymentpageBottomRightMiddleAdvancedContentStyled>
                                </PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                <PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                    <CheckOutlinedIcon style={{color: 'rgb(50, 169, 35)'}}/>
                                    <PaymentpageBottomRightMiddleAdvancedContentStyled>Phòng tập</PaymentpageBottomRightMiddleAdvancedContentStyled>
                                </PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                            </PaymentpageBottomRightMiddleAdvancedContainerStyled>
                        </PaymentpageBottomRightMiddleContentWrapperStyled>
                    </PaymentpageBottomRightMiddleWrapperStyled>
                    <PaymentpageBottomRightBottomWrapperStyled>
                        <PaymentpageBottomRightBottomUpWrapperStyled>
                            <PaymentpageBottomRightBottomUpContentWrapperStyled>
                                <PaymentpageBottomRightBottomUpContentLeftStyled>Giá gốc ({selectBookingInfoData?.numOfRoom} phòng x {selectBookingInfoData?.numOfDays} đêm)</PaymentpageBottomRightBottomUpContentLeftStyled>
                                <PaymentpageBottomRightBottomUpContentRightStyled className='cross'>{selectBookingInfoData?.priceBase?.toLocaleString()} ₫</PaymentpageBottomRightBottomUpContentRightStyled>
                            </PaymentpageBottomRightBottomUpContentWrapperStyled>
                            <PaymentpageBottomRightBottomUpContentWrapperStyled>
                                <PaymentpageBottomRightBottomUpContentLeftStyled>Giá phòng ({selectBookingInfoData?.numOfRoom} phòng x {selectBookingInfoData?.numOfDays} đêm)</PaymentpageBottomRightBottomUpContentLeftStyled>
                                <PaymentpageBottomRightBottomUpContentRightStyled>{selectBookingInfoData?.priceExactly?.toLocaleString()} ₫</PaymentpageBottomRightBottomUpContentRightStyled>
                            </PaymentpageBottomRightBottomUpContentWrapperStyled>
                            <PaymentpageBottomRightBottomUpContentWrapperStyled>
                                <PaymentpageBottomRightBottomUpContentLeftStyled>Phí đặt trước</PaymentpageBottomRightBottomUpContentLeftStyled>
                                <PaymentpageBottomRightBottomUpContentRightStyled style={{color: 'rgb(62, 108, 234)'}}>MIỄN PHÍ</PaymentpageBottomRightBottomUpContentRightStyled>
                            </PaymentpageBottomRightBottomUpContentWrapperStyled>
                        </PaymentpageBottomRightBottomUpWrapperStyled>
                        <PaymentpageBottomRightBottomDownWrapperStyled>
                            <PaymentpageBottomRightBottomDownContentWrapperStyled>
                                <PaymentpageBottomRightBottomDownContentLeftStyled>Giá tiền</PaymentpageBottomRightBottomDownContentLeftStyled>
                                <PaymentpageBottomRightBottomDownContentLeftStyled>{selectBookingInfoData?.priceTotal?.toLocaleString()} ₫</PaymentpageBottomRightBottomDownContentLeftStyled>
                            </PaymentpageBottomRightBottomDownContentWrapperStyled>
                            <PaymentpageBottomRightBottomDownTagWrapperStyled>
                                <PaymentpageBottomRightBottomDownTagTitleStyled>Giá đã bao gồm: </PaymentpageBottomRightBottomDownTagTitleStyled>
                                <PaymentpageBottomRightBottomDownTagContentStyled>Thuế thành phố 1%, Thuế 7%, Phí dịch vụ 10%</PaymentpageBottomRightBottomDownTagContentStyled>
                            </PaymentpageBottomRightBottomDownTagWrapperStyled>
                        </PaymentpageBottomRightBottomDownWrapperStyled>
                    </PaymentpageBottomRightBottomWrapperStyled>
                    <PaymentpageBottomLeftBottomWrapperStyled>
                        <PaymentpageBottomLeftBottomButtonTitleStyled>Thực hiện bước tiếp theo đồng nghĩa với việc bạn chấp nhận tuân theo <b>Điều khoản sử dụng</b> và <b>Chính sách bảo mật</b> của chúng tôi.</PaymentpageBottomLeftBottomButtonTitleStyled>
                        <PaymentpageBottomLeftBottomButtonWrapperStyled onClick={handleNext}>
                            <PaymentpageBottomLeftBottomButtonContentStyled>KẾ TIẾP: BƯỚC CUỐI CÙNG</PaymentpageBottomLeftBottomButtonContentStyled>
                        </PaymentpageBottomLeftBottomButtonWrapperStyled>
                    </PaymentpageBottomLeftBottomWrapperStyled>
                </PaymentpageBottomRightWrapperStyled>
            </PaymentpageBottomWrapperStyled>
        </PaymentpageBottomContainerStyled>
        <Popup
            title="Đăng nhập"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            onClose={() => setOpenPopup(false)} 
            maxWidth="sm"
        >
                <LoginPopup setOpenPopup={setOpenPopup}/>
        </Popup>
    </PaymentpageContainerStyled>
  )
}

export default PaymentFristStep