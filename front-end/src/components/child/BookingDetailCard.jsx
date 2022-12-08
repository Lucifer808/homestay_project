import React, { useState } from 'react';
import styled from 'styled-components';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import DoorBackOutlinedIcon from '@mui/icons-material/DoorBackOutlined';
import SmokeFreeOutlinedIcon from '@mui/icons-material/SmokeFreeOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import BoyOutlinedIcon from '@mui/icons-material/BoyOutlined';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import intervalToDuration from 'date-fns/intervalToDuration';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../features/customerSlice';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const ReactSlickSyled = styled(Slider)`
    .slick-list {
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
    height: 100% !important;
    overflow: hidden;
    border: none;
    }
    .slick-slide{
        position: relative;
    }
    .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
        background-color: hsla(0,0%,100%,.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: .5px solid #ccc;
    }
    .slick-prev{
        left: 20px;
    }
    .slick-next{
        right: 20px;
    }
    .slick-prev::before,
    .slick-next::before{
        display: none;
    }
`
const BookingDetailCardContainerStyled = styled.div`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: .2rem;
    margin: 1rem 0;
`
const BookingDetailCardWrapperStyled = styled.div``
const BookingDetailCardTopWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`
const BookingDetailCardTopLeftTitleStyled = styled.p`
    font-weight: 600;
`
const RoomCardRightReviewWrapperStyled = styled.div`
    display: flex;
    text-align: right;
    padding: .6rem;
`
const RoomCardRightReviewContentWrapperStyled = styled.div`
    margin-right: .6rem;
`
const RoomCardRightReviewContentTopStyled = styled.span`
    font-size: .9rem;
    display: block;
`
const RoomCardRightReviewContentBottomStyled = styled.span`
    display: block;
    font-size: .8rem;
    color: #888;
`
const RoomCardRightReviewPointWrapperStyled = styled.div`
    position: relative;
    color: rgb(62, 108, 234);
    background-color: #fff;
    height: 2.2rem;
    width: 2.4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 0;
    border: 1px solid rgb(62, 108, 234);
`
const RoomCardRightReviewPointContentStyled = styled.span`
    display: block;
`
const BookingDetailCardBottomWrapperStyled = styled.div`
    position: relative;
    padding: 1rem;
    background-color: rgb(247, 247, 247);
`
const BookingDetailCardBottomContentWrapperStyled = styled.div`
    width: 100%;
    height: 40rem;
    display: flex;
`
const BookingDetailCardTopContentWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const BookingDetailCardTopContentStyled = styled.p``
const BookingDetailCardBottomLeftWrapperStyled = styled.div`
    margin-top: 1rem;
    width: 14rem;
`
const BookingDetailCardBottomLeftImageWrapperStyled = styled.div`
    cursor: pointer;
`
const BookingDetailCardBottomLeftImageStyled = styled.img`
    width: 14rem;
    height: 8rem;
    object-fit: cover;
`
const BookingDetailCardBottomLeftSubImageWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const BookingDetailCardBottomLeftSubImageStyled = styled.img`
    width: 6.9rem;
    height: 4rem;
    object-fit: cover;
`
const BookingDetailCardBottomLeftSubTitleStyled = styled.span`
    display: block;
    padding: .4rem 0;
    color: rgb(84, 123, 231);
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    &:hover{
        text-decoration: underline;
    }
`
const BookingDetailCardBottomLeftBedSizeWrapperStyled = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid #ccc;
`
const BookingDetailCardBottomLeftBedSizeTitleStyled = styled.p`
    font-size: .8rem;
    font-weight: 600;
`
const BookingDetailCardBottomLeftBedSizeChoiceWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: .2rem 0;
`
const BookingDetailCardBottomLeftBedSizeChoiceLeftWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const BookingDetailCardBottomLeftBedSizeChoiceRightWrapperStyled = styled.div``
const BookingDetailCardBottomLeftBedSizeChoiceStyled = styled.input``
const BookingDetailCardBottomLeftBedSizeChoiceTitleStyled = styled.span`
    margin-left: .2rem;
    font-size: .9rem;
`
const BookingDetailCardBottomLeftConvenientWrapperStyled = styled.div`
    padding: 1rem 0;
`
const BookingDetailCardBottomLeftConvenientContentWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: .4rem 0;
`
const BookingDetailCardBottomLeftConvenientContentStyled = styled.span`
    font-size: .9rem;
    margin-left: 1rem;
`
const BookingDetailCardBottomRightContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
`
const BookingDetailCardBottomRightWrapperStyled = styled.div`
    display: flex;
    z-index: 1;
    margin-top: 1rem;
    margin-left: 1rem;
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 6px 0px;
`
const BookingDetailCardBottomRightContentContainerStyled = styled.div`
    width: 14rem;
    height: 100%;
    border-right: 1px solid #ccc;
    padding: 1rem;
`
const BookingDetailCardBottomRightContentWrapperStyled = styled.div`
    margin-bottom: 1rem;
`
const BookingDetailCardBottomRightContentTitleWrapperStyled = styled.p`
    font-size: .9rem;
    font-weight: 600;
`
const BookingDetailCardBottomRightSubContentWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: .4rem 0;
`
const BookingDetailCardBottomRightSubContentStyled = styled.span`
    font-size: .8rem;
    margin-left: .4rem;
`
const BookingDetailCardBottomRightCapacityContainerStyled = styled.div`
    text-align: center;
    width: 8rem;
    height: 100%;
    border-right: 1px solid #ccc;
    padding: 1rem;
`
const BookingDetailCardBottomRightCapacityContentStyled = styled.p`
    font-size: .8rem;
`
const BookingDetailCardBottomRightCapacitySubContentStyled = styled.p`
    font-size: .8rem;
    color: #32a923;
    margin-top: .2rem;
`
const BookingDetailCardBottomRightCancelContainerStyled = styled.div`
    width: 20rem;
    height: 100%;
    border-right: 1px solid #ccc;
    padding: 1rem;
    background-color: rgb(244, 248, 253);
`
const BookingDetailCardBottomRightContentTitleCancelWrapperStyled = styled.div`
    margin: 1rem 0;
    display: flex;
`
const BookingDetailCardBottomRightContentTitleCancelInputStyled = styled.input``
const BookingDetailCardBottomRightContentTitleCancelStyled = styled.p`
    font-size: .8rem;
    margin-left: .4rem;
`
const BookingDetailCardBottomRightPriceContainerStyled = styled.div`
    padding: 1rem 0 1rem 1rem;
    text-align: left;
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
const RoomCardRightPriceDiscountContentWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem 0;
    border-radius: .1rem;
    width: 10rem;
    background-color: rgb(249, 216, 216);
`
const RoomCardRightPriceDiscountContentStyled = styled.span`
    display: block;
    text-align: center;
    font-size: .8rem;
    color: rgb(180, 36, 36);
`
const RoomCardRightPriceDiscountSubContentStyled = styled.span`
    display: block;
    font-size: .6rem;
    width: 10rem;
    color: #666;
    margin: .4rem 0;
`
const RoomCardRightOldPriceStyled = styled.p`
    font-size: 1.4rem;
    max-width: 100%;
    color: #666;
    margin: .2rem 0;
`
const RoomCardRightNewPriceStyled = styled.p`
    font-size: 1.4rem;
    max-width: 100%;
    color: #e12d2d;
`
const RoomCardRightBottomButtonWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .4rem 0;
    background-color: rgb(62, 108, 234);
    border-radius: .2rem;
    border-color: rgb(120, 152, 240);
    cursor: pointer;
    width: 14rem;
    &:hover{
        background-color: rgb(120, 152, 240);
    }
`
const RoomCardRightBottomCartButtonWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .6rem 0;
    padding: .4rem 0;
    background-color: #fff;
    border-radius: .2rem;
    border: 1px solid rgb(62, 108, 234);
    cursor: pointer;
    color: rgb(62, 108, 234);
    &:hover{
        background-color: rgb(120, 152, 240);
        color: #fff;
    }
`
const RoomCardRightBottomButtonTitleStyled = styled.span`
    display: block;
    margin: .9rem .8rem;
    font-size: .9rem;
    color: #fff;
`
const RoomCardRightCartBottomButtonTitleStyled = styled.span`
    display: block;
    margin: .9rem .8rem;
    font-size: .9rem;
`
const RoomDetailImgDetailWrapperStyled = styled.div``
const RoomDetailDialogContentContainerStyled = styled.div``
const RoomDetailDialogContentWrapperStyled = styled.div`
    display: flex;
`
const RoomDetailDialogContentImgWrapperStyled = styled.div`
    width: 58rem;
    height: 100%;
`
const RoomDetailDialogContentDiscWrapperStyled = styled.div`
    width: 40rem;
`
const RoomDetailDialogContentImgDetailWrapperStyled = styled.div`
    width: 100%;
    height: 34rem;
`
const RoomDetailDialogContentImgDetailStyled = styled.img`
    width: 58rem;
    height: 100%;
    object-fit: cover;
`
const RoomDetailDialogContentSubImgDetailWrapperStyled = styled.div`
    width: 3rem;
    height: 4rem;
    padding: 0 .8rem;
    margin-top: 1rem;
`
const RoomDetailDialogContentSubImgDetailStyled = styled.img`
    width: 8rem;
    height: 100%;
    object-fit: cover;
`
const RoomDetailDialogContentDescTopWrapperStyled = styled.div`
    padding: 2rem;
`
const RoomDetailDialogContentDescBottomWrapperStyled = styled.div`
    padding: 1rem 2rem;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 6px 0px;
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
const RoomCardRightPriceDiscountWrapperStyled = styled.div`
    margin: .4rem 0;
    width: 10rem;
    height: 100%;
    padding: .2rem 0;
    border-radius: .1rem;
    background-color: rgb(225, 45, 45);
`
const RoomCardRightPriceDiscountPercentStyled = styled.span`
    display: block;
    text-align: center;
    font-size: .8rem;
    font-weight: 600;
    color: #fff;
`
const RoomCardRightCloseButtonWrapperStyled = styled.div`
    text-align: right;
    margin-right: 2rem;
    margin-top: 1rem;
    cursor: pointer;
`
const BookingDetailCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const { roomInfo, selectRoomDetailData } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [progress, setProgress] = React.useState(84);
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <KeyboardArrowRightOutlinedIcon style={{color: "#000"}}/>
      </div>
    );
  }
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <KeyboardArrowLeftOutlinedIcon style={{color: "#000"}}/>  
      </div>
    )
  }
  const settings = {
    infinite: true,
    dotsClass: "slick-dots slick-thumb custom-indicator",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500
    };
  const pathName = process.env.REACT_APP_BACK_END_PUBLIC_URL;
  let params = {};

  searchParams.forEach((key, value) => {
    params[value] = key
  });
  // daycounting caculate day 
  const dayCounting = intervalToDuration({
    start: new Date(params.checkIn),
    end: new Date(params.checkOut)
  })
  const handleClick = (item) => {
      const itemInfo = {
          propertyRegistrationId: item.tr_propertyRegistrationId,
          roomTypeId: item.tr_roomTypeId,
          checkIn: params.checkIn,
          checkOut: params.checkOut,
          numOfDays: dayCounting.days,
          numOfRoom: parseInt(params.rooms),
          numOfAudlts: parseInt(params.adults),
          numOfChildrens: parseInt(params.childrens)
      };
    dispatch(addItemToCart(itemInfo));
    navigate('/payment');
  }
  return (
    <BookingDetailCardContainerStyled>
        <BookingDetailCardWrapperStyled>
            <BookingDetailCardTopWrapperStyled>
                <BookingDetailCardTopLeftTitleStyled>{roomInfo?.name}</BookingDetailCardTopLeftTitleStyled>
                <RoomCardRightReviewWrapperStyled>
                    <RoomCardRightReviewContentWrapperStyled>
                        <RoomCardRightReviewContentTopStyled>Tuyệt vời</RoomCardRightReviewContentTopStyled>
                        <RoomCardRightReviewContentBottomStyled>Chất lượng phòng</RoomCardRightReviewContentBottomStyled>
                    </RoomCardRightReviewContentWrapperStyled>
                    <RoomCardRightReviewPointWrapperStyled>
                        <RoomCardRightReviewPointContentStyled>8.5</RoomCardRightReviewPointContentStyled>
                    </RoomCardRightReviewPointWrapperStyled>
                </RoomCardRightReviewWrapperStyled>
            </BookingDetailCardTopWrapperStyled>
            <BookingDetailCardBottomWrapperStyled>
                <BookingDetailCardTopContentWrapperStyled>
                    <BookingDetailCardTopContentStyled>Loại phòng</BookingDetailCardTopContentStyled>
                    <BookingDetailCardTopContentStyled>Giá này gồm</BookingDetailCardTopContentStyled>
                    <BookingDetailCardTopContentStyled>Sức chứa</BookingDetailCardTopContentStyled>
                    <BookingDetailCardTopContentStyled>Thanh toán & Hủy phòng</BookingDetailCardTopContentStyled>
                    <BookingDetailCardTopContentStyled>Giá phòng/đêm</BookingDetailCardTopContentStyled>
                </BookingDetailCardTopContentWrapperStyled>
                <BookingDetailCardBottomContentWrapperStyled>
                    <BookingDetailCardBottomLeftWrapperStyled>
                        <BookingDetailCardBottomLeftImageWrapperStyled onClick={handleClickOpen}>
                            <BookingDetailCardBottomLeftImageStyled src={`${pathName+roomInfo?.trtri_id?.[0]?.path}`}/>
                            <BookingDetailCardBottomLeftSubImageWrapperStyled>
                                <BookingDetailCardBottomLeftSubImageStyled src={`${pathName+roomInfo?.trtri_id?.[1]?.path}`} />
                                <BookingDetailCardBottomLeftSubImageStyled src={`${pathName+roomInfo?.trtri_id?.[2]?.path}`} />
                            </BookingDetailCardBottomLeftSubImageWrapperStyled>
                        </BookingDetailCardBottomLeftImageWrapperStyled>
                        <BookingDetailCardBottomLeftSubTitleStyled onClick={handleClickOpen}>Xem ảnh và chi tiết</BookingDetailCardBottomLeftSubTitleStyled>
                        <BookingDetailCardBottomLeftBedSizeWrapperStyled>
                            <BookingDetailCardBottomLeftBedSizeTitleStyled>Loại giường</BookingDetailCardBottomLeftBedSizeTitleStyled>
                            {roomInfo && roomInfo?.tbrtr_id?.map(item => (
                                <BookingDetailCardBottomLeftBedSizeChoiceWrapperStyled key={item.id}>
                                    <BookingDetailCardBottomLeftBedSizeChoiceLeftWrapperStyled>
                                        <BookingDetailCardBottomLeftBedSizeChoiceStyled type="radio" checked readOnly/>
                                        <BookingDetailCardBottomLeftBedSizeChoiceTitleStyled>{item.nameOfBed}</BookingDetailCardBottomLeftBedSizeChoiceTitleStyled>
                                    </BookingDetailCardBottomLeftBedSizeChoiceLeftWrapperStyled>
                                    <KingBedOutlinedIcon style={{color: '#555'}}/>
                                </BookingDetailCardBottomLeftBedSizeChoiceWrapperStyled>
                            )) }
                        </BookingDetailCardBottomLeftBedSizeWrapperStyled>
                        <BookingDetailCardBottomLeftConvenientWrapperStyled>
                            <BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                                <WifiOutlinedIcon style={{color: '#32a923'}}/>
                                <BookingDetailCardBottomLeftConvenientContentStyled style={{color: '#32a923'}}>Wifi miễn phí</BookingDetailCardBottomLeftConvenientContentStyled>
                            </BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                            <BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                                <HouseOutlinedIcon style={{color: '#555'}}/>
                                <BookingDetailCardBottomLeftConvenientContentStyled>Diện tích phòng: {roomInfo?.trro_id?.[0]?.area}㎡</BookingDetailCardBottomLeftConvenientContentStyled>
                            </BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                            <BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                                <DoorBackOutlinedIcon style={{color: '#555'}}/>
                                <BookingDetailCardBottomLeftConvenientContentStyled>Hướng phòng: {roomInfo?.trro_id?.[0]?.viewOfRoom}</BookingDetailCardBottomLeftConvenientContentStyled>
                            </BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                            <BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                                <BalconyOutlinedIcon style={{color: '#555'}}/>
                                <BookingDetailCardBottomLeftConvenientContentStyled>Ban công/sân hiên</BookingDetailCardBottomLeftConvenientContentStyled>
                            </BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                            <BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                                <SmokeFreeOutlinedIcon style={{color: '#555'}}/>
                                <BookingDetailCardBottomLeftConvenientContentStyled>Không hút thuốc</BookingDetailCardBottomLeftConvenientContentStyled>
                            </BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                            <BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                                <ShowerOutlinedIcon style={{color: '#555'}}/>
                                <BookingDetailCardBottomLeftConvenientContentStyled>Vòi sen</BookingDetailCardBottomLeftConvenientContentStyled>
                            </BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                            <BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                                <ControlPointOutlinedIcon style={{color: 'rgb(62, 108, 234)'}}/>
                                <BookingDetailCardBottomLeftConvenientContentStyled style={{color: 'rgb(62, 108, 234)'}}>Các tiện ích khác</BookingDetailCardBottomLeftConvenientContentStyled>
                            </BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                        </BookingDetailCardBottomLeftConvenientWrapperStyled>
                    </BookingDetailCardBottomLeftWrapperStyled>
                    <BookingDetailCardBottomRightContainerStyled>
                        <BookingDetailCardBottomRightWrapperStyled>
                            <BookingDetailCardBottomRightContentContainerStyled>
                                <BookingDetailCardBottomRightContentWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleWrapperStyled>Lợi ích</BookingDetailCardBottomRightContentTitleWrapperStyled>
                                    <BookingDetailCardBottomRightSubContentWrapperStyled>
                                        <DoneOutlinedIcon style={{color: '#32a923'}}/>
                                        <BookingDetailCardBottomRightSubContentStyled>Bãi đậu xe, WiFi miễn phí, Phòng tập</BookingDetailCardBottomRightSubContentStyled>
                                    </BookingDetailCardBottomRightSubContentWrapperStyled>
                                    <BookingDetailCardBottomRightSubContentWrapperStyled>
                                        <DoneOutlinedIcon style={{color: '#32a923'}}/>
                                        <BookingDetailCardBottomRightSubContentStyled>Giá cực thấp! (không hoàn tiền)</BookingDetailCardBottomRightSubContentStyled>
                                    </BookingDetailCardBottomRightSubContentWrapperStyled>
                                </BookingDetailCardBottomRightContentWrapperStyled>
                                <BookingDetailCardBottomRightContentWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleWrapperStyled>Lợi ích tùy chọn</BookingDetailCardBottomRightContentTitleWrapperStyled>
                                    <BookingDetailCardBottomRightSubContentWrapperStyled>
                                        <DoneOutlinedIcon style={{color: '#32a923'}}/>
                                        <BookingDetailCardBottomRightSubContentStyled>Bữa sáng với giá 700.000 ₫</BookingDetailCardBottomRightSubContentStyled>
                                    </BookingDetailCardBottomRightSubContentWrapperStyled>
                                </BookingDetailCardBottomRightContentWrapperStyled>
                            </BookingDetailCardBottomRightContentContainerStyled>
                            <BookingDetailCardBottomRightCapacityContainerStyled>
                                <BoyOutlinedIcon style={{fontSize: '2.4rem', color: '#555'}}/>
                                <BookingDetailCardBottomRightCapacityContentStyled>{roomInfo?.trro_id?.[0]?.noOfChildren} bé dưới 13 tuổi được ở </BookingDetailCardBottomRightCapacityContentStyled>
                                <BookingDetailCardBottomRightCapacitySubContentStyled>MIỄN PHÍ!</BookingDetailCardBottomRightCapacitySubContentStyled>
                            </BookingDetailCardBottomRightCapacityContainerStyled>
                            <BookingDetailCardBottomRightCancelContainerStyled>
                                <BookingDetailCardBottomRightContentWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleWrapperStyled>Lợi ích</BookingDetailCardBottomRightContentTitleWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleCancelWrapperStyled>
                                        <BookingDetailCardBottomRightContentTitleCancelInputStyled type="radio" checked readOnly/>
                                        <BookingDetailCardBottomRightContentTitleCancelStyled>Cà phê & trà, WiFi miễn phí, Nước uống</BookingDetailCardBottomRightContentTitleCancelStyled>
                                    </BookingDetailCardBottomRightContentTitleCancelWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleWrapperStyled>Hủy bỏ</BookingDetailCardBottomRightContentTitleWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleCancelWrapperStyled>
                                        <BookingDetailCardBottomRightContentTitleCancelInputStyled type="radio" checked readOnly/>
                                        <BookingDetailCardBottomRightContentTitleCancelStyled>Giá cực thấp! (không hoàn tiền) (Ưu đãi rẻ nhất)</BookingDetailCardBottomRightContentTitleCancelStyled>
                                    </BookingDetailCardBottomRightContentTitleCancelWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleWrapperStyled>Lựa chọn thanh toán</BookingDetailCardBottomRightContentTitleWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleCancelWrapperStyled>
                                        <BookingDetailCardBottomRightContentTitleCancelInputStyled type="radio" checked readOnly/>
                                        <BookingDetailCardBottomRightContentTitleCancelStyled>Thanh toán ngay</BookingDetailCardBottomRightContentTitleCancelStyled>
                                    </BookingDetailCardBottomRightContentTitleCancelWrapperStyled>
                                </BookingDetailCardBottomRightContentWrapperStyled>
                            </BookingDetailCardBottomRightCancelContainerStyled>
                            <BookingDetailCardBottomRightPriceContainerStyled>
                                <RoomCardRightPriceDiscountContentWrapperStyled>
                                    <KeyboardDoubleArrowDownOutlinedIcon style={{color: 'rgb(180, 36, 36)', fontSize: '.9rem'}}/>
                                    <RoomCardRightPriceDiscountContentStyled>SIÊU TIẾT KIỆM</RoomCardRightPriceDiscountContentStyled>
                                </RoomCardRightPriceDiscountContentWrapperStyled>
                                <RoomCardRightPriceDiscountSubContentStyled>Giá mỗi đêm rẻ nhất từ</RoomCardRightPriceDiscountSubContentStyled>
                                <RoomCardRightOldPriceStyled className='cross'>{roomInfo?.trrp_id?.[0]?.maxPrice?.toLocaleString()} ₫</RoomCardRightOldPriceStyled>
                                <RoomCardRightNewPriceStyled>{roomInfo?.trrp_id?.[0]?.price?.toLocaleString()} ₫</RoomCardRightNewPriceStyled> 
                                <RoomCardRightBottomButtonWrapperStyled onClick={() => handleClick(roomInfo)}>
                                    <RoomCardRightBottomButtonTitleStyled>Đặt phòng ngay</RoomCardRightBottomButtonTitleStyled>
                                    <ArrowForwardIosOutlinedIcon style={{color: '#fff', fontSize: '16px'}}/>
                                </RoomCardRightBottomButtonWrapperStyled>
                            </BookingDetailCardBottomRightPriceContainerStyled>
                        </BookingDetailCardBottomRightWrapperStyled>
                        {/* <BookingDetailCardBottomRightWrapperStyled>
                            <BookingDetailCardBottomRightContentContainerStyled>
                                <BookingDetailCardBottomRightContentWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleWrapperStyled>Lợi ích</BookingDetailCardBottomRightContentTitleWrapperStyled>
                                    <BookingDetailCardBottomRightSubContentWrapperStyled>
                                        <DoneOutlinedIcon style={{color: '#32a923'}}/>
                                        <BookingDetailCardBottomRightSubContentStyled>Bãi đậu xe, WiFi miễn phí, Phòng tập</BookingDetailCardBottomRightSubContentStyled>
                                    </BookingDetailCardBottomRightSubContentWrapperStyled>
                                    <BookingDetailCardBottomRightSubContentWrapperStyled>
                                        <DoneOutlinedIcon style={{color: '#32a923'}}/>
                                        <BookingDetailCardBottomRightSubContentStyled>Giá cực thấp! (không hoàn tiền)</BookingDetailCardBottomRightSubContentStyled>
                                    </BookingDetailCardBottomRightSubContentWrapperStyled>
                                </BookingDetailCardBottomRightContentWrapperStyled>
                                <BookingDetailCardBottomRightContentWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleWrapperStyled>Lợi ích tùy chọn</BookingDetailCardBottomRightContentTitleWrapperStyled>
                                    <BookingDetailCardBottomRightSubContentWrapperStyled>
                                        <DoneOutlinedIcon style={{color: '#32a923'}}/>
                                        <BookingDetailCardBottomRightSubContentStyled>Bữa sáng với giá 700.000 ₫</BookingDetailCardBottomRightSubContentStyled>
                                    </BookingDetailCardBottomRightSubContentWrapperStyled>
                                </BookingDetailCardBottomRightContentWrapperStyled>
                            </BookingDetailCardBottomRightContentContainerStyled>
                            <BookingDetailCardBottomRightCapacityContainerStyled>
                                <BoyOutlinedIcon style={{fontSize: '2.4rem', color: '#555'}}/>
                                <BookingDetailCardBottomRightCapacityContentStyled>1 bé dưới 13 tuổi được ở </BookingDetailCardBottomRightCapacityContentStyled>
                                <BookingDetailCardBottomRightCapacitySubContentStyled>MIỄN PHÍ!</BookingDetailCardBottomRightCapacitySubContentStyled>
                            </BookingDetailCardBottomRightCapacityContainerStyled>
                            <BookingDetailCardBottomRightCancelContainerStyled>
                                <BookingDetailCardBottomRightContentWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleWrapperStyled>Hủy bỏ</BookingDetailCardBottomRightContentTitleWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleCancelWrapperStyled>
                                        <BookingDetailCardBottomRightContentTitleCancelInputStyled type="radio" checked readOnly/>
                                        <BookingDetailCardBottomRightContentTitleCancelStyled>Giá cực thấp! (không hoàn tiền) (Ưu đãi rẻ nhất)</BookingDetailCardBottomRightContentTitleCancelStyled>
                                    </BookingDetailCardBottomRightContentTitleCancelWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleWrapperStyled>Lựa chọn thanh toán</BookingDetailCardBottomRightContentTitleWrapperStyled>
                                    <BookingDetailCardBottomRightContentTitleCancelWrapperStyled>
                                        <BookingDetailCardBottomRightContentTitleCancelInputStyled type="radio" checked readOnly/>
                                        <BookingDetailCardBottomRightContentTitleCancelStyled>Thanh toán ngay</BookingDetailCardBottomRightContentTitleCancelStyled>
                                    </BookingDetailCardBottomRightContentTitleCancelWrapperStyled>
                                </BookingDetailCardBottomRightContentWrapperStyled>
                            </BookingDetailCardBottomRightCancelContainerStyled>
                            <BookingDetailCardBottomRightPriceContainerStyled>
                                <RoomCardRightPriceDiscountContentWrapperStyled>
                                    <KeyboardDoubleArrowDownOutlinedIcon style={{color: 'rgb(180, 36, 36)', fontSize: '.9rem'}}/>
                                    <RoomCardRightPriceDiscountContentStyled>SIÊU TIẾT KIỆM</RoomCardRightPriceDiscountContentStyled>
                                </RoomCardRightPriceDiscountContentWrapperStyled>
                                <RoomCardRightPriceDiscountSubContentStyled>Giá mỗi đêm rẻ nhất từ</RoomCardRightPriceDiscountSubContentStyled>
                                <RoomCardRightOldPriceStyled className='cross'>320.000.000</RoomCardRightOldPriceStyled>
                                <RoomCardRightNewPriceStyled>660.000 ₫</RoomCardRightNewPriceStyled> 
                                <RoomCardRightBottomButtonWrapperStyled>
                                    <RoomCardRightBottomButtonTitleStyled>Đặt ngay</RoomCardRightBottomButtonTitleStyled>
                                    <ArrowForwardIosOutlinedIcon style={{color: '#fff'}}/>
                                </RoomCardRightBottomButtonWrapperStyled>
                                <RoomCardRightBottomCartButtonWrapperStyled>
                                    <RoomCardRightCartBottomButtonTitleStyled>Thêm vào xe đẩy hàng</RoomCardRightCartBottomButtonTitleStyled>
                                </RoomCardRightBottomCartButtonWrapperStyled>
                            </BookingDetailCardBottomRightPriceContainerStyled>
                        </BookingDetailCardBottomRightWrapperStyled> */}
                    </BookingDetailCardBottomRightContainerStyled>
                </BookingDetailCardBottomContentWrapperStyled>
                
            </BookingDetailCardBottomWrapperStyled>
        </BookingDetailCardWrapperStyled>
        <RoomDetailImgDetailWrapperStyled>
            <Dialog
                fullScreen={fullScreen}
                maxWidth="lg"
                open={open}
                onClose={handleClose}
                sx={{borderRadius: "50%"}}
                PaperProps={{
                    style: { borderRadius: "14px" }
                }}
            >
                <DialogContent
                sx={{padding: '0px !important'}}
                >
                    <RoomDetailDialogContentContainerStyled>
                        <RoomDetailDialogContentWrapperStyled>
                            <RoomDetailDialogContentImgWrapperStyled>
                                <ReactSlickSyled asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...settings}>
                                    {selectRoomDetailData?.acim_id?.map(item => (
                                        <RoomDetailDialogContentImgDetailWrapperStyled key={item.id}>
                                            <RoomDetailDialogContentImgDetailStyled src={`${pathName+item.path}`}/>
                                        </RoomDetailDialogContentImgDetailWrapperStyled>
                                    ))}
                                </ReactSlickSyled>
                                <Slider
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={6}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                    arrows={false}
                                >
                                    {selectRoomDetailData?.acim_id?.map(item => (
                                        <RoomDetailDialogContentSubImgDetailWrapperStyled key={item.id}>
                                            <RoomDetailDialogContentSubImgDetailStyled src={`${pathName+item.path}`}/>
                                        </RoomDetailDialogContentSubImgDetailWrapperStyled>
                                    ))}
                                </Slider>
                            </RoomDetailDialogContentImgWrapperStyled>
                            <RoomDetailDialogContentDiscWrapperStyled>
                                <RoomCardRightCloseButtonWrapperStyled onClick={handleClose}>
                                    <CloseOutlinedIcon sx={{color: '#666'}}/>
                                </RoomCardRightCloseButtonWrapperStyled>
                                <RoomDetailDialogContentDescTopWrapperStyled>
                                    <RoomCardRightReviewWrapperStyled>
                                        <RoomCardRightReviewContentWrapperStyled>
                                            <RoomCardRightReviewContentTopStyled>Tuyệt vời</RoomCardRightReviewContentTopStyled>
                                            <RoomCardRightReviewContentBottomStyled>1.509 Nhận xét</RoomCardRightReviewContentBottomStyled>
                                        </RoomCardRightReviewContentWrapperStyled>
                                        <RoomCardRightReviewPointWrapperStyled>
                                            <RoomCardRightReviewPointContentStyled>8.5</RoomCardRightReviewPointContentStyled>
                                        </RoomCardRightReviewPointWrapperStyled>
                                    </RoomCardRightReviewWrapperStyled>
                                    <Box>
                                        <Box sx={{ width: '100%', mr: 1, margin: '.6rem 0' }}>
                                            <LinearProgress variant="determinate" value={progress} sx={{height: '.4rem', color: 'rgb(62, 108, 234)', borderRadius: '1rem'}}/>
                                        </Box>
                                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem'}}>Độ sạch</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem', color: 'rgb(62, 108, 234)'}} >{progress}</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '100%', mr: 1, margin: '.6rem 0' }}>
                                            <LinearProgress variant="determinate" value={progress} sx={{height: '.4rem', color: 'rgb(62, 108, 234)', borderRadius: '1rem'}}/>
                                        </Box>
                                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem'}}>Tiện nghi</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem', color: 'rgb(62, 108, 234)'}} >{progress}</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '100%', mr: 1, margin: '.6rem 0' }}>
                                            <LinearProgress variant="determinate" value={progress} sx={{height: '.4rem', color: 'rgb(62, 108, 234)', borderRadius: '1rem'}}/>
                                        </Box>
                                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem'}}>Chất lượng</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem', color: 'rgb(62, 108, 234)'}} >{progress}</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '100%', mr: 1, margin: '.6rem 0' }}>
                                            <LinearProgress variant="determinate" value={progress} sx={{height: '.4rem', color: 'rgb(62, 108, 234)', borderRadius: '1rem'}}/>
                                        </Box>
                                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem'}}>Vị trí</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem', color: 'rgb(62, 108, 234)'}} >{progress}</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '100%', mr: 1, margin: '.6rem 0' }}>
                                            <LinearProgress variant="determinate" value={progress} sx={{height: '.4rem', color: 'rgb(62, 108, 234)', borderRadius: '1rem'}}/>
                                        </Box>
                                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem'}}>Sự thoải mái</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem', color: 'rgb(62, 108, 234)'}} >{progress}</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '100%', mr: 1, margin: '.6rem 0' }}>
                                            <LinearProgress variant="determinate" value={progress} sx={{height: '.4rem', color: 'rgb(62, 108, 234)', borderRadius: '1rem'}}/>
                                        </Box>
                                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem'}}>Dịch vụ</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem', color: 'rgb(62, 108, 234)'}} >{progress}</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '100%', mr: 1, margin: '.4rem 0' }}>
                                            <LinearProgress variant="determinate" value={progress} sx={{height: '.4rem', color: 'rgb(62, 108, 234)', borderRadius: '1rem'}}/>
                                        </Box>
                                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem'}}>Đáng giá tiền</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body2" sx={{fontSize: '1rem', color: 'rgb(62, 108, 234)'}} >{progress}</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </RoomDetailDialogContentDescTopWrapperStyled>
                                <RoomDetailDialogContentDescBottomWrapperStyled>
                                    <RoomCardRightPriceDiscountWrapperStyled>
                                        <RoomCardRightPriceDiscountPercentStyled>GIẢM SỐC HÔM NAY</RoomCardRightPriceDiscountPercentStyled>
                                    </RoomCardRightPriceDiscountWrapperStyled>
                                        <RoomCardRightPriceDiscountSubContentStyled>Giá mỗi đêm rẻ nhất từ</RoomCardRightPriceDiscountSubContentStyled>
                                        <RoomCardRightOldPriceStyled className='cross'>320.000.000</RoomCardRightOldPriceStyled>
                                        <RoomCardRightNewPriceStyled>{selectRoomDetailData?.priceBase?.toLocaleString()} ₫</RoomCardRightNewPriceStyled>
                                    <RoomCardRightBottomButtonWrapperStyled>
                                        <RoomCardRightBottomButtonTitleStyled>Chọn phòng</RoomCardRightBottomButtonTitleStyled>
                                        <ArrowForwardIosOutlinedIcon style={{color: '#fff'}}/>
                                    </RoomCardRightBottomButtonWrapperStyled>
                                </RoomDetailDialogContentDescBottomWrapperStyled>
                            </RoomDetailDialogContentDiscWrapperStyled>
                        </RoomDetailDialogContentWrapperStyled>
                    </RoomDetailDialogContentContainerStyled>
                </DialogContent>
            </Dialog>
        </RoomDetailImgDetailWrapperStyled>
    </BookingDetailCardContainerStyled>
  )
}

export default BookingDetailCard