import React from 'react';
import styled from 'styled-components';
import provider_ec_location from '../../../assets/provider-ec-location.png';
const ProviderLocationContainerStyled = styled.div``
const ProviderLocationWrapperStyled = styled.div``
const ProviderLocationHeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProviderLocationHeaderLeftWrapperStyled = styled.div``
const ProviderLocationHeaderStyled = styled.h2``
const ProviderLocationSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderLocationHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const ProviderLocationTopHeaderStyled = styled.h4`
  font-size: 1.2rem;
  margin-top: 1rem;
`
const ProviderLocationTopSubHeaderStyled = styled.span`
  font-size: .9rem;
  font-weight: 300;
`
const ProviderLocation = () => {
  return (
    <ProviderLocationContainerStyled>
      <ProviderLocationWrapperStyled>
        <ProviderLocationHeaderWrapperStyled>
          <ProviderLocationHeaderLeftWrapperStyled>
            <ProviderLocationHeaderStyled>Xác định vị trí chỗ ở của bạn trên bản đồ.</ProviderLocationHeaderStyled>
            <ProviderLocationSubHeaderStyled>Khách hàng sẽ ở đâu?</ProviderLocationSubHeaderStyled>
          </ProviderLocationHeaderLeftWrapperStyled>
          <ProviderLocationHeaderRightImageStyled src={provider_ec_location} />
        </ProviderLocationHeaderWrapperStyled>
        <ProviderLocationTopHeaderStyled>Cơ sở kinh doanh</ProviderLocationTopHeaderStyled>
        <ProviderLocationTopSubHeaderStyled>Đây có phải là vị trí chính xác của chỗ nghỉ không? Nếu không thì hãy kéo cái ghim đến vị trí chính xác.</ProviderLocationTopSubHeaderStyled>
      </ProviderLocationWrapperStyled>
    </ProviderLocationContainerStyled>
  )
}

export default ProviderLocation