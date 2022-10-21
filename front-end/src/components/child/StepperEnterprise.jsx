import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styled from 'styled-components';
const StepperEnterpriseContainerStyled = styled.div`
  margin-right: 4rem;
  padding: 2rem 0;
`
const StepperEnterpriseWrapperStyled = styled.div`
  width: 12rem;
`
const steps = ['Thông tin cơ bản', 'Vị trí', 'Tiện nghi', 'Chi tiết phòng ở', 'Ảnh', 'Hồ sơ', 'Đăng'];
const StepperEnterprise = ({activeStep}) => {
  return (
    <StepperEnterpriseContainerStyled>
        <StepperEnterpriseWrapperStyled>
            <Box sx={{ width: '100%', textAlign: 'center' }} >
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>
        </StepperEnterpriseWrapperStyled>
    </StepperEnterpriseContainerStyled>
  )
}

export default StepperEnterprise