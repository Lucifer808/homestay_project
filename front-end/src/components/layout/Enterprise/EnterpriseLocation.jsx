import React from 'react'
import styled from 'styled-components';
import Enterprise_ec_location from '../../../assets/provider-ec-location.png';
const EnterpriseLocationContainerStyled = styled.div``
const EnterpriseLocationWrapperStyled = styled.div``
const EnterpriseLocationHeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
const EnterpriseLocationHeaderLeftWrapperStyled = styled.div``
const EnterpriseLocationHeaderStyled = styled.h2``
const EnterpriseLocationSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const EnterpriseLocationHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const EnterpriseLocationTopHeaderStyled = styled.h4`
  font-size: 1.2rem;
  margin-top: 1rem;
`
const EnterpriseLocationTopSubHeaderStyled = styled.span`
  font-size: .9rem;
  font-weight: 300;
`
const EnterpriseLocationBottomWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
  margin-top: 1rem;
`
const EnterpriseLocationBottomTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 600;
  margin: .8rem 0;
`
const EnterpriseLocationBottomInputStyled = styled.input`
  width: 60%;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const EnterpriseLocationBottomInputHalfLocationContainerStyled = styled.div`
  width: 60%;
`
const EnterpriseLocationBottomInputHalfContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const EnterpriseLocationBottomInputHalfWrapperStyled = styled.div``
const EnterpriseLocationBottomSelectHalfStyled = styled.select`
  width: 15rem;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }

`
const EnterpriseLocationBottomOptionHalfStyled = styled.option``
const EnterpriseLocationBottomZipInputHalfStyled = styled.input`
  width: 15rem;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const EnterpriseLocation = () => {
  return (
    <EnterpriseLocationContainerStyled>
      <EnterpriseLocationWrapperStyled>
        <EnterpriseLocationHeaderWrapperStyled>
          <EnterpriseLocationHeaderLeftWrapperStyled>
            <EnterpriseLocationHeaderStyled>Xác định vị trí chỗ ở của bạn trên bản đồ.</EnterpriseLocationHeaderStyled>
            <EnterpriseLocationSubHeaderStyled>Khách hàng sẽ ở đâu?</EnterpriseLocationSubHeaderStyled>
          </EnterpriseLocationHeaderLeftWrapperStyled>
          <EnterpriseLocationHeaderRightImageStyled src={Enterprise_ec_location} />
        </EnterpriseLocationHeaderWrapperStyled>
        <EnterpriseLocationTopHeaderStyled>Vị trí</EnterpriseLocationTopHeaderStyled>
        <EnterpriseLocationTopSubHeaderStyled>Đây có phải là vị trí chính xác của chỗ nghỉ không? Nếu không thì hãy kéo cái ghim đến vị trí chính xác.</EnterpriseLocationTopSubHeaderStyled>
      </EnterpriseLocationWrapperStyled>
      <EnterpriseLocationBottomWrapperStyled>
        <EnterpriseLocationBottomTitleStyled>Địa chỉ</EnterpriseLocationBottomTitleStyled>
        <EnterpriseLocationBottomInputStyled placeholder='Điền địa chỉ ở đây'/>
        <EnterpriseLocationBottomTitleStyled>Tên tòa nhà, tầng và căn hộ (không bắt buộc)</EnterpriseLocationBottomTitleStyled>
        <EnterpriseLocationBottomInputStyled placeholder='Điền ở đây'/>
        <EnterpriseLocationBottomInputHalfLocationContainerStyled>
          <EnterpriseLocationBottomInputHalfContainerStyled>
            <EnterpriseLocationBottomInputHalfWrapperStyled>
              <EnterpriseLocationBottomTitleStyled>Quốc gia</EnterpriseLocationBottomTitleStyled>
              <EnterpriseLocationBottomSelectHalfStyled />
            </EnterpriseLocationBottomInputHalfWrapperStyled>
            <EnterpriseLocationBottomInputHalfWrapperStyled>
              <EnterpriseLocationBottomTitleStyled>Tiểu bang / Tỉnh</EnterpriseLocationBottomTitleStyled>
              <EnterpriseLocationBottomSelectHalfStyled />
            </EnterpriseLocationBottomInputHalfWrapperStyled>
          </EnterpriseLocationBottomInputHalfContainerStyled>
          <EnterpriseLocationBottomInputHalfContainerStyled>
            <EnterpriseLocationBottomInputHalfWrapperStyled>
              <EnterpriseLocationBottomTitleStyled>Thành phố</EnterpriseLocationBottomTitleStyled>
              <EnterpriseLocationBottomSelectHalfStyled />
            </EnterpriseLocationBottomInputHalfWrapperStyled>
            <EnterpriseLocationBottomInputHalfWrapperStyled>
              <EnterpriseLocationBottomTitleStyled>Mã bưu điện (không bắt buộc)</EnterpriseLocationBottomTitleStyled>
              <EnterpriseLocationBottomZipInputHalfStyled />
            </EnterpriseLocationBottomInputHalfWrapperStyled>
          </EnterpriseLocationBottomInputHalfContainerStyled>
        </EnterpriseLocationBottomInputHalfLocationContainerStyled>
      </EnterpriseLocationBottomWrapperStyled>
    </EnterpriseLocationContainerStyled>
  )
}

export default EnterpriseLocation