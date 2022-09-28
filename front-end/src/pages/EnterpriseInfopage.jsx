import React, { useState } from 'react'
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import flag1 from '../assets/flag-vn.png';
import EnterpriseInfo from '../components/layout/Enterprise/EnterpriseInfo';
import EnterpriseLocation from '../components/layout/Enterprise/EnterpriseLocation';
import EnterpriseService from '../components/layout/Enterprise/EnterpriseService';
import EnterpriseRoomDetail from '../components/layout/Enterprise/EnterpriseRoomDetail';
import EnterpriseImage from '../components/layout/Enterprise/EnterpriseImage';
import EnterpriseFile from '../components/layout/Enterprise/EnterpriseFile';
import EnterpriseSuccessSetUp from '../components/layout/Enterprise/EnterpriseSuccessSetUp';
const EnterpriseInfoContainerStyled = styled.div`
  height: 100%;
  width: 100%;
`
const EnterpriseInfoWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const EnterpriseInfoContentWrapperStyled = styled.div`
  width: 80rem;
  display: flex;
`
const EnterpriseInfoLeftWrapperStyled = styled.div`
  margin-right: 4rem;
  padding: 2rem 0;
`
const EnterpriseInfoRightWrapperStyled = styled.div`
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
const EnterpriseInfoSideStepperWrapperStyled = styled.div`
  width: 12rem;
`
const EnterpriseWelcomepageHeaderContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    background-color: #1174a6;
`
const EnterpriseWelcomepageHeaderWrapperStyled = styled.div`
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
const EnterpriseInfoRightTopWrapperStyled = styled.div`
    height: 90%;
    width: 100%;
`
const EnterpriseInfoRightBottomWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 4rem 0;
`
const EnterpriseInfoRightBottomBackButtonStyled = styled.button`
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
const EnterpriseInfoRightBottomNextButtonStyled = styled.button`
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
const steps = ['Thông tin cơ bản', 'Vị trí', 'Tiện nghi', 'Chi tiết phòng ở', 'Ảnh', 'Hồ sơ', 'Đăng'];
function getStepContent(step){
  switch(step){
    case 0:
      return <EnterpriseInfo />
    case 1:
      return <EnterpriseLocation />
    case 2:
      return <EnterpriseService />
    case 3:
      return <EnterpriseRoomDetail />
    case 4:
      return <EnterpriseImage />
    case 5:
      return <EnterpriseFile />
    case 6:
      return <EnterpriseSuccessSetUp />
    default:
        return "unknow step"
  }
}
const EnterpriseInfopage = () => {
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
    <EnterpriseInfoContainerStyled>
      <EnterpriseWelcomepageHeaderContainerStyled>
          <EnterpriseWelcomepageHeaderWrapperStyled>
              <HeaderLogoStyled>Looking</HeaderLogoStyled>
              <HeaderRightStyled>
                  <HeaderLanguageStyled src={flag1} />
              </HeaderRightStyled>
          </EnterpriseWelcomepageHeaderWrapperStyled>
      </EnterpriseWelcomepageHeaderContainerStyled>
      <EnterpriseInfoWrapperStyled>
        <EnterpriseInfoContentWrapperStyled>
          <EnterpriseInfoLeftWrapperStyled>
            <EnterpriseInfoSideStepperWrapperStyled>
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
            </EnterpriseInfoSideStepperWrapperStyled>
          </EnterpriseInfoLeftWrapperStyled>
          <EnterpriseInfoRightWrapperStyled>
              <EnterpriseInfoRightTopWrapperStyled>
                {getStepContent(activeStep)}
              </EnterpriseInfoRightTopWrapperStyled>
              <EnterpriseInfoRightBottomWrapperStyled>
                  {activeStep !==0 && (
                    <EnterpriseInfoRightBottomBackButtonStyled onClick={handleBack}>TRỞ LẠI</EnterpriseInfoRightBottomBackButtonStyled>
                  )}
                  {activeStep < 7 && (
                    <EnterpriseInfoRightBottomNextButtonStyled onClick={handleNext}>TIẾP THEO</EnterpriseInfoRightBottomNextButtonStyled>
                  )}
              </EnterpriseInfoRightBottomWrapperStyled>
          </EnterpriseInfoRightWrapperStyled>
        </EnterpriseInfoContentWrapperStyled>
      </EnterpriseInfoWrapperStyled>
    </EnterpriseInfoContainerStyled>
  )
}

export default EnterpriseInfopage