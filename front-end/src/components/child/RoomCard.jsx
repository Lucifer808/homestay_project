import React, { useState } from 'react';
import styled from 'styled-components';
import img_detail from '../../assets/img_detail.jpeg';
import Rating from '@mui/material/Rating';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const AdminServiceFormContainerStyled = styled.div`
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
const AdminServiceFormWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: .8rem;
    height: 15rem;
    width: 100%;
    cursor: pointer;
    margin: 1rem 0;
    height: 100%;
    &:hover{
        border-radius: .8rem;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 30%);
    }
`
const AdminServiceFormLeftWrapperStyled = styled.div`
    height: 100%;
    width: 16.6rem;
`
const AdminServiceFormLeftMainImgWrapperStyled = styled.div`
    height: 11rem;
    width: 100%;
`
const AdminServiceFormLeftMainImgStyled = styled.img`
    cursor: pointer;
    border-top-left-radius: .4rem;
    height: 11rem;
    width: 100%;
    object-fit: cover;
`
const AdminServiceFormLeftSubImgWrapperStyled = styled.div`
    display: flex;
`
const AdminServiceFormLeftSubImgStyled = styled.img`
    cursor: pointer;
    object-fit: cover;
    width: 4rem;
    margin: .2rem .1rem;
`
const AdminServiceFormLeftSubImgOverlayWrapperStyled = styled.div`
    position: relative;
    margin: .2rem .4rem .2rem .1rem;
    cursor: pointer;
`
const AdminServiceFormLeftSubImgOverlayStyled = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: rgba(0,0,0,.2);
`
const AdminServiceFormLeftSubImgOverlayTitleStyled = styled.span`
    font-size: .6rem;
    color: #fff;
`
const AdminServiceFormLeftSubImgAllStyled = styled.img`
    object-fit: cover;
    height: 100%;
    width: 4rem;
`
const AdminServiceFormMiddleWrapperStyled = styled.div`
    height: 100%;
    margin: .6rem;
    width: 25rem;
`
const AdminServiceFormMiddleTopWrapperStyled = styled.div``
const AdminServiceFormMiddleTopStyled = styled.span`
    display: inline-block;
    font-weight: 500;
    cursor: pointer;
    font-size: 1.1rem;
    &:hover{
        color: #00adff;
        text-decoration: underline;
    }
`
const AdminServiceFormMiddleTopRatingWrapperStyled = styled.div`
    font-size: .8rem;
`
const AdminServiceFormMiddleTopAdvancedServiceContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: .6rem 0;
`
const AdminServiceFormMiddleTopAdvancedServiceWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 .2rem;
    border: 1px solid #dddfe2;
    padding: .1rem .2rem;
    border-radius: .1rem;
    cursor: pointer;
`
const AdminServiceFormMiddleTopAdvancedServiceContentStyled = styled.span`
    font-size: .8rem;
    font-weight: 500;
`
const AdminServiceFormMiddleTopAdvancedServiceContentMoreStyled = styled.span`
    display: block;
    margin: 0 .1rem;
    font-size: .8rem;
    font-weight: 500;
`
const AdminServiceFormMiddleTopRatingAddressWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    &:hover{
        color: #00adff;
        text-decoration: underline;
    }
`
const AdminServiceFormMiddleTopRatingAddressStyled = styled.span`
    color: #0283df;
`
const AdminServiceFormMiddleTopAdvancedServiceBottomContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: .6rem 0;
`
const AdminServiceFormMiddleTopAdvancedServiceBottomWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 .2rem;
    border: 1px solid #dddfe2;
    padding: .1rem .2rem;
    border-radius: .1rem;
    cursor: pointer;
    background-color: rgb(0, 130, 151);
    color: #fff;
`
const AdminServiceFormMiddleTopAdvancedServiceBottomContentStyled = styled.span`
    font-size: .8rem;
    font-weight: 500;
`
const AdminServiceFormMiddleTopAdvancedServiceBottomBeachWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 .2rem;
    cursor: pointer;
`
const AdminServiceFormMiddleTopAdvancedServiceBottomBeachContentStyled = styled.span`
    font-size: .9rem;
    color: #0283df;
`
const AdminServiceFormMiddleTopAdvancedServiceBottomCouponContainerStyled = styled.div``
const AdminServiceFormMiddleTopAdvancedServiceBottomCouponWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const AdminServiceFormMiddleTopAdvancedServiceBottomCouponContentStyled = styled.span`
    font-size: .8rem;
    margin-left: .2rem;
    color: rgb(225, 45, 45);
`
const RoomListRightTopFilterMiddleStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    width: .02rem;
    margin: 0 .4rem;
    background-color: #ccc;
`
const AdminServiceFormRightWrapperStyled = styled.div`
    height: 100%;
    text-align: right;
    width: 12rem;
    padding: 0 .6rem 0 2rem;
`
const AdminServiceFormRightReviewWrapperStyled = styled.div`
    display: flex;
    padding: .6rem;
    width: 100%;
`
const AdminServiceFormRightReviewContentWrapperStyled = styled.div`
    width: 100%;
    height: 100%;
    margin-right: .6rem;
`
const AdminServiceFormRightReviewContentTopStyled = styled.span`
    font-size: .9rem;
    display: block;
`
const AdminServiceFormRightReviewContentBottomStyled = styled.span`
    display: block;
    font-size: .8rem;
    color: #888;
`
const AdminServiceFormRightReviewPointWrapperStyled = styled.div`
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
const AdminServiceFormRightReviewPointContentStyled = styled.span`
    display: block;
    color: #fff;
`
const AdminServiceFormRightPriceWrapperStyled = styled.div``
const AdminServiceFormRightPriceDiscountWrapperStyled = styled.div`
    margin: .4rem 0;
    padding: .2rem 0;
    border-radius: .1rem;
    background-color: rgb(225, 45, 45);
`
const AdminServiceFormRightPriceDiscountContentWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .4rem 0;
    padding: .2rem 0;
    border-radius: .1rem;
    background-color: rgb(249, 216, 216);
`
const AdminServiceFormRightPriceDiscountPercentStyled = styled.span`
    display: block;
    text-align: center;
    font-size: .8rem;
    color: #fff;
`
const AdminServiceFormRightPriceDiscountContentStyled = styled.span`
    display: block;
    text-align: center;
    font-size: .8rem;
    color: rgb(180, 36, 36);
`
const AdminServiceFormRightPriceDiscountSubContentStyled = styled.span`
    display: block;
    font-size: .6rem;
    color: #666;
`
const AdminServiceFormRightOldPriceStyled = styled.p`
    font-size: 1.4rem;
    max-width: 100%;
    color: #666;
`
const AdminServiceFormRightNewPriceStyled = styled.p`
    font-size: 1.4rem;
    max-width: 100%;
    color: #e12d2d;
`
const AdminServiceFormRightBottomButtonWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .4rem 0;
    background-color: rgb(62, 108, 234);
    border-radius: .2rem;
    border-color: rgb(120, 152, 240);
    cursor: pointer;
    &:hover{
        background-color: rgb(120, 152, 240);
    }
`
const AdminServiceFormRightBottomButtonTitleStyled = styled.span`
    display: block;
    margin: .9rem .8rem;
    font-size: .9rem;
    color: #fff;
`
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
const AdminServiceFormRightCloseButtonWrapperStyled = styled.div`
    text-align: right;
    margin: .4rem;
    cursor: pointer;
`
const AdminServiceForm = (props) => {
  const {cardInfo} = props;
  const dispatch = useDispatch();
  const pathName = process.env.REACT_APP_BACK_END_PUBLIC_URL;
  const [open, setOpen] = useState(false);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [progress, setProgress] = React.useState(84);
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
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
    );
  }
  const settings = {
    infinite: true,
    dotsClass: "slick-dots slick-thumb custom-indicator",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500
  };
  let params = {};

  searchParams.forEach((key, value) => {
    params[value] = key
  });
  const searchQueryString = new URLSearchParams(params).toString();
  return (
    <AdminServiceFormContainerStyled>
            <AdminServiceFormWrapperStyled key={cardInfo.id}>
                <AdminServiceFormLeftWrapperStyled onClick={handleClickOpen}>
                    <AdminServiceFormLeftMainImgWrapperStyled>
                        <AdminServiceFormLeftMainImgStyled src={`${pathName+cardInfo.acim_id[0]?.path}`}/>
                    </AdminServiceFormLeftMainImgWrapperStyled>
                    <AdminServiceFormLeftSubImgWrapperStyled>
                        {cardInfo.acim_id?.slice(1, 4).map(item => (
                            <AdminServiceFormLeftSubImgStyled key={item.id} src={`${pathName+item.path}`}/>
                        ))}
                        <AdminServiceFormLeftSubImgOverlayWrapperStyled>
                            <AdminServiceFormLeftSubImgAllStyled src={`${pathName+cardInfo.acim_id[5]?.path}`}/>
                            <AdminServiceFormLeftSubImgOverlayStyled>
                                <AdminServiceFormLeftSubImgOverlayTitleStyled>XEM TẤT CẢ</AdminServiceFormLeftSubImgOverlayTitleStyled>
                            </AdminServiceFormLeftSubImgOverlayStyled>
                        </AdminServiceFormLeftSubImgOverlayWrapperStyled>
                    </AdminServiceFormLeftSubImgWrapperStyled>
                </AdminServiceFormLeftWrapperStyled>
                <Link to={`/roomdetail/${cardInfo.ac_propertyRegistrationId}?${searchQueryString}`}  style={{color: 'black', textDecoration: 'none'}}>
                    <AdminServiceFormMiddleWrapperStyled>
                        <AdminServiceFormMiddleTopWrapperStyled>
                            <AdminServiceFormMiddleTopStyled>{cardInfo.nameOfAccommodation}</AdminServiceFormMiddleTopStyled>
                            <AdminServiceFormMiddleTopRatingWrapperStyled>
                                <Rating name="size-small" value={cardInfo.rating} size="small" readOnly/>
                                <AdminServiceFormMiddleTopRatingAddressWrapperStyled>
                                    <PlaceOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                                    <AdminServiceFormMiddleTopRatingAddressStyled>{cardInfo.acci_id?.name}, {cardInfo.acst_id?.name}, {cardInfo.acct_id?.name}</AdminServiceFormMiddleTopRatingAddressStyled>
                                </AdminServiceFormMiddleTopRatingAddressWrapperStyled>
                            </AdminServiceFormMiddleTopRatingWrapperStyled>
                            <AdminServiceFormMiddleTopAdvancedServiceContainerStyled>
                                {cardInfo.acdas_id.slice(4, 6).map((item, index) => (
                                    <AdminServiceFormMiddleTopAdvancedServiceWrapperStyled key={index}>
                                        <AdminServiceFormMiddleTopAdvancedServiceContentStyled>{item.dsasv_id[0]?.name}</AdminServiceFormMiddleTopAdvancedServiceContentStyled>
                                    </AdminServiceFormMiddleTopAdvancedServiceWrapperStyled>
                                ))}
                                <AdminServiceFormMiddleTopAdvancedServiceWrapperStyled>
                                    <AdminServiceFormMiddleTopAdvancedServiceContentMoreStyled>+{cardInfo.acdas_id.length - 2}</AdminServiceFormMiddleTopAdvancedServiceContentMoreStyled>
                                </AdminServiceFormMiddleTopAdvancedServiceWrapperStyled>
                            </AdminServiceFormMiddleTopAdvancedServiceContainerStyled>
                            <AdminServiceFormMiddleTopAdvancedServiceBottomContainerStyled>
                                <AdminServiceFormMiddleTopAdvancedServiceBottomWrapperStyled>
                                    <AdminServiceFormMiddleTopAdvancedServiceBottomContentStyled>Mới sửa sang</AdminServiceFormMiddleTopAdvancedServiceBottomContentStyled>
                                </AdminServiceFormMiddleTopAdvancedServiceBottomWrapperStyled>
                                <AdminServiceFormMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                                    <BeachAccessOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                                    <AdminServiceFormMiddleTopAdvancedServiceBottomBeachContentStyled>Gần bãi biển</AdminServiceFormMiddleTopAdvancedServiceBottomBeachContentStyled>
                                </AdminServiceFormMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                            </AdminServiceFormMiddleTopAdvancedServiceBottomContainerStyled>
                            <AdminServiceFormMiddleTopAdvancedServiceBottomCouponContainerStyled>
                                <AdminServiceFormMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                                    <FlagIcon style={{fontSize: '.8rem', color: 'rgb(225, 45, 45)'}}/>
                                    <AdminServiceFormMiddleTopAdvancedServiceBottomCouponContentStyled>Đang bán chạy! Lần đặt gần nhất cách đây 3 giờ</AdminServiceFormMiddleTopAdvancedServiceBottomCouponContentStyled>
                                </AdminServiceFormMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                            </AdminServiceFormMiddleTopAdvancedServiceBottomCouponContainerStyled>
                        </AdminServiceFormMiddleTopWrapperStyled>
                    </AdminServiceFormMiddleWrapperStyled>
                </Link>
                <RoomListRightTopFilterMiddleStyled />
                <Link to={`/roomdetail/${cardInfo.ac_propertyRegistrationId}?${searchQueryString}`}  style={{color: 'black', textDecoration: 'none'}}>
                    <AdminServiceFormRightWrapperStyled>
                        <AdminServiceFormRightReviewWrapperStyled>
                            <AdminServiceFormRightReviewContentWrapperStyled>
                                <AdminServiceFormRightReviewContentTopStyled>Tuyệt vời</AdminServiceFormRightReviewContentTopStyled>
                                <AdminServiceFormRightReviewContentBottomStyled>1.509 Nhận xét</AdminServiceFormRightReviewContentBottomStyled>
                            </AdminServiceFormRightReviewContentWrapperStyled>
                            <AdminServiceFormRightReviewPointWrapperStyled>
                                <AdminServiceFormRightReviewPointContentStyled>8.5</AdminServiceFormRightReviewPointContentStyled>
                            </AdminServiceFormRightReviewPointWrapperStyled>
                        </AdminServiceFormRightReviewWrapperStyled>
                        <AdminServiceFormRightPriceWrapperStyled>
                            <AdminServiceFormRightPriceDiscountWrapperStyled>
                                <AdminServiceFormRightPriceDiscountPercentStyled>GIẢM SỐC HÔM NAY</AdminServiceFormRightPriceDiscountPercentStyled>
                            </AdminServiceFormRightPriceDiscountWrapperStyled>
                            <AdminServiceFormRightPriceDiscountContentWrapperStyled>
                                <KeyboardDoubleArrowDownOutlinedIcon style={{color: 'rgb(180, 36, 36)', fontSize: '.9rem'}}/>
                                <AdminServiceFormRightPriceDiscountContentStyled>SIÊU TIẾT KIỆM</AdminServiceFormRightPriceDiscountContentStyled>
                            </AdminServiceFormRightPriceDiscountContentWrapperStyled>
                            <AdminServiceFormRightPriceDiscountSubContentStyled>Giá mỗi đêm rẻ nhất từ</AdminServiceFormRightPriceDiscountSubContentStyled>
                            <AdminServiceFormRightOldPriceStyled className='cross'>{cardInfo?.trac_id?.[0]?.trrp_id?.[0]?.maxPrice?.toLocaleString()} ₫</AdminServiceFormRightOldPriceStyled>
                            <AdminServiceFormRightNewPriceStyled>{cardInfo.priceBase?.toLocaleString()} ₫</AdminServiceFormRightNewPriceStyled>
                            <AdminServiceFormRightBottomButtonWrapperStyled>
                                <AdminServiceFormRightBottomButtonTitleStyled>Chọn phòng</AdminServiceFormRightBottomButtonTitleStyled>
                                <ArrowForwardIosOutlinedIcon style={{color: '#fff'}}/>
                            </AdminServiceFormRightBottomButtonWrapperStyled>
                        </AdminServiceFormRightPriceWrapperStyled>
                    </AdminServiceFormRightWrapperStyled>
                </Link>
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
                                            {cardInfo?.acim_id?.map(img => (
                                                <RoomDetailDialogContentImgDetailWrapperStyled key={img.id}>
                                                    <RoomDetailDialogContentImgDetailStyled src={`${pathName+img?.path}`}/>
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
                                            {cardInfo?.acim_id?.map(img => (
                                            <RoomDetailDialogContentSubImgDetailWrapperStyled key={img.id}>
                                                <RoomDetailDialogContentSubImgDetailStyled src={`${pathName+img?.path}`}/>
                                            </RoomDetailDialogContentSubImgDetailWrapperStyled>
                                            ))}
                                        </Slider>
                                    </RoomDetailDialogContentImgWrapperStyled>
                                    <RoomDetailDialogContentDiscWrapperStyled>
                                        <AdminServiceFormRightCloseButtonWrapperStyled onClick={handleClose}>
                                            <CloseOutlinedIcon sx={{color: '#666'}}/>
                                        </AdminServiceFormRightCloseButtonWrapperStyled>
                                        <RoomDetailDialogContentDescTopWrapperStyled>
                                            <AdminServiceFormRightReviewWrapperStyled>
                                                <AdminServiceFormRightReviewContentWrapperStyled>
                                                    <AdminServiceFormRightReviewContentTopStyled>Tuyệt vời</AdminServiceFormRightReviewContentTopStyled>
                                                    <AdminServiceFormRightReviewContentBottomStyled>1.509 Nhận xét</AdminServiceFormRightReviewContentBottomStyled>
                                                </AdminServiceFormRightReviewContentWrapperStyled>
                                                <AdminServiceFormRightReviewPointWrapperStyled>
                                                    <AdminServiceFormRightReviewPointContentStyled>8.5</AdminServiceFormRightReviewPointContentStyled>
                                                </AdminServiceFormRightReviewPointWrapperStyled>
                                            </AdminServiceFormRightReviewWrapperStyled>
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
                                            <AdminServiceFormRightPriceDiscountWrapperStyled>
                                                <AdminServiceFormRightPriceDiscountPercentStyled>GIẢM SỐC HÔM NAY</AdminServiceFormRightPriceDiscountPercentStyled>
                                            </AdminServiceFormRightPriceDiscountWrapperStyled>
                                                <AdminServiceFormRightPriceDiscountSubContentStyled>Giá mỗi đêm rẻ nhất từ</AdminServiceFormRightPriceDiscountSubContentStyled>
                                                <AdminServiceFormRightOldPriceStyled className='cross'>{(cardInfo?.trac_id?.[0]?.trrp_id?.[0]?.maxPrice + 100000).toLocaleString()} ₫</AdminServiceFormRightOldPriceStyled>
                                                <AdminServiceFormRightNewPriceStyled>{cardInfo.priceBase?.toLocaleString()} ₫</AdminServiceFormRightNewPriceStyled>
                                            <Link to={`/roomdetail/${cardInfo.ac_propertyRegistrationId}?${searchQueryString}`}  style={{color: 'black', textDecoration: 'none'}}>
                                            <AdminServiceFormRightBottomButtonWrapperStyled>
                                                <AdminServiceFormRightBottomButtonTitleStyled >Chọn phòng</AdminServiceFormRightBottomButtonTitleStyled>
                                                <ArrowForwardIosOutlinedIcon style={{color: '#fff'}}/>
                                            </AdminServiceFormRightBottomButtonWrapperStyled>
                                            </Link>
                                        </RoomDetailDialogContentDescBottomWrapperStyled>
                                    </RoomDetailDialogContentDiscWrapperStyled>
                                </RoomDetailDialogContentWrapperStyled>
                            </RoomDetailDialogContentContainerStyled>
                        </DialogContent>
                    </Dialog>
                </RoomDetailImgDetailWrapperStyled>
            </AdminServiceFormWrapperStyled>
    </AdminServiceFormContainerStyled>
  )
}

export default AdminServiceForm