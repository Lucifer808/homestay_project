import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PaymentStepperProvider from '../../child/PaymentStepperProvider';
import {AiFillCheckCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { customerCreateNewOrder } from '../../../features/customerSlice';
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80vh;
`
const PaymentpageBottomTitleStyled = styled.p`
    margin: 2rem 0;
`
const PaymentpageBottomLeftBottomButtonWrapperStyled = styled.div`
    margin: 1rem 0;
    text-align: right;
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
const PaymentSuccess = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(customerCreateNewOrder())
    },[])
  return (
    <PaymentpageContainerStyled>
        <PaymentpageHeaderContainerStyled>
            <PaymentpageHeaderWrapperStyled>
                <HeaderLogoStyled>Looking</HeaderLogoStyled>
                <PaymentpageHeaderStepWrapperStyled>
                    <PaymentStepperProvider activeStep={2} />
                </PaymentpageHeaderStepWrapperStyled>
            </PaymentpageHeaderWrapperStyled>
        </PaymentpageHeaderContainerStyled>
        <PaymentpageBottomContainerStyled>
            <PaymentpageBottomWrapperStyled>
                <AiFillCheckCircle style={{fontSize: '10rem', color: "green"}} />
                <PaymentpageBottomTitleStyled>Đơn đặt phòng của quý khách hàng đã được ghi nhận. Vui lòng xác nhận thông qua email !</PaymentpageBottomTitleStyled>
                <Link to="/">
                    <PaymentpageBottomLeftBottomButtonWrapperStyled>
                        <PaymentpageBottomLeftBottomButtonContentStyled>QUAY VỀ TRANG CHỦ</PaymentpageBottomLeftBottomButtonContentStyled>
                    </PaymentpageBottomLeftBottomButtonWrapperStyled>
                </Link>
            </PaymentpageBottomWrapperStyled>
        </PaymentpageBottomContainerStyled>
    </PaymentpageContainerStyled>
  )
}

export default PaymentSuccess