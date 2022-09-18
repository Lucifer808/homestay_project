import React from 'react';
import styled from 'styled-components';
import room_card from '../../assets/room_card.jpeg';
import room_card_1 from '../../assets/room_card_1.jpeg';
import room_card_2 from '../../assets/room_card_2.jpeg';
import room_card_3 from '../../assets/room_card_3.jpeg';
import room_card_4 from '../../assets/room_card_4.jpeg';
import Rating from '@mui/material/Rating';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const RoomCardContainerStyled = styled.div`
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
const RoomCardWrapperStyled = styled.div`
    display: flex;
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
const RoomCardLeftWrapperStyled = styled.div`
    height: 100%;
    width: 16.6rem;
`
const RoomCardLeftMainImgWrapperStyled = styled.div`
    height: 11rem;
    width: 100%;
`
const RoomCardLeftMainImgStyled = styled.img`
    cursor: pointer;
    border-top-left-radius: .4rem;
    height: 11rem;
    width: 100%;
    object-fit: cover;
`
const RoomCardLeftSubImgWrapperStyled = styled.div`
    display: flex;
`
const RoomCardLeftSubImgStyled = styled.img`
    cursor: pointer;
    object-fit: cover;
    width: 4rem;
    margin: .2rem .1rem;
`
const RoomCardLeftSubImgOverlayWrapperStyled = styled.div`
    position: relative;
    margin: .2rem .4rem .2rem .1rem;
    cursor: pointer;
`
const RoomCardLeftSubImgOverlayStyled = styled.div`
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
const RoomCardLeftSubImgOverlayTitleStyled = styled.span`
    font-size: .6rem;
    color: #fff;
`
const RoomCardLeftSubImgAllStyled = styled.img`
    object-fit: cover;
    height: 100%;
    width: 4rem;
`
const RoomCardMiddleWrapperStyled = styled.div`
    height: 100%;
    margin: .6rem;
    width: 25rem;
`
const RoomCardMiddleTopWrapperStyled = styled.div``
const RoomCardMiddleTopStyled = styled.span`
    display: inline-block;
    font-weight: 500;
    cursor: pointer;
    font-size: 1.1rem;
    &:hover{
        color: #00adff;
        text-decoration: underline;
    }
`
const RoomCardMiddleTopRatingWrapperStyled = styled.div`
    font-size: .8rem;
`
const RoomCardMiddleTopAdvancedServiceContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: .6rem 0;
`
const RoomCardMiddleTopAdvancedServiceWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 .2rem;
    border: 1px solid #dddfe2;
    padding: .1rem .2rem;
    border-radius: .1rem;
    cursor: pointer;
`
const RoomCardMiddleTopAdvancedServiceContentStyled = styled.span`
    font-size: .8rem;
    font-weight: 500;
`
const RoomCardMiddleTopAdvancedServiceContentMoreStyled = styled.span`
    display: block;
    margin: 0 .1rem;
    font-size: .8rem;
    font-weight: 500;
`
const RoomCardMiddleTopRatingAddressWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    &:hover{
        color: #00adff;
        text-decoration: underline;
    }
`
const RoomCardMiddleTopRatingAddressStyled = styled.span`
    color: #0283df;
`
const RoomCardMiddleTopAdvancedServiceBottomContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: .6rem 0;
`
const RoomCardMiddleTopAdvancedServiceBottomWrapperStyled = styled.div`
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
const RoomCardMiddleTopAdvancedServiceBottomContentStyled = styled.span`
    font-size: .8rem;
    font-weight: 500;
`
const RoomCardMiddleTopAdvancedServiceBottomBeachWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 .2rem;
    cursor: pointer;
`
const RoomCardMiddleTopAdvancedServiceBottomBeachContentStyled = styled.span`
    font-size: .9rem;
    color: #0283df;
`
const RoomCardMiddleTopAdvancedServiceBottomCouponContainerStyled = styled.div``
const RoomCardMiddleTopAdvancedServiceBottomCouponWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const RoomCardMiddleTopAdvancedServiceBottomCouponContentStyled = styled.span`
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
const RoomCardRightWrapperStyled = styled.div`
    height: 100%;
    text-align: right;
    width: 12rem;
    padding: 0 .6rem 0 2rem;
`
const RoomCardRightReviewWrapperStyled = styled.div`
    display: flex;
    padding: .6rem;
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
const RoomCardRightPriceWrapperStyled = styled.div``
const RoomCardRightPriceDiscountWrapperStyled = styled.div`
    margin: .4rem 0;
    padding: .2rem 0;
    border-radius: .1rem;
    background-color: rgb(225, 45, 45);
`
const RoomCardRightPriceDiscountContentWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .4rem 0;
    padding: .2rem 0;
    border-radius: .1rem;
    background-color: rgb(249, 216, 216);
`
const RoomCardRightPriceDiscountPercentStyled = styled.span`
    display: block;
    text-align: center;
    font-size: .8rem;
    color: #fff;
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
    color: #666;
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
const RoomCard = () => {
  return (
    <RoomCardContainerStyled>
        <RoomCardWrapperStyled>
            <RoomCardLeftWrapperStyled>
                <RoomCardLeftMainImgWrapperStyled>
                    <RoomCardLeftMainImgStyled src={room_card}/>
                </RoomCardLeftMainImgWrapperStyled>
                <RoomCardLeftSubImgWrapperStyled>
                    <RoomCardLeftSubImgStyled src={room_card_1} style={{marginLeft: '0px'}}/>
                    <RoomCardLeftSubImgStyled src={room_card_2} />
                    <RoomCardLeftSubImgStyled src={room_card_3} />
                    <RoomCardLeftSubImgOverlayWrapperStyled>
                        <RoomCardLeftSubImgAllStyled src={room_card_4}/>
                        <RoomCardLeftSubImgOverlayStyled>
                            <RoomCardLeftSubImgOverlayTitleStyled>XEM TẤT CẢ</RoomCardLeftSubImgOverlayTitleStyled>
                        </RoomCardLeftSubImgOverlayStyled>
                    </RoomCardLeftSubImgOverlayWrapperStyled>
                </RoomCardLeftSubImgWrapperStyled>
            </RoomCardLeftWrapperStyled>
            <RoomCardMiddleWrapperStyled>
                <RoomCardMiddleTopWrapperStyled>
                    <RoomCardMiddleTopStyled>Thavorn Palm Beach Resort Phuket (SHA Plus+)</RoomCardMiddleTopStyled>
                    <RoomCardMiddleTopRatingWrapperStyled>
                        <Rating name="size-small" value={5} size="small" readOnly/>
                        <RoomCardMiddleTopRatingAddressWrapperStyled>
                            <PlaceOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                            <RoomCardMiddleTopRatingAddressStyled>Karon, Phuket - cách trung tâm 10,7 km</RoomCardMiddleTopRatingAddressStyled>
                        </RoomCardMiddleTopRatingAddressWrapperStyled>
                    </RoomCardMiddleTopRatingWrapperStyled>
                    <RoomCardMiddleTopAdvancedServiceContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Bữa sáng</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Phòng tập</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Bãi đậu xe</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentMoreStyled>+</RoomCardMiddleTopAdvancedServiceContentMoreStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceContainerStyled>
                    <RoomCardMiddleTopAdvancedServiceBottomContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceBottomContentStyled>Mới sửa sang</RoomCardMiddleTopAdvancedServiceBottomContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                            <BeachAccessOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                            <RoomCardMiddleTopAdvancedServiceBottomBeachContentStyled>Gần bãi biển</RoomCardMiddleTopAdvancedServiceBottomBeachContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceBottomContainerStyled>
                    <RoomCardMiddleTopAdvancedServiceBottomCouponContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                            <FlagIcon style={{fontSize: '.8rem', color: 'rgb(225, 45, 45)'}}/>
                            <RoomCardMiddleTopAdvancedServiceBottomCouponContentStyled>Đang bán chạy! Lần đặt gần nhất cách đây 3 giờ</RoomCardMiddleTopAdvancedServiceBottomCouponContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceBottomCouponContainerStyled>
                </RoomCardMiddleTopWrapperStyled>
            </RoomCardMiddleWrapperStyled>
            <RoomListRightTopFilterMiddleStyled />
            <RoomCardRightWrapperStyled>
                <RoomCardRightReviewWrapperStyled>
                    <RoomCardRightReviewContentWrapperStyled>
                        <RoomCardRightReviewContentTopStyled>Tuyệt vời</RoomCardRightReviewContentTopStyled>
                        <RoomCardRightReviewContentBottomStyled>1.509 Nhận xét</RoomCardRightReviewContentBottomStyled>
                    </RoomCardRightReviewContentWrapperStyled>
                    <RoomCardRightReviewPointWrapperStyled>
                        <RoomCardRightReviewPointContentStyled>8.5</RoomCardRightReviewPointContentStyled>
                    </RoomCardRightReviewPointWrapperStyled>
                </RoomCardRightReviewWrapperStyled>
                <RoomCardRightPriceWrapperStyled>
                    <RoomCardRightPriceDiscountWrapperStyled>
                        <RoomCardRightPriceDiscountPercentStyled>GIẢM 81% HÔM NAY</RoomCardRightPriceDiscountPercentStyled>
                    </RoomCardRightPriceDiscountWrapperStyled>
                    <RoomCardRightPriceDiscountContentWrapperStyled>
                        <KeyboardDoubleArrowDownOutlinedIcon style={{color: 'rgb(180, 36, 36)', fontSize: '.9rem'}}/>
                        <RoomCardRightPriceDiscountContentStyled>SIÊU TIẾT KIỆM</RoomCardRightPriceDiscountContentStyled>
                    </RoomCardRightPriceDiscountContentWrapperStyled>
                    <RoomCardRightPriceDiscountSubContentStyled>Giá mỗi đêm rẻ nhất từ</RoomCardRightPriceDiscountSubContentStyled>
                    <RoomCardRightOldPriceStyled className='cross'>320.000.000</RoomCardRightOldPriceStyled>
                    <RoomCardRightNewPriceStyled>660.000 ₫</RoomCardRightNewPriceStyled>
                    <RoomCardRightBottomButtonWrapperStyled>
                        <RoomCardRightBottomButtonTitleStyled>Chọn phòng</RoomCardRightBottomButtonTitleStyled>
                        <ArrowForwardIosOutlinedIcon style={{color: '#fff'}}/>
                    </RoomCardRightBottomButtonWrapperStyled>
                </RoomCardRightPriceWrapperStyled>
            </RoomCardRightWrapperStyled>
        </RoomCardWrapperStyled>
        <RoomCardWrapperStyled>
            <RoomCardLeftWrapperStyled>
                <RoomCardLeftMainImgWrapperStyled>
                    <RoomCardLeftMainImgStyled src={room_card}/>
                </RoomCardLeftMainImgWrapperStyled>
                <RoomCardLeftSubImgWrapperStyled>
                    <RoomCardLeftSubImgStyled src={room_card_1} style={{marginLeft: '0px'}}/>
                    <RoomCardLeftSubImgStyled src={room_card_2} />
                    <RoomCardLeftSubImgStyled src={room_card_3} />
                    <RoomCardLeftSubImgOverlayWrapperStyled>
                        <RoomCardLeftSubImgAllStyled src={room_card_4}/>
                        <RoomCardLeftSubImgOverlayStyled>
                            <RoomCardLeftSubImgOverlayTitleStyled>XEM TẤT CẢ</RoomCardLeftSubImgOverlayTitleStyled>
                        </RoomCardLeftSubImgOverlayStyled>
                    </RoomCardLeftSubImgOverlayWrapperStyled>
                </RoomCardLeftSubImgWrapperStyled>
            </RoomCardLeftWrapperStyled>
            <RoomCardMiddleWrapperStyled>
                <RoomCardMiddleTopWrapperStyled>
                    <RoomCardMiddleTopStyled>Thavorn Palm Beach Resort Phuket (SHA Plus+)</RoomCardMiddleTopStyled>
                    <RoomCardMiddleTopRatingWrapperStyled>
                        <Rating name="size-small" value={5} size="small" readOnly/>
                        <RoomCardMiddleTopRatingAddressWrapperStyled>
                            <PlaceOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                            <RoomCardMiddleTopRatingAddressStyled>Karon, Phuket - cách trung tâm 10,7 km</RoomCardMiddleTopRatingAddressStyled>
                        </RoomCardMiddleTopRatingAddressWrapperStyled>
                    </RoomCardMiddleTopRatingWrapperStyled>
                    <RoomCardMiddleTopAdvancedServiceContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Bữa sáng</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Phòng tập</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Bãi đậu xe</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentMoreStyled>+</RoomCardMiddleTopAdvancedServiceContentMoreStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceContainerStyled>
                    <RoomCardMiddleTopAdvancedServiceBottomContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceBottomContentStyled>Mới sửa sang</RoomCardMiddleTopAdvancedServiceBottomContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                            <BeachAccessOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                            <RoomCardMiddleTopAdvancedServiceBottomBeachContentStyled>Gần bãi biển</RoomCardMiddleTopAdvancedServiceBottomBeachContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceBottomContainerStyled>
                    <RoomCardMiddleTopAdvancedServiceBottomCouponContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                            <FlagIcon style={{fontSize: '.8rem', color: 'rgb(225, 45, 45)'}}/>
                            <RoomCardMiddleTopAdvancedServiceBottomCouponContentStyled>Đang bán chạy! Lần đặt gần nhất cách đây 3 giờ</RoomCardMiddleTopAdvancedServiceBottomCouponContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceBottomCouponContainerStyled>
                </RoomCardMiddleTopWrapperStyled>
            </RoomCardMiddleWrapperStyled>
            <RoomListRightTopFilterMiddleStyled />
            <RoomCardRightWrapperStyled>
                <RoomCardRightReviewWrapperStyled>
                    <RoomCardRightReviewContentWrapperStyled>
                        <RoomCardRightReviewContentTopStyled>Tuyệt vời</RoomCardRightReviewContentTopStyled>
                        <RoomCardRightReviewContentBottomStyled>1.509 Nhận xét</RoomCardRightReviewContentBottomStyled>
                    </RoomCardRightReviewContentWrapperStyled>
                    <RoomCardRightReviewPointWrapperStyled>
                        <RoomCardRightReviewPointContentStyled>8.5</RoomCardRightReviewPointContentStyled>
                    </RoomCardRightReviewPointWrapperStyled>
                </RoomCardRightReviewWrapperStyled>
                <RoomCardRightPriceWrapperStyled>
                    <RoomCardRightPriceDiscountWrapperStyled>
                        <RoomCardRightPriceDiscountPercentStyled>GIẢM 81% HÔM NAY</RoomCardRightPriceDiscountPercentStyled>
                    </RoomCardRightPriceDiscountWrapperStyled>
                    <RoomCardRightPriceDiscountContentWrapperStyled>
                        <KeyboardDoubleArrowDownOutlinedIcon style={{color: 'rgb(180, 36, 36)', fontSize: '.9rem'}}/>
                        <RoomCardRightPriceDiscountContentStyled>SIÊU TIẾT KIỆM</RoomCardRightPriceDiscountContentStyled>
                    </RoomCardRightPriceDiscountContentWrapperStyled>
                    <RoomCardRightPriceDiscountSubContentStyled>Giá mỗi đêm rẻ nhất từ</RoomCardRightPriceDiscountSubContentStyled>
                    <RoomCardRightOldPriceStyled className='cross'>320.000.000</RoomCardRightOldPriceStyled>
                    <RoomCardRightNewPriceStyled>660.000 ₫</RoomCardRightNewPriceStyled>
                    <RoomCardRightBottomButtonWrapperStyled>
                        <RoomCardRightBottomButtonTitleStyled>Chọn phòng</RoomCardRightBottomButtonTitleStyled>
                        <ArrowForwardIosOutlinedIcon style={{color: '#fff'}}/>
                    </RoomCardRightBottomButtonWrapperStyled>
                </RoomCardRightPriceWrapperStyled>
            </RoomCardRightWrapperStyled>
        </RoomCardWrapperStyled>
        <RoomCardWrapperStyled>
            <RoomCardLeftWrapperStyled>
                <RoomCardLeftMainImgWrapperStyled>
                    <RoomCardLeftMainImgStyled src={room_card}/>
                </RoomCardLeftMainImgWrapperStyled>
                <RoomCardLeftSubImgWrapperStyled>
                    <RoomCardLeftSubImgStyled src={room_card_1} style={{marginLeft: '0px'}}/>
                    <RoomCardLeftSubImgStyled src={room_card_2} />
                    <RoomCardLeftSubImgStyled src={room_card_3} />
                    <RoomCardLeftSubImgOverlayWrapperStyled>
                        <RoomCardLeftSubImgAllStyled src={room_card_4}/>
                        <RoomCardLeftSubImgOverlayStyled>
                            <RoomCardLeftSubImgOverlayTitleStyled>XEM TẤT CẢ</RoomCardLeftSubImgOverlayTitleStyled>
                        </RoomCardLeftSubImgOverlayStyled>
                    </RoomCardLeftSubImgOverlayWrapperStyled>
                </RoomCardLeftSubImgWrapperStyled>
            </RoomCardLeftWrapperStyled>
            <RoomCardMiddleWrapperStyled>
                <RoomCardMiddleTopWrapperStyled>
                    <RoomCardMiddleTopStyled>Thavorn Palm Beach Resort Phuket (SHA Plus+)</RoomCardMiddleTopStyled>
                    <RoomCardMiddleTopRatingWrapperStyled>
                        <Rating name="size-small" value={5} size="small" readOnly/>
                        <RoomCardMiddleTopRatingAddressWrapperStyled>
                            <PlaceOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                            <RoomCardMiddleTopRatingAddressStyled>Karon, Phuket - cách trung tâm 10,7 km</RoomCardMiddleTopRatingAddressStyled>
                        </RoomCardMiddleTopRatingAddressWrapperStyled>
                    </RoomCardMiddleTopRatingWrapperStyled>
                    <RoomCardMiddleTopAdvancedServiceContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Bữa sáng</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Phòng tập</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Bãi đậu xe</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentMoreStyled>+</RoomCardMiddleTopAdvancedServiceContentMoreStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceContainerStyled>
                    <RoomCardMiddleTopAdvancedServiceBottomContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceBottomContentStyled>Mới sửa sang</RoomCardMiddleTopAdvancedServiceBottomContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                            <BeachAccessOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                            <RoomCardMiddleTopAdvancedServiceBottomBeachContentStyled>Gần bãi biển</RoomCardMiddleTopAdvancedServiceBottomBeachContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceBottomContainerStyled>
                    <RoomCardMiddleTopAdvancedServiceBottomCouponContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                            <FlagIcon style={{fontSize: '.8rem', color: 'rgb(225, 45, 45)'}}/>
                            <RoomCardMiddleTopAdvancedServiceBottomCouponContentStyled>Đang bán chạy! Lần đặt gần nhất cách đây 3 giờ</RoomCardMiddleTopAdvancedServiceBottomCouponContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceBottomCouponContainerStyled>
                </RoomCardMiddleTopWrapperStyled>
            </RoomCardMiddleWrapperStyled>
            <RoomListRightTopFilterMiddleStyled />
            <RoomCardRightWrapperStyled>
                <RoomCardRightReviewWrapperStyled>
                    <RoomCardRightReviewContentWrapperStyled>
                        <RoomCardRightReviewContentTopStyled>Tuyệt vời</RoomCardRightReviewContentTopStyled>
                        <RoomCardRightReviewContentBottomStyled>1.509 Nhận xét</RoomCardRightReviewContentBottomStyled>
                    </RoomCardRightReviewContentWrapperStyled>
                    <RoomCardRightReviewPointWrapperStyled>
                        <RoomCardRightReviewPointContentStyled>8.5</RoomCardRightReviewPointContentStyled>
                    </RoomCardRightReviewPointWrapperStyled>
                </RoomCardRightReviewWrapperStyled>
                <RoomCardRightPriceWrapperStyled>
                    <RoomCardRightPriceDiscountWrapperStyled>
                        <RoomCardRightPriceDiscountPercentStyled>GIẢM 81% HÔM NAY</RoomCardRightPriceDiscountPercentStyled>
                    </RoomCardRightPriceDiscountWrapperStyled>
                    <RoomCardRightPriceDiscountContentWrapperStyled>
                        <KeyboardDoubleArrowDownOutlinedIcon style={{color: 'rgb(180, 36, 36)', fontSize: '.9rem'}}/>
                        <RoomCardRightPriceDiscountContentStyled>SIÊU TIẾT KIỆM</RoomCardRightPriceDiscountContentStyled>
                    </RoomCardRightPriceDiscountContentWrapperStyled>
                    <RoomCardRightPriceDiscountSubContentStyled>Giá mỗi đêm rẻ nhất từ</RoomCardRightPriceDiscountSubContentStyled>
                    <RoomCardRightOldPriceStyled className='cross'>320.000.000</RoomCardRightOldPriceStyled>
                    <RoomCardRightNewPriceStyled>660.000 ₫</RoomCardRightNewPriceStyled>
                    <RoomCardRightBottomButtonWrapperStyled>
                        <RoomCardRightBottomButtonTitleStyled>Chọn phòng</RoomCardRightBottomButtonTitleStyled>
                        <ArrowForwardIosOutlinedIcon style={{color: '#fff'}}/>
                    </RoomCardRightBottomButtonWrapperStyled>
                </RoomCardRightPriceWrapperStyled>
            </RoomCardRightWrapperStyled>
        </RoomCardWrapperStyled>
        <RoomCardWrapperStyled>
            <RoomCardLeftWrapperStyled>
                <RoomCardLeftMainImgWrapperStyled>
                    <RoomCardLeftMainImgStyled src={room_card}/>
                </RoomCardLeftMainImgWrapperStyled>
                <RoomCardLeftSubImgWrapperStyled>
                    <RoomCardLeftSubImgStyled src={room_card_1} style={{marginLeft: '0px'}}/>
                    <RoomCardLeftSubImgStyled src={room_card_2} />
                    <RoomCardLeftSubImgStyled src={room_card_3} />
                    <RoomCardLeftSubImgOverlayWrapperStyled>
                        <RoomCardLeftSubImgAllStyled src={room_card_4}/>
                        <RoomCardLeftSubImgOverlayStyled>
                            <RoomCardLeftSubImgOverlayTitleStyled>XEM TẤT CẢ</RoomCardLeftSubImgOverlayTitleStyled>
                        </RoomCardLeftSubImgOverlayStyled>
                    </RoomCardLeftSubImgOverlayWrapperStyled>
                </RoomCardLeftSubImgWrapperStyled>
            </RoomCardLeftWrapperStyled>
            <RoomCardMiddleWrapperStyled>
                <RoomCardMiddleTopWrapperStyled>
                    <RoomCardMiddleTopStyled>Thavorn Palm Beach Resort Phuket (SHA Plus+)</RoomCardMiddleTopStyled>
                    <RoomCardMiddleTopRatingWrapperStyled>
                        <Rating name="size-small" value={5} size="small" readOnly/>
                        <RoomCardMiddleTopRatingAddressWrapperStyled>
                            <PlaceOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                            <RoomCardMiddleTopRatingAddressStyled>Karon, Phuket - cách trung tâm 10,7 km</RoomCardMiddleTopRatingAddressStyled>
                        </RoomCardMiddleTopRatingAddressWrapperStyled>
                    </RoomCardMiddleTopRatingWrapperStyled>
                    <RoomCardMiddleTopAdvancedServiceContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Bữa sáng</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Phòng tập</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Bãi đậu xe</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentMoreStyled>+</RoomCardMiddleTopAdvancedServiceContentMoreStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceContainerStyled>
                    <RoomCardMiddleTopAdvancedServiceBottomContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceBottomContentStyled>Mới sửa sang</RoomCardMiddleTopAdvancedServiceBottomContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                            <BeachAccessOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                            <RoomCardMiddleTopAdvancedServiceBottomBeachContentStyled>Gần bãi biển</RoomCardMiddleTopAdvancedServiceBottomBeachContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceBottomContainerStyled>
                    <RoomCardMiddleTopAdvancedServiceBottomCouponContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                            <FlagIcon style={{fontSize: '.8rem', color: 'rgb(225, 45, 45)'}}/>
                            <RoomCardMiddleTopAdvancedServiceBottomCouponContentStyled>Đang bán chạy! Lần đặt gần nhất cách đây 3 giờ</RoomCardMiddleTopAdvancedServiceBottomCouponContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceBottomCouponContainerStyled>
                </RoomCardMiddleTopWrapperStyled>
            </RoomCardMiddleWrapperStyled>
            <RoomListRightTopFilterMiddleStyled />
            <RoomCardRightWrapperStyled>
                <RoomCardRightReviewWrapperStyled>
                    <RoomCardRightReviewContentWrapperStyled>
                        <RoomCardRightReviewContentTopStyled>Tuyệt vời</RoomCardRightReviewContentTopStyled>
                        <RoomCardRightReviewContentBottomStyled>1.509 Nhận xét</RoomCardRightReviewContentBottomStyled>
                    </RoomCardRightReviewContentWrapperStyled>
                    <RoomCardRightReviewPointWrapperStyled>
                        <RoomCardRightReviewPointContentStyled>8.5</RoomCardRightReviewPointContentStyled>
                    </RoomCardRightReviewPointWrapperStyled>
                </RoomCardRightReviewWrapperStyled>
                <RoomCardRightPriceWrapperStyled>
                    <RoomCardRightPriceDiscountWrapperStyled>
                        <RoomCardRightPriceDiscountPercentStyled>GIẢM 81% HÔM NAY</RoomCardRightPriceDiscountPercentStyled>
                    </RoomCardRightPriceDiscountWrapperStyled>
                    <RoomCardRightPriceDiscountContentWrapperStyled>
                        <KeyboardDoubleArrowDownOutlinedIcon style={{color: 'rgb(180, 36, 36)', fontSize: '.9rem'}}/>
                        <RoomCardRightPriceDiscountContentStyled>SIÊU TIẾT KIỆM</RoomCardRightPriceDiscountContentStyled>
                    </RoomCardRightPriceDiscountContentWrapperStyled>
                    <RoomCardRightPriceDiscountSubContentStyled>Giá mỗi đêm rẻ nhất từ</RoomCardRightPriceDiscountSubContentStyled>
                    <RoomCardRightOldPriceStyled className='cross'>320.000.000</RoomCardRightOldPriceStyled>
                    <RoomCardRightNewPriceStyled>660.000 ₫</RoomCardRightNewPriceStyled>
                    <RoomCardRightBottomButtonWrapperStyled>
                        <RoomCardRightBottomButtonTitleStyled>Chọn phòng</RoomCardRightBottomButtonTitleStyled>
                        <ArrowForwardIosOutlinedIcon style={{color: '#fff'}}/>
                    </RoomCardRightBottomButtonWrapperStyled>
                </RoomCardRightPriceWrapperStyled>
            </RoomCardRightWrapperStyled>
        </RoomCardWrapperStyled>
        <RoomCardWrapperStyled>
            <RoomCardLeftWrapperStyled>
                <RoomCardLeftMainImgWrapperStyled>
                    <RoomCardLeftMainImgStyled src={room_card}/>
                </RoomCardLeftMainImgWrapperStyled>
                <RoomCardLeftSubImgWrapperStyled>
                    <RoomCardLeftSubImgStyled src={room_card_1} style={{marginLeft: '0px'}}/>
                    <RoomCardLeftSubImgStyled src={room_card_2} />
                    <RoomCardLeftSubImgStyled src={room_card_3} />
                    <RoomCardLeftSubImgOverlayWrapperStyled>
                        <RoomCardLeftSubImgAllStyled src={room_card_4}/>
                        <RoomCardLeftSubImgOverlayStyled>
                            <RoomCardLeftSubImgOverlayTitleStyled>XEM TẤT CẢ</RoomCardLeftSubImgOverlayTitleStyled>
                        </RoomCardLeftSubImgOverlayStyled>
                    </RoomCardLeftSubImgOverlayWrapperStyled>
                </RoomCardLeftSubImgWrapperStyled>
            </RoomCardLeftWrapperStyled>
            <RoomCardMiddleWrapperStyled>
                <RoomCardMiddleTopWrapperStyled>
                    <RoomCardMiddleTopStyled>Thavorn Palm Beach Resort Phuket (SHA Plus+)</RoomCardMiddleTopStyled>
                    <RoomCardMiddleTopRatingWrapperStyled>
                        <Rating name="size-small" value={5} size="small" readOnly/>
                        <RoomCardMiddleTopRatingAddressWrapperStyled>
                            <PlaceOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                            <RoomCardMiddleTopRatingAddressStyled>Karon, Phuket - cách trung tâm 10,7 km</RoomCardMiddleTopRatingAddressStyled>
                        </RoomCardMiddleTopRatingAddressWrapperStyled>
                    </RoomCardMiddleTopRatingWrapperStyled>
                    <RoomCardMiddleTopAdvancedServiceContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Bữa sáng</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Phòng tập</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Bãi đậu xe</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentMoreStyled>+</RoomCardMiddleTopAdvancedServiceContentMoreStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceContainerStyled>
                    <RoomCardMiddleTopAdvancedServiceBottomContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceBottomContentStyled>Mới sửa sang</RoomCardMiddleTopAdvancedServiceBottomContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                            <BeachAccessOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                            <RoomCardMiddleTopAdvancedServiceBottomBeachContentStyled>Gần bãi biển</RoomCardMiddleTopAdvancedServiceBottomBeachContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceBottomContainerStyled>
                    <RoomCardMiddleTopAdvancedServiceBottomCouponContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                            <FlagIcon style={{fontSize: '.8rem', color: 'rgb(225, 45, 45)'}}/>
                            <RoomCardMiddleTopAdvancedServiceBottomCouponContentStyled>Đang bán chạy! Lần đặt gần nhất cách đây 3 giờ</RoomCardMiddleTopAdvancedServiceBottomCouponContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceBottomCouponContainerStyled>
                </RoomCardMiddleTopWrapperStyled>
            </RoomCardMiddleWrapperStyled>
            <RoomListRightTopFilterMiddleStyled />
            <RoomCardRightWrapperStyled>
                <RoomCardRightReviewWrapperStyled>
                    <RoomCardRightReviewContentWrapperStyled>
                        <RoomCardRightReviewContentTopStyled>Tuyệt vời</RoomCardRightReviewContentTopStyled>
                        <RoomCardRightReviewContentBottomStyled>1.509 Nhận xét</RoomCardRightReviewContentBottomStyled>
                    </RoomCardRightReviewContentWrapperStyled>
                    <RoomCardRightReviewPointWrapperStyled>
                        <RoomCardRightReviewPointContentStyled>8.5</RoomCardRightReviewPointContentStyled>
                    </RoomCardRightReviewPointWrapperStyled>
                </RoomCardRightReviewWrapperStyled>
                <RoomCardRightPriceWrapperStyled>
                    <RoomCardRightPriceDiscountWrapperStyled>
                        <RoomCardRightPriceDiscountPercentStyled>GIẢM 81% HÔM NAY</RoomCardRightPriceDiscountPercentStyled>
                    </RoomCardRightPriceDiscountWrapperStyled>
                    <RoomCardRightPriceDiscountContentWrapperStyled>
                        <KeyboardDoubleArrowDownOutlinedIcon style={{color: 'rgb(180, 36, 36)', fontSize: '.9rem'}}/>
                        <RoomCardRightPriceDiscountContentStyled>SIÊU TIẾT KIỆM</RoomCardRightPriceDiscountContentStyled>
                    </RoomCardRightPriceDiscountContentWrapperStyled>
                    <RoomCardRightPriceDiscountSubContentStyled>Giá mỗi đêm rẻ nhất từ</RoomCardRightPriceDiscountSubContentStyled>
                    <RoomCardRightOldPriceStyled className='cross'>320.000.000</RoomCardRightOldPriceStyled>
                    <RoomCardRightNewPriceStyled>660.000 ₫</RoomCardRightNewPriceStyled>
                    <RoomCardRightBottomButtonWrapperStyled>
                        <RoomCardRightBottomButtonTitleStyled>Chọn phòng</RoomCardRightBottomButtonTitleStyled>
                        <ArrowForwardIosOutlinedIcon style={{color: '#fff'}}/>
                    </RoomCardRightBottomButtonWrapperStyled>
                </RoomCardRightPriceWrapperStyled>
            </RoomCardRightWrapperStyled>
        </RoomCardWrapperStyled>
        <RoomCardWrapperStyled>
            <RoomCardLeftWrapperStyled>
                <RoomCardLeftMainImgWrapperStyled>
                    <RoomCardLeftMainImgStyled src={room_card}/>
                </RoomCardLeftMainImgWrapperStyled>
                <RoomCardLeftSubImgWrapperStyled>
                    <RoomCardLeftSubImgStyled src={room_card_1} style={{marginLeft: '0px'}}/>
                    <RoomCardLeftSubImgStyled src={room_card_2} />
                    <RoomCardLeftSubImgStyled src={room_card_3} />
                    <RoomCardLeftSubImgOverlayWrapperStyled>
                        <RoomCardLeftSubImgAllStyled src={room_card_4}/>
                        <RoomCardLeftSubImgOverlayStyled>
                            <RoomCardLeftSubImgOverlayTitleStyled>XEM TẤT CẢ</RoomCardLeftSubImgOverlayTitleStyled>
                        </RoomCardLeftSubImgOverlayStyled>
                    </RoomCardLeftSubImgOverlayWrapperStyled>
                </RoomCardLeftSubImgWrapperStyled>
            </RoomCardLeftWrapperStyled>
            <RoomCardMiddleWrapperStyled>
                <RoomCardMiddleTopWrapperStyled>
                    <RoomCardMiddleTopStyled>Thavorn Palm Beach Resort Phuket (SHA Plus+)</RoomCardMiddleTopStyled>
                    <RoomCardMiddleTopRatingWrapperStyled>
                        <Rating name="size-small" value={5} size="small" readOnly/>
                        <RoomCardMiddleTopRatingAddressWrapperStyled>
                            <PlaceOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                            <RoomCardMiddleTopRatingAddressStyled>Karon, Phuket - cách trung tâm 10,7 km</RoomCardMiddleTopRatingAddressStyled>
                        </RoomCardMiddleTopRatingAddressWrapperStyled>
                    </RoomCardMiddleTopRatingWrapperStyled>
                    <RoomCardMiddleTopAdvancedServiceContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Bữa sáng</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Phòng tập</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentStyled>Bãi đậu xe</RoomCardMiddleTopAdvancedServiceContentStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceContentMoreStyled>+</RoomCardMiddleTopAdvancedServiceContentMoreStyled>
                        </RoomCardMiddleTopAdvancedServiceWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceContainerStyled>
                    <RoomCardMiddleTopAdvancedServiceBottomContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomWrapperStyled>
                            <RoomCardMiddleTopAdvancedServiceBottomContentStyled>Mới sửa sang</RoomCardMiddleTopAdvancedServiceBottomContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomWrapperStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                            <BeachAccessOutlinedIcon style={{fontSize: '.9rem', color: '#0283df'}}/>
                            <RoomCardMiddleTopAdvancedServiceBottomBeachContentStyled>Gần bãi biển</RoomCardMiddleTopAdvancedServiceBottomBeachContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomBeachWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceBottomContainerStyled>
                    <RoomCardMiddleTopAdvancedServiceBottomCouponContainerStyled>
                        <RoomCardMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                            <FlagIcon style={{fontSize: '.8rem', color: 'rgb(225, 45, 45)'}}/>
                            <RoomCardMiddleTopAdvancedServiceBottomCouponContentStyled>Đang bán chạy! Lần đặt gần nhất cách đây 3 giờ</RoomCardMiddleTopAdvancedServiceBottomCouponContentStyled>
                        </RoomCardMiddleTopAdvancedServiceBottomCouponWrapperStyled>
                    </RoomCardMiddleTopAdvancedServiceBottomCouponContainerStyled>
                </RoomCardMiddleTopWrapperStyled>
            </RoomCardMiddleWrapperStyled>
            <RoomListRightTopFilterMiddleStyled />
            <RoomCardRightWrapperStyled>
                <RoomCardRightReviewWrapperStyled>
                    <RoomCardRightReviewContentWrapperStyled>
                        <RoomCardRightReviewContentTopStyled>Tuyệt vời</RoomCardRightReviewContentTopStyled>
                        <RoomCardRightReviewContentBottomStyled>1.509 Nhận xét</RoomCardRightReviewContentBottomStyled>
                    </RoomCardRightReviewContentWrapperStyled>
                    <RoomCardRightReviewPointWrapperStyled>
                        <RoomCardRightReviewPointContentStyled>8.5</RoomCardRightReviewPointContentStyled>
                    </RoomCardRightReviewPointWrapperStyled>
                </RoomCardRightReviewWrapperStyled>
                <RoomCardRightPriceWrapperStyled>
                    <RoomCardRightPriceDiscountWrapperStyled>
                        <RoomCardRightPriceDiscountPercentStyled>GIẢM 81% HÔM NAY</RoomCardRightPriceDiscountPercentStyled>
                    </RoomCardRightPriceDiscountWrapperStyled>
                    <RoomCardRightPriceDiscountContentWrapperStyled>
                        <KeyboardDoubleArrowDownOutlinedIcon style={{color: 'rgb(180, 36, 36)', fontSize: '.9rem'}}/>
                        <RoomCardRightPriceDiscountContentStyled>SIÊU TIẾT KIỆM</RoomCardRightPriceDiscountContentStyled>
                    </RoomCardRightPriceDiscountContentWrapperStyled>
                    <RoomCardRightPriceDiscountSubContentStyled>Giá mỗi đêm rẻ nhất từ</RoomCardRightPriceDiscountSubContentStyled>
                    <RoomCardRightOldPriceStyled className='cross'>320.000.000</RoomCardRightOldPriceStyled>
                    <RoomCardRightNewPriceStyled>660.000 ₫</RoomCardRightNewPriceStyled>
                    <RoomCardRightBottomButtonWrapperStyled>
                        <RoomCardRightBottomButtonTitleStyled>Chọn phòng</RoomCardRightBottomButtonTitleStyled>
                        <ArrowForwardIosOutlinedIcon style={{color: '#fff'}}/>
                    </RoomCardRightBottomButtonWrapperStyled>
                </RoomCardRightPriceWrapperStyled>
            </RoomCardRightWrapperStyled>
        </RoomCardWrapperStyled>
    </RoomCardContainerStyled>
  )
}

export default RoomCard