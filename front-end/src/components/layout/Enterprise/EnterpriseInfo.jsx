import React, { useState } from 'react';
import styled from 'styled-components';
import Enterprise_ec_basics from '../../../assets/provider-ec-basics.png';
import Rating from '@mui/material/Rating';
import StepperEnterprise from '../../child/StepperEnterprise';
import { Link } from 'react-router-dom';
const EnterpriseInfoContainerStyled = styled.div`
  height: 100%;
  width: 100%;
`
const EnterpriseInfoWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProviderContentWrapperStyled = styled.div`
  width: 80rem;
  display: flex;
`
const EnterpriseInfoHeaderWrapperStyled = styled.div`
  display: flex;
`
const EnterpriseInfoHeaderLeftWrapperStyled = styled.div``
const EnterpriseInfoHeaderStyled = styled.h2``
const EnterpriseInfoSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const EnterpriseInfoHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const EnterpriseDescTopHeaderStyled = styled.h4`
  font-size: 1.2rem;
  margin-top: 1rem;
`
const EnterpriseDescTopSubHeaderStyled = styled.p`
  font-size: .9rem;
  font-weight: 300;
  margin: 1rem 0;
`
const EnterpriseDescTopWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
`
const EnterpriseDescTopTextAreaStyled = styled.input`
  width: 100%;
  height: auto;
  padding: .8rem .4rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
  &::placeholder{
    color: #999;
  }
`
const EnterpriseBottomTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 600;
  margin: .8rem .4rem;
`
const EnterpriseBottomChoiceContainerStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
`
const EnterpriseBottomChoiceWrapperStyled = styled.div`
  display: flex;
  border: 1px solid #ccc;
  margin: .4rem;
  width: 30%;
  padding: 1rem;
  margin-bottom: 1rem;
`
const EnterpriseBottomChoiceStyled = styled.input`
  margin-bottom: auto;
  margin-top: .2rem;
  cursor: pointer;
`
const EnterpriseBottomChoiceTitleWrapperStyled = styled.div`
  margin-left: 1rem;
`
const EnterpriseBottomChoiceTitleStyled = styled.p`
  font-weight: 600;
`
const EnterpriseBottomChoiceSubTitleStyled = styled.span`
  font-size: .9rem;
  font-weight: 300;
`
const EnterpriseBottomChoiceMoreTitleWrapperStyled = styled.div`
  display: block;
  cursor: pointer;
`
const EnterpriseBottomChoiceMoreTitleStyled = styled.p`
  color: #1174a6;
  margin-left: .4rem;
`
const EnterpriseInfoTopHeaderStyled = styled.h4`
  font-size: 1.2rem;
  margin: 1rem 0;
`
const EnterpriseTopSubHeaderStyled = styled.p`
  font-size: .9rem;
  font-weight: 300;
  margin-bottom: 1rem;
`
const EnterpriseInfoTopWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
`
const EnterpriseInfoTopTextAreaStyled = styled.textarea`
  width: 100%;
  height: auto;
  padding: .8rem .4rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
  &::placeholder{
    color: #999;
  }
`
const EnterpriseInfoTopPolicyWrapperStyled = styled.div`
  display: flex;
  margin: 1rem 0;
`
const EnterpriseInfoTopPolicyChoiceStyled = styled.input`
  margin-bottom: auto;
  margin-top: .2rem;
`
const EnterpriseInfoDistanceBottomTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 600;
  margin: .8rem 0;
`
const EnterpriseInfoDistanceBottomInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const EnterpriseInfoDistanceBottomInputStyled = styled.input`
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
const EnterpriseInfoDistanceBottomInputPriceTitleWrapperStyled = styled.div``
const EnterpriseInfoDistanceBottomInputPriceTitleStyled = styled.p`
  padding: .6rem;
  background-color: #f7f7f7;
  border: 1px solid #bec2c9;
  border-left: none;
`
const EnterpriseInfoTimeCheckinBottomTitleWrapperStyled = styled.div``
const EnterpriseInfoTimeCheckinBottomTitleStyled = styled.span`
  margin-right: 1rem;
`
const EnterpriseInfoTimeCheckinBottomChoiceStyled = styled.select`
  padding: .6rem;
  width: 10rem;
  margin-right: 1rem;
  border: 1px solid #ccc;
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
const ProviderDescRightBottomWrapperStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* width: 100%; */
  margin: 4rem 0;
`
const ProviderDescRightBottomNextButtonStyled = styled.button`
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
  &:hover{
      color: #fff;
      background-color: rgb(11, 84, 120);
  }
`
const EnterpriseInfo = () => {
  const [more, setMore] = useState(false);
  const ratingOptions = {
    value: 5,
    size: 'large'
  }
  return (
    <EnterpriseInfoContainerStyled>
      <EnterpriseInfoWrapperStyled>
        <ProviderContentWrapperStyled>
          <StepperEnterprise activeStep={0}/>
          <ProviderDescRightWrapperStyled>
            <ProviderDescRightTopWrapperStyled>
              <EnterpriseInfoHeaderWrapperStyled>
                <EnterpriseInfoHeaderLeftWrapperStyled>
                  <EnterpriseInfoHeaderStyled>Giúp bạn tiếp cận đối tượng khách hàng phù hợp nhất.</EnterpriseInfoHeaderStyled>
                  <EnterpriseInfoSubHeaderStyled>Vui lòng cung cấp mọi thông tin được yêu cầu trừ khi có đánh dấu không bắt buộc.</EnterpriseInfoSubHeaderStyled>
                </EnterpriseInfoHeaderLeftWrapperStyled>
                <EnterpriseInfoHeaderRightImageStyled src={Enterprise_ec_basics} />
              </EnterpriseInfoHeaderWrapperStyled>
              <EnterpriseDescTopHeaderStyled>Đặt tên cho nhà</EnterpriseDescTopHeaderStyled>
              <EnterpriseDescTopSubHeaderStyled>Hãy tận dụng, và làm cho nó nghe có vẻ hấp dẫn. Đừng lo lắng, chúng tôi sẽ tạo các ngôn ngữ khác bằng mẫu dịch chuẩn.</EnterpriseDescTopSubHeaderStyled>
              <EnterpriseDescTopWrapperStyled>
                <EnterpriseDescTopTextAreaStyled placeholder='Nhập tên chỗ nghỉ'/>
              </EnterpriseDescTopWrapperStyled>
              <EnterpriseDescTopHeaderStyled>Chọn loại hình chỗ nghỉ của quý đối tác</EnterpriseDescTopHeaderStyled>
              <EnterpriseDescTopSubHeaderStyled>Chọn một trong số các lựa chọn dưới đây:</EnterpriseDescTopSubHeaderStyled>
              <EnterpriseDescTopWrapperStyled>
                <EnterpriseBottomTitleStyled>Loại chỗ nghỉ</EnterpriseBottomTitleStyled>
                <EnterpriseBottomChoiceContainerStyled>
                  <EnterpriseBottomChoiceWrapperStyled>
                    <EnterpriseBottomChoiceStyled type="radio"/>
                    <EnterpriseBottomChoiceTitleWrapperStyled>
                      <EnterpriseBottomChoiceTitleStyled>Nhà khách Phòng ngủ & Ăn sáng</EnterpriseBottomChoiceTitleStyled>
                      <EnterpriseBottomChoiceSubTitleStyled>Nhà hoặc bất động sản riêng có chủ nhà và khách ở chung, với không gian sống có thể thuê riêng bên trong</EnterpriseBottomChoiceSubTitleStyled>
                    </EnterpriseBottomChoiceTitleWrapperStyled>
                  </EnterpriseBottomChoiceWrapperStyled>
                  <EnterpriseBottomChoiceWrapperStyled>
                    <EnterpriseBottomChoiceStyled type="radio"/>
                    <EnterpriseBottomChoiceTitleWrapperStyled>
                      <EnterpriseBottomChoiceTitleStyled>Nhà khách Phòng ngủ & Ăn sáng</EnterpriseBottomChoiceTitleStyled>
                      <EnterpriseBottomChoiceSubTitleStyled>Nhà hoặc bất động sản riêng có chủ nhà và khách ở chung, với không gian sống có thể thuê riêng bên trong</EnterpriseBottomChoiceSubTitleStyled>
                    </EnterpriseBottomChoiceTitleWrapperStyled>
                  </EnterpriseBottomChoiceWrapperStyled>
                  <EnterpriseBottomChoiceWrapperStyled>
                    <EnterpriseBottomChoiceStyled type="radio"/>
                    <EnterpriseBottomChoiceTitleWrapperStyled>
                      <EnterpriseBottomChoiceTitleStyled>Nhà khách Phòng ngủ & Ăn sáng</EnterpriseBottomChoiceTitleStyled>
                      <EnterpriseBottomChoiceSubTitleStyled>Nhà hoặc bất động sản riêng có chủ nhà và khách ở chung, với không gian sống có thể thuê riêng bên trong</EnterpriseBottomChoiceSubTitleStyled>
                    </EnterpriseBottomChoiceTitleWrapperStyled>
                  </EnterpriseBottomChoiceWrapperStyled>
                  <EnterpriseBottomChoiceWrapperStyled>
                    <EnterpriseBottomChoiceStyled type="radio"/>
                    <EnterpriseBottomChoiceTitleWrapperStyled>
                      <EnterpriseBottomChoiceTitleStyled>Nhà khách Phòng ngủ & Ăn sáng</EnterpriseBottomChoiceTitleStyled>
                      <EnterpriseBottomChoiceSubTitleStyled>Nhà hoặc bất động sản riêng có chủ nhà và khách ở chung, với không gian sống có thể thuê riêng bên trong</EnterpriseBottomChoiceSubTitleStyled>
                    </EnterpriseBottomChoiceTitleWrapperStyled>
                  </EnterpriseBottomChoiceWrapperStyled>
                  <EnterpriseBottomChoiceWrapperStyled>
                    <EnterpriseBottomChoiceStyled type="radio"/>
                    <EnterpriseBottomChoiceTitleWrapperStyled>
                      <EnterpriseBottomChoiceTitleStyled>Nhà khách Phòng ngủ & Ăn sáng</EnterpriseBottomChoiceTitleStyled>
                      <EnterpriseBottomChoiceSubTitleStyled>Nhà hoặc bất động sản riêng có chủ nhà và khách ở chung, với không gian sống có thể thuê riêng bên trong</EnterpriseBottomChoiceSubTitleStyled>
                    </EnterpriseBottomChoiceTitleWrapperStyled>
                  </EnterpriseBottomChoiceWrapperStyled>
                  <EnterpriseBottomChoiceWrapperStyled>
                    <EnterpriseBottomChoiceStyled type="radio"/>
                    <EnterpriseBottomChoiceTitleWrapperStyled>
                      <EnterpriseBottomChoiceTitleStyled>Nhà khách Phòng ngủ & Ăn sáng</EnterpriseBottomChoiceTitleStyled>
                      <EnterpriseBottomChoiceSubTitleStyled>Nhà hoặc bất động sản riêng có chủ nhà và khách ở chung, với không gian sống có thể thuê riêng bên trong</EnterpriseBottomChoiceSubTitleStyled>
                    </EnterpriseBottomChoiceTitleWrapperStyled>
                  </EnterpriseBottomChoiceWrapperStyled>
                  { more && (
                    <>
                      <EnterpriseBottomChoiceWrapperStyled>
                        <EnterpriseBottomChoiceStyled type="radio"/>
                        <EnterpriseBottomChoiceTitleWrapperStyled>
                          <EnterpriseBottomChoiceTitleStyled>Nhà khách Phòng ngủ & Ăn sáng</EnterpriseBottomChoiceTitleStyled>
                          <EnterpriseBottomChoiceSubTitleStyled>Nhà hoặc bất động sản riêng có chủ nhà và khách ở chung, với không gian sống có thể thuê riêng bên trong</EnterpriseBottomChoiceSubTitleStyled>
                        </EnterpriseBottomChoiceTitleWrapperStyled>
                      </EnterpriseBottomChoiceWrapperStyled>
                      <EnterpriseBottomChoiceWrapperStyled>
                        <EnterpriseBottomChoiceStyled type="radio"/>
                        <EnterpriseBottomChoiceTitleWrapperStyled>
                          <EnterpriseBottomChoiceTitleStyled>Nhà khách Phòng ngủ & Ăn sáng</EnterpriseBottomChoiceTitleStyled>
                          <EnterpriseBottomChoiceSubTitleStyled>Nhà hoặc bất động sản riêng có chủ nhà và khách ở chung, với không gian sống có thể thuê riêng bên trong</EnterpriseBottomChoiceSubTitleStyled>
                        </EnterpriseBottomChoiceTitleWrapperStyled>
                      </EnterpriseBottomChoiceWrapperStyled>
                      <EnterpriseBottomChoiceWrapperStyled>
                        <EnterpriseBottomChoiceStyled type="radio"/>
                        <EnterpriseBottomChoiceTitleWrapperStyled>
                          <EnterpriseBottomChoiceTitleStyled>Nhà khách Phòng ngủ & Ăn sáng</EnterpriseBottomChoiceTitleStyled>
                          <EnterpriseBottomChoiceSubTitleStyled>Nhà hoặc bất động sản riêng có chủ nhà và khách ở chung, với không gian sống có thể thuê riêng bên trong</EnterpriseBottomChoiceSubTitleStyled>
                        </EnterpriseBottomChoiceTitleWrapperStyled>
                      </EnterpriseBottomChoiceWrapperStyled>
                      <EnterpriseBottomChoiceWrapperStyled>
                        <EnterpriseBottomChoiceStyled type="radio"/>
                        <EnterpriseBottomChoiceTitleWrapperStyled>
                          <EnterpriseBottomChoiceTitleStyled>Nhà khách Phòng ngủ & Ăn sáng</EnterpriseBottomChoiceTitleStyled>
                          <EnterpriseBottomChoiceSubTitleStyled>Nhà hoặc bất động sản riêng có chủ nhà và khách ở chung, với không gian sống có thể thuê riêng bên trong</EnterpriseBottomChoiceSubTitleStyled>
                        </EnterpriseBottomChoiceTitleWrapperStyled>
                      </EnterpriseBottomChoiceWrapperStyled>
                      <EnterpriseBottomChoiceWrapperStyled>
                        <EnterpriseBottomChoiceStyled type="radio"/>
                        <EnterpriseBottomChoiceTitleWrapperStyled>
                          <EnterpriseBottomChoiceTitleStyled>Nhà khách Phòng ngủ & Ăn sáng</EnterpriseBottomChoiceTitleStyled>
                          <EnterpriseBottomChoiceSubTitleStyled>Nhà hoặc bất động sản riêng có chủ nhà và khách ở chung, với không gian sống có thể thuê riêng bên trong</EnterpriseBottomChoiceSubTitleStyled>
                        </EnterpriseBottomChoiceTitleWrapperStyled>
                      </EnterpriseBottomChoiceWrapperStyled>
                      <EnterpriseBottomChoiceWrapperStyled>
                        <EnterpriseBottomChoiceStyled type="radio"/>
                        <EnterpriseBottomChoiceTitleWrapperStyled>
                          <EnterpriseBottomChoiceTitleStyled>Nhà khách Phòng ngủ & Ăn sáng</EnterpriseBottomChoiceTitleStyled>
                          <EnterpriseBottomChoiceSubTitleStyled>Nhà hoặc bất động sản riêng có chủ nhà và khách ở chung, với không gian sống có thể thuê riêng bên trong</EnterpriseBottomChoiceSubTitleStyled>
                        </EnterpriseBottomChoiceTitleWrapperStyled>
                      </EnterpriseBottomChoiceWrapperStyled>
                      <EnterpriseBottomChoiceWrapperStyled>
                        <EnterpriseBottomChoiceStyled type="radio"/>
                        <EnterpriseBottomChoiceTitleWrapperStyled>
                          <EnterpriseBottomChoiceTitleStyled>Nhà khách Phòng ngủ & Ăn sáng</EnterpriseBottomChoiceTitleStyled>
                          <EnterpriseBottomChoiceSubTitleStyled>Nhà hoặc bất động sản riêng có chủ nhà và khách ở chung, với không gian sống có thể thuê riêng bên trong</EnterpriseBottomChoiceSubTitleStyled>
                        </EnterpriseBottomChoiceTitleWrapperStyled>
                      </EnterpriseBottomChoiceWrapperStyled>
                    </>
                  )}
                </EnterpriseBottomChoiceContainerStyled>
                <EnterpriseBottomChoiceMoreTitleWrapperStyled>
                  <EnterpriseBottomChoiceMoreTitleStyled onClick={() => setMore(!more)}>
                    XEM NHIỀU LỰA CHỌN HƠN
                  </EnterpriseBottomChoiceMoreTitleStyled>
                </EnterpriseBottomChoiceMoreTitleWrapperStyled>
              </EnterpriseDescTopWrapperStyled>
              <EnterpriseInfoTopHeaderStyled>Quy tắc của chỗ nghỉ (tùy chọn)</EnterpriseInfoTopHeaderStyled>
              <EnterpriseTopSubHeaderStyled>Báo trước cho du khách những quy định cụ thể trong nhà</EnterpriseTopSubHeaderStyled>
              <EnterpriseInfoTopWrapperStyled>
                <EnterpriseInfoTopTextAreaStyled rows={5} placeholder='Ví dụ:&#10;• Không tụ tập hay tổ chức tiệc tùng&#10;• Giữ yên lặng sau 11:00 PM&#10;• Không xả rác xuống đường ống'/>
              </EnterpriseInfoTopWrapperStyled>
              <EnterpriseInfoTopHeaderStyled>Chính sách hủy</EnterpriseInfoTopHeaderStyled>
              <EnterpriseInfoTopWrapperStyled>
                <EnterpriseInfoTopPolicyWrapperStyled>
                  <EnterpriseInfoTopPolicyChoiceStyled type="radio"/>
                  <EnterpriseBottomChoiceTitleWrapperStyled>
                    <EnterpriseBottomChoiceTitleStyled>Linh hoạt</EnterpriseBottomChoiceTitleStyled>
                    <EnterpriseBottomChoiceSubTitleStyled>Khách hàng hủy trước ngày nhận phòng 1 ngày sẽ được hoàn lại tiền 100%. Trong trường hợp khách không đến, bạn được nhận 100% giá tiền đặt phòng.</EnterpriseBottomChoiceSubTitleStyled>
                  </EnterpriseBottomChoiceTitleWrapperStyled>
                </EnterpriseInfoTopPolicyWrapperStyled>
                <EnterpriseInfoTopPolicyWrapperStyled>
                  <EnterpriseInfoTopPolicyChoiceStyled type="radio"/>
                  <EnterpriseBottomChoiceTitleWrapperStyled>
                    <EnterpriseBottomChoiceTitleStyled>Trung bình</EnterpriseBottomChoiceTitleStyled>
                    <EnterpriseBottomChoiceSubTitleStyled>Khách hàng hủy trước ngày nhận phòng 5 ngày sẽ được hoàn lại tiền 100%. Trong trường hợp khách không đến, bạn được nhận 100% giá tiền đặt phòng.</EnterpriseBottomChoiceSubTitleStyled>
                  </EnterpriseBottomChoiceTitleWrapperStyled>
                </EnterpriseInfoTopPolicyWrapperStyled>
                <EnterpriseInfoTopPolicyWrapperStyled>
                  <EnterpriseInfoTopPolicyChoiceStyled type="radio"/>
                  <EnterpriseBottomChoiceTitleWrapperStyled>
                    <EnterpriseBottomChoiceTitleStyled>Nghiêm ngặt</EnterpriseBottomChoiceTitleStyled>
                    <EnterpriseBottomChoiceSubTitleStyled>Khách hàng hủy trước ngày nhận phòng 7 ngày sẽ được hoàn lại tiền 50%. Trong trường hợp khách không đến, bạn được nhận 100% giá tiền đặt phòng.</EnterpriseBottomChoiceSubTitleStyled>
                  </EnterpriseBottomChoiceTitleWrapperStyled>
                </EnterpriseInfoTopPolicyWrapperStyled>
              </EnterpriseInfoTopWrapperStyled>
              <EnterpriseInfoTopHeaderStyled>Thông tin có ích</EnterpriseInfoTopHeaderStyled>
              <EnterpriseTopSubHeaderStyled>Những tiện nghi thiết yếu thường được du khách chú trọng khi đặt nhà riêng.</EnterpriseTopSubHeaderStyled>
              <EnterpriseInfoTopWrapperStyled>
                  <EnterpriseInfoDistanceBottomTitleStyled>Khoảng cách từ thành phố</EnterpriseInfoDistanceBottomTitleStyled>
                    <EnterpriseInfoDistanceBottomInputWrapperStyled>
                      <EnterpriseInfoDistanceBottomInputStyled type="number" min={0} placeholder="0"/>
                        <EnterpriseInfoDistanceBottomInputPriceTitleWrapperStyled>
                        <EnterpriseInfoDistanceBottomInputPriceTitleStyled>km</EnterpriseInfoDistanceBottomInputPriceTitleStyled>
                      </EnterpriseInfoDistanceBottomInputPriceTitleWrapperStyled>
                    </EnterpriseInfoDistanceBottomInputWrapperStyled>
                  <EnterpriseInfoDistanceBottomTitleStyled>Khoảng cách từ sân bay</EnterpriseInfoDistanceBottomTitleStyled>
                    <EnterpriseInfoDistanceBottomInputWrapperStyled>
                      <EnterpriseInfoDistanceBottomInputStyled type="number" min={0} placeholder="0"/>
                        <EnterpriseInfoDistanceBottomInputPriceTitleWrapperStyled>
                        <EnterpriseInfoDistanceBottomInputPriceTitleStyled>km</EnterpriseInfoDistanceBottomInputPriceTitleStyled>
                      </EnterpriseInfoDistanceBottomInputPriceTitleWrapperStyled>
                    </EnterpriseInfoDistanceBottomInputWrapperStyled>
              </EnterpriseInfoTopWrapperStyled>
              <EnterpriseInfoTopHeaderStyled>Thời gian Nhận phòng/ Trả phòng</EnterpriseInfoTopHeaderStyled>
              <EnterpriseInfoTopWrapperStyled>
                <EnterpriseInfoDistanceBottomTitleStyled>Khi nào khách hàng có thể nhận phòng?</EnterpriseInfoDistanceBottomTitleStyled>
                <EnterpriseInfoTimeCheckinBottomTitleWrapperStyled>
                    <EnterpriseInfoTimeCheckinBottomTitleStyled>Từ</EnterpriseInfoTimeCheckinBottomTitleStyled>
                    <EnterpriseInfoTimeCheckinBottomChoiceStyled />
                    <EnterpriseInfoTimeCheckinBottomTitleStyled>đến</EnterpriseInfoTimeCheckinBottomTitleStyled>
                    <EnterpriseInfoTimeCheckinBottomChoiceStyled />
                </EnterpriseInfoTimeCheckinBottomTitleWrapperStyled>
                <EnterpriseInfoDistanceBottomTitleStyled>Thời gian nào khách hàng sẽ phải trả phòng?</EnterpriseInfoDistanceBottomTitleStyled>
                <EnterpriseInfoTimeCheckinBottomChoiceStyled />
              </EnterpriseInfoTopWrapperStyled>
              <EnterpriseInfoTopHeaderStyled>Xếp hạng sao</EnterpriseInfoTopHeaderStyled>
              <EnterpriseTopSubHeaderStyled>Đánh giá để giúp khách hàng hình dung cụ thể hơn về nơi ở.</EnterpriseTopSubHeaderStyled>
              <EnterpriseInfoTopWrapperStyled>
                <Rating {...ratingOptions}/>
              </EnterpriseInfoTopWrapperStyled>
            </ProviderDescRightTopWrapperStyled>
            <ProviderDescRightBottomWrapperStyled>
              <Link to="/enterprise/location">
                <ProviderDescRightBottomNextButtonStyled >TIẾP THEO</ProviderDescRightBottomNextButtonStyled>
              </Link>
            </ProviderDescRightBottomWrapperStyled>
          </ProviderDescRightWrapperStyled>
        </ProviderContentWrapperStyled>
      </EnterpriseInfoWrapperStyled>
    </EnterpriseInfoContainerStyled>
  )
}

export default EnterpriseInfo