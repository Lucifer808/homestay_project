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
const ProviderLocationBottomWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
  margin-top: 1rem;
`
const ProviderLocationBottomTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 600;
  margin: .8rem 0;
`
const ProviderLocationBottomInputStyled = styled.input`
  width: 60%;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const ProviderLocationBottomInputHalfLocationContainerStyled = styled.div`
  width: 60%;
`
const ProviderLocationBottomInputHalfContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ProviderLocationBottomInputHalfWrapperStyled = styled.div``
const ProviderLocationBottomSelectHalfStyled = styled.select`
  width: 15rem;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }

`
const ProviderLocationBottomOptionHalfStyled = styled.option``
const ProviderLocationBottomZipInputHalfStyled = styled.input`
  width: 15rem;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
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
        <ProviderLocationTopHeaderStyled>Vị trí</ProviderLocationTopHeaderStyled>
        <ProviderLocationTopSubHeaderStyled>Đây có phải là vị trí chính xác của chỗ nghỉ không? Nếu không thì hãy kéo cái ghim đến vị trí chính xác.</ProviderLocationTopSubHeaderStyled>
      </ProviderLocationWrapperStyled>
      <ProviderLocationBottomWrapperStyled>
        <ProviderLocationBottomTitleStyled>Địa chỉ</ProviderLocationBottomTitleStyled>
        <ProviderLocationBottomInputStyled placeholder='Điền địa chỉ ở đây'/>
        <ProviderLocationBottomTitleStyled>Tên tòa nhà, tầng và căn hộ (không bắt buộc)</ProviderLocationBottomTitleStyled>
        <ProviderLocationBottomInputStyled placeholder='Điền ở đây'/>
        <ProviderLocationBottomInputHalfLocationContainerStyled>
          <ProviderLocationBottomInputHalfContainerStyled>
            <ProviderLocationBottomInputHalfWrapperStyled>
              <ProviderLocationBottomTitleStyled>Quốc gia</ProviderLocationBottomTitleStyled>
              <ProviderLocationBottomSelectHalfStyled />
            </ProviderLocationBottomInputHalfWrapperStyled>
            <ProviderLocationBottomInputHalfWrapperStyled>
              <ProviderLocationBottomTitleStyled>Tiểu bang / Tỉnh</ProviderLocationBottomTitleStyled>
              <ProviderLocationBottomSelectHalfStyled />
            </ProviderLocationBottomInputHalfWrapperStyled>
          </ProviderLocationBottomInputHalfContainerStyled>
          <ProviderLocationBottomInputHalfContainerStyled>
            <ProviderLocationBottomInputHalfWrapperStyled>
              <ProviderLocationBottomTitleStyled>Thành phố</ProviderLocationBottomTitleStyled>
              <ProviderLocationBottomSelectHalfStyled />
            </ProviderLocationBottomInputHalfWrapperStyled>
            <ProviderLocationBottomInputHalfWrapperStyled>
              <ProviderLocationBottomTitleStyled>Mã bưu điện (không bắt buộc)</ProviderLocationBottomTitleStyled>
              <ProviderLocationBottomZipInputHalfStyled />
            </ProviderLocationBottomInputHalfWrapperStyled>
          </ProviderLocationBottomInputHalfContainerStyled>
        </ProviderLocationBottomInputHalfLocationContainerStyled>
      </ProviderLocationBottomWrapperStyled>
    </ProviderLocationContainerStyled>
  )
}

export default ProviderLocation