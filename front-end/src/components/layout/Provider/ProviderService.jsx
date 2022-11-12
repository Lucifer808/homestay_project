import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import location_ec_amenities from '../../../assets/location-ec-amenities.png'
import StepperProvider from '../../child/StepperProvider';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userGetAllService, selectServiceList } from '../../../features/userSlice';
import * as yup from 'yup';
import { useFormik } from 'formik'
const ProviderServiceContainerStyled = styled.div`
  height: 100%;
  width: 100%;
`
const ProviderServiceWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProviderContentWrapperStyled = styled.div`
  width: 80rem;
  display: flex;
`
const ProviderServiceHeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProviderServiceHeaderLeftWrapperStyled = styled.div``
const ProviderServiceHeaderStyled = styled.h2``
const ProviderServiceSubHeaderStyled = styled.span`
  font-weight: 300;
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderServiceHeaderRightImageStyled = styled.img`
  width: 20rem;
  height: 8rem;
`
const ProviderServiceTopHeaderStyled = styled.h4`
  font-size: 1.2rem;
  margin: 1rem 0;
`
const ProviderServiceTopSubHeaderStyled = styled.p`
  font-size: .9rem;
  font-weight: 300;
  margin: 1rem 0;
`
const ProviderServiceTopWrapperStyled = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
`
const ProviderServiceTopChoiceContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ProviderServiceTopChoiceWrapperStyled = styled.div`
  margin: .6rem;
  display: flex;
  justify-content: flex-start;
  width: 15rem;
`
const ProviderServiceTopChoiceStyled = styled.input`
  top: 0;
  margin-bottom: auto;
  cursor: pointer;
`
const ProviderServiceTopChoiceTitleStyled = styled.span`
  display: block;
  margin-left: .4rem;
  font-size: .9rem;
  color: #666;
`
const ProviderServiceTopMoreChoiceButtonStyled = styled.button`
  color: #1174a6;
  background-color: #fff;
  border: 1px solid #1174a6;
  padding: .8rem;
  border-radius: .2rem;
  cursor: pointer;
  &:hover{
    color: #1174a6;
    background-color: #e6e6e6;
    border-color: #0b4d6e;
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
const EnterpriseInfoRightBottomBackNextWrapperButtonStyled = styled.div``
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
const ProviderService = () => {
  const [openService, setOpenService] = useState(false);
  const dispatch = useDispatch();
  const selectServiceListData = useSelector(selectServiceList);
  const serviceRecommend = selectServiceListData.filter(item => item.sv_ts === 37);
  const serviceBase = selectServiceListData.filter(item => item.sv_ts === 27);
  const serviceFamily = selectServiceListData.filter(item => item.sv_ts === 28);
  const serviceProtected = selectServiceListData.filter(item => item.sv_ts === 29);
  const serviceOrthers = selectServiceListData.filter(item => item.sv_ts === 30);
  const formik = useFormik({
    initialValues: {
      servicesChecked: [],
    },
    validationSchema: yup.object({
      servicesChecked: yup.array().min(3, "Vui lòng chọn ít nhất 3 dịch vụ !")
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  })
  useEffect(() => {
    dispatch(userGetAllService());
    window.scrollTo(0, 0);
  }, [dispatch])
  return (
    <ProviderServiceContainerStyled>
      <ProviderServiceWrapperStyled>
        <ProviderContentWrapperStyled>
          <StepperProvider activeStep={3} />
          <ProviderDescRightWrapperStyled onSubmit={formik.handleSubmit}>
            <ProviderDescRightTopWrapperStyled>
              <ProviderServiceHeaderWrapperStyled>
                <ProviderServiceHeaderLeftWrapperStyled>
                  <ProviderServiceHeaderStyled>Tất cả các tiện nghi và những vật dụng nhỏ bạn cung cấp.</ProviderServiceHeaderStyled>
                  <ProviderServiceSubHeaderStyled>Nhà bạn có sẵn những vật dụng và tiện nghi gì?</ProviderServiceSubHeaderStyled>
                </ProviderServiceHeaderLeftWrapperStyled>
                <ProviderServiceHeaderRightImageStyled src={location_ec_amenities} />
              </ProviderServiceHeaderWrapperStyled>
              <ProviderServiceTopHeaderStyled>Khuyến nghị</ProviderServiceTopHeaderStyled>
              <ProviderServiceTopSubHeaderStyled>Du khách thích các tiện nghi này hơn khi đặt nhà.</ProviderServiceTopSubHeaderStyled>
              <ProviderServiceTopWrapperStyled>
                <ProviderServiceTopChoiceContainerStyled>
                  {serviceRecommend && serviceRecommend.map(item => (
                    <ProviderServiceTopChoiceWrapperStyled key={item.id}>
                      <ProviderServiceTopChoiceStyled 
                        type="checkbox" 
                        name='servicesChecked' 
                        value={item.id} 
                        onChange={formik.handleChange}/>
                      <ProviderServiceTopChoiceTitleStyled>{item.name}</ProviderServiceTopChoiceTitleStyled>
                    </ProviderServiceTopChoiceWrapperStyled>
                  ))}
                </ProviderServiceTopChoiceContainerStyled>
              </ProviderServiceTopWrapperStyled>
              <ProviderServiceTopHeaderStyled>Có nhiều tiện nghi hơn nữa ư?</ProviderServiceTopHeaderStyled>
              <ProviderServiceTopMoreChoiceButtonStyled onClick={() => setOpenService(!openService)}>{ openService ? "Ẩn các tiện nghi" : "Xem danh sách tất cả các tiện nghi" }</ProviderServiceTopMoreChoiceButtonStyled>
              { openService && (
                <>
                  <ProviderServiceTopHeaderStyled>Tiêu chuẩn</ProviderServiceTopHeaderStyled>
                  <ProviderServiceTopSubHeaderStyled>Các tiện nghi này có trong hầu hết các chỗ nghỉ thành công của chúng tôi.</ProviderServiceTopSubHeaderStyled>
                  <ProviderServiceTopWrapperStyled>
                    <ProviderServiceTopChoiceContainerStyled>
                      {serviceBase && serviceBase.map(item => (
                        <ProviderServiceTopChoiceWrapperStyled key={item.id}>
                          <ProviderServiceTopChoiceStyled 
                            type="checkbox" 
                            name='servicesChecked' 
                            value={item.id} 
                            onChange={formik.handleChange}/>
                          <ProviderServiceTopChoiceTitleStyled>{item.name}</ProviderServiceTopChoiceTitleStyled>
                        </ProviderServiceTopChoiceWrapperStyled>
                      ))}
                    </ProviderServiceTopChoiceContainerStyled>
                  </ProviderServiceTopWrapperStyled>
                  <ProviderServiceTopHeaderStyled>Gia đình</ProviderServiceTopHeaderStyled>
                  <ProviderServiceTopSubHeaderStyled>Các tiện nghi này quan trọng đối với những gia đình đi du lịch cùng nhau, đặc biệt là với trẻ nhỏ.</ProviderServiceTopSubHeaderStyled>
                  <ProviderServiceTopWrapperStyled>
                    <ProviderServiceTopChoiceContainerStyled>
                      {serviceFamily && serviceFamily.map(item => (
                        <ProviderServiceTopChoiceWrapperStyled key={item.id}>
                          <ProviderServiceTopChoiceStyled 
                            type="checkbox" 
                            name='servicesChecked' 
                            value={item.id} 
                            onChange={formik.handleChange}/>
                          <ProviderServiceTopChoiceTitleStyled>{item.name}</ProviderServiceTopChoiceTitleStyled>
                        </ProviderServiceTopChoiceWrapperStyled>
                      ))}
                    </ProviderServiceTopChoiceContainerStyled>
                  </ProviderServiceTopWrapperStyled>
                  <ProviderServiceTopHeaderStyled>Độ an toàn và sạch sẽ</ProviderServiceTopHeaderStyled>
                  <ProviderServiceTopSubHeaderStyled>Cho khách thấy rằng quý đối tác coi trọng sự an toàn và sức khỏe của họ với các tiện nghi này.</ProviderServiceTopSubHeaderStyled>
                  <ProviderServiceTopWrapperStyled>
                    <ProviderServiceTopChoiceContainerStyled>
                      {serviceProtected && serviceProtected.map(item => (
                        <ProviderServiceTopChoiceWrapperStyled key={item.id}>
                          <ProviderServiceTopChoiceStyled 
                            type="checkbox" 
                            name='servicesChecked' 
                            value={item.id} 
                            onChange={formik.handleChange}/>
                          <ProviderServiceTopChoiceTitleStyled>{item.name}</ProviderServiceTopChoiceTitleStyled>
                        </ProviderServiceTopChoiceWrapperStyled>
                      ))}
                    </ProviderServiceTopChoiceContainerStyled>
                  </ProviderServiceTopWrapperStyled>
                  <ProviderServiceTopHeaderStyled>Khác</ProviderServiceTopHeaderStyled>
                  <ProviderServiceTopSubHeaderStyled>Các dịch vụ khác mà có thể đáp ứng nhu cầu của du khách nhất định.</ProviderServiceTopSubHeaderStyled>
                  <ProviderServiceTopWrapperStyled>
                    <ProviderServiceTopChoiceContainerStyled>
                      {serviceOrthers && serviceOrthers.map(item => (
                        <ProviderServiceTopChoiceWrapperStyled key={item.id}>
                          <ProviderServiceTopChoiceStyled 
                            type="checkbox" 
                            name='servicesChecked' 
                            value={item.id} 
                            onChange={formik.handleChange}/>
                          <ProviderServiceTopChoiceTitleStyled>{item.name}</ProviderServiceTopChoiceTitleStyled>
                        </ProviderServiceTopChoiceWrapperStyled>
                      ))}
                    </ProviderServiceTopChoiceContainerStyled>
                  </ProviderServiceTopWrapperStyled>
                </>
              )}
            </ProviderDescRightTopWrapperStyled>
            <EnterpriseInfoRightBottomWrapperStyled>
              <EnterpriseInfoRightBottomBackNextWrapperButtonStyled>
                <EnterpriseInfoRightBottomBackButtonStyled>TRỞ LẠI</EnterpriseInfoRightBottomBackButtonStyled>
              </EnterpriseInfoRightBottomBackNextWrapperButtonStyled>
              <EnterpriseInfoRightBottomBackNextWrapperButtonStyled>
                {formik.errors.servicesChecked && formik.touched.servicesChecked && (
                  <RegisterpageInputErrorPromptStyled sx={{color: 'red', margin: '0', position: 'absolute', bottom: '0'}}>{formik.errors.servicesChecked}</RegisterpageInputErrorPromptStyled>
                )}
                <EnterpriseInfoRightBottomNextButtonStyled type='submit'>TIẾP THEO</EnterpriseInfoRightBottomNextButtonStyled>
              </EnterpriseInfoRightBottomBackNextWrapperButtonStyled>
            </EnterpriseInfoRightBottomWrapperStyled>
          </ProviderDescRightWrapperStyled>
        </ProviderContentWrapperStyled>
      </ProviderServiceWrapperStyled>
    </ProviderServiceContainerStyled>
  )
}

export default ProviderService