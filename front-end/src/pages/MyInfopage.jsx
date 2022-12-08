import React, { useState } from 'react'
import styled from 'styled-components'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dayData, monthData, yearData } from '../dummyData';
const WishListContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
`
const WishListWrapperStyled = styled.div`
    padding: 1rem 10rem;
`
const WishListCardListWrapperStyled = styled.form`
    padding: 0 1rem;
`
const WishListCardListTitleStyled = styled.p`
    color: #666;
    font-size: 1.4rem;
    margin: 4rem 1rem;
`
const ProviderFileTopWrapperStyled = styled.div`
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
const ProviderFileBottomInputFullContainerStyled = styled.div``
const ProviderFileBottomInputMidWrapperStyled = styled.div`
    display: flex;
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
const ProviderFileTopHeaderStyled = styled.h4`
  font-size: 1.2rem;
  margin: 1rem 0;
`
const RegisterpageInputErrorPromptStyled = styled.p`
  font-size: .8rem;
  color: rgb(225, 45, 45);
  margin: .4rem 0;
`
const EnterpriseInfoRightBottomWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 4rem 0;
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
const MyInfopage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const [selectCountry, setSelectCountry] = useState(null);
    const [selectState, setSelectState] = useState(null);
    const [selectPosition, setSelectPosition] = useState(null);
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        nickName: "",
        dayOfBirth: "",
        monthOfBirth: "",
        yearOfBirth: "",
        phoneNumber: "",
      },
      validationSchema: yup.object({
        dayOfBirth: yup.string().required("Vui lòng nhập ngày sinh !"),
        phoneNumber: yup.string().required("Vui lòng nhập số điện thoại !"),
        monthOfBirth: yup.string().required("Vui lòng nhập tháng sinh !"),
        yearOfBirth: yup.string().required("Vui lòng nhập năm sinh !"),
        national: yup.string().required("Vui lòng nhập quốc tịch !"),
      }),
      onSubmit: (values) => {
        const {firstName, lastName, nickName, dayOfBirth, monthOfBirth, yearOfBirth, phoneNumber} = values 
      }
    })
  return (
    <WishListContainerStyled>
        <WishListWrapperStyled>
            <WishListCardListTitleStyled>
                Thông tin tài khoản
            </WishListCardListTitleStyled>
            <WishListCardListWrapperStyled onSubmit={formik.handleSubmit}>
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
                  <ProviderFileBottomInputMidWrapperStyled>
                    <ProviderFileBottomInputFullContainerStyled>
                        <ProviderFileBottomTitleStyled>Tên hiển thị (không bắt buộc)</ProviderFileBottomTitleStyled>
                        <ProviderFileBottomInputFullStyled placeholder='Duy Nguyen' name='nickName' onChange={formik.handleChange}/>
                    </ProviderFileBottomInputFullContainerStyled>
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
                  </ProviderFileBottomInputMidWrapperStyled>
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
              <EnterpriseInfoRightBottomWrapperStyled>
                <EnterpriseInfoRightBottomNextButtonStyled type='submit'>THAY ĐổI</EnterpriseInfoRightBottomNextButtonStyled>
            </EnterpriseInfoRightBottomWrapperStyled>
            </WishListCardListWrapperStyled>
        </WishListWrapperStyled>
    </WishListContainerStyled>
  )
}

export default MyInfopage