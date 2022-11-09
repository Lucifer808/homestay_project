import React, { useEffect } from 'react'
import styled from 'styled-components'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { selectBedTypeList, getAllBedTypeList, removeFromBedConfig, increaseCommonSpace, decreaseCommonSpace, removeCommonSpace } from '../../../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TiDelete } from 'react-icons/ti'
const ProviderInfoBottomContentInputContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
const ProviderInfoBottomContentInputStyled = styled.p`
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
const ProviderInfoBottomContentSelectStyled = styled.select`
  width: 16rem;
  margin: 1rem;
  border: 1px solid #ccc;
  padding: .8rem;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const ProviderInfoBottomContentOptionStyled = styled.option``
const ProviderInfoCommonSpace = (props) => {
  const {handleChangeCommonSpace, checkIsActive, quantity} = props;
  const dispatch = useDispatch();
  const selectBedTypeListData = useSelector(selectBedTypeList);
  const handleChangeInChild = (e) => {
    const { name, value } = e.target;
    const params = {
      [name]: value,
      optionId: checkIsActive
    }
    handleChangeCommonSpace(params);
  }
  useEffect(() => {
    dispatch(getAllBedTypeList());
  },[dispatch])
  const handleIncrease = () =>{
    dispatch(increaseCommonSpace(checkIsActive));
  }
  const handleDecrease = () =>{
    dispatch(decreaseCommonSpace(checkIsActive));
  }
  const handleRemove = () =>{
    dispatch(removeCommonSpace(checkIsActive));
  }
  return (
    <ProviderInfoBottomContentInputContainerStyled>
        <ProviderInfoBottomContentInputWrapperStyled>
            <RemoveOutlinedIcon style={{cursor: 'pointer'}} onClick={handleDecrease}/>
            <ProviderInfoBottomContentInputStyled>{quantity}</ProviderInfoBottomContentInputStyled>
            <AddOutlinedIcon style={{cursor: 'pointer'}} onClick={handleIncrease}/>
        </ProviderInfoBottomContentInputWrapperStyled>
        <ProviderInfoBottomContentSelectStyled name='bedTypeId' onChange={handleChangeInChild}>
            {selectBedTypeListData && selectBedTypeListData.map(item => (
            <ProviderInfoBottomContentOptionStyled key={item.id} value={item.id}>{item.name}</ProviderInfoBottomContentOptionStyled>
            ))}
        </ProviderInfoBottomContentSelectStyled>
        {checkIsActive >= 1 && 
          <TiDelete onClick={handleRemove}/>
        }
    </ProviderInfoBottomContentInputContainerStyled>
  )
}
export default ProviderInfoCommonSpace