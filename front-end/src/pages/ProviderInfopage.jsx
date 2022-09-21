import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import flag1 from '../assets/flag-vn.png';
import ProviderInfo from '../components/layout/Provider/ProviderInfo';
import ProviderLocation from '../components/layout/Provider/ProviderLocation';
import ProviderDesc from '../components/layout/Provider/ProviderDesc';
import ProviderService from '../components/layout/Provider/ProviderService';
import ProviderPriceSetUp from '../components/layout/Provider/ProviderPriceSetUp';
import ProviderImage from '../components/layout/Provider/ProviderImage';
import ProviderFile from '../components/layout/Provider/ProviderFile';
import ProviderSuccessSetUp from '../components/layout/Provider/ProviderSuccessSetUp';
const ProviderInfoContainerStyled = styled.div`
  height: 100%;
  width: 100%;
`
const ProviderInfoWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProviderInfoContentWrapperStyled = styled.div`
  width: 80rem;
  display: flex;
`
const ProviderInfoLeftWrapperStyled = styled.div`
  margin-right: 4rem;
  padding: 2rem 0;
`
const ProviderInfoRightWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  border-left: 1px solid #ccc;
  padding: 4rem;
`
const ProviderInfoSideStepperWrapperStyled = styled.div`
  width: 12rem;
`
const ProviderWelcomepageHeaderContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    background-color: #1174a6;
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
    color: #fff;
`
const HeaderRightStyled = styled.div`
    display: flex;
`
const HeaderLanguageStyled = styled.img`
    margin: auto 1rem;
    width: 2rem;
    height: 1.4rem;
`
const ProviderInfoRightTopWrapperStyled = styled.div`
    height: 90%;
    width: 100%;
`
const ProviderInfoRightBottomWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 4rem 0;
`
const ProviderInfoRightBottomBackButtonStyled = styled.button`
  border: none;
  border-radius: .3rem;
  width: 10rem;
  font-size: .9rem;
  background-color: transparent;
  padding: .8rem .4rem;
  height: 100%;
  cursor: pointer;
  color: rgb(135, 179, 251);
  transition: all .1s linear;
  border: 1px solid rgb(135, 179, 251);
  &:hover{
      color: #fff;
      background-color: rgb(135, 179, 251);
  }
`
const ProviderInfoRightBottomNextButtonStyled = styled.button`
  background-color: #1174a6;
  border: none;
  border-radius: .3rem;
  width: 10rem;
  font-size: .9rem;
  padding: .8rem .4rem;
  height: 100%;
  cursor: pointer;
  color: #fff;
  transition: all .1s linear;
  border: 1px solid #1174a6;
  margin-left: auto;
  &:hover{
      color: #fff;
      background-color: rgb(11, 84, 120);
  }
`
const steps = ['Thông tin cơ bản', 'Vị trí', 'Mô tả', 'Tiện nghi', 'Định giá', 'Ảnh', 'Hồ sơ', 'Đăng'];
function getStepContent(step){
  switch(step){
    case 0:
      return <ProviderInfo />
    case 1:
      return <ProviderLocation />
    case 2:
      return <ProviderDesc />
    case 3:
      return <ProviderService />
    case 4:
      return <ProviderPriceSetUp />
    case 5:
      return <ProviderImage />
    case 6:
      return <ProviderFile />
    case 7:
      return <ProviderSuccessSetUp />
    default:
        return "unknow step"
  }
}
const ProviderInfopage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState({});
  const totalSteps = () => {
    return steps.length;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <ProviderInfoContainerStyled>
      <ProviderWelcomepageHeaderContainerStyled>
          <ProviderWelcomepageHeaderWrapperStyled>
              <HeaderLogoStyled>Looking</HeaderLogoStyled>
              <HeaderRightStyled>
                  <HeaderLanguageStyled src={flag1} />
              </HeaderRightStyled>
          </ProviderWelcomepageHeaderWrapperStyled>
      </ProviderWelcomepageHeaderContainerStyled>
      <ProviderInfoWrapperStyled>
        <ProviderInfoContentWrapperStyled>
          <ProviderInfoLeftWrapperStyled>
            <ProviderInfoSideStepperWrapperStyled>
              <Box sx={{ width: '100%', textAlign: 'center' }}>
                  <Stepper activeStep={activeStep} orientation="vertical">
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
            </ProviderInfoSideStepperWrapperStyled>
          </ProviderInfoLeftWrapperStyled>
          <ProviderInfoRightWrapperStyled>
              <ProviderInfoRightTopWrapperStyled>
                {getStepContent(activeStep)}
              </ProviderInfoRightTopWrapperStyled>
              <ProviderInfoRightBottomWrapperStyled>
                  {activeStep !==0 && (
                    <ProviderInfoRightBottomBackButtonStyled onClick={handleBack}>TRỞ LẠI</ProviderInfoRightBottomBackButtonStyled>
                  )}
                  {activeStep < 7 && (
                    <ProviderInfoRightBottomNextButtonStyled onClick={handleNext}>TIẾP THEO</ProviderInfoRightBottomNextButtonStyled>
                  )}
              </ProviderInfoRightBottomWrapperStyled>
          </ProviderInfoRightWrapperStyled>
        </ProviderInfoContentWrapperStyled>
      </ProviderInfoWrapperStyled>
    </ProviderInfoContainerStyled>
  )
}

export default ProviderInfopage