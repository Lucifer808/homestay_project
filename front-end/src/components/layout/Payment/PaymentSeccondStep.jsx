import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PaymentStepperProvider from '../../child/PaymentStepperProvider';
import Rating from '@mui/material/Rating';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import { selectUser, selectIsAutheticated } from '../../../features/userSlice';
import { customerConfirmOrder, customerCreateNewOrder, selectBookingInfo } from '../../../features/customerSlice';
import ic_visa from '../../../assets/visa.png'
import ic_jcb from '../../../assets/ic_jcb.png'
import ic_americanexpress from '../../../assets/ic_americanexpress.png'
import ic_master from '../../../assets/ic_master.png'
import { Link } from "react-router-dom";
import customerApi from "../../../api/customerApi";
import { toast } from "react-toastify";
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
    justify-content: flex-start;
    width: 80vw;
    padding: .4rem 0;
`
const HeaderLogoStyled = styled.h2`
    font-family: 'DynaPuff', cursive;
    text-align: left;
`
const PaymentpageHeaderStepWrapperStyled = styled.div`
    width: 60%;
    margin-left: 10rem;
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
const PaymentpageBottomLeftWrapperStyled = styled.form`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`
const PaymentpageBottomLeftTopWrapperStyled = styled.div`
    padding: 2rem 1rem;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`
const PaymentpageBottomLeftInfoCardTopWrapperStyled = styled.div`
  border: 1px solid #5391F9;
  height: 100%;
`
const PaymentpageBottomLeftInfoCardTopTitleWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 1rem;
  width: 100%;
  height: 4rem;
  background-color: #5391F9;
`
const PaymentpageBottomLeftInfoCardTopTitleLeftWrapperStyled = styled.div``
const PaymentpageBottomLeftInfoCardTopTitleLeftStyled = styled.p``
const PaymentpageBottomLeftInfoCardTopTitleRightWrapperStyled = styled.div``
const PaymentpageBottomLeftInfoCardTopTitleRightImageStyled = styled.img`
  width: 3rem;
  margin: 0 .2rem;
`
const PaymentpageBottomLeftInfoCardBottomWrapperStyled = styled.div`
    padding: 1rem;
`
const PaymentContainerStyled = styled.div`
  display: grid;
  place-items: center;
  background-color: rgb(255, 255, 255);
  height: 65vh;
  margin: 20px;
`
const PaymentFormStyled = styled.form`
  width: 22%;
  height: 100%;
`
const PaymentInputWrapStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`
const PaymentInputStyled = styled.div`
  padding: 10px 30px;
  padding-right: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.267);
  border-radius: 4px;
  outline: none;
`
const PaymentPolicyStyled = styled.p`
    font-size: .9rem;
    margin: 1rem 0;
`
const PaymentEmailAddressWrapperStyled = styled.div`
    background-color: #c5c5c5;
    padding: 1rem;
`
const PaymentEmailAddressStyled = styled.p`
`
const PaymentSeccondStep = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const isAutheticated = useSelector(selectIsAutheticated);
  const selectBookingInfoData = useSelector(selectBookingInfo);
  const pathName = process.env.REACT_APP_BACK_END_PUBLIC_URL;
  const usereData = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);
  const paymentData = selectBookingInfoData.priceTotal;
  const user = usereData.user;
  const { data, ...bookingInfo } = selectBookingInfoData;
  const order = {
    orderInfo,
    bookingInfo
    }
  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;
    toast.warning("Vui lòng kiểm tra mail xác nhận!");

    try {
      const { data } = await customerApi.customerProcessPayment({amount: paymentData});

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: orderInfo.userName,
            email: orderInfo.userEmail
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        toast.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(customerConfirmOrder(order));
        } else {
          toast.error("Xảy ra lỗi khi thực hiện thanh toán!");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      toast.error(error.response.data.message);
    }
  };

  return (
    <PaymentpageContainerStyled>
        <PaymentpageHeaderContainerStyled>
            <PaymentpageHeaderWrapperStyled>
            <Link to="/" style={{textDecoration: "none", color: "#000"}}>
                <HeaderLogoStyled>Vluxstay</HeaderLogoStyled>
                </Link>
                <PaymentpageHeaderStepWrapperStyled>
                    <PaymentStepperProvider activeStep={1} />
                </PaymentpageHeaderStepWrapperStyled>
            </PaymentpageHeaderWrapperStyled>
        </PaymentpageHeaderContainerStyled>
        <PaymentpageBottomContainerStyled>
            <PaymentpageBottomWrapperStyled>
                <PaymentpageBottomLeftWrapperStyled onSubmit={(e) => submitHandler(e)}>
                  <PaymentpageBottomLeftTopWrapperStyled>
                    <PaymentpageBottomLeftInfoCardTopWrapperStyled>
                      <PaymentpageBottomLeftInfoCardTopTitleWrapperStyled>
                        <PaymentpageBottomLeftInfoCardTopTitleLeftWrapperStyled>
                          <PaymentpageBottomLeftInfoCardTopTitleLeftStyled>THẺ TÍN DỤNG/GHI NỢ</PaymentpageBottomLeftInfoCardTopTitleLeftStyled>
                        </PaymentpageBottomLeftInfoCardTopTitleLeftWrapperStyled>
                        <PaymentpageBottomLeftInfoCardTopTitleRightWrapperStyled>
                          <PaymentpageBottomLeftInfoCardTopTitleRightImageStyled  src={ic_visa}/>
                          <PaymentpageBottomLeftInfoCardTopTitleRightImageStyled  src={ic_jcb}/>
                          <PaymentpageBottomLeftInfoCardTopTitleRightImageStyled  src={ic_americanexpress}/>
                          <PaymentpageBottomLeftInfoCardTopTitleRightImageStyled  src={ic_master}/>
                        </PaymentpageBottomLeftInfoCardTopTitleRightWrapperStyled>
                      </PaymentpageBottomLeftInfoCardTopTitleWrapperStyled>
                    <PaymentpageBottomLeftInfoCardBottomWrapperStyled>
                        <Typography 
                            style={{color: 'rgba(0, 0, 0, 0.753)',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.13)',
                            padding: '10px 0',
                            textAlign: 'center',
                            width: '100%',
                            margin: 'auto',
                            fontSize: '26px'}}
                        >Thông tin thẻ</Typography>
                        <PaymentInputWrapStyled>
                            <CreditCardIcon 
                            style={{position: 'absolute',
                            transform: 'translateX(2px)',
                            fontSize: '16px',
                            color: 'rgba(0, 0, 0, 0.623)',
                            margin: '0 6px'}}
                            />
                            <PaymentInputStyled>
                            <CardNumberElement />
                            </PaymentInputStyled>
                        </PaymentInputWrapStyled>
                        <PaymentInputWrapStyled>
                            <EventIcon 
                            style={{position: 'absolute',
                            transform: 'translateX(2px)',
                            fontSize: '16px',
                            color: 'rgba(0, 0, 0, 0.623)',
                            margin: '0 6px'}}
                            />
                            <PaymentInputStyled>
                            <CardExpiryElement />
                            </PaymentInputStyled>
                        </PaymentInputWrapStyled>
                        <PaymentInputWrapStyled>
                            <VpnKeyIcon 
                            style={{position: 'absolute',
                            transform: 'translateX(2px)',
                            fontSize: '16px',
                            color: 'rgba(0, 0, 0, 0.623)',
                            margin: '0 6px'}}            
                            />
                            <PaymentInputStyled>
                            <CardCvcElement />
                            </PaymentInputStyled>
                        </PaymentInputWrapStyled>
                    </PaymentpageBottomLeftInfoCardBottomWrapperStyled>
                    </PaymentpageBottomLeftInfoCardTopWrapperStyled>
                    <PaymentPolicyStyled>Thực hiện bước tiếp theo đồng nghĩa với việc bạn chấp nhận tuân theo <Link to="/">Điều khoản sử dụng</Link> và <Link to="/">Chính sách bảo mật.</Link></PaymentPolicyStyled>
                    <PaymentpageBottomLeftBottomButtonWrapperStyled>
                        <PaymentpageBottomLeftBottomButtonContentStyled ref={payBtn} type="submit">ĐẶT PHÒNG NGAY</PaymentpageBottomLeftBottomButtonContentStyled>
                    </PaymentpageBottomLeftBottomButtonWrapperStyled>
                  </PaymentpageBottomLeftTopWrapperStyled>
                  <PaymentEmailAddressWrapperStyled>
                    <PaymentEmailAddressStyled>Chúng tôi sẽ gữi mail xác nhận đến <b>{usereData?.user?.email}</b></PaymentEmailAddressStyled>
                  </PaymentEmailAddressWrapperStyled>
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
                </PaymentpageBottomRightWrapperStyled>
            </PaymentpageBottomWrapperStyled>
        </PaymentpageBottomContainerStyled>
    </PaymentpageContainerStyled>
  )
}

export default PaymentSeccondStep