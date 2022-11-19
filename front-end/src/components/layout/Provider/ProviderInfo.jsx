import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import provider_ec_basics from '../../../assets/provider-ec-basics.png';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import StepperProvider from '../../child/StepperProvider';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  addBedConfig,
  selectedBedConfigurations,
  getAllUserTypeOfAccommodation,
  selectUserTypeOfAccommodations,
  createRegistraionInfo
} from '../../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProviderInfoBedConfig from './components/ProviderInfoBedConfig';
const ProviderInfoContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  .active-btn{
    color: #fff;
    background-color: #1174a6;
    border-color: #1174a6;
    outline: none;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 30%);
  }
`
const ProviderInfoWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProviderContentWrapperStyled = styled.div`
  width: 80rem;
  display: flex;
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
  margin: 1rem 0;
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
const ProviderInfoTopContentBottomTitleStyled = styled.p`
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderInfoTopContentBottomAreaWrapperStyled = styled.div``
const ProviderInfoTopContentBottomAreaInputStyled = styled.input`
  padding: .8rem .4rem;
  width: 6rem;
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
const ProviderInfoBottomWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
`
const ProviderInfoBottomContentWrapperStyled = styled.div``
const ProviderInfoBottomContentTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 600;
  margin-bottom: 1rem;
`
const ProviderInfoBottomContentSubTitleStyled = styled.span`
  font-size: .9rem;
  font-weight: 300;
`
const ProviderInfoBottomContentInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 0 .4rem;
  width: 8rem;
`
const ProviderInfoBottomContentInputStyled = styled.input`
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
const ProviderInfoBottomBonusWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
`
const ProviderInfoBottomBonusContentWrapperStyled = styled.div``
const ProviderInfoBottomBonusContentTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 600;
  margin-top: 1rem;
`
const ProviderInfoBottomAddStyled = styled.p`
  cursor: pointer;
  color: #1174a6;
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
const RegisterpageInputErrorPromptStyled = styled.p`
    font-size: .9rem;
    color: rgb(225, 45, 45);
    margin: .4rem;
`
const initialValuesF = {
  typeOfAccommodation: "",
  sizeSqm: "",
  accommodates: 1,
  noOfBathrooms: 1,
  noOfBedrooms: 1,
}
const ProviderInfo = () => {
  const [values, setValues] = useState(initialValuesF);
  const [addOptions, setAddOptions] = useState(1);
  const [errors, setErrors] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectTypeOfAccommodationsData = useSelector(selectUserTypeOfAccommodations);
  const selectedBedConfigurationsData = useSelector(selectedBedConfigurations);
  const typeOfAccommodations = selectTypeOfAccommodationsData.filter(item => item.ta_th === 1);
  const propertyRegistrationId = searchParams.get('p');
  const initialBedConfig = {
    ro_tb: "1",
    noOfBed: 1,
    optionId: 0,
    ro_propertyRegistrationId: propertyRegistrationId
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }
  const handleChangeBedConfig = (params) => {
    dispatch(addBedConfig(params));
  }
  useEffect(() => {
    dispatch(getAllUserTypeOfAccommodation());
    dispatch(addBedConfig(initialBedConfig));
    window.scrollTo(0, 0);
  }, [dispatch])
  const increaseQuantity = (key) => {
    if (values.hasOwnProperty(key)) {
      setValues({ ...values, [key]: values[key] + 1 });
    }
  }
  const autoInsertData = () => {
    const tempItem = {
      ro_tb: "1",
      noOfBed: 1,
      optionId: addOptions,
      ro_propertyRegistrationId: propertyRegistrationId
    }
    dispatch(addBedConfig(tempItem));
  }
  const decreaseQuantity = (key) => {
    if (values.hasOwnProperty(key)) {
      if (values[key] > 1) {
        setValues({ ...values, [key]: values[key] - 1 })
      } else {
        key === 'noOfBedrooms' ?
          setValues({ ...values, [key]: 0 })
          :
          setValues({ ...values, [key]: 1 })
      }
    }
  }
  const handleSubmitInfo = (e) => {
    e.preventDefault();
    if(values.typeOfAccommodation === "" || values.sizeSqm === ""){
      setErrors(true);
    }else{
      dispatch(createRegistraionInfo({ ...values, bedConfiguaration: selectedBedConfigurationsData, propertyRegistrationId }));
      navigate(`/provider/location?p=${propertyRegistrationId}`);
    }
  }
  return (
    <ProviderInfoContainerStyled>
      <ProviderInfoWrapperStyled>
        <ProviderContentWrapperStyled>
          <StepperProvider activeStep={0} />
          <ProviderDescRightWrapperStyled>
            <ProviderDescRightTopWrapperStyled>
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
                  {typeOfAccommodations && typeOfAccommodations.map(item =>
                    <ProviderInfoTopContentChoiceWrapperStyled
                      name="typeOfAccommodation"
                      key={item.id}
                      value={item.id}
                      onClick={handleChange}
                      className={item.id == values.typeOfAccommodation ? 'active-btn' : ''}>
                      {item.name}
                    </ProviderInfoTopContentChoiceWrapperStyled>
                  )}
                </ProviderInfoTopContentChoiceContainerStyled>
                <ProviderInfoTopContentBottomTitleStyled>Quy mô chổ nghỉ</ProviderInfoTopContentBottomTitleStyled>
                <ProviderInfoTopContentBottomAreaWrapperStyled>
                  <ProviderInfoTopContentBottomAreaInputStyled
                    name="sizeSqm"
                    placeholder={0}
                    type="number"
                    min={1}
                    required={true}
                    value={values.sizeSqm}
                    onChange={handleChange}
                  />
                  <ProviderInfoTopContentBottomAreaTitleStyled>mét vuông</ProviderInfoTopContentBottomAreaTitleStyled>
                </ProviderInfoTopContentBottomAreaWrapperStyled>
              </ProviderInfoTopWrapperStyled>
              <ProviderInfoTopHeaderStyled>Chi tiết phòng ở</ProviderInfoTopHeaderStyled>
              <ProviderInfoBottomWrapperStyled>
                <ProviderInfoBottomContentWrapperStyled>
                  <ProviderInfoBottomContentTitleStyled>Sức chứa</ProviderInfoBottomContentTitleStyled>
                  <ProviderInfoBottomContentSubTitleStyled>Số lượng người tối đa có thể ngủ thoải mái theo số lượng giường và sofa cung cấp.</ProviderInfoBottomContentSubTitleStyled>
                  <ProviderInfoBottomContentInputWrapperStyled>
                    <RemoveOutlinedIcon style={{ cursor: 'pointer' }} onClick={() => decreaseQuantity('accommodates')} />
                    <ProviderInfoBottomContentInputStyled
                      name='accommodates'
                      value={values.accommodates}
                      type="number"
                      min={1}
                      onChange={handleChange}
                    />
                    <AddOutlinedIcon style={{ cursor: 'pointer' }} onClick={() => increaseQuantity('accommodates')} />
                  </ProviderInfoBottomContentInputWrapperStyled>
                </ProviderInfoBottomContentWrapperStyled>
                <ProviderInfoBottomContentWrapperStyled>
                  <ProviderInfoBottomContentTitleStyled>Phòng tắm</ProviderInfoBottomContentTitleStyled>
                  <ProviderInfoBottomContentSubTitleStyled>Chỉ đếm số lượng phòng tắm trong nơi ở của bạn, không phải phòng tắm chung trong toà nhà hoặc chung cư.</ProviderInfoBottomContentSubTitleStyled>
                  <ProviderInfoBottomContentInputWrapperStyled>
                    <RemoveOutlinedIcon style={{ cursor: 'pointer' }} onClick={() => decreaseQuantity('noOfBathrooms')} />
                    <ProviderInfoBottomContentInputStyled
                      name='noOfBathrooms'
                      value={values.noOfBathrooms}
                      type="number"
                      min={1}
                      onChange={handleChange}
                    />
                    <AddOutlinedIcon style={{ cursor: 'pointer' }} onClick={() => increaseQuantity('noOfBathrooms')} />
                  </ProviderInfoBottomContentInputWrapperStyled>
                </ProviderInfoBottomContentWrapperStyled>
                <ProviderInfoBottomContentWrapperStyled>
                  <ProviderInfoBottomContentTitleStyled>Phòng ngủ</ProviderInfoBottomContentTitleStyled>
                  <ProviderInfoBottomContentSubTitleStyled>Nếu chỗ ở của bạn là phòng gác mái hoặc studio, số lượng phòng ngủ là 0.</ProviderInfoBottomContentSubTitleStyled>
                  <ProviderInfoBottomContentInputWrapperStyled>
                    <RemoveOutlinedIcon style={{ cursor: 'pointer' }} onClick={() => decreaseQuantity('noOfBedrooms')} />
                    <ProviderInfoBottomContentInputStyled
                      name='noOfBedrooms'
                      value={values.noOfBedrooms}
                      type="number"
                      min={0}
                      onChange={handleChange}
                    />
                    <AddOutlinedIcon style={{ cursor: 'pointer' }} onClick={() => increaseQuantity('noOfBedrooms')} />
                  </ProviderInfoBottomContentInputWrapperStyled>
                </ProviderInfoBottomContentWrapperStyled>
              </ProviderInfoBottomWrapperStyled>
              <ProviderInfoBottomBonusWrapperStyled>
                <ProviderInfoBottomBonusContentWrapperStyled>
                  <ProviderInfoBottomBonusContentTitleStyled>Phòng 1</ProviderInfoBottomBonusContentTitleStyled>
                  {selectedBedConfigurationsData && selectedBedConfigurationsData.map((item, i) => <ProviderInfoBedConfig quantity={item.noOfBed} key={i} checkIsActive={item.optionId} handleChangeBedConfig={handleChangeBedConfig} />)}
                  <ProviderInfoBottomAddStyled onClick={() => { setAddOptions(addOptions + 1); autoInsertData(); }}>THÊM LOẠI GIƯỜNG KHÁC</ProviderInfoBottomAddStyled>
                </ProviderInfoBottomBonusContentWrapperStyled>
              </ProviderInfoBottomBonusWrapperStyled>
            </ProviderDescRightTopWrapperStyled>
            <ProviderDescRightBottomWrapperStyled>
                {errors && (
                    <RegisterpageInputErrorPromptStyled>Vui lòng điền đủ thông tin</RegisterpageInputErrorPromptStyled>
                )}
                <ProviderDescRightBottomNextButtonStyled type='submit' onClick={handleSubmitInfo}>TIẾP THEO</ProviderDescRightBottomNextButtonStyled>
            </ProviderDescRightBottomWrapperStyled>
          </ProviderDescRightWrapperStyled>
        </ProviderContentWrapperStyled>
      </ProviderInfoWrapperStyled>
    </ProviderInfoContainerStyled>
  )
}

export default ProviderInfo