import React from 'react';
import styled from 'styled-components';
import provider_ec_basics from '../../../assets/provider-ec-basics.png';
const ProviderInfoContainerStyled = styled.div`
  height: 100%;
  width: 100%;
`
const ProviderInfoWrapperStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`
const ProviderInfoHeaderWrapperStyled = styled.div`
  display: flex;
`
const ProviderInfoHeaderLeftWrapperStyled = styled.div``
const ProviderInfoHeaderStyled = styled.h2``
const ProviderInfoSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderInfoHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const ProviderInfoTopWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
`
const ProviderInfoTopHeaderStyled = styled.h4`
  font-size: 1.2rem;
  margin-bottom: .8rem;
`
const ProviderInfoTopContentTitleStyled = styled.p`
  font-weight: 500;
`
const ProviderInfoTopContentSubTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 300;
  margin: 1rem 0;
`
const ProviderInfoTopContentChoiceContainerStyled = styled.div`
  display: flex;
`
const ProviderInfoTopContentChoiceWrapperStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 6rem;
  height: 6rem;
  border: 1px solid #ccc;
  margin-right: 2rem;
  cursor: pointer;
  background-color: #fff;
  &:hover{
    color: #fff;
    background-color: #1174a6;
    border-color: #1174a6;
    outline: none;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 30%);
  }
`
const ProviderInfoTopContentChoiceTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 300;
`
const ProviderInfoTopContentBottomTitleStyled = styled.p`
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderInfoTopContentBottomAreaWrapperStyled = styled.div``
const ProviderInfoTopContentBottomAreaInputStyled = styled.input`
  padding: .8rem .4rem;
  width: 5rem;
  border: 1px solid #ccc;
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`
const ProviderInfoTopContentBottomAreaTitleStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin-left: 1rem;
`
const ProviderInfo = () => {
  return (
    <ProviderInfoContainerStyled>
      <ProviderInfoWrapperStyled>
        <ProviderInfoHeaderWrapperStyled>
          <ProviderInfoHeaderLeftWrapperStyled>
            <ProviderInfoHeaderStyled>Giúp bạn tiếp cận đối tượng khách hàng phù hợp nhất.</ProviderInfoHeaderStyled>
            <ProviderInfoSubHeaderStyled>Vui lòng cung cấp mọi thông tin được yêu cầu trừ khi có đánh dấu không bắt buộc.</ProviderInfoSubHeaderStyled>
          </ProviderInfoHeaderLeftWrapperStyled>
          <ProviderInfoHeaderRightImageStyled src={provider_ec_basics} />
        </ProviderInfoHeaderWrapperStyled>
        <ProviderInfoTopHeaderStyled>Cơ sở kinh doanh</ProviderInfoTopHeaderStyled>
        <ProviderInfoTopWrapperStyled>
          <ProviderInfoTopContentTitleStyled>Loại hình</ProviderInfoTopContentTitleStyled>
          <ProviderInfoTopContentSubTitleStyled>Chọn một loại chổ nghỉ</ProviderInfoTopContentSubTitleStyled>
          <ProviderInfoTopContentChoiceContainerStyled>
            <ProviderInfoTopContentChoiceWrapperStyled>
              <ProviderInfoTopContentChoiceTitleStyled>Toàn bộ căn hộ</ProviderInfoTopContentChoiceTitleStyled>
            </ProviderInfoTopContentChoiceWrapperStyled>
            <ProviderInfoTopContentChoiceWrapperStyled>
              <ProviderInfoTopContentChoiceTitleStyled>Toàn bộ nhà trệt</ProviderInfoTopContentChoiceTitleStyled>
            </ProviderInfoTopContentChoiceWrapperStyled>
            <ProviderInfoTopContentChoiceWrapperStyled>
              <ProviderInfoTopContentChoiceTitleStyled>Toàn bộ nhà riêng</ProviderInfoTopContentChoiceTitleStyled>
            </ProviderInfoTopContentChoiceWrapperStyled>
            <ProviderInfoTopContentChoiceWrapperStyled>
              <ProviderInfoTopContentChoiceTitleStyled>Biệt thự</ProviderInfoTopContentChoiceTitleStyled>
            </ProviderInfoTopContentChoiceWrapperStyled>
          </ProviderInfoTopContentChoiceContainerStyled>
          <ProviderInfoTopContentBottomTitleStyled>Quy mô chổ nghỉ</ProviderInfoTopContentBottomTitleStyled>
          <ProviderInfoTopContentBottomAreaWrapperStyled>
            <ProviderInfoTopContentBottomAreaInputStyled placeholder={0} type="number" min={0}/>
            <ProviderInfoTopContentBottomAreaTitleStyled>mét vuông</ProviderInfoTopContentBottomAreaTitleStyled>
          </ProviderInfoTopContentBottomAreaWrapperStyled>
        </ProviderInfoTopWrapperStyled>
      </ProviderInfoWrapperStyled>
    </ProviderInfoContainerStyled>
  )
}

export default ProviderInfo