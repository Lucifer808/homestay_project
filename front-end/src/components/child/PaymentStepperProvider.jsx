import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styled from 'styled-components';
const StepperProviderContainerStyled = styled.div`
  padding: 2rem 0;
`
const StepperProviderWrapperStyled = styled.div`
  width: 100%;
`
const steps = ['Thông tin khách hàng', 'Chi tiết thanh toán', 'Đã xác nhận đơn đặt phòng'];
const StepperProvider = ({activeStep}) => {
  return (
    <StepperProviderContainerStyled>
        <StepperProviderWrapperStyled>
            <Box sx={{ width: '100%', textAlign: 'center' }} >
                <Stepper activeStep={activeStep} orientation="horizontal">
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