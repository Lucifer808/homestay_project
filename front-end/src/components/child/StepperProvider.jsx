import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styled from 'styled-components';
const StepperProviderContainerStyled = styled.div`
  margin-right: 4rem;
  padding: 2rem 0;
`
const StepperProviderWrapperStyled = styled.div`
  width: 12rem;
`
const steps = ['Thông tin cơ bản', 'Vị trí', 'Mô tả', 'Tiện nghi', 'Định giá', 'Ảnh', 'Hồ sơ', 'Đăng'];
const StepperProvider = ({activeStep}) => {
  return (
    <StepperProviderContainerStyled>
        <StepperProviderWrapperStyled>
            <Box sx={{ width: '100%', textAlign: 'center' }} >
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>
        </StepperProviderWrapperStyled>
    </StepperProviderContainerStyled>
  )
}

export default StepperProvider