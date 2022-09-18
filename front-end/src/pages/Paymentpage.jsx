import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import img_sub_detail_6 from '../assets/img_sub_detail_6.jpeg';
import Rating from '@mui/material/Rating';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import PaymentFristStep from '../components/layout/Payment/PaymentFristStep';
import PaymentSeccondStep from '../components/layout/Payment/PaymentSeccondStep';
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
    width: 50%;
    margin-left: 14rem;
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
const steps = ['Thông tin khách hàng', 'Chi tiết thanh toán', 'Đã xác nhận đặt phòng'];
function getStepContent(step) {
    switch(step){
        case 0:
            return <PaymentFristStep />;
        case 1:
            return <PaymentSeccondStep />;
        case 2:
            return "2";
        default:
            return "unknow step"; 
    }
}
const Paymentpage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <PaymentpageContainerStyled>
        <PaymentpageHeaderContainerStyled>
            <PaymentpageHeaderWrapperStyled>
                <HeaderLogoStyled>Looking</HeaderLogoStyled>
                <PaymentpageHeaderStepWrapperStyled>
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                            const stepProps = {};
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            );
                            })}
                        </Stepper>
                    </Box>
                </PaymentpageHeaderStepWrapperStyled>
            </PaymentpageHeaderWrapperStyled>
        </PaymentpageHeaderContainerStyled>
        <PaymentpageBottomContainerStyled>
            <PaymentpageBottomWrapperStyled>
                {getStepContent(activeStep)}
                <PaymentpageBottomRightWrapperStyled>
                    <PaymentpageBottomRightTopWrapperStyled>
                        <PaymentpageBottomRightTopLeftImageWrapperStyled>
                            <PaymentpageBottomRightTopLeftImageStyled src={img_sub_detail_6} />
                        </PaymentpageBottomRightTopLeftImageWrapperStyled>
                        <PaymentpageBottomRightTopRightInfoWrapperStyled>
                            <PaymentpageBottomRightTopRightInfoTitleStyled>Thavorn Palm Beach Resort Phuket (SHA Plus+)</PaymentpageBottomRightTopRightInfoTitleStyled>
                            <Rating name="size-small" value={5} size="small" readOnly/>
                            <PaymentpageBottomRightTopRightInfoSubContentStyled>311 Patak Road, Karon Beach, Amphur Muang, Karon, Phuket, Phuket, Thái Lan, 83100</PaymentpageBottomRightTopRightInfoSubContentStyled>
                        </PaymentpageBottomRightTopRightInfoWrapperStyled>
                    </PaymentpageBottomRightTopWrapperStyled>
                    <PaymentpageBottomRightMiddleWrapperStyled>
                        <PaymentpageBottomRightMiddleDateStyled>20 tháng 9 2022 - 23 tháng 9 2022</PaymentpageBottomRightMiddleDateStyled>
                        <PaymentpageBottomRightMiddleTitleStyled>1 x Deluxe Terrace Pool View</PaymentpageBottomRightMiddleTitleStyled>
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
                                <PaymentpageBottomRightMiddleContentImageStyled src={img_sub_detail_6} />
                            </PaymentpageBottomRightMiddleContentImageWrapperStyled>
                            <PaymentpageBottomRightMiddleAdvancedContainerStyled>
                                <PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                    <PermIdentityOutlinedIcon />
                                    <PaymentpageBottomRightMiddleAdvancedContentStyled>1 phòng, 2 người lớn</PaymentpageBottomRightMiddleAdvancedContentStyled>
                                </PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                <PaymentpageBottomRightMiddleAdvancedWrapperStyled>
                                    <Diversity3OutlinedIcon />
                                    <PaymentpageBottomRightMiddleAdvancedContentStyled>Tối đa 2 người lớn, 1 Trẻ em (0-12 tuổi)</PaymentpageBottomRightMiddleAdvancedContentStyled>
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
                                <PaymentpageBottomRightBottomUpContentLeftStyled>Giá gốc (1 phòng x 3 đêm)</PaymentpageBottomRightBottomUpContentLeftStyled>
                                <PaymentpageBottomRightBottomUpContentRightStyled className='cross'>7.850.001</PaymentpageBottomRightBottomUpContentRightStyled>
                            </PaymentpageBottomRightBottomUpContentWrapperStyled>
                            <PaymentpageBottomRightBottomUpContentWrapperStyled>
                                <PaymentpageBottomRightBottomUpContentLeftStyled>Giá phòng (1 phòng x 3 đêm)</PaymentpageBottomRightBottomUpContentLeftStyled>
                                <PaymentpageBottomRightBottomUpContentRightStyled>1.962.498 ₫</PaymentpageBottomRightBottomUpContentRightStyled>
                            </PaymentpageBottomRightBottomUpContentWrapperStyled>
                            <PaymentpageBottomRightBottomUpContentWrapperStyled>
                                <PaymentpageBottomRightBottomUpContentLeftStyled>Phí đặt trước</PaymentpageBottomRightBottomUpContentLeftStyled>
                                <PaymentpageBottomRightBottomUpContentRightStyled style={{color: 'rgb(62, 108, 234)'}}>MIỄN PHÍ</PaymentpageBottomRightBottomUpContentRightStyled>
                            </PaymentpageBottomRightBottomUpContentWrapperStyled>
                        </PaymentpageBottomRightBottomUpWrapperStyled>
                        <PaymentpageBottomRightBottomDownWrapperStyled>
                            <PaymentpageBottomRightBottomDownContentWrapperStyled>
                                <PaymentpageBottomRightBottomDownContentLeftStyled>Giá tiền</PaymentpageBottomRightBottomDownContentLeftStyled>
                                <PaymentpageBottomRightBottomDownContentLeftStyled>2.331.450 ₫</PaymentpageBottomRightBottomDownContentLeftStyled>
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
    </PaymentpageContainerStyled>
  )
}

export default Paymentpage