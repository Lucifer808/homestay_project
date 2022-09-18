import React from 'react';
import styled from 'styled-components';
import room_detail_1 from '../../assets/room_detail_1.jpeg';
import room_detail_2 from '../../assets/room_detail_2.jpeg';
import room_detail_3 from '../../assets/room_detail_3.jpeg';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import SingleBedOutlinedIcon from '@mui/icons-material/SingleBedOutlined';
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
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
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
const BookingDetailCardBottomLeftImageWrapperStyled = styled.div``
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
    height: 50%;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 6px 0px;
`
const BookingDetailCardBottomRightContentContainerStyled = styled.div`
    width: 16rem;
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
    width: 22rem;
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
const BookingDetailCard = () => {
  return (
    <BookingDetailCardContainerStyled>
        <BookingDetailCardWrapperStyled>
            <BookingDetailCardTopWrapperStyled>
                <BookingDetailCardTopLeftTitleStyled>Deluxe sân thượng (Deluxe Terrace)</BookingDetailCardTopLeftTitleStyled>
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
                        <BookingDetailCardBottomLeftImageWrapperStyled>
                            <BookingDetailCardBottomLeftImageStyled src={room_detail_1}/>
                            <BookingDetailCardBottomLeftSubImageWrapperStyled>
                                <BookingDetailCardBottomLeftSubImageStyled src={room_detail_2} />
                                <BookingDetailCardBottomLeftSubImageStyled src={room_detail_3} />
                            </BookingDetailCardBottomLeftSubImageWrapperStyled>
                        </BookingDetailCardBottomLeftImageWrapperStyled>
                        <BookingDetailCardBottomLeftSubTitleStyled>Xem ảnh và chi tiết</BookingDetailCardBottomLeftSubTitleStyled>
                        <BookingDetailCardBottomLeftBedSizeWrapperStyled>
                            <BookingDetailCardBottomLeftBedSizeTitleStyled>Ưu tiên giường (nếu có)</BookingDetailCardBottomLeftBedSizeTitleStyled>
                            <BookingDetailCardBottomLeftBedSizeChoiceWrapperStyled>
                                <BookingDetailCardBottomLeftBedSizeChoiceLeftWrapperStyled>
                                    <BookingDetailCardBottomLeftBedSizeChoiceStyled type="radio" name='bed'/>
                                    <BookingDetailCardBottomLeftBedSizeChoiceTitleStyled>1 giường lớn</BookingDetailCardBottomLeftBedSizeChoiceTitleStyled>
                                </BookingDetailCardBottomLeftBedSizeChoiceLeftWrapperStyled>
                                <KingBedOutlinedIcon style={{color: '#555'}}/>
                            </BookingDetailCardBottomLeftBedSizeChoiceWrapperStyled>
                            <BookingDetailCardBottomLeftBedSizeChoiceWrapperStyled>
                                <BookingDetailCardBottomLeftBedSizeChoiceLeftWrapperStyled>
                                    <BookingDetailCardBottomLeftBedSizeChoiceStyled type="radio" name='bed'/>
                                    <BookingDetailCardBottomLeftBedSizeChoiceTitleStyled>2 giường đơn</BookingDetailCardBottomLeftBedSizeChoiceTitleStyled>
                                </BookingDetailCardBottomLeftBedSizeChoiceLeftWrapperStyled>
                                <BookingDetailCardBottomLeftBedSizeChoiceRightWrapperStyled>
                                    <SingleBedOutlinedIcon style={{color: '#555'}}/>
                                    <SingleBedOutlinedIcon style={{color: '#555'}}/>
                                </BookingDetailCardBottomLeftBedSizeChoiceRightWrapperStyled>
                            </BookingDetailCardBottomLeftBedSizeChoiceWrapperStyled>
                        </BookingDetailCardBottomLeftBedSizeWrapperStyled>
                        <BookingDetailCardBottomLeftConvenientWrapperStyled>
                            <BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                                <WifiOutlinedIcon style={{color: '#32a923'}}/>
                                <BookingDetailCardBottomLeftConvenientContentStyled style={{color: '#32a923'}}>Wifi miễn phí</BookingDetailCardBottomLeftConvenientContentStyled>
                            </BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                            <BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                                <HouseOutlinedIcon style={{color: '#555'}}/>
                                <BookingDetailCardBottomLeftConvenientContentStyled>Diện tích phòng: 35㎡</BookingDetailCardBottomLeftConvenientContentStyled>
                            </BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                            <BookingDetailCardBottomLeftConvenientContentWrapperStyled>
                                <DoorBackOutlinedIcon style={{color: '#555'}}/>
                                <BookingDetailCardBottomLeftConvenientContentStyled>Hướng phòng: Vườn</BookingDetailCardBottomLeftConvenientContentStyled>
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
                        </BookingDetailCardBottomRightWrapperStyled>
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
                        </BookingDetailCardBottomRightWrapperStyled>
                    </BookingDetailCardBottomRightContainerStyled>
                </BookingDetailCardBottomContentWrapperStyled>
                
            </BookingDetailCardBottomWrapperStyled>
        </BookingDetailCardWrapperStyled>
    </BookingDetailCardContainerStyled>
  )
}

export default BookingDetailCard