import React from 'react';
import styled from 'styled-components';
import location_ec_pricing from '../../../assets/provider-ec-pricing.png';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import StepperEnterprise from '../../child/StepperEnterprise';
import { Link } from 'react-router-dom';
const EnterprisePriceSetUpContainerStyled = styled.div`
  width: 100%;
  height: 100%;
`
const EnterprisePriceSetUpWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProviderContentWrapperStyled = styled.div`
  width: 80rem;
  display: flex;
`
const EnterprisePriceHeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
const EnterprisePriceHeaderLeftWrapperStyled = styled.div``
const EnterprisePriceHeaderStyled = styled.h2``
const EnterprisePriceSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const EnterprisePriceHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const EnterprisePriceTopHeaderStyled = styled.h4`
font-size: 1.2rem;
margin: 1rem 0;
`
const EnterprisePriceTopSubHeaderStyled = styled.p`
font-size: .9rem;
font-weight: 300;
margin: 1rem 0;
`
const EnterprisePriceTopWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
  margin: 2rem 0;
`
const EnterprisePriceSetUpTopWrapperStyled = styled.div`
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
  margin: 2rem 0;
`
const EnterprisePriceBottomTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 600;
  margin: .8rem 0;
  padding: 0 1rem;
`
const EnterprisePriceBottomWrapperStyled = styled.div`
  padding: 0 1rem 1rem 1rem;
`
const EnterprisePriceBottomSubTitleStyled = styled.span`
  display: block;
  font-size: .9rem;
  font-weight: 300;
  margin: .8rem 0;
  padding: 0 1rem;
  margin-bottom: 1rem;
`
const EnterprisePriceBottomInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
`
const EnterprisePriceBottomInputStyled = styled.input`
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
const EnterprisePriceBottomInputPriceTitleWrapperStyled = styled.div``
const EnterprisePriceBottomInputPriceTitleStyled = styled.p`
  padding: .6rem;
  background-color: #f7f7f7;
  border: 1px solid #bec2c9;
  border-left: none;
`
const EnterprisePriceTopSubContentStyled = styled.p`
  font-size: .9rem;
  font-weight: 300;
  margin-bottom: 1rem;
`
const EnterprisePriceBottomCheckboxStyled = styled.input`
  cursor: pointer;
`
const EnterprisePriceBottomInputTitleStyled = styled.span`
  font-size: .9rem;
  font-weight: 600;
  margin-left: .4rem;
  padding: auto;
`
const EnterprisePriceBottomRadioStyled = styled.input`
  margin-bottom: auto;
  margin-top: .2rem;
`
const EnterprisePriceTopRadioContainerStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
  margin: 2rem 0;
`
const EnterprisePriceTopRadioWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`
const EnterprisePriceBottomRadioContentWrapperStyled = styled.div`
  margin-left: .4rem;
`
const EnterprisePriceBottomRadioContentStyled = styled.p`
  font-size: .9rem;
  font-weight: 600;
`
const EnterpriseInfoBottomContentSelectStyled = styled.select`
  width: 16rem;
  margin: 0 1rem 1rem 1rem;
  border: 1px solid #ccc;
  padding: .8rem;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const EnterpriseInfoBottomContentOptionStyled = styled.option``
const EnterpriseInfoTopContentBottomAreaWrapperStyled = styled.div`
  padding: 1rem;
`
const EnterpriseInfoTopContentBottomAreaInputStyled = styled.input`
  padding: .8rem .4rem;
  width: 10rem;
  border: 1px solid #ccc;
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`
const EnterpriseInfoTopContentBottomAreaTitleStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin-left: 1rem;
`
const EnterpriseInfoBottomContentWrapperStyled = styled.div`
  padding: 1rem;
`
const EnterpriseInfoBottomContentTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 600;
  margin-bottom: 1rem;
`
const EnterpriseInfoBottomContentSubTitleStyled = styled.span`
  font-size: .9rem;
  font-weight: 300;
`
const EnterpriseInfoBottomContentInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 0 .4rem;
  width: 8rem;
`
const EnterpriseInfoBottomContentInputStyled = styled.input`
  width: 4rem;
  padding: .8rem 1rem;
  border: none;
  outline: none;
  text-align: center;
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`
const ProviderDescRightWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  border-left: 1px solid #ccc;
  padding: 4rem;
`
const ProviderDescRightTopWrapperStyled = styled.div`
    height: 90%;
    width: 100%;
`
const EnterpriseInfoRightBottomWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
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
const EnterpriseRoomDetail = () => {
  return (
    <EnterprisePriceSetUpContainerStyled>
      <EnterprisePriceSetUpWrapperStyled>
        <ProviderContentWrapperStyled>
          <StepperEnterprise activeStep={3} />
          <ProviderDescRightWrapperStyled>
            <ProviderDescRightTopWrapperStyled>
              <EnterprisePriceHeaderWrapperStyled>
                <EnterprisePriceHeaderLeftWrapperStyled>
                  <EnterprisePriceHeaderStyled>Tất cả các tiện nghi và những vật dụng nhỏ bạn cung cấp.</EnterprisePriceHeaderStyled>
                  <EnterprisePriceSubHeaderStyled>Nhà bạn có sẵn những vật dụng và tiện nghi gì?</EnterprisePriceSubHeaderStyled>
                </EnterprisePriceHeaderLeftWrapperStyled>
                <EnterprisePriceHeaderRightImageStyled src={location_ec_pricing} />
              </EnterprisePriceHeaderWrapperStyled>
              <EnterprisePriceTopHeaderStyled>Chi tiết phòng ở</EnterprisePriceTopHeaderStyled>
              <EnterprisePriceTopSubHeaderStyled>Quý đối tác chỉ cần tạo một loại phòng ở giai đoạn này. Sau đó, có thể thêm các loại phòng thông qua mạng diện rộng của chúng tôi.</EnterprisePriceTopSubHeaderStyled>
              <EnterprisePriceSetUpTopWrapperStyled>
                <EnterprisePriceBottomTitleStyled>Tên phòng</EnterprisePriceBottomTitleStyled>
                <EnterpriseInfoBottomContentSelectStyled>
                  <EnterpriseInfoBottomContentOptionStyled>Phòng Đôi</EnterpriseInfoBottomContentOptionStyled>
                  <EnterpriseInfoBottomContentOptionStyled>Phòng Tiêu Chuẩn</EnterpriseInfoBottomContentOptionStyled>
                </EnterpriseInfoBottomContentSelectStyled>
                <EnterprisePriceBottomTitleStyled>Diện tích phòng</EnterprisePriceBottomTitleStyled>
                <EnterpriseInfoTopContentBottomAreaWrapperStyled>
                  <EnterpriseInfoTopContentBottomAreaInputStyled placeholder={0} type="number" min={0} required={true}/>
                  <EnterpriseInfoTopContentBottomAreaTitleStyled>mét vuông</EnterpriseInfoTopContentBottomAreaTitleStyled>
                </EnterpriseInfoTopContentBottomAreaWrapperStyled>
                <EnterpriseInfoBottomContentWrapperStyled>
                  <EnterpriseInfoBottomContentTitleStyled>Sức chứa</EnterpriseInfoBottomContentTitleStyled>
                  <EnterpriseInfoBottomContentSubTitleStyled>Số lượng người tối đa có thể ngủ thoải mái theo số lượng giường và sofa cung cấp.</EnterpriseInfoBottomContentSubTitleStyled>
                  <EnterpriseInfoBottomContentInputWrapperStyled>
                    <RemoveOutlinedIcon style={{cursor: 'pointer', }}/>
                    <EnterpriseInfoBottomContentInputStyled defaultValue={1} type="number" min={0}/>
                    <AddOutlinedIcon />
                  </EnterpriseInfoBottomContentInputWrapperStyled>
                </EnterpriseInfoBottomContentWrapperStyled>
                <EnterpriseInfoBottomContentWrapperStyled>
                  <EnterpriseInfoBottomContentTitleStyled>Phòng tắm</EnterpriseInfoBottomContentTitleStyled>
                  <EnterpriseInfoBottomContentSubTitleStyled>Chỉ đếm số lượng phòng tắm trong nơi ở của bạn, không phải phòng tắm chung trong toà nhà hoặc chung cư.</EnterpriseInfoBottomContentSubTitleStyled>
                  <EnterpriseInfoBottomContentInputWrapperStyled>
                    <RemoveOutlinedIcon style={{cursor: 'pointer', }}/>
                    <EnterpriseInfoBottomContentInputStyled defaultValue={1} type="number" min={0}/>
                    <AddOutlinedIcon />
                  </EnterpriseInfoBottomContentInputWrapperStyled>
                </EnterpriseInfoBottomContentWrapperStyled>
              </EnterprisePriceSetUpTopWrapperStyled>
              <EnterprisePriceTopHeaderStyled>Giá mỗi đêm</EnterprisePriceTopHeaderStyled>
              <EnterprisePriceTopSubHeaderStyled>Vui lòng nhập giá mỗi đêm của quý đối tác cho chỗ nghỉ này. Nếu quý đối tác đang dùng người quản lý kênh thì chúng tôi sẽ đồng bộ các giá này giữa các nền tảng một khi đã khớp giá.</EnterprisePriceTopSubHeaderStyled>
              <EnterprisePriceSetUpTopWrapperStyled>
                <EnterprisePriceBottomTitleStyled>Giá gốc cho Phòng Đôi</EnterprisePriceBottomTitleStyled>
                <EnterprisePriceBottomTitleStyled>Giá tối thiểu mỗi đêm là bao nhiêu?</EnterprisePriceBottomTitleStyled>
                <EnterprisePriceBottomInputWrapperStyled>
                  <EnterprisePriceBottomInputStyled type="number" min={0} placeholder="0"/>
                  <EnterprisePriceBottomInputPriceTitleWrapperStyled>
                    <EnterprisePriceBottomInputPriceTitleStyled>VND</EnterprisePriceBottomInputPriceTitleStyled>
                  </EnterprisePriceBottomInputPriceTitleWrapperStyled>
                </EnterprisePriceBottomInputWrapperStyled>
              <EnterprisePriceBottomTitleStyled>Giá gốc cho Phòng Đôi + bữa sáng</EnterprisePriceBottomTitleStyled>
              <EnterprisePriceBottomSubTitleStyled>Hãy chọn phương án bên dưới nếu phòng của quý đối tác đưa ra giá bữa sáng ngoài giá gốc tiêu chuẩn.</EnterprisePriceBottomSubTitleStyled>
              <EnterprisePriceBottomWrapperStyled>
                <EnterprisePriceBottomCheckboxStyled type="checkbox"/>
                <EnterprisePriceBottomInputTitleStyled>Đúng, phòng của tôi cũng cung cấp bữa sáng</EnterprisePriceBottomInputTitleStyled>
              </EnterprisePriceBottomWrapperStyled>
              </EnterprisePriceSetUpTopWrapperStyled>
              <EnterprisePriceTopWrapperStyled>
                <EnterprisePriceTopSubContentStyled>Dành cho khách một sự ưu đãi để có các đơn đặt phòng và bài đánh giá nhanh hơn.</EnterprisePriceTopSubContentStyled>
                <EnterprisePriceBottomCheckboxStyled type="checkbox"/>
                <EnterprisePriceBottomInputTitleStyled>Giảm giá 33% cho 3 đơn đặt phòng đầu tiên của quý đối tác.</EnterprisePriceBottomInputTitleStyled>
              </EnterprisePriceTopWrapperStyled>
              <EnterprisePriceTopHeaderStyled>Các ngày bị khóa</EnterprisePriceTopHeaderStyled>
              <EnterprisePriceTopRadioContainerStyled>
                <EnterprisePriceTopRadioWrapperStyled>
                  <EnterprisePriceBottomRadioStyled type="radio"/>
                  <EnterprisePriceBottomRadioContentWrapperStyled>
                    <EnterprisePriceBottomRadioContentStyled>Có thể đặt thuê căn của tôi trong 30 ngày tới</EnterprisePriceBottomRadioContentStyled>
                  </EnterprisePriceBottomRadioContentWrapperStyled>
                </EnterprisePriceTopRadioWrapperStyled>
                <EnterprisePriceTopRadioWrapperStyled>
                  <EnterprisePriceBottomRadioStyled type="radio"/>
                  <EnterprisePriceBottomRadioContentWrapperStyled>
                    <EnterprisePriceBottomRadioContentStyled>Tôi sẽ thêm lượng phòng trống sau</EnterprisePriceBottomRadioContentStyled>
                  </EnterprisePriceBottomRadioContentWrapperStyled>
                </EnterprisePriceTopRadioWrapperStyled>
              </EnterprisePriceTopRadioContainerStyled>
            </ProviderDescRightTopWrapperStyled>
            <EnterpriseInfoRightBottomWrapperStyled>
              <Link to="/enterprise/service">
                <EnterpriseInfoRightBottomBackButtonStyled>TRỞ LẠI</EnterpriseInfoRightBottomBackButtonStyled>
              </Link>
              <Link to="/enterprise/image">
                <EnterpriseInfoRightBottomNextButtonStyled>TIẾP THEO</EnterpriseInfoRightBottomNextButtonStyled>
              </Link>
            </EnterpriseInfoRightBottomWrapperStyled>
          </ProviderDescRightWrapperStyled>
        </ProviderContentWrapperStyled>
      </EnterprisePriceSetUpWrapperStyled>
    </EnterprisePriceSetUpContainerStyled>
  )
}

export default EnterpriseRoomDetail