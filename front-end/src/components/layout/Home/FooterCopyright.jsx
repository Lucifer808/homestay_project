import React from 'react';
import styled from 'styled-components';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
const FooterCopyrightContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
`
const FooterCopyrightContentStyled = styled.span`
    margin-left: 1rem;
    color: #777;
`
const FooterCopyright = () => {
  return (
    <FooterCopyrightContainerStyled>
        <CopyrightOutlinedIcon sx={{color: "#777"}}/>
        <FooterCopyrightContentStyled>Bản quyền Nguyễn Long Duy </FooterCopyrightContentStyled>
    </FooterCopyrightContainerStyled>
  )
}

export default FooterCopyright