import React from 'react';
import styled from 'styled-components';
import location_ec_pricing from '../../../assets/provider-ec-pricing.png';
const ProviderPriceSetUpContainerStyled = styled.div``
const ProviderPriceSetUpWrapperStyled = styled.div``
const ProviderPriceHeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProviderPriceHeaderLeftWrapperStyled = styled.div``
const ProviderPriceHeaderStyled = styled.h2``
const ProviderPriceSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderPriceHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const ProviderPriceTopHeaderStyled = styled.h4`
font-size: 1.2rem;
margin: 1rem 0;
`
const ProviderPriceTopSubHeaderStyled = styled.p`
font-size: .9rem;
font-weight: 300;
margin: 1rem 0;
`
const ProviderPriceTopWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
  margin: 2rem 0;
`
const ProviderPriceBottomTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 600;
  margin: .8rem 0;
`
const ProviderPriceBottomInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const ProviderPriceBottomInputStyled = styled.input`
  width: 30%;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`
const ProviderPriceBottomInputPriceTitleWrapperStyled = styled.div``
const ProviderPriceBottomInputPriceTitleStyled = styled.p`
  padding: .6rem;
  background-color: #f7f7f7;
  border: 1px solid #bec2c9;
  border-left: none;
`
const ProviderPriceTopSubContentStyled = styled.p`
  font-size: .9rem;
  font-weight: 300;
  margin: 1rem 0;
`
const ProviderPriceBottomCheckboxStyled = styled.input`
  cursor: pointer;
`
const ProviderPriceBottomInputTitleStyled = styled.span`
  font-size: .9rem;
  font-weight: 600;
  margin-left: .4rem;
  padding: auto;
`
const ProviderPriceBottomRadioStyled = styled.input`
  margin-bottom: auto;
  margin-top: .2rem;
`
const ProviderPriceTopRadioWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
  margin: 2rem 0;
`
const ProviderPriceBottomRadioContentWrapperStyled = styled.div`
  margin-left: .4rem;
`
const ProviderPriceBottomRadioContentStyled = styled.p``
const ProviderPriceBottomRadioSubContentStyled = styled.span`
  display: block;
  font-size: .9rem;
  font-weight: 300;
`
const ProviderPriceSetUp = () => {
  return (
    <ProviderPriceSetUpContainerStyled>
      <ProviderPriceSetUpWrapperStyled>
        <ProviderPriceHeaderWrapperStyled>
          <ProviderPriceHeaderLeftWrapperStyled>
            <ProviderPriceHeaderStyled>Tất cả các tiện nghi và những vật dụng nhỏ bạn cung cấp.</ProviderPriceHeaderStyled>
            <ProviderPriceSubHeaderStyled>Nhà bạn có sẵn những vật dụng và tiện nghi gì?</ProviderPriceSubHeaderStyled>
          </ProviderPriceHeaderLeftWrapperStyled>
          <ProviderPriceHeaderRightImageStyled src={location_ec_pricing} />
        </ProviderPriceHeaderWrapperStyled>
        <ProviderPriceTopHeaderStyled>Giá mỗi đêm</ProviderPriceTopHeaderStyled>
        <ProviderPriceTopSubHeaderStyled>Vui lòng nhập giá mỗi đêm của quý đối tác cho chỗ nghỉ này. Nếu quý đối tác đang dùng người quản lý kênh thì chúng tôi sẽ đồng bộ các giá này giữa các nền tảng một khi đã khớp giá.</ProviderPriceTopSubHeaderStyled>
        <ProviderPriceTopWrapperStyled>
          <ProviderPriceBottomTitleStyled>Giá tối thiểu mỗi đêm là bao nhiêu?</ProviderPriceBottomTitleStyled>
          <ProviderPriceBottomInputWrapperStyled>
            <ProviderPriceBottomInputStyled type="number" min={0} placeholder="0"/>
            <ProviderPriceBottomInputPriceTitleWrapperStyled>
              <ProviderPriceBottomInputPriceTitleStyled>VND</ProviderPriceBottomInputPriceTitleStyled>
            </ProviderPriceBottomInputPriceTitleWrapperStyled>
          </ProviderPriceBottomInputWrapperStyled>
        </ProviderPriceTopWrapperStyled>
        <ProviderPriceTopWrapperStyled>
          <ProviderPriceTopSubContentStyled>Dành cho khách một sự ưu đãi để có các đơn đặt phòng và bài đánh giá nhanh hơn.</ProviderPriceTopSubContentStyled>
          <ProviderPriceBottomCheckboxStyled type="checkbox"/>
          <ProviderPriceBottomInputTitleStyled>Giảm giá 33% cho 3 đơn đặt phòng đầu tiên của quý đối tác.</ProviderPriceBottomInputTitleStyled>
        </ProviderPriceTopWrapperStyled>
        <ProviderPriceTopHeaderStyled>Hình thức thanh toán</ProviderPriceTopHeaderStyled>
        <ProviderPriceTopSubHeaderStyled>Vui lòng chọn hình thức thanh toán. Các thông tin bổ sung sẽ được yêu cầu thêm sau khi đăng lên hệ thống. [Lưu ý quan trọng] Vì lý do an ninh, khoản thanh toán đầu tiên cho bạn sẽ là 30 ngày kể từ ngày trả phòng của đặt phòng đầu tiên. Đối với các đặt phòng kế tiếp, thanh toán sẽ được thực hiện 24 giờ sau ngày khách rời đi.</ProviderPriceTopSubHeaderStyled>
        <ProviderPriceTopRadioWrapperStyled>
          <ProviderPriceBottomRadioStyled type="radio"/>
          <ProviderPriceBottomRadioContentWrapperStyled>
            <ProviderPriceBottomRadioContentStyled>Tiền gửi trực tiếp vào ngân hàng</ProviderPriceBottomRadioContentStyled>
            <ProviderPriceBottomRadioSubContentStyled>Qua hệ thống thanh toán được bảo mật của chúng tôi, chúng tôi sẽ chuyển khoản trực tiếp vào tài khoản ngân hàng của bạn sau khi khách hàng đã trả phòng.</ProviderPriceBottomRadioSubContentStyled>
          </ProviderPriceBottomRadioContentWrapperStyled>
        </ProviderPriceTopRadioWrapperStyled>
      </ProviderPriceSetUpWrapperStyled>
    </ProviderPriceSetUpContainerStyled>
  )
}

export default ProviderPriceSetUp