import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StepperProvider from '../../child/StepperProvider';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { dayData, monthData, yearData } from '../../../dummyData';
import { Country, State, City }  from 'country-state-city';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { createRegistraionFile } from '../../../features/userSlice';
const ProviderFileContainerStyled = styled.div`
  height: 100%;
  width: 100%;
`
const ProviderFileWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProviderContentWrapperStyled = styled.div`
  width: 80rem;
  display: flex;
`
const ProviderFileHeaderWrapperStyled = styled.div`
  margin-bottom: 4rem;
`
const ProviderFileHeaderStyled = styled.h2``
const ProviderFileSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderFileTopHeaderStyled = styled.h4`
  font-size: 1.2rem;
  margin: 1rem 0;
`
const ProviderFileTopHeaderTitleStyled = styled.h2`
  margin: 2rem 0;
`
const ProviderFileTopSubHeaderStyled = styled.p`
  font-size: .9rem;
  font-weight: 300;
  margin: 1rem 0;
`
const ProviderFileTopWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
`
const ProviderFileTopChoiceWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`
const ProviderFileTopChoiceStyled = styled.input`
  margin-bottom: auto;
  margin-top: .1rem;
  cursor: pointer;
`
const ProviderFileTopChoiceTitleWrapperStyled = styled.div`
  margin-left: .4rem;
`
const ProviderFileTopChoiceTitleStyled = styled.p``
const ProviderFileTopChoiceSubTitleStyled = styled.span`
  display: block;
  font-size: .9rem;
  font-weight: 300;
`
const ProviderFileTopChoiceAvatarButtonStyled = styled.button`
  padding: .8rem 1rem;
  width: 30rem;
  text-transform: uppercase;
  color: #1174a6;
  background-color: #fff;
  border: 1px solid #1174a6;
  border-radius: .2rem;
  cursor: pointer;
  &:hover{
    color: #1174a6;
    background-color: #e6e6e6;
    border-color: #0b4d6e;
  }
`
const ProviderFileTopAvatarWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
`
const ProviderFileBottomInputHalfLocationContainerStyled = styled.div``
const ProviderFileBottomInputHalfContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const ProviderFileBottomInputHalfWrapperStyled = styled.div`
  &:nth-child(2), :nth-child(3){
    margin-left: 4rem;
  }
`
const ProviderFileBottomSelectHalfStyled = styled.select`
  width: 15rem;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  color: #666;
  cursor: pointer;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const ProviderFileBottomOptionHalfStyled = styled.option`
`
const ProviderFileBottomInputHalfStyled = styled.input`
  width: 15rem;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const ProviderFileBottomTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 500;
  margin: .8rem 0;
`
const ProviderFileBottomInputFullContainerStyled = styled.div`
`
const ProviderFileBottomInputFullStyled = styled.input`
  width: 15rem;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const ProviderFileBottomEmailAuthButtonStyled = styled.button`
  margin-left: 1rem;
  padding: .6rem 1rem;
  color: #1174a6;
  background-color: #fff;
  border: 1px solid #1174a6;
  cursor: pointer;
  border-radius: .2rem;
  &:hover{
    color: #1174a6;
    background-color: #e6e6e6;
    border: 1px solid #1174a6;
  }
`
const ProviderFileBottomInputAddressFullStyled = styled.input`
  width: 34rem;
  padding: .7rem 1rem;
  border: 1px solid #ccc;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const ProviderFileTopTextAreaStyled = styled.textarea`
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
const ProviderFile = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const propertyRegistrationId = searchParams.get('p');
  const [selectCountry, setSelectCountry] = useState(null);
  const [selectState, setSelectState] = useState(null);
  const [selectPosition, setSelectPosition] = useState(null);
  const formik = useFormik({
    initialValues: {
      kind: "",
      firstName: "",
      lastName: "",
      nickName: "",
      dayOfBirth: "",
      monthOfBirth: "",
      yearOfBirth: "",
      national: "",
      phoneNumber: "",
      email: "",
      country: "",
      state: "",
      city: "",
      address: "",
      zipCode: "",
      desc: ""
    },
    validationSchema: yup.object({
      dayOfBirth: yup.string().required("Vui lòng nhập ngày sinh !"),
      phoneNumber: yup.string().required("Vui lòng nhập số điện thoại !"),
      monthOfBirth: yup.string().required("Vui lòng nhập tháng sinh !"),
      yearOfBirth: yup.string().required("Vui lòng nhập năm sinh !"),
      national: yup.string().required("Vui lòng nhập quốc tịch !"),
      country: yup.string().required("Vui lòng nhập quốc gia !"),
      state: yup.string().required("Vui lòng chọn tỉnh/thành phố"),
      city: yup.string().required("Vui lòng chọn quận/huyện !")
    }),
    onSubmit: (values) => {
      const {firstName, lastName, nickName, dayOfBirth, monthOfBirth, yearOfBirth, national, phoneNumber, email, address, desc} = values 
      dispatch(createRegistraionFile({firstName, lastName, nickName, dayOfBirth, monthOfBirth, yearOfBirth, national, phoneNumber, email, address, desc, selectCountry, selectState, selectPosition, propertyRegistrationId}));
      navigate(`/provider/sucess?p=${propertyRegistrationId}`);
    }
  })
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const handleBack = () => {
    navigate(`/provider?p=${propertyRegistrationId}`)
  }
  return (
    <ProviderFileContainerStyled>
      <ProviderFileWrapperStyled>
        <ProviderContentWrapperStyled>
          <StepperProvider activeStep={6} />
          <ProviderDescRightWrapperStyled onSubmit={formik.handleSubmit}>
            <ProviderDescRightTopWrapperStyled>
              <ProviderFileHeaderWrapperStyled>
                <ProviderFileHeaderStyled>Cho khách hàng xem những gì họ đang bỏ lỡ.</ProviderFileHeaderStyled>
                <ProviderFileSubHeaderStyled>Hình ảnh rất quan trọng đối với du khách. Hãy đăng càng nhiều ảnh chất lượng cao càng tốt. Bạn có thể thêm ảnh về sau. Agoda có sẵn những bí kíp đăng tải ảnh chất lượng để thu hút nhiều đặt phòng hơn.</ProviderFileSubHeaderStyled>
              </ProviderFileHeaderWrapperStyled>
              <ProviderFileTopHeaderStyled>Loại chủ nhà</ProviderFileTopHeaderStyled>
              <ProviderFileTopSubHeaderStyled>Để tuân thủ các cam kết với cơ quan quản lý người tiêu dùng, chúng tôi phải thu thập những thông tin sau từ các đối tác.</ProviderFileTopSubHeaderStyled>
              <ProviderFileTopWrapperStyled>
                <ProviderFileTopChoiceWrapperStyled>
                  <ProviderFileTopChoiceStyled defaultChecked={true} type="radio" name="kind" value="business" onChange={formik.handleChange}/>
                  <ProviderFileTopChoiceTitleWrapperStyled>
                    <ProviderFileTopChoiceTitleStyled>Tôi làm chủ nhà cho chính tôi</ProviderFileTopChoiceTitleStyled>
                    <ProviderFileTopChoiceSubTitleStyled>Chủ nhà tư nhân – bất kỳ bên nào đang cho thuê một chỗ nghỉ hoặc các chỗ nghỉ cho các mục đích ngoài thương mại, kinh doanh, hoặc nghề nghiệp của mình</ProviderFileTopChoiceSubTitleStyled>
                  </ProviderFileTopChoiceTitleWrapperStyled>
                </ProviderFileTopChoiceWrapperStyled>
                <ProviderFileTopChoiceWrapperStyled>
                  <ProviderFileTopChoiceStyled type="radio" name="kind" value="single" onChange={formik.handleChange}/>
                  <ProviderFileTopChoiceTitleWrapperStyled>
                    <ProviderFileTopChoiceTitleStyled>Tôi đại diện cho một công ty</ProviderFileTopChoiceTitleStyled>
                    <ProviderFileTopChoiceSubTitleStyled>Chủ nhà chuyên nghiệp – bất kỳ bên nào đang cho thuê một chỗ nghỉ hoặc các chỗ nghỉ cho các mục đích liên quan đến thương mại, kinh doanh, hoặc nghề nghiệp của mình (quý đối tác là công ty quản lý chỗ nghỉ)</ProviderFileTopChoiceSubTitleStyled>
                  </ProviderFileTopChoiceTitleWrapperStyled>
                </ProviderFileTopChoiceWrapperStyled>
              </ProviderFileTopWrapperStyled>
              {formik.values.kind === "single" && (
                <>
                  <ProviderFileTopHeaderTitleStyled>Chi tiết công ty</ProviderFileTopHeaderTitleStyled>
                  <ProviderFileTopHeaderStyled>Thông tin công ty</ProviderFileTopHeaderStyled>
                  <ProviderFileTopSubHeaderStyled>Vui lòng nhập thông tin công ty của quý đối tác</ProviderFileTopSubHeaderStyled>
                  <ProviderFileTopWrapperStyled>
                    <ProviderFileBottomInputHalfLocationContainerStyled>
                      <ProviderFileBottomInputHalfContainerStyled>
                        <ProviderFileBottomInputHalfWrapperStyled>
                          <ProviderFileBottomTitleStyled>Tên pháp lý của công ty</ProviderFileBottomTitleStyled>
                          <ProviderFileBottomInputAddressFullStyled />
                        </ProviderFileBottomInputHalfWrapperStyled>
                      </ProviderFileBottomInputHalfContainerStyled>
                    </ProviderFileBottomInputHalfLocationContainerStyled>
                    <ProviderFileBottomInputHalfLocationContainerStyled>
                      <ProviderFileBottomInputHalfContainerStyled>
                        <ProviderFileBottomInputHalfWrapperStyled>
                          <ProviderFileBottomTitleStyled>Địa chỉ công ty</ProviderFileBottomTitleStyled>
                          <ProviderFileBottomInputAddressFullStyled />
                        </ProviderFileBottomInputHalfWrapperStyled>
                        <ProviderFileBottomInputHalfWrapperStyled>
                          <ProviderFileBottomTitleStyled>Quốc gia</ProviderFileBottomTitleStyled>
                          <ProviderFileBottomSelectHalfStyled />
                        </ProviderFileBottomInputHalfWrapperStyled>
                      </ProviderFileBottomInputHalfContainerStyled>
                    </ProviderFileBottomInputHalfLocationContainerStyled>
                    <ProviderFileBottomInputHalfLocationContainerStyled>
                      <ProviderFileBottomInputHalfContainerStyled>
                        <ProviderFileBottomInputHalfWrapperStyled>
                          <ProviderFileBottomTitleStyled>Mã vùng</ProviderFileBottomTitleStyled>
                          <ProviderFileBottomInputAddressFullStyled />
                        </ProviderFileBottomInputHalfWrapperStyled>
                      </ProviderFileBottomInputHalfContainerStyled>
                    </ProviderFileBottomInputHalfLocationContainerStyled>
                  </ProviderFileTopWrapperStyled>
                  <ProviderFileTopHeaderStyled>Thông tin người chủ hưởng lợi lớn nhất</ProviderFileTopHeaderStyled>
                  <ProviderFileTopSubHeaderStyled>Vui lòng cung cấp tên của người chủ hưởng lợi sau cùng của công ty. Đây là bất kỳ cá nhân nào sở hữu 20% công ty trở lên, trực tiếp hoặc thông qua công ty mẹ HOẶC cá nhân có thẩm quyền, trách nhiệm, và quyền ra quyết định cao nhất về công ty này (ví dụ: T)</ProviderFileTopSubHeaderStyled>
                  <ProviderFileTopWrapperStyled>
                    <ProviderFileBottomInputHalfLocationContainerStyled>
                      <ProviderFileBottomInputHalfContainerStyled>
                        <ProviderFileBottomInputHalfWrapperStyled>
                          <ProviderFileBottomTitleStyled>Tên</ProviderFileBottomTitleStyled>
                          <ProviderFileBottomInputHalfStyled placeholder='Duy'/>
                        </ProviderFileBottomInputHalfWrapperStyled>
                        <ProviderFileBottomInputHalfWrapperStyled>
                          <ProviderFileBottomTitleStyled>Họ</ProviderFileBottomTitleStyled>
                          <ProviderFileBottomInputHalfStyled placeholder='Nguyen'/>
                        </ProviderFileBottomInputHalfWrapperStyled>
                        <ProviderFileBottomInputHalfWrapperStyled>
                          <ProviderFileBottomTitleStyled>Quốc tịch</ProviderFileBottomTitleStyled>
                          <ProviderFileBottomSelectHalfStyled/>
                        </ProviderFileBottomInputHalfWrapperStyled>
                      </ProviderFileBottomInputHalfContainerStyled>
                      <ProviderFileBottomInputHalfLocationContainerStyled>
                      <ProviderFileBottomInputHalfContainerStyled>
                        <ProviderFileBottomInputHalfWrapperStyled>
                          <ProviderFileBottomTitleStyled>Địa chỉ (không bắt buộc)</ProviderFileBottomTitleStyled>
                          <ProviderFileBottomInputAddressFullStyled />
                        </ProviderFileBottomInputHalfWrapperStyled>
                        <ProviderFileBottomInputHalfWrapperStyled>
                          <ProviderFileBottomTitleStyled>Quốc gia</ProviderFileBottomTitleStyled>
                          <ProviderFileBottomSelectHalfStyled />
                        </ProviderFileBottomInputHalfWrapperStyled>
                      </ProviderFileBottomInputHalfContainerStyled>
                    </ProviderFileBottomInputHalfLocationContainerStyled>
                    <ProviderFileBottomInputHalfLocationContainerStyled>
                      <ProviderFileBottomInputHalfContainerStyled>
                        <ProviderFileBottomInputHalfWrapperStyled>
                          <ProviderFileBottomTitleStyled>Mã vùng (không bắt buộc)</ProviderFileBottomTitleStyled>
                          <ProviderFileBottomInputHalfStyled />
                        </ProviderFileBottomInputHalfWrapperStyled>
                      </ProviderFileBottomInputHalfContainerStyled>
                    </ProviderFileBottomInputHalfLocationContainerStyled>
                    <ProviderFileBottomInputHalfContainerStyled>
                        <ProviderFileBottomInputHalfWrapperStyled>
                          <ProviderFileBottomTitleStyled>Ngày sinh</ProviderFileBottomTitleStyled>
                          <ProviderFileBottomSelectHalfStyled />
                        </ProviderFileBottomInputHalfWrapperStyled>
                        <ProviderFileBottomInputHalfWrapperStyled>
                          <ProviderFileBottomTitleStyled>Tháng sinh</ProviderFileBottomTitleStyled>
                          <ProviderFileBottomSelectHalfStyled />
                        </ProviderFileBottomInputHalfWrapperStyled>
                        <ProviderFileBottomInputHalfWrapperStyled>
                          <ProviderFileBottomTitleStyled>Năm sinh</ProviderFileBottomTitleStyled>
                          <ProviderFileBottomSelectHalfStyled />
                        </ProviderFileBottomInputHalfWrapperStyled>
                      </ProviderFileBottomInputHalfContainerStyled>
                    </ProviderFileBottomInputHalfLocationContainerStyled>
                  </ProviderFileTopWrapperStyled>
                </>
              )}
              <ProviderFileTopHeaderTitleStyled>Chi tiết chủ nhà</ProviderFileTopHeaderTitleStyled>
              <ProviderFileTopHeaderStyled>Chọn/Đổi hình đại diện trong hồ sơ (không bắt buộc)</ProviderFileTopHeaderStyled>
              <ProviderFileTopSubHeaderStyled>Tạo thiện cảm từ cái nhìn đầu tiên! Chúng tôi sẽ thêm hình đại diện vào hồ sơ của bạn và hiển thị cho khách hàng hay chủ nhà khác về sau.</ProviderFileTopSubHeaderStyled>
              <ProviderFileTopAvatarWrapperStyled>
                <AccountCircleIcon style={{fontSize: '5rem', color: '#ccc'}}/>
                <ProviderFileTopSubHeaderStyled>Hình ảnh thật sự có tác dụng. Hãy chọn một bức ảnh rõ ràng và thân thiện để tăng lượng khách đặt phòng.</ProviderFileTopSubHeaderStyled>
                <ProviderFileTopChoiceAvatarButtonStyled>Chọn/Đổi hình đại diện trong hồ sơ</ProviderFileTopChoiceAvatarButtonStyled>
              </ProviderFileTopAvatarWrapperStyled>
              <ProviderFileTopHeaderStyled>Họ tên</ProviderFileTopHeaderStyled>
              <ProviderFileTopWrapperStyled>
                <ProviderFileBottomInputHalfLocationContainerStyled>
                  <ProviderFileBottomInputHalfContainerStyled>
                    <ProviderFileBottomInputHalfWrapperStyled>
                      <ProviderFileBottomTitleStyled>Tên</ProviderFileBottomTitleStyled>
                      <ProviderFileBottomInputHalfStyled placeholder='Duy' name='firstName' onChange={formik.handleChange}/>
                    </ProviderFileBottomInputHalfWrapperStyled>
                    <ProviderFileBottomInputHalfWrapperStyled>
                      <ProviderFileBottomTitleStyled>Họ</ProviderFileBottomTitleStyled>
                      <ProviderFileBottomInputHalfStyled placeholder='Nguyen' name='lastName' onChange={formik.handleChange}/>
                    </ProviderFileBottomInputHalfWrapperStyled>
                  </ProviderFileBottomInputHalfContainerStyled>
                  <ProviderFileBottomInputFullContainerStyled>
                    <ProviderFileBottomTitleStyled>Tên hiển thị (không bắt buộc)</ProviderFileBottomTitleStyled>
                    <ProviderFileBottomInputFullStyled placeholder='Duy Nguyen' name='nickName' onChange={formik.handleChange}/>
                  </ProviderFileBottomInputFullContainerStyled>
                  <ProviderFileBottomInputHalfContainerStyled>
                    <ProviderFileBottomInputHalfWrapperStyled>
                      <ProviderFileBottomTitleStyled>Ngày sinh</ProviderFileBottomTitleStyled>
                      <ProviderFileBottomSelectHalfStyled
                        name='dayOfBirth'
                        onChange={formik.handleChange}
                        className={formik.errors.dayOfBirth && formik.touched.dayOfBirth  ? 'input-error' : ''}
                      >
                        {dayData.map(item => (
                          <ProviderFileBottomOptionHalfStyled key={item.id} value={item.title}>{item.title}</ProviderFileBottomOptionHalfStyled>
                        ))}
                      </ProviderFileBottomSelectHalfStyled>
                      {formik.errors.dayOfBirth && formik.touched.dayOfBirth && (
                        <RegisterpageInputErrorPromptStyled sx={{color: 'red', margin: '0', position: 'absolute', bottom: '0'}}>{formik.errors.dayOfBirth}</RegisterpageInputErrorPromptStyled>
                      )}
                    </ProviderFileBottomInputHalfWrapperStyled>
                    <ProviderFileBottomInputHalfWrapperStyled>
                      <ProviderFileBottomTitleStyled>Tháng sinh</ProviderFileBottomTitleStyled>
                      <ProviderFileBottomSelectHalfStyled
                        name='monthOfBirth'
                        onChange={formik.handleChange}
                        className={formik.errors.monthOfBirth && formik.touched.monthOfBirth  ? 'input-error' : ''}
                      >
                        {monthData.map(item => (
                          <ProviderFileBottomOptionHalfStyled key={item.id} value={item.title}>{item.title}</ProviderFileBottomOptionHalfStyled>
                        ))}
                      </ProviderFileBottomSelectHalfStyled>
                      {formik.errors.monthOfBirth && formik.touched.monthOfBirth && (
                        <RegisterpageInputErrorPromptStyled sx={{color: 'red', margin: '0', position: 'absolute', bottom: '0'}}>{formik.errors.monthOfBirth}</RegisterpageInputErrorPromptStyled>
                      )}
                    </ProviderFileBottomInputHalfWrapperStyled>
                    <ProviderFileBottomInputHalfWrapperStyled>
                      <ProviderFileBottomTitleStyled>Năm sinh</ProviderFileBottomTitleStyled>
                      <ProviderFileBottomSelectHalfStyled
                        name='yearOfBirth'
                        onChange={formik.handleChange}
                        className={formik.errors.yearOfBirth && formik.touched.yearOfBirth  ? 'input-error' : ''}
                      >
                        {yearData.map(item => (
                          <ProviderFileBottomOptionHalfStyled key={item.id} value={item.title}>{item.title}</ProviderFileBottomOptionHalfStyled>
                        ))}
                      </ProviderFileBottomSelectHalfStyled>
                      {formik.errors.yearOfBirth && formik.touched.yearOfBirth && (
                        <RegisterpageInputErrorPromptStyled sx={{color: 'red', margin: '0', position: 'absolute', bottom: '0'}}>{formik.errors.yearOfBirth}</RegisterpageInputErrorPromptStyled>
                      )}
                    </ProviderFileBottomInputHalfWrapperStyled>
                  </ProviderFileBottomInputHalfContainerStyled>
                </ProviderFileBottomInputHalfLocationContainerStyled>
              </ProviderFileTopWrapperStyled>
              <ProviderFileTopHeaderStyled>Chi tiết liên lạc</ProviderFileTopHeaderStyled>
              <ProviderFileTopWrapperStyled>
                <ProviderFileBottomInputHalfLocationContainerStyled>
                  <ProviderFileBottomInputHalfContainerStyled style={{alignItems: 'baseline'}}>
                    <ProviderFileBottomInputHalfWrapperStyled>
                      <ProviderFileBottomTitleStyled>Quốc gia</ProviderFileBottomTitleStyled>
                      <FormControl sx={{ width: '15rem', height: '2.6rem'}}>
                        <Select
                          name='national'
                          value={formik.values.national}
                          onChange={formik.handleChange}
                          defaultValue=""
                          displayEmpty
                          error={formik.errors.national && formik.touched.national ? true : false}
                          sx={{borderRadius: '1px', height: '2.6rem'}}
                        >
                          {Country && Country.getAllCountries().map((item) => (
                            <MenuItem key={item.isoCode} value={item.name}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                        {formik.errors.national && formik.touched.national && (
                          <FormHelperText sx={{color: 'red', margin: '0', position: 'absolute', bottom: '-1.4rem'}}>{formik.errors.national}</FormHelperText>
                         )}
                      </FormControl>
                    </ProviderFileBottomInputHalfWrapperStyled>
                    <ProviderFileBottomInputHalfWrapperStyled>
                      <ProviderFileBottomTitleStyled>Số điện thoại</ProviderFileBottomTitleStyled>
                      <ProviderFileBottomInputHalfStyled 
                        name='phoneNumber'
                        onChange={formik.handleChange}
                        className={formik.errors.phoneNumber && formik.touched.phoneNumber  ? 'input-error' : ''}
                      />
                      {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                        <RegisterpageInputErrorPromptStyled sx={{color: 'red', margin: '0', position: 'absolute', bottom: '0', marginTop: '10px'}}>{formik.errors.phoneNumber}</RegisterpageInputErrorPromptStyled>
                      )}
                    </ProviderFileBottomInputHalfWrapperStyled>
                  </ProviderFileBottomInputHalfContainerStyled>
                  <ProviderFileBottomInputFullContainerStyled>
                    <ProviderFileBottomTitleStyled>Email</ProviderFileBottomTitleStyled>
                    <ProviderFileBottomInputFullStyled 
                      name='email'
                      type="email"
                      placeholder='autochess1235@gmail.com'
                      onChange={formik.handleChange} 
                    />
                    <ProviderFileBottomEmailAuthButtonStyled>Xác thực email</ProviderFileBottomEmailAuthButtonStyled>
                  </ProviderFileBottomInputFullContainerStyled>
                </ProviderFileBottomInputHalfLocationContainerStyled>
              </ProviderFileTopWrapperStyled>
              <ProviderFileTopHeaderStyled>Địa chỉ</ProviderFileTopHeaderStyled>
              <ProviderFileTopWrapperStyled>
                <ProviderFileBottomInputHalfLocationContainerStyled>
                  <ProviderFileBottomInputHalfContainerStyled>
                    <ProviderFileBottomInputHalfWrapperStyled>
                      <ProviderFileBottomTitleStyled>Quốc gia</ProviderFileBottomTitleStyled>
                      <FormControl sx={{ width: '15rem', height: '4rem'}}>
                        <Select
                          name='country'
                          value={formik.values.country}
                          onChange={formik.handleChange}
                          defaultValue=""
                          displayEmpty
                          error={formik.errors.country && formik.touched.country ? true : false}
                          sx={{borderRadius: '1px', height: '3rem'}}
                        >
                          {Country && Country.getAllCountries().map((item) => (
                            <MenuItem key={item.isoCode} value={item.isoCode} onClick={() => setSelectCountry(item.name)}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                        {formik.errors.country && formik.touched.country && (
                          <FormHelperText sx={{color: 'red', margin: '0', position: 'absolute', bottom: '-.4rem'}}>{formik.errors.country}</FormHelperText>
                         )}
                      </FormControl>
                    </ProviderFileBottomInputHalfWrapperStyled>
                    <ProviderFileBottomInputHalfWrapperStyled>
                      <ProviderFileBottomTitleStyled>Thành phố</ProviderFileBottomTitleStyled>
                      <FormControl sx={{ width: '15rem', height: '4rem' }}>
                        <Select
                          name='state'
                          value={formik.values.state}
                          // onChange={(e) => setState(e.target.value)}
                          onChange={formik.handleChange}
                          defaultValue=""
                          displayEmpty
                          error={formik.errors.state && formik.touched.state ? true : false}
                          sx={{borderRadius: '1px', height: '3rem'}}
                        >
                          {State && State.getStatesOfCountry(formik.values.country).map((item) => (
                            <MenuItem key={item.isoCode} value={item.isoCode} onClick={() => setSelectState(item.name)}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                        {formik.errors.state && formik.touched.state && (
                          <FormHelperText sx={{color: 'red', margin: '0', position: 'absolute', bottom: '-.4rem'}}>{formik.errors.state}</FormHelperText>
                         )}
                      </FormControl>
                    </ProviderFileBottomInputHalfWrapperStyled>
                    <ProviderFileBottomInputHalfWrapperStyled>
                      <ProviderFileBottomTitleStyled>Tỉnh</ProviderFileBottomTitleStyled>
                      <FormControl sx={{ width: '15rem', height: '4rem' }}>
                        <Select
                          name='city'
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          defaultValue=""
                          displayEmpty
                          error={formik.errors.city && formik.touched.city ? true : false}
                          sx={{borderRadius: '1px', height: '3rem'}}
                        >
                          {City && City.getCitiesOfState(formik.values.country, formik.values.state).map((item, i) => (
                            <MenuItem key={i} value={item.name} onClick={() => setSelectPosition(item.name)}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                          {formik.errors.city && formik.touched.city && (
                          <FormHelperText sx={{color: 'red', margin: '0', position: 'absolute', bottom: '-.4rem'}}>{formik.errors.city}</FormHelperText>
                         )}
                      </FormControl>
                    </ProviderFileBottomInputHalfWrapperStyled>
                  </ProviderFileBottomInputHalfContainerStyled>
                </ProviderFileBottomInputHalfLocationContainerStyled>
                <ProviderFileBottomInputHalfLocationContainerStyled>
                  <ProviderFileBottomInputHalfContainerStyled>
                    <ProviderFileBottomInputHalfWrapperStyled>
                      <ProviderFileBottomTitleStyled>Địa chỉ chính (nơi quý đối tác ở ít nhất 8 tháng của năm)</ProviderFileBottomTitleStyled>
                      <ProviderFileBottomInputAddressFullStyled 
                        name='address'
                        onChange={formik.handleChange}
                      />
                    </ProviderFileBottomInputHalfWrapperStyled>
                    <ProviderFileBottomInputHalfWrapperStyled>
                      <ProviderFileBottomTitleStyled>Mã vùng</ProviderFileBottomTitleStyled>
                      <ProviderFileBottomInputHalfStyled 
                        name='zipCode'
                        onChange={formik.handleChange}
                      />
                    </ProviderFileBottomInputHalfWrapperStyled>
                  </ProviderFileBottomInputHalfContainerStyled>
                </ProviderFileBottomInputHalfLocationContainerStyled>
              </ProviderFileTopWrapperStyled>
              <ProviderFileTopHeaderStyled>Mô tả nhà của bạn</ProviderFileTopHeaderStyled>
              <ProviderFileTopWrapperStyled>
                <ProviderFileTopTextAreaStyled 
                  rows={5} 
                  placeholder='Ví dụ:&#10;• Thông điệp chào đón &#10;• Những sở thích và thú vui riêng của bạn &#10;• Lý do bạn cho thuê nhà'
                  name='desc'
                  onChange={formik.handleChange}
                  />
              </ProviderFileTopWrapperStyled>
            </ProviderDescRightTopWrapperStyled>
            <EnterpriseInfoRightBottomWrapperStyled>
                <EnterpriseInfoRightBottomBackButtonStyled onClick={handleBack}>TRỞ LẠI</EnterpriseInfoRightBottomBackButtonStyled>
                <EnterpriseInfoRightBottomNextButtonStyled type='submit'>TIẾP THEO</EnterpriseInfoRightBottomNextButtonStyled>
            </EnterpriseInfoRightBottomWrapperStyled>
          </ProviderDescRightWrapperStyled>
        </ProviderContentWrapperStyled>
      </ProviderFileWrapperStyled>
    </ProviderFileContainerStyled>
  )
}

export default ProviderFile