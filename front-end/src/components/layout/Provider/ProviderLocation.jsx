import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import provider_ec_location from '../../../assets/provider-ec-location.png';
import StepperProvider from '../../child/StepperProvider';
import Maps from '../../child/Maps';
import { Country, State, City }  from 'country-state-city';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as yup from 'yup';
import { useFormik } from 'formik';
import FormHelperText from '@mui/material/FormHelperText';
import { useDispatch } from 'react-redux';
import { createRegistraionLocation } from '../../../features/userSlice';
const ProviderLocationContainerStyled = styled.div`
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
const ProviderLocationHeaderContainerStyled = styled.div``
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
  padding: .9rem 1rem;
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
const ProviderLocationBottomZipInputHalfStyled = styled.input`
  width: 15rem;
  padding: 1rem 1rem;
  border: 1px solid #ccc;
  border-radius: .1rem;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
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
const ProviderDescRightTopWrapperStyled = styled.form`
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
const ProviderLocationBottomMapWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  height: 30rem;
  border-radius: .2rem;
  background-color: #fff;
  margin-top: 1rem;
`
const RegisterpageInputErrorPromptStyled = styled.p`
  font-size: .8rem;
  color: rgb(225, 45, 45);
  margin: .4rem 0;
`
const ProviderLocation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [selectPosition, setSelectPosition] = useState(null);
  const [selectCountry, setSelectCountry] = useState(null);
  const [selectState, setSelectState] = useState(null);
  const propertyRegistrationId = searchParams.get('p');
  const formik = useFormik({
    initialValues: {
      country: "",
      state: "",
      city: "",
      address: "",
      building: "",
      zipcode: ""
    },
    validationSchema: yup.object({
      country: yup.string().required("Xin vui lòng chọn một quốc gia"),
      state: yup.string().required("Xin vui lòng chọn một tiểu bang/tỉnh"),
      city: yup.string().required("Xin vui lòng chọn một thành phố"),
      address: yup.string().required("Xin vui lòng nhập địa chỉ cụ thể"),
    }),
    onSubmit: (values) => {
      const {city, address, ...rest} = values; 
      dispatch(createRegistraionLocation({selectCountry, selectState, city, address, propertyRegistrationId}));
      navigate(`/provider/desc?p=${propertyRegistrationId}`)
    }
  })
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const handleBack = () => {
    navigate(`/provider?p=${propertyRegistrationId}`)
  }
  return (
    <ProviderLocationContainerStyled>
      <ProviderDescWrapperStyled>
        <ProviderContentWrapperStyled>
          <StepperProvider activeStep={1} />
          <ProviderDescRightWrapperStyled onSubmit={formik.handleSubmit}>
            <ProviderDescRightTopWrapperStyled>
              <ProviderLocationHeaderContainerStyled>
                <ProviderLocationHeaderWrapperStyled>
                  <ProviderLocationHeaderLeftWrapperStyled>
                    <ProviderLocationHeaderStyled>Xác định vị trí chỗ ở của bạn trên bản đồ.</ProviderLocationHeaderStyled>
                    <ProviderLocationSubHeaderStyled>Khách hàng sẽ ở đâu?</ProviderLocationSubHeaderStyled>
                  </ProviderLocationHeaderLeftWrapperStyled>
                  <ProviderLocationHeaderRightImageStyled src={provider_ec_location} />
                </ProviderLocationHeaderWrapperStyled>
                <ProviderLocationTopHeaderStyled>Vị trí</ProviderLocationTopHeaderStyled>
                <ProviderLocationTopSubHeaderStyled>Đây có phải là vị trí chính xác của chỗ nghỉ không? Nếu không thì hãy kéo cái ghim đến vị trí chính xác.</ProviderLocationTopSubHeaderStyled>
              </ProviderLocationHeaderContainerStyled>
              <ProviderLocationBottomWrapperStyled>
                <ProviderLocationBottomTitleStyled>Địa chỉ</ProviderLocationBottomTitleStyled>
                <ProviderLocationBottomInputStyled 
                  name='address'
                  placeholder='Điền địa chỉ ở đây'
                  onChange={formik.handleChange}
                  className={formik.errors.address && formik.touched.address  ? 'input-error' : ''}
                />
                {formik.errors.address && formik.touched.address && (
                  <RegisterpageInputErrorPromptStyled sx={{color: 'red', margin: '0', position: 'absolute', bottom: '0'}}>{formik.errors.address}</RegisterpageInputErrorPromptStyled>
                )}
                <ProviderLocationBottomTitleStyled>Tên tòa nhà, tầng và căn hộ (không bắt buộc)</ProviderLocationBottomTitleStyled>
                <ProviderLocationBottomInputStyled 
                  name='building'
                  placeholder='Điền vị trí tòa nhà ở đây'
                  onChange={formik.handleChange}
                />
                <ProviderLocationBottomInputHalfLocationContainerStyled>
                  <ProviderLocationBottomInputHalfContainerStyled>
                    <ProviderLocationBottomInputHalfWrapperStyled>
                      <ProviderLocationBottomTitleStyled>Quốc gia</ProviderLocationBottomTitleStyled>
                      <FormControl sx={{ width: '15rem', height: '4rem'}}>
                        <Select
                          name='country'
                          value={formik.values.country}
                          // onChange={(e) => setCountry(e.target.value)}
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
                    </ProviderLocationBottomInputHalfWrapperStyled>
                    <ProviderLocationBottomInputHalfWrapperStyled>
                      <ProviderLocationBottomTitleStyled>Tiểu bang / Tỉnh</ProviderLocationBottomTitleStyled>
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
                    </ProviderLocationBottomInputHalfWrapperStyled>
                  </ProviderLocationBottomInputHalfContainerStyled>
                  <ProviderLocationBottomInputHalfContainerStyled>
                    <ProviderLocationBottomInputHalfWrapperStyled>
                      <ProviderLocationBottomTitleStyled>Thành phố</ProviderLocationBottomTitleStyled>
                       <FormControl sx={{ width: '15rem', height: '4rem' }}>
                        <Select
                          name='city'
                          value={formik.values.city}
                          // onChange={(e) => setCity(e.target.value)}
                          onChange={formik.handleChange}
                          defaultValue=""
                          displayEmpty
                          error={formik.errors.city && formik.touched.city ? true : false}
                          sx={{borderRadius: '1px', height: '3rem'}}
                        >
                          {City && City.getCitiesOfState(formik.values.country, formik.values.state).map((item, i) => (
                            <MenuItem key={i} value={item.name} onClick={() => setSelectPosition(item)}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                          {formik.errors.city && formik.touched.city && (
                          <FormHelperText sx={{color: 'red', margin: '0', position: 'absolute', bottom: '-.4rem'}}>{formik.errors.city}</FormHelperText>
                         )}
                      </FormControl>
                    </ProviderLocationBottomInputHalfWrapperStyled>
                    <ProviderLocationBottomInputHalfWrapperStyled style={{marginBottom: '1rem'}}>
                      <ProviderLocationBottomTitleStyled>Mã bưu điện (không bắt buộc)</ProviderLocationBottomTitleStyled>
                      <ProviderLocationBottomZipInputHalfStyled 
                        name='zipcode'
                        onChange={formik.handleChange}
                      />
                    </ProviderLocationBottomInputHalfWrapperStyled>
                  </ProviderLocationBottomInputHalfContainerStyled>
                </ProviderLocationBottomInputHalfLocationContainerStyled>
                <ProviderLocationBottomMapWrapperStyled>
                  <Maps selectPosition={selectPosition} />
                </ProviderLocationBottomMapWrapperStyled>
              </ProviderLocationBottomWrapperStyled>
              <EnterpriseInfoRightBottomWrapperStyled>
                  <EnterpriseInfoRightBottomBackButtonStyled onClick={handleBack}>TRỞ LẠI</EnterpriseInfoRightBottomBackButtonStyled>
                  <EnterpriseInfoRightBottomNextButtonStyled type='submit'>TIẾP THEO</EnterpriseInfoRightBottomNextButtonStyled>
              </EnterpriseInfoRightBottomWrapperStyled>
            </ProviderDescRightTopWrapperStyled>
          </ProviderDescRightWrapperStyled>
        </ProviderContentWrapperStyled>
      </ProviderDescWrapperStyled>
    </ProviderLocationContainerStyled>
  )
}

export default ProviderLocation