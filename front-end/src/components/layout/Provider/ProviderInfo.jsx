import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import provider_ec_basics from '../../../assets/provider-ec-basics.png';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import StepperProvider from '../../child/StepperProvider';
import { Link } from 'react-router-dom';
import { getAllTypeOfAccommodation, selectTypeOfAccommodations } from '../../../features/adminSlice';
import { addBedConfig, getAllBedTypeList, selectBedTypeList, selectedBedConfigurations } from '../../../features/userSlice';
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
const ProviderInfoBottomContentInputBottomContainerStyled = styled.div`
  display: flex;
`
const ProviderInfoBottomContentSelectStyled = styled.select`
  width: 16rem;
  margin: 1rem;
  border: 1px solid #ccc;
  padding: 0 1rem;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const ProviderInfoBottomContentOptionStyled = styled.option``
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
const initialValuesF = {
  typeOfAccommodation: "",
  sizeSqm: "",
  accommodates: 1,
  numberOfBathrooms: 1,
  numberOfBedrooms: 1
}
const initialBedConfig = {
  bedTypeId: "1",
  noOfBed: 1,
  optionId: 0
}
const ProviderInfo = () => {
  const [values, setValues] = useState(initialValuesF);
  const [addOptions, setAddOptions] = useState(1);
  const dispatch = useDispatch();
  const selectTypeOfAccommodationsData = useSelector(selectTypeOfAccommodations);
  const selectedBedConfigurationsData = useSelector(selectedBedConfigurations);
  const typeOfAcommodations = selectTypeOfAccommodationsData.filter(item => item.ta_th === 1);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }
  console.log(values)
  const handleChangeBedConfig = (params) => {
    dispatch(addBedConfig(params));
  }
  useEffect(() => {
    dispatch(getAllTypeOfAccommodation());
    dispatch(addBedConfig(initialBedConfig));
    window.scrollTo(0, 0);
  }, [dispatch])
  const increaseQuantity = (key) => {
    if(values.hasOwnProperty(key)){
      setValues({...values, [key]: values[key] + 1})
    }     
  }
  const autoInsertData = () => {
    const tempItem = {
      bedTypeId: "1",
      noOfBed: 1,
      optionId: addOptions
    }
    dispatch(addBedConfig(tempItem))
  }
  const decreaseQuantity = (key) => {
    if(values.hasOwnProperty(key)){
      if(values[key] >1){
        setValues({...values, [key]: values[key] - 1})
      }else{
        setValues({...values, [key]: 1})

      }
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
                  {typeOfAcommodations && typeOfAcommodations.map(item =>
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
                    <RemoveOutlinedIcon style={{cursor: 'pointer'}} onClick={() => decreaseQuantity('accommodates')}/>
                    <ProviderInfoBottomContentInputStyled
                      name='accommodates'
                      value={values.accommodates}
                      type="number" 
                      min={1}
                      onChange={handleChange}
                    />
                    <AddOutlinedIcon style={{cursor: 'pointer'}} onClick={() => increaseQuantity('accommodates')}/>
                  </ProviderInfoBottomContentInputWrapperStyled>
                </ProviderInfoBottomContentWrapperStyled>
                <ProviderInfoBottomContentWrapperStyled>
                  <ProviderInfoBottomContentTitleStyled>Phòng tắm</ProviderInfoBottomContentTitleStyled>
                  <ProviderInfoBottomContentSubTitleStyled>Chỉ đếm số lượng phòng tắm trong nơi ở của bạn, không phải phòng tắm chung trong toà nhà hoặc chung cư.</ProviderInfoBottomContentSubTitleStyled>
                  <ProviderInfoBottomContentInputWrapperStyled>
                    <RemoveOutlinedIcon style={{cursor: 'pointer'}} onClick={() => decreaseQuantity('numberOfBathrooms')}/>
                    <ProviderInfoBottomContentInputStyled 
                      name='numberOfBathrooms'
                      value={values.numberOfBathrooms}
                      type="number" 
                      min={1}
                      onChange={handleChange}
                    />
                    <AddOutlinedIcon style={{cursor: 'pointer'}} onClick={() => increaseQuantity('numberOfBathrooms')}/>
                  </ProviderInfoBottomContentInputWrapperStyled>
                </ProviderInfoBottomContentWrapperStyled>
                <ProviderInfoBottomContentWrapperStyled>
                  <ProviderInfoBottomContentTitleStyled>Phòng ngủ</ProviderInfoBottomContentTitleStyled>
                  <ProviderInfoBottomContentSubTitleStyled>Nếu chỗ ở của bạn là phòng gác mái hoặc studio, số lượng phòng ngủ là 0.</ProviderInfoBottomContentSubTitleStyled>
                  <ProviderInfoBottomContentInputWrapperStyled>
                    <RemoveOutlinedIcon style={{cursor: 'pointer'}} onClick={() => decreaseQuantity('numberOfBedrooms')}/>
                    <ProviderInfoBottomContentInputStyled 
                      name='numberOfBedrooms'
                      value={values.numberOfBedrooms}
                      type="number" 
                      min={1}
                      onChange={handleChange}
                    />
                    <AddOutlinedIcon style={{cursor: 'pointer'}} onClick={() => increaseQuantity('numberOfBedrooms')}/>
                  </ProviderInfoBottomContentInputWrapperStyled>
                </ProviderInfoBottomContentWrapperStyled>
              </ProviderInfoBottomWrapperStyled>
              <ProviderInfoBottomBonusWrapperStyled>
                <ProviderInfoBottomBonusContentWrapperStyled>
                  <ProviderInfoBottomBonusContentTitleStyled>Phòng 1</ProviderInfoBottomBonusContentTitleStyled>
                  {selectedBedConfigurationsData && selectedBedConfigurationsData.map((item, i) => <ProviderInfoBedConfig quantity={item.noOfBed} key={i} checkIsActive={item.optionId} handleChangeBedConfig={handleChangeBedConfig}/>) }
                  <ProviderInfoBottomAddStyled onClick={() => {setAddOptions(addOptions + 1); autoInsertData();}}>THÊM LOẠI GIƯỜNG KHÁC</ProviderInfoBottomAddStyled>
                  <ProviderInfoBottomBonusContentTitleStyled>Không gian chung</ProviderInfoBottomBonusContentTitleStyled>
                  <ProviderInfoBottomContentInputBottomContainerStyled>
                    <ProviderInfoBottomContentInputWrapperStyled>
                      <RemoveOutlinedIcon style={{cursor: 'pointer'}}/>
                      <ProviderInfoBottomContentInputStyled defaultValue={1} type="number" min={0}/>
                      <AddOutlinedIcon style={{cursor: 'pointer'}}/>
                    </ProviderInfoBottomContentInputWrapperStyled>
                    <ProviderInfoBottomContentSelectStyled>
                      <ProviderInfoBottomContentOptionStyled>giường đơn</ProviderInfoBottomContentOptionStyled>
                      <ProviderInfoBottomContentOptionStyled>giường đôi nhỏ</ProviderInfoBottomContentOptionStyled>
                      <ProviderInfoBottomContentOptionStyled>giường đôi</ProviderInfoBottomContentOptionStyled>
                      <ProviderInfoBottomContentOptionStyled>giường Queen</ProviderInfoBottomContentOptionStyled>
                      <ProviderInfoBottomContentOptionStyled>giường King</ProviderInfoBottomContentOptionStyled>
                      <ProviderInfoBottomContentOptionStyled>giường Super King</ProviderInfoBottomContentOptionStyled>
                      <ProviderInfoBottomContentOptionStyled>giường tầng</ProviderInfoBottomContentOptionStyled>
                      <ProviderInfoBottomContentOptionStyled>giường sofa</ProviderInfoBottomContentOptionStyled>
                      <ProviderInfoBottomContentOptionStyled>nệm futon</ProviderInfoBottomContentOptionStyled>
                    </ProviderInfoBottomContentSelectStyled>
                  </ProviderInfoBottomContentInputBottomContainerStyled>
                  <ProviderInfoBottomAddStyled>THÊM LOẠI GIƯỜNG KHÁC</ProviderInfoBottomAddStyled>
                </ProviderInfoBottomBonusContentWrapperStyled>
              </ProviderInfoBottomBonusWrapperStyled>
            </ProviderDescRightTopWrapperStyled>
            <ProviderDescRightBottomWrapperStyled>
              <Link to="/provider/location">
                <ProviderDescRightBottomNextButtonStyled type='submit'>TIẾP THEO</ProviderDescRightBottomNextButtonStyled>
              </Link>
            </ProviderDescRightBottomWrapperStyled>
          </ProviderDescRightWrapperStyled>
        </ProviderContentWrapperStyled>
      </ProviderInfoWrapperStyled>
    </ProviderInfoContainerStyled>
  )
}

export default ProviderInfo