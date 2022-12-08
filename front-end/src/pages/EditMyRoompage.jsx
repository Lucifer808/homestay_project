import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import { typeRoomPicker, viewPicker } from '../dummyData';
import Popup from '../components/admin/components/Popup';
import BedConfiguarationPopup from '../components/child/BedConfiguarationPopup';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useEffect } from 'react';
import { addDetailBedConfig, selectedBedDetailConfigurations, userCreateRoomInfo, userGetAllTypeRoom, selectedAllTypeRoom, userGetTypeRoomById, selectedTypeRoom, selectSuccess } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { styled as muiStyled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useForm } from '../components/admin/child/useForm';
const MyRoompageContainerStyled = styled.div``
const MyRoompageWrapperStyled = styled.div`
    display: flex;
`
const MyRoompageLeftWrapperStyled = styled.div`
    flex: 2;
    height: 100vh;
    background-color: rgba(7, 39, 107, 0.90);
    padding: 1rem;
`
const MyRoompageRightWrapperStyled = styled.form`
    flex: 6;
    height: 100vh;
    overflow: auto;
    padding: 1rem;
`
const MyRoompageLeftHeaderWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const MyRoompageLeftHeaderTitleWrapperStyled = styled.div`
    color: #ccc;
    font-size: 1.2rem;
`
const MyRoompageLeftHeaderButtonWrapperWrapperStyled = styled.div``
const MyRoompageLeftHeaderSearchWrapperStyled = styled.div`
    width: 100%;
    margin: 2rem 0;
`
const MyRoompageLeftHeaderSearchStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: .2rem;
    background-color: #999;
    border-radius: .1rem;
`
const MyRoompageLeftHeaderSearchInputStyled = styled.input`
    width: 100%;
    padding: .6rem;
    background-color: transparent;
    border: none;
    outline: none;
`
const MyRoompageLeftHeaderStatusWrapperStyled = styled.div``
const MyRoompageLeftHeaderButtonStatusWrapperStyled = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #ccc;
    width: 6rem;
    border-radius: .2rem;
    color: #ccc;
    cursor: pointer;
`
const MyRoompageLeftRoomDetailWrapperStyled = styled.div`
    font-size: .9rem;
    width: 100%;
    height: 10rem;
    border: 1px solid #ccc;
    background-color: #999;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: .4rem;
    color: #e7e7e7;
    cursor: pointer;
`
const MyRoompageLeftRoomDetailHeaderWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const MyRoompageLeftRoomDetailHeaderIdStyled = styled.p``
const MyRoompageLeftRoomDetailHeaderStatusWrapperStyled = styled.div`
    border: 1px solid #666;
    padding: .4rem;
    border-radius: .2rem;
    background-color: #fff;
    color: green;
    font-size: .8rem;
`
const MyRoompageLeftInfoWrapperStyled = styled.div``
const MyRoompageLeftInfoTitleStyled = styled.p`
    font-size: 1.1rem;
    color: #fff;
`
const MyRoompageLeftInfoSubTitleWrapperStyled = styled.div`
    font-size: .9rem;
    display: flex;
    align-items: center;
    margin: .5rem 0;
`
const MyRoompageLeftInfoSubTitleStyled = styled.span`
    margin-left: .2rem;
`
const MyRoompageRightHeaderWrapperStyled = styled.div`
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
`
const MyRoompageRightTitleWrapperStyled = styled.h5`
    font-size: 1.4rem;
    margin-right: 1rem;
`
const MyRoompageRightContentWrapperStyled = styled.div`
    margin: 1rem 0;
    border-bottom: 1px solid #ccc;
`
const MyRoompageRightContentInfoTitleStyled = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
`
const EnterprisePriceSetUpTopWrapperStyled = styled.div`
  display: flex;
  padding: 1rem 0;
`
const EnterprisePriceBottomTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 600;
  margin: .8rem 0;
`
const EnterpriseInfoBottomContentSelectStyled = styled.select`
  width: 16rem;
  margin: 0 1rem 0 0;
  border: 1px solid #ccc;
  padding: .8rem;
  &:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`
const EnterpriseInfoBottomContentOptionStyled = styled.option``
const EnterpriseInfoTopContentBottomAreaWrapperStyled = styled.div``
const EnterpriseInfoTopContentBottomAreaInputStyled = styled.input`
  padding: .85rem;
  width: 20rem;
  border: 1px solid #ccc;
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`
const EnterprisePriceBottomWrapperStyled = styled.div``
const EnterpriseQuantityWrapperStyled = styled.div`
    padding: 1rem 0;
`
const EnterpriseInfoTopContentBottomQuantityBtnStyled = styled.button`
  border: none;
  border-radius: .3rem;
  width: 8rem;
  font-size: .9rem;
  background-color: transparent;
  padding: .8rem .4rem;
  height: 100%;
  cursor: pointer;
  color: rgb(135, 179, 251);
  transition: all .1s linear;
  border: 1px solid rgb(135, 179, 251);
  margin-right: 2rem;
  &:hover{
      color: #fff;
      background-color: rgb(135, 179, 251);
  }
`
const EnterpriseInfoBottomContentSubTitleStyled = styled.span`
  font-size: .9rem;
  font-weight: 300;
`
const ProviderServiceTopMoreChoiceButtonStyled = styled.button`
  color: #1174a6;
  background-color: #fff;
  border: 1px solid #1174a6;
  padding: .8rem;
  border-radius: .2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover{
    color: #1174a6;
    background-color: #e6e6e6;
    border-color: #0b4d6e;
  }
`

const ProviderPriceTopWrapperStyled = styled.div`
  margin: 1rem 0;
`
const ProviderPriceBottomTitleStyled = styled.p`
  font-size: .9rem;
  font-weight: 600;
`
const ProviderPriceBottomInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;
`
const ProviderPriceBottomInputStyled = styled.input`
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
const ProviderPriceBottomInputPriceTitleWrapperStyled = styled.div``
const ProviderPriceBottomInputPriceTitleStyled = styled.p`
  padding: .6rem;
  background-color: #f7f7f7;
  border: 1px solid #bec2c9;
  border-left: none;
`
const MyRoomViewChoiceContainerWrapperStyled = styled.div`
  display: flex;
  width: 100%;
  margin-right: 1rem;
`
const MyRoomViewChoiceLeftWrapperStyled = styled.div`
  width: 100%;
  margin-right: 1rem;
`
const MyRoomViewChoiceWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: .2rem;
  color: #666;
  margin: 1rem 0;
  cursor: pointer;
`
const MyRoomViewChoiceTitleStyled = styled.button`
  font-size: .9rem;
  margin-left: 1rem;
  width: 100%;
  height: 2rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
`
const MyRoomViewChoiceRightWrapperStyled = styled.div`
  width: 100%;
`
const MyRoomBedConfiguarationWrapperStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
  margin: 1rem 0;
`

const ProviderImageTopRightWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px dashed #ccc;
  padding: 1rem 2.4rem;
  width: 20rem;
  height: 18rem;
`
const ProviderImageTopRightTitleStyled = styled.p`
  font-weight: 500;
  font-size: .9rem;
  margin: 1rem 0;
`
const ProviderImageTopRightButtonWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const ProviderImageTopRightButtonInputStyled = styled.input`
  display: none;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
`
const ProviderImageTopRightButtonStyled = styled.label`
  color: #fff;
  background-color: #1174a6;
  border: none;
  border-color: #1174a6;
  padding: 1rem 1.4rem; 
  border-radius: .2rem;
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: #0c5478;
    border-color: #0b4d6e;
  }
`
const BedConfiguarationPopupContentContainerStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  background-color: #fff;
  margin: 1rem 0;
`
const ProviderImageBottomElementWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 16rem;
  width: 18rem;
  background-color: #fff;
  margin: 1rem;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 12%);
`
const ProviderImageBottomElementImageStyled = styled.img`
  width: 18rem;
  margin-bottom: .8rem;
  height: 16rem;
  object-fit: cover;
`
const MyRoompageRightContentButtonWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1rem;
`
const MyRoompageRightContentButtonStyled = styled.button``
const RegisterpageInputErrorPromptStyled = styled.p`
  font-size: .8rem;
  color: rgb(225, 45, 45);
  margin: .4rem 0;
`
const EnterpriseInfoRightBottomWrapperStyled = styled.div`
  display: flex;
  justify-content: flex-end;
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
  margin-left: 1rem;
  &:hover{
      color: #fff;
      background-color: rgb(11, 84, 120);
  }
`

const StyledTableCell = muiStyled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
const StyledTableRow = muiStyled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const EditMyRoompage = (props) => {
    const { recordForEdit } = props;
    const [openView, setOpenView] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [errors, setErrors] = useState(false);
    const [addOptions, setAddOptions] = useState(1);
    const [images, setImages] = useState("");
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const roomTypeId = searchParams.get('roomtypeid');
    const selectedBedDetailConfigurationsData = useSelector(selectedBedDetailConfigurations);
    const selectedTypeRoomData = useSelector(selectedTypeRoom);
    const selectSuccessData = useSelector(selectSuccess);
    const initialValues = {
        nameTypeOfRoom: " ",
        numTypeOfRoom: 1,
        maxPrice: 0,
        minPrice: 0,
        exactlyPrice: 0,
        numOfAdult: 0,
        allowChildren: false,
        numOfChildren: 0,
        areaOfTypeRoom: 0,
        numOfBathrooms: 0,
        viewOfTypeRoom: " ",
    }
    useEffect(() => {
      if(recordForEdit !== null){
          setValues({
            nameTypeOfRoom: recordForEdit.name,
            numTypeOfRoom: recordForEdit.trro_id[0].numTypeOfRoom,
            maxPrice: 0,
            minPrice: 0,
            exactlyPrice: 0,
            numOfAdult: 0,
            allowChildren: false,
            numOfChildren: 0,
            areaOfTypeRoom: 0,
            numOfBathrooms: 0,
            viewOfTypeRoom: " ",
          })
      }
    },[dispatch, recordForEdit])
    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm(initialValues);
      const handleImagesChange = (e) => {
        setImages(e.target.files)
        const filesPre = Array.from(e.target.files);
        
        setImagesPreview([]);
        
        filesPre.forEach((file) => {
          const reader = new FileReader();
          
          reader.onload = () => {
            if (reader.readyState === 2) {
              setImagesPreview((old) => [...old, reader.result]);
            }
          };
          
          reader.readAsDataURL(file);
        });
      };
      const createImagesSubmitHandler = (e) => {
        e.preventDefault();
    
    
        const formData = new FormData();
    
        formData.append("info", JSON.stringify(values));
        formData.append("ac_propertyRegistrationId", params.id);
        formData.append("roomTypeId", roomTypeId);
        formData.append('bedConfig', JSON.stringify(selectedBedDetailConfigurationsData))
        for (let i = 0; i < images.length; i++) {
          formData.append('images', images[i]);        
        }
        if(values.viewOfTypeRoom === "" || values.nameTypeOfRoom === "" || values.maxPrice === 0){
          setErrors(true);
        }else{
        dispatch(userCreateRoomInfo(formData))
        }
      };
  return (
    <MyRoompageContainerStyled>
        <MyRoompageWrapperStyled>
            <MyRoompageRightWrapperStyled onSubmit={createImagesSubmitHandler}>
                <MyRoompageRightHeaderWrapperStyled>
                    <MyRoompageRightTitleWrapperStyled>Cập nhật thông tin phòng</MyRoompageRightTitleWrapperStyled>
                    <MyRoompageLeftRoomDetailHeaderStatusWrapperStyled>Hoạt động</MyRoompageLeftRoomDetailHeaderStatusWrapperStyled>
                </MyRoompageRightHeaderWrapperStyled>
                <MyRoompageRightContentWrapperStyled>
                    <MyRoompageRightContentInfoTitleStyled>Thông tin chung</MyRoompageRightContentInfoTitleStyled>
                    <EnterprisePriceSetUpTopWrapperStyled>
                        <EnterprisePriceBottomWrapperStyled>
                            <EnterprisePriceBottomTitleStyled>Tên phòng*</EnterprisePriceBottomTitleStyled>
                            <EnterpriseInfoBottomContentSelectStyled 
                                onChange={handleInputChange}
                                value={values.nameTypeOfRoom} 
                                name="nameTypeOfRoom"
                            >
                                <EnterpriseInfoBottomContentOptionStyled value="0">--Chọn--</EnterpriseInfoBottomContentOptionStyled>
                                {typeRoomPicker.map(item => (
                                    <EnterpriseInfoBottomContentOptionStyled key={item.title} value={item.title}>{item.title}</EnterpriseInfoBottomContentOptionStyled>
                                ))}
                            </EnterpriseInfoBottomContentSelectStyled>

                        </EnterprisePriceBottomWrapperStyled>
                        <EnterprisePriceBottomWrapperStyled>
                            <EnterprisePriceBottomTitleStyled>Số lượng phòng của loại này*</EnterprisePriceBottomTitleStyled>
                            <EnterpriseInfoTopContentBottomAreaWrapperStyled>
                                <EnterpriseInfoTopContentBottomAreaInputStyled 
                                    type="number"
                                    min={0} 
                                    value={values.numTypeOfRoom} 
                                    onChange={handleInputChange} 
                                    name="numTypeOfRoom"
                                />
                            </EnterpriseInfoTopContentBottomAreaWrapperStyled>
                        </EnterprisePriceBottomWrapperStyled>
                    </EnterprisePriceSetUpTopWrapperStyled>
                    <MyRoompageRightContentInfoTitleStyled>Thông tin về giá phòng</MyRoompageRightContentInfoTitleStyled>
                    <ProviderPriceTopWrapperStyled>
                        <ProviderPriceBottomTitleStyled>Mức giá tối thiểu</ProviderPriceBottomTitleStyled>
                        <EnterpriseInfoBottomContentSubTitleStyled>Thiết lập mức giá thấp nhất có thể cho phòng này</EnterpriseInfoBottomContentSubTitleStyled>
                        <ProviderPriceBottomInputWrapperStyled>
                        <ProviderPriceBottomInputStyled 
                            type="number"
                            min={0}
                            placeholder="0"
                            name='minPrice'
                            onChange={handleInputChange}
                            required={true}
                        />
                        <ProviderPriceBottomInputPriceTitleWrapperStyled>
                            <ProviderPriceBottomInputPriceTitleStyled>VND</ProviderPriceBottomInputPriceTitleStyled>
                        </ProviderPriceBottomInputPriceTitleWrapperStyled>
                        </ProviderPriceBottomInputWrapperStyled>
                    </ProviderPriceTopWrapperStyled>
                    <ProviderPriceTopWrapperStyled>
                        <ProviderPriceBottomTitleStyled>Mức giá tối đa</ProviderPriceBottomTitleStyled>
                        <EnterpriseInfoBottomContentSubTitleStyled>Thiết lập mức giá cao nhất có thể cho phòng này</EnterpriseInfoBottomContentSubTitleStyled>
                        <ProviderPriceBottomInputWrapperStyled>
                        <ProviderPriceBottomInputStyled 
                            type="number"
                            min={0}
                            placeholder="0"
                            name='maxPrice'
                            onChange={handleInputChange}
                        />
                        <ProviderPriceBottomInputPriceTitleWrapperStyled>
                            <ProviderPriceBottomInputPriceTitleStyled>VND</ProviderPriceBottomInputPriceTitleStyled>
                        </ProviderPriceBottomInputPriceTitleWrapperStyled>
                        </ProviderPriceBottomInputWrapperStyled>
                    </ProviderPriceTopWrapperStyled>
                    <ProviderPriceTopWrapperStyled>
                        <ProviderPriceBottomTitleStyled>Gia niêm yết</ProviderPriceBottomTitleStyled>
                        <EnterpriseInfoBottomContentSubTitleStyled>Thiết lập mức giá thực tế cao nhất cho phòng này</EnterpriseInfoBottomContentSubTitleStyled>
                        <ProviderPriceBottomInputWrapperStyled>
                        <ProviderPriceBottomInputStyled 
                            type="number"
                            min={0} 
                            placeholder="0"
                            name='exactlyPrice'
                            onChange={handleInputChange}
                        />
                        <ProviderPriceBottomInputPriceTitleWrapperStyled>
                            <ProviderPriceBottomInputPriceTitleStyled>VND</ProviderPriceBottomInputPriceTitleStyled>
                        </ProviderPriceBottomInputPriceTitleWrapperStyled>
                        </ProviderPriceBottomInputWrapperStyled>
                    </ProviderPriceTopWrapperStyled>
                </MyRoompageRightContentWrapperStyled>
                <MyRoompageRightContentWrapperStyled>
                    <MyRoompageRightContentInfoTitleStyled>Số người ở phòng</MyRoompageRightContentInfoTitleStyled>
                    <EnterpriseQuantityWrapperStyled>
                        <EnterprisePriceBottomWrapperStyled>
                            <EnterprisePriceBottomTitleStyled>Lượng khách được phép trong phòng này*</EnterprisePriceBottomTitleStyled>
                            <EnterpriseInfoTopContentBottomAreaWrapperStyled>
                                <EnterpriseInfoTopContentBottomAreaInputStyled 
                                    type="number"
                                    min={0} 
                                    name='numOfAdult'
                                    onChange={handleInputChange}
                                />
                            </EnterpriseInfoTopContentBottomAreaWrapperStyled>
                        </EnterprisePriceBottomWrapperStyled>
                        <EnterprisePriceBottomWrapperStyled>
                            <EnterprisePriceBottomTitleStyled>Cho phép trẻ em trong phòng này*</EnterprisePriceBottomTitleStyled>
                            <EnterpriseInfoTopContentBottomAreaWrapperStyled>
                                <EnterpriseInfoTopContentBottomQuantityBtnStyled type='button'>Có</EnterpriseInfoTopContentBottomQuantityBtnStyled>
                                <EnterpriseInfoTopContentBottomQuantityBtnStyled type='button'>Không</EnterpriseInfoTopContentBottomQuantityBtnStyled>
                            </EnterpriseInfoTopContentBottomAreaWrapperStyled>
                        </EnterprisePriceBottomWrapperStyled>
                        <EnterprisePriceBottomWrapperStyled>
                            <EnterprisePriceBottomTitleStyled>Lượng trẻ em được phép ở miễn phí*</EnterprisePriceBottomTitleStyled>
                            <EnterpriseInfoTopContentBottomAreaWrapperStyled>
                                <EnterpriseInfoTopContentBottomAreaInputStyled 
                                    type="number"
                                    min={0} 
                                    name='numOfChildren'
                                    onChange={handleInputChange}
                                />
                            </EnterpriseInfoTopContentBottomAreaWrapperStyled>
                        </EnterprisePriceBottomWrapperStyled>
                    </EnterpriseQuantityWrapperStyled>
                </MyRoompageRightContentWrapperStyled>
                <MyRoompageRightContentWrapperStyled>
                    <MyRoompageRightContentInfoTitleStyled>Nội dung phòng</MyRoompageRightContentInfoTitleStyled>
                    <EnterpriseQuantityWrapperStyled>
                        <EnterprisePriceSetUpTopWrapperStyled>
                            <EnterprisePriceBottomWrapperStyled style={{marginRight: '1rem'}}>
                                <EnterprisePriceBottomTitleStyled>Diện tích phòng*</EnterprisePriceBottomTitleStyled>
                                <EnterpriseInfoTopContentBottomAreaWrapperStyled>
                                    <EnterpriseInfoTopContentBottomAreaInputStyled 
                                        type="number"
                                        min={0} 
                                        placeholder="mét vuông"
                                        name='areaOfTypeRoom'
                                        onChange={handleInputChange}
                                    />
                                </EnterpriseInfoTopContentBottomAreaWrapperStyled>
                            </EnterprisePriceBottomWrapperStyled>
                            <EnterprisePriceBottomWrapperStyled>
                                <EnterprisePriceBottomTitleStyled>Số lượng phòng tắm*</EnterprisePriceBottomTitleStyled>
                                <EnterpriseInfoTopContentBottomAreaWrapperStyled>
                                    <EnterpriseInfoTopContentBottomAreaInputStyled 
                                        type="number"
                                        min={0} 
                                        name='numOfBathrooms'
                                        onChange={handleInputChange}
                                    />
                                </EnterpriseInfoTopContentBottomAreaWrapperStyled>
                            </EnterprisePriceBottomWrapperStyled>
                        </EnterprisePriceSetUpTopWrapperStyled>
                    </EnterpriseQuantityWrapperStyled>
                </MyRoompageRightContentWrapperStyled>
                <MyRoompageRightContentWrapperStyled>
                    <MyRoompageRightContentInfoTitleStyled>Hướng nhìn từ phòng</MyRoompageRightContentInfoTitleStyled>
                    <EnterpriseInfoBottomContentSubTitleStyled>Vui lòng chọn một hướng cho phòng</EnterpriseInfoBottomContentSubTitleStyled>
                    <EnterpriseQuantityWrapperStyled>
                            <ProviderServiceTopMoreChoiceButtonStyled type='button' onClick={() => setOpenView(!openView)}>{ openView ? "Ẩn tất cả" : "Hiện tất cả" }</ProviderServiceTopMoreChoiceButtonStyled>
                        <EnterprisePriceSetUpTopWrapperStyled>
                            {openView && (
                                <>
                                    <MyRoomViewChoiceContainerWrapperStyled>
                                        <MyRoomViewChoiceLeftWrapperStyled>
                                            {viewPicker.slice(0,12).map(item => (
                                                <MyRoomViewChoiceWrapperStyled key={item.id}>
                                                    <BalconyOutlinedIcon />
                                                    <MyRoomViewChoiceTitleStyled type='button'>{item.title}</MyRoomViewChoiceTitleStyled>
                                                </MyRoomViewChoiceWrapperStyled>
                                            ))}
                                        </MyRoomViewChoiceLeftWrapperStyled>
                                        <MyRoomViewChoiceRightWrapperStyled>
                                            {viewPicker.slice(12,24).map(item => (
                                                <MyRoomViewChoiceWrapperStyled key={item.id}>
                                                    <BalconyOutlinedIcon />
                                                    <MyRoomViewChoiceTitleStyled type='button'>{item.title}</MyRoomViewChoiceTitleStyled>
                                                </MyRoomViewChoiceWrapperStyled>
                                            ))}
                                        </MyRoomViewChoiceRightWrapperStyled>
                                    </MyRoomViewChoiceContainerWrapperStyled>
                                </>
                            )}
                        </EnterprisePriceSetUpTopWrapperStyled>
                    </EnterpriseQuantityWrapperStyled>
                </MyRoompageRightContentWrapperStyled>
                <MyRoompageRightContentWrapperStyled>
                    <MyRoompageRightContentInfoTitleStyled>Tóm tắt hình dạng giường</MyRoompageRightContentInfoTitleStyled>
                    <MyRoomBedConfiguarationWrapperStyled>
                    <MyRoompageRightContentInfoTitleStyled>Phòng ngủ 1</MyRoompageRightContentInfoTitleStyled>
                    <BedConfiguarationPopupContentContainerStyled>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell>Giường</StyledTableCell>
                                    <StyledTableCell align="center">Loại giường trong phòng</StyledTableCell>
                                    <StyledTableCell align="center">Số giường</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {selectedBedDetailConfigurationsData && selectedBedDetailConfigurationsData.firstRoom.map((row, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell component="th" scope="row">
                                            Hình dạng {index + 1}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.nameOfBed}</StyledTableCell>
                                        <StyledTableCell align="center">{row.noOfBed}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </BedConfiguarationPopupContentContainerStyled>
                    <MyRoompageRightContentInfoTitleStyled>Phòng ngủ 2</MyRoompageRightContentInfoTitleStyled>
                    <BedConfiguarationPopupContentContainerStyled>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell>Giường</StyledTableCell>
                                    <StyledTableCell align="center">Loại giường trong phòng</StyledTableCell>
                                    <StyledTableCell align="center">Số giường</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {selectedBedDetailConfigurationsData && selectedBedDetailConfigurationsData.seccondRoom.map((row, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell component="th" scope="row">
                                            Hình dạng {index + 1}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.nameOfBed}</StyledTableCell>
                                        <StyledTableCell align="center">{row.noOfBed}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </BedConfiguarationPopupContentContainerStyled>
                    </MyRoomBedConfiguarationWrapperStyled>
                    <ProviderServiceTopMoreChoiceButtonStyled type='button' onClick={() => setOpenPopup(!openPopup)}>Quản lý hình dạng giường</ProviderServiceTopMoreChoiceButtonStyled>
                </MyRoompageRightContentWrapperStyled>
                <MyRoompageRightContentWrapperStyled>
                    <MyRoompageRightContentInfoTitleStyled>Ảnh phòng</MyRoompageRightContentInfoTitleStyled>
                    <EnterpriseQuantityWrapperStyled>
                        <EnterprisePriceSetUpTopWrapperStyled style={{display: 'flex', flexWrap: 'wrap'}}>
                            <ProviderImageTopRightWrapperStyled>
                                <CloudUploadOutlinedIcon style={{fontSize: '4rem', color: '#1174a6'}}/>
                                <ProviderImageTopRightTitleStyled>Kéo và thả ảnh của bạn vào đây</ProviderImageTopRightTitleStyled>
                                <ProviderImageTopRightButtonWrapperStyled>
                                <ProviderImageTopRightButtonInputStyled
                                    onChange={(e) => handleImagesChange(e)} 
                                    id='images' 
                                    name='images' 
                                    type="file" 
                                    accept='image/*' 
                                    multiple
                                />
                                <ProviderImageTopRightButtonStyled htmlFor='images'>CHỌN ẢNH</ProviderImageTopRightButtonStyled>
                                </ProviderImageTopRightButtonWrapperStyled>
                            </ProviderImageTopRightWrapperStyled>
                                {imagesPreview.map((item, index) => (
                                    <ProviderImageBottomElementWrapperStyled key={index}>
                                        <ProviderImageBottomElementImageStyled src={item}/>
                                    </ProviderImageBottomElementWrapperStyled>
                                ))}
                        </EnterprisePriceSetUpTopWrapperStyled>
                    </EnterpriseQuantityWrapperStyled>
                </MyRoompageRightContentWrapperStyled>
                {errors && (
                    <RegisterpageInputErrorPromptStyled>Vui lòng điền đủ thông tin</RegisterpageInputErrorPromptStyled>
                )}
                <EnterpriseInfoRightBottomWrapperStyled>
                  <EnterpriseInfoRightBottomBackButtonStyled type='button'>HỦY BỎ</EnterpriseInfoRightBottomBackButtonStyled>
                  <EnterpriseInfoRightBottomNextButtonStyled type='submit'>THÊM LOẠI PHÒNG</EnterpriseInfoRightBottomNextButtonStyled>
                </EnterpriseInfoRightBottomWrapperStyled>
            </MyRoompageRightWrapperStyled>
        </MyRoompageWrapperStyled>
        <Popup
            title="Hình dạng giường"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            onClose={() => setOpenPopup(false)} 
            maxWidth="lg"
        >
                <BedConfiguarationPopup setOpenPopup={setOpenPopup}/>
        </Popup>
    </MyRoompageContainerStyled>
  )
}

export default EditMyRoompage