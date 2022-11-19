import React, { useEffect } from 'react';
import styled from 'styled-components';
import provider_ec_desc from '../../../assets/provider-ec-description.png';
import Rating from '@mui/material/Rating';
import StepperProvider from '../../child/StepperProvider';
import { useSearchParams, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import{ createRegistraionDesc } from '../../../features/userSlice';
const ProviderDescContainerStyled = styled.div`
  height: 100%;
  width: 100%;
`
const ProviderDescWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProviderContentWrapperStyled = styled.div`
  width: 80rem;
  display: flex;
`
const ProviderDescHeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProviderDescHeaderLeftWrapperStyled = styled.div``
const ProviderDescHeaderStyled = styled.h2``
const ProviderDescSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderDescHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const ProviderDescTopHeaderStyled = styled.h4`
  font-size: 1.2rem;
  margin: 1rem 0;
`
const ProviderDescTopSubHeaderStyled = styled.p`
  font-size: .9rem;
  font-weight: 300;
  margin-bottom: 1rem;
`
const ProviderDescTopWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
`
const ProviderDescTopInputStyled = styled.input`
  width: 100%;
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
const ProviderDescTopTextAreaStyled = styled.textarea`
  width: 100%;
  height: auto;
  padding: .8rem .4rem;
  resize: none;
  border: ${props => props.ChangeBorder === true ? '1px solid rgb(225, 45, 45)' : '1px solid #ccc' } ;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
  &::placeholder{
    color: #999;
  }
`
const ProviderDescRightWrapperStyled = styled.form`
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
const RegisterpageInputErrorPromptStyled = styled.p`
  font-size: .8rem;
  color: rgb(225, 45, 45);
  margin: .4rem 0;
`
const ProviderDesc = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const propertyRegistrationId = searchParams.get('p');
  const formik = useFormik({
    initialValues: {
      nameOfAccommodation: "" ,
      desc: "",
      recommend: "",
      policy: "",
      howToGetThere: "",
      rating: 0
    },
    validationSchema: yup.object({
      nameOfAccommodation: yup.string().required("Xin vui lòng đặt tên cho chỗ nghỉ !"),
      desc: yup.string().required("Vui lòng nhập mô tả nơi ở !"),
      howToGetThere: yup.string().required("Vui lòng nhập cách khách có thể đến chỗ nghỉ !"),
      rating: yup.number().min(1, "Vui lòng nhập số sao chỗ nghỉ")
    }),
    onSubmit: (values) => {
      const {nameOfAccommodation, desc, recommend, policy, howToGetThere, rating} = values;
      dispatch(createRegistraionDesc({nameOfAccommodation, desc, recommend, policy, howToGetThere, rating, propertyRegistrationId}))
      navigate(`/provider/services?p=${propertyRegistrationId}`)
    }
  })
  const ratingOptions = {
    value: 5,
    size: 'medium'
  }
  const handleBack = () => {
    navigate(`/provider/location?p=${propertyRegistrationId}`)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ProviderDescContainerStyled>
      <ProviderDescWrapperStyled>
        <ProviderContentWrapperStyled>
          <StepperProvider activeStep={2} />
          <ProviderDescRightWrapperStyled onSubmit={formik.handleSubmit}>
            <ProviderDescRightTopWrapperStyled>
              <ProviderDescHeaderWrapperStyled>
                <ProviderDescHeaderLeftWrapperStyled>
                  <ProviderDescHeaderStyled>Những ưu điểm và nét độc đáo tại chỗ ở của bạn là gì?</ProviderDescHeaderStyled>
                  <ProviderDescSubHeaderStyled>Mỗi căn phòng, mỗi ngôi nhà đều có những nét độc đáo riêng. Hãy giới thiệu các đặc điểm nổi bật tại nơi ở của bạn.</ProviderDescSubHeaderStyled>
                </ProviderDescHeaderLeftWrapperStyled>
                <ProviderDescHeaderRightImageStyled src={provider_ec_desc} />
              </ProviderDescHeaderWrapperStyled>
              <ProviderDescTopHeaderStyled>Đặt tên cho nhà</ProviderDescTopHeaderStyled>
              <ProviderDescTopSubHeaderStyled>Hãy tận dụng, và làm cho nó nghe có vẻ hấp dẫn. Đừng lo lắng, chúng tôi sẽ tạo các ngôn ngữ khác bằng mẫu dịch chuẩn.</ProviderDescTopSubHeaderStyled>
              <ProviderDescTopWrapperStyled>
                <ProviderDescTopInputStyled 
                  placeholder='Ví dụ: Romantic beach getaway, perfect for honeymooners'
                  name="nameOfAccommodation"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className={formik.errors.nameOfAccommodation && formik.touched.nameOfAccommodation  ? 'input-error' : ''}
                />
                {formik.errors.nameOfAccommodation && formik.touched.nameOfAccommodation && (
                  <RegisterpageInputErrorPromptStyled sx={{color: 'red', margin: '0', position: 'absolute', bottom: '0'}}>{formik.errors.nameOfAccommodation}</RegisterpageInputErrorPromptStyled>
                )}
              </ProviderDescTopWrapperStyled>
              <ProviderDescTopHeaderStyled>Mô tả nhà của bạn</ProviderDescTopHeaderStyled>
              <ProviderDescTopSubHeaderStyled>Những đặc điểm nổi bật của căn hộ để thu hút du khách.</ProviderDescTopSubHeaderStyled>
              <ProviderDescTopWrapperStyled>
                <ProviderDescTopTextAreaStyled 
                  rows={5}
                  name="desc"
                  value={formik.values.desc}
                  onChange={formik.handleChange}
                  ChangeBorder={formik.errors.desc && formik.touched.desc  ? true : false}
                  placeholder='Ví dụ:&#10;• Cách phương tiện công cộng 5 phút đi bộ &#10;• Phù hợp cho gia đình &#10;• Không gian thoáng đãng với tầm nhìn đẹp và tràn đây ánh sáng tự nhiên'
                  style={{outline: 'none'}}
                />
                {formik.errors.desc && formik.touched.desc && (
                  <RegisterpageInputErrorPromptStyled sx={{color: 'red', margin: '0', position: 'absolute', bottom: '0'}}>{formik.errors.desc}</RegisterpageInputErrorPromptStyled>
                )}
              </ProviderDescTopWrapperStyled>
              <ProviderDescTopHeaderStyled>Gợi ý vui chơi ăn uống tại địa phương (không bắt buộc)</ProviderDescTopHeaderStyled>
              <ProviderDescTopSubHeaderStyled>Có điểm tham quan du lịch, nhà hàng hay hoạt động vui chơi giải trí nào ở gần đây không?</ProviderDescTopSubHeaderStyled>
              <ProviderDescTopWrapperStyled>
                <ProviderDescTopTextAreaStyled 
                  rows={5} 
                  name="recommend"
                  value={formik.values.recommend}
                  onChange={formik.handleChange} 
                  placeholder='Ví dụ:&#10;• 5 phút đi bộ đến điểm tham quan phổ biến&#10;• Cách quán ăn nổi tiếng 10 phút đi bộ&#10;• Chỉ 5 phút đi bộ đến quán bar nhộn nhịp'
                />
              </ProviderDescTopWrapperStyled>
              <ProviderDescTopHeaderStyled>Quy tắc của chỗ nghỉ (tùy chọn)</ProviderDescTopHeaderStyled>
              <ProviderDescTopSubHeaderStyled>Báo trước cho du khách những quy định cụ thể trong nhà</ProviderDescTopSubHeaderStyled>
              <ProviderDescTopWrapperStyled>
                <ProviderDescTopTextAreaStyled 
                  rows={5} 
                  name="policy"
                  value={formik.values.policy}
                  onChange={formik.handleChange} 
                  placeholder='Ví dụ:&#10;• Không tụ tập hay tổ chức tiệc tùng&#10;• Giữ yên lặng sau 11:00 PM&#10;• Không xả rác xuống đường ống'
                />
              </ProviderDescTopWrapperStyled>
              <ProviderDescTopHeaderStyled>Khách có thể đến chỗ nghỉ bằng cách nào?</ProviderDescTopHeaderStyled>
              <ProviderDescTopSubHeaderStyled>Hãy giúp khách dễ dàng tìm được chỗ nghỉ và giảm khả năng hủy bỏ và các vấn đề vào ngày nhận phòng. Chúng tôi sẽ gửi những hướng dẫn này cho khách sau khi xác nhận đặt phòng cùng với địa chỉ của quý đối tác và đường dẫn đến bản đồ Google. Quý đối tác cũng</ProviderDescTopSubHeaderStyled>
              <ProviderDescTopWrapperStyled>
                <ProviderDescTopTextAreaStyled 
                  rows={5} 
                  name="howToGetThere"
                  value={formik.values.howToGetThere}
                  onChange={formik.handleChange} 
                  placeholder='Ví dụ:&#10;• Đi tàu tuyến sân bay đến... (từ sân bay ra thành phố)&#10;• Chuyển tuyến tàu lửa hướng đi đến ga... (đi lại trong thành phố)&#10;• Vui lòng gửi tin nhắn cho tôi sau khi chuyển tàu (hướng dẫn cá nhân)'
                  ChangeBorder={formik.errors.howToGetThere && formik.touched.howToGetThere  ? true : false}
                />
                {formik.errors.howToGetThere && formik.touched.howToGetThere && (
                  <RegisterpageInputErrorPromptStyled sx={{color: 'red', margin: '0', position: 'absolute', bottom: '0'}}>{formik.errors.howToGetThere}</RegisterpageInputErrorPromptStyled>
                )}
              </ProviderDescTopWrapperStyled>
              <ProviderDescTopHeaderStyled>Xếp hạng sao</ProviderDescTopHeaderStyled>
              <ProviderDescTopSubHeaderStyled>Đánh giá để giúp khách hàng hình dung cụ thể hơn về nơi ở.</ProviderDescTopSubHeaderStyled>
              <ProviderDescTopWrapperStyled>
                <Rating {...ratingOptions} name="rating" value={formik.values.rating} onChange={(e, rating) => { formik.setFieldValue("rating", rating)}}/>
              </ProviderDescTopWrapperStyled>
              {formik.errors.rating && formik.touched.rating && (
                  <RegisterpageInputErrorPromptStyled sx={{color: 'red', margin: '0', position: 'absolute', bottom: '0'}}>{formik.errors.rating}</RegisterpageInputErrorPromptStyled>
                )}
            </ProviderDescRightTopWrapperStyled>
            <EnterpriseInfoRightBottomWrapperStyled>
                  <EnterpriseInfoRightBottomBackButtonStyled onClick={handleBack}>TRỞ LẠI</EnterpriseInfoRightBottomBackButtonStyled>
                  <EnterpriseInfoRightBottomNextButtonStyled type='submit'>TIẾP THEO</EnterpriseInfoRightBottomNextButtonStyled>
              </EnterpriseInfoRightBottomWrapperStyled>
          </ProviderDescRightWrapperStyled>
        </ProviderContentWrapperStyled>
      </ProviderDescWrapperStyled>
    </ProviderDescContainerStyled>
  )
}

export default ProviderDesc