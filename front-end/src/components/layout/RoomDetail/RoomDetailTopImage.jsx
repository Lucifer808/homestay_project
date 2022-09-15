import React, { useState } from 'react';
import styled from 'styled-components';
import room_detail from '../../../assets/room_detail.jpeg';
import room_detail1 from '../../../assets/room_detail_1.jpeg';
import room_detail2 from '../../../assets/room_detail_2.jpeg';
import room_detail3 from '../../../assets/room_detail_3.jpeg';
import room_detail4 from '../../../assets/room_detail_4.jpeg';
import room_detail5 from '../../../assets/room_detail_5.jpeg';
import room_detail6 from '../../../assets/room_detail_6.jpeg';
import img_detail from '../../../assets/img_detail.jpeg';
import img_detail1 from '../../../assets/img_detail_1.jpeg';
import img_detail2 from '../../../assets/img_detail_2.jpeg';
import img_detail3 from '../../../assets/img_detail_3.jpeg';
import img_detail4 from '../../../assets/img_detail_4.jpeg';
import img_detail5 from '../../../assets/img_detail_5.jpeg';
import img_detail6 from '../../../assets/img_detail_6.jpeg';
import img_sub_detail from '../../../assets/img_sub_detail.jpeg';
import img_sub_detail1 from '../../../assets/img_sub_detail_1.jpeg';
import img_sub_detail2 from '../../../assets/img_sub_detail_2.jpeg';
import img_sub_detail3 from '../../../assets/img_sub_detail_3.jpeg';
import img_sub_detail4 from '../../../assets/img_sub_detail_4.jpeg';
import img_sub_detail5 from '../../../assets/img_sub_detail_5.jpeg';
import img_sub_detail6 from '../../../assets/img_sub_detail_6.jpeg';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
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
const RoomDetailImgContainerStyled = styled.div``
const RoomDetailImgWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
`
const RoomDetailImgLeftWrapperStyled = styled.div``
const RoomDetailImgLeftStyled = styled.img`
    object-fit: cover;
    width: 31rem;
    height: 19rem;
    border-top-left-radius: .4rem;
    border-bottom-left-radius: .4rem;
    cursor: pointer;
    &:hover{
        filter: brightness(80%);
    }
`
const RoomDetailImgRightWrapperStyled = styled.div`
    position: relative;
`
const RoomDetailImgRightTopWrapperStyled = styled.div``
const RoomDetailImgRightBottomWrapperStyled = styled.div``
const RoomDetailImgMiniStyled = styled.img`
    margin: 0 0 .2rem .4rem;
    object-fit: cover;
    height: 9.3rem;
    width: 14rem;
    cursor: pointer;
    &:hover{
        filter: brightness(80%);
    }
`
const RoomDetailImgWishListWrapperStyled = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    margin: .4rem .4rem 0 0;
    height: 2.5rem;
    width: 2.5rem;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
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
const RoomCardRightPriceDiscountSubContentStyled = styled.span`
    display: block;
    font-size: .6rem;
    color: #666;
`
const RoomCardRightPriceDiscountPercentStyled = styled.span`
    display: block;
    text-align: center;
    font-size: .8rem;
    font-weight: 600;
    color: #fff;
`
const RoomCardRightOldPriceStyled = styled.p`
    font-size: 1.4rem;
    max-width: 100%;
    color: #666;
`
const RoomCardRightNewPriceStyled = styled.p`
    font-size: 1.4rem;
    max-width: 100%;
    color: #e12d2d;
`
const RoomCardRightReviewWrapperStyled = styled.div`
    display: flex;
    width: 100%;
`
const RoomCardRightReviewContentWrapperStyled = styled.div`
    width: 100%;
    height: 100%;
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
const RoomCardRightBottomButtonWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .2rem 0;
    background-color: rgb(62, 108, 234);
    border-radius: .2rem;
    border-color: rgb(120, 152, 240);
    cursor: pointer;
    &:hover{
        background-color: rgb(120, 152, 240);
    }
`
const RoomCardRightBottomButtonTitleStyled = styled.span`
    display: block;
    margin: .9rem .8rem;
    font-size: .9rem;
    color: #fff;
`
const RoomCardRightCloseButtonWrapperStyled = styled.div`
    text-align: right;
    margin: .4rem;
    cursor: pointer;
`
const RoomDetailTopImage = () => {
  const [open, setOpen] = useState(false);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [progress, setProgress] = React.useState(84);
  const theme = useTheme();
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
  return (
    <RoomDetailImgContainerStyled>
        <RoomDetailImgWrapperStyled>
            <RoomDetailImgLeftWrapperStyled>
            <RoomDetailImgLeftStyled src={room_detail} onClick={handleClickOpen}/>
            </RoomDetailImgLeftWrapperStyled>
            <RoomDetailImgRightWrapperStyled>
                <RoomDetailImgRightTopWrapperStyled>
                    <RoomDetailImgMiniStyled src={room_detail1} onClick={handleClickOpen}/>
                    <RoomDetailImgMiniStyled src={room_detail2} onClick={handleClickOpen}/>
                    <RoomDetailImgMiniStyled src={room_detail3}style={{borderTopRightRadius: '.4rem'}} onClick={handleClickOpen}/>
                </RoomDetailImgRightTopWrapperStyled>
                <RoomDetailImgRightBottomWrapperStyled>
                    <RoomDetailImgMiniStyled src={room_detail5} onClick={handleClickOpen}/>
                    <RoomDetailImgMiniStyled src={room_detail4} onClick={handleClickOpen}/>
                    <RoomDetailImgMiniStyled src={room_detail6} onClick={handleClickOpen} style={{borderBottomRightRadius: '.4rem'}}/>
                </RoomDetailImgRightBottomWrapperStyled>
                <RoomDetailImgWishListWrapperStyled>
                    <FavoriteBorderOutlinedIcon />
                </RoomDetailImgWishListWrapperStyled>
            </RoomDetailImgRightWrapperStyled>
        </RoomDetailImgWrapperStyled>
        <RoomDetailImgDetailWrapperStyled>
            <Dialog
                fullScreen={fullScreen}
                maxWidth="lg"
                open={open}
                onClose={handleClose}
            >
                <DialogContent
                sx={{padding: '0px !important'}}
                >
                    <RoomDetailDialogContentContainerStyled>
                        <RoomDetailDialogContentWrapperStyled>
                            <RoomDetailDialogContentImgWrapperStyled>
                                <ReactSlickSyled asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...settings}>
                                    <RoomDetailDialogContentImgDetailWrapperStyled>
                                        <RoomDetailDialogContentImgDetailStyled src={img_detail}/>
                                    </RoomDetailDialogContentImgDetailWrapperStyled>
                                    <RoomDetailDialogContentImgDetailWrapperStyled>
                                        <RoomDetailDialogContentImgDetailStyled src={img_detail1}/>
                                    </RoomDetailDialogContentImgDetailWrapperStyled>
                                    <RoomDetailDialogContentImgDetailWrapperStyled>
                                        <RoomDetailDialogContentImgDetailStyled src={img_detail2}/>
                                    </RoomDetailDialogContentImgDetailWrapperStyled>
                                    <RoomDetailDialogContentImgDetailWrapperStyled>
                                        <RoomDetailDialogContentImgDetailStyled src={img_detail3}/>
                                    </RoomDetailDialogContentImgDetailWrapperStyled>
                                    <RoomDetailDialogContentImgDetailWrapperStyled>
                                        <RoomDetailDialogContentImgDetailStyled src={img_detail4}/>
                                    </RoomDetailDialogContentImgDetailWrapperStyled>
                                    <RoomDetailDialogContentImgDetailWrapperStyled>
                                        <RoomDetailDialogContentImgDetailStyled src={img_detail5}/>
                                    </RoomDetailDialogContentImgDetailWrapperStyled>
                                    <RoomDetailDialogContentImgDetailWrapperStyled>
                                        <RoomDetailDialogContentImgDetailStyled src={img_detail6}/>
                                    </RoomDetailDialogContentImgDetailWrapperStyled>
                                </ReactSlickSyled>
                                <Slider
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={6}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                    arrows={false}
                                >
                                    <RoomDetailDialogContentSubImgDetailWrapperStyled>
                                        <RoomDetailDialogContentSubImgDetailStyled src={img_sub_detail} />
                                    </RoomDetailDialogContentSubImgDetailWrapperStyled>
                                    <RoomDetailDialogContentSubImgDetailWrapperStyled>
                                        <RoomDetailDialogContentSubImgDetailStyled src={img_sub_detail1} />
                                    </RoomDetailDialogContentSubImgDetailWrapperStyled>
                                    <RoomDetailDialogContentSubImgDetailWrapperStyled>
                                        <RoomDetailDialogContentSubImgDetailStyled src={img_sub_detail2} />
                                    </RoomDetailDialogContentSubImgDetailWrapperStyled>
                                    <RoomDetailDialogContentSubImgDetailWrapperStyled>
                                        <RoomDetailDialogContentSubImgDetailStyled src={img_sub_detail3} />
                                    </RoomDetailDialogContentSubImgDetailWrapperStyled>
                                    <RoomDetailDialogContentSubImgDetailWrapperStyled>
                                        <RoomDetailDialogContentSubImgDetailStyled src={img_sub_detail4} />
                                    </RoomDetailDialogContentSubImgDetailWrapperStyled>
                                    <RoomDetailDialogContentSubImgDetailWrapperStyled>
                                        <RoomDetailDialogContentSubImgDetailStyled src={img_sub_detail5} />
                                    </RoomDetailDialogContentSubImgDetailWrapperStyled>
                                    <RoomDetailDialogContentSubImgDetailWrapperStyled>
                                        <RoomDetailDialogContentSubImgDetailStyled src={img_sub_detail6} />
                                    </RoomDetailDialogContentSubImgDetailWrapperStyled>
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
                                        <RoomCardRightPriceDiscountPercentStyled>GIẢM 81% HÔM NAY</RoomCardRightPriceDiscountPercentStyled>
                                    </RoomCardRightPriceDiscountWrapperStyled>
                                        <RoomCardRightPriceDiscountSubContentStyled>Giá mỗi đêm rẻ nhất từ</RoomCardRightPriceDiscountSubContentStyled>
                                        <RoomCardRightOldPriceStyled className='cross'>320.000.000</RoomCardRightOldPriceStyled>
                                        <RoomCardRightNewPriceStyled>660.000 đ</RoomCardRightNewPriceStyled>
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
    </RoomDetailImgContainerStyled>
  )
}

export default RoomDetailTopImage