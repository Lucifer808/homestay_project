import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import { typeRoomPicker } from '../dummyData';
import Popup from '../components/admin/components/Popup';
import BedConfiguarationPopup from '../components/child/BedConfiguarationPopup';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
const MyRoompageContainerStyled = styled.div``
const MyRoompageWrapperStyled = styled.div`
    display: flex;
`
const MyRoompageLeftWrapperStyled = styled.div`
    flex: 2;
    height: 100vh;
    overflow: auto;
    background-color: rgba(7, 39, 107, 0.90);
    padding: 1rem;
`
const MyRoompageRightWrapperStyled = styled.div`
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
  margin: 0 1rem 1rem 0;
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
    padding: 1rem 0;
    width: 7rem;
    cursor: pointer;
    margin-right: 2rem;
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
  padding: .4rem;
  color: #666;
  margin: 1rem 0;
`
const MyRoomViewChoiceTitleStyled = styled.span`
  font-size: .9rem;
  margin-left: 1rem;
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
const MyRoompage = () => {
  const [openView, setOpenView] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [images, setImages] = useState("");
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
  return (
    <MyRoompageContainerStyled>
        <MyRoompageWrapperStyled>
            <MyRoompageLeftWrapperStyled>
                <MyRoompageLeftHeaderWrapperStyled>
                    <MyRoompageLeftHeaderTitleWrapperStyled>Thiết lập phòng</MyRoompageLeftHeaderTitleWrapperStyled>
                    <MyRoompageLeftHeaderButtonWrapperWrapperStyled>
                        <Button variant="contained" size="large">
                        + Tạo
                        </Button>
                    </MyRoompageLeftHeaderButtonWrapperWrapperStyled>
                </MyRoompageLeftHeaderWrapperStyled>
                <MyRoompageLeftHeaderSearchWrapperStyled>
                    <MyRoompageLeftHeaderSearchStyled>
                        <SearchIcon />
                        <MyRoompageLeftHeaderSearchInputStyled 
                            placeholder='Tìm kiếm tên/mã'
                        />
                    </MyRoompageLeftHeaderSearchStyled>
                </MyRoompageLeftHeaderSearchWrapperStyled>
                <MyRoompageLeftHeaderStatusWrapperStyled>
                    <MyRoompageLeftHeaderButtonStatusWrapperStyled>
                        Hoạt động
                    </MyRoompageLeftHeaderButtonStatusWrapperStyled>
                </MyRoompageLeftHeaderStatusWrapperStyled>
                <MyRoompageLeftRoomDetailWrapperStyled>
                    <MyRoompageLeftRoomDetailHeaderWrapperStyled>
                        <MyRoompageLeftRoomDetailHeaderIdStyled>#5123788123</MyRoompageLeftRoomDetailHeaderIdStyled>
                        <MyRoompageLeftRoomDetailHeaderStatusWrapperStyled>
                            Hoạt động
                        </MyRoompageLeftRoomDetailHeaderStatusWrapperStyled>
                    </MyRoompageLeftRoomDetailHeaderWrapperStyled>
                    <MyRoompageLeftInfoWrapperStyled>
                        <MyRoompageLeftInfoTitleStyled>Phòng tiêu chuẩn</MyRoompageLeftInfoTitleStyled>
                    </MyRoompageLeftInfoWrapperStyled>
                    <MyRoompageLeftInfoSubTitleWrapperStyled>
                        <Groups2OutlinedIcon style={{fontSize: '14px'}}/>
                        <MyRoompageLeftInfoSubTitleStyled>Số người ở phòng: 7</MyRoompageLeftInfoSubTitleStyled>
                    </MyRoompageLeftInfoSubTitleWrapperStyled>
                    <MyRoompageLeftInfoSubTitleWrapperStyled>
                        <HomeOutlinedIcon style={{fontSize: '14px'}}/>
                        <MyRoompageLeftInfoSubTitleStyled>Kích cỡ phòng: 70 m2</MyRoompageLeftInfoSubTitleStyled>
                    </MyRoompageLeftInfoSubTitleWrapperStyled>
                    <MyRoompageLeftInfoSubTitleWrapperStyled>
                        <SensorDoorOutlinedIcon style={{fontSize: '14px'}}/>
                        <MyRoompageLeftInfoSubTitleStyled>Số lượng phòng của loại này: 1</MyRoompageLeftInfoSubTitleStyled>
                    </MyRoompageLeftInfoSubTitleWrapperStyled>
                </MyRoompageLeftRoomDetailWrapperStyled>
            </MyRoompageLeftWrapperStyled>
            <MyRoompageRightWrapperStyled>
                <MyRoompageRightHeaderWrapperStyled>
                    <MyRoompageRightTitleWrapperStyled>Cài Đặt Phòng Mới</MyRoompageRightTitleWrapperStyled>
                    <MyRoompageLeftRoomDetailHeaderStatusWrapperStyled>Hoạt động</MyRoompageLeftRoomDetailHeaderStatusWrapperStyled>
                </MyRoompageRightHeaderWrapperStyled>
                <MyRoompageRightContentWrapperStyled>
                    <MyRoompageRightContentInfoTitleStyled>Thông tin chung</MyRoompageRightContentInfoTitleStyled>
                    <EnterprisePriceSetUpTopWrapperStyled>
                        <EnterprisePriceBottomWrapperStyled>
                            <EnterprisePriceBottomTitleStyled>Tên phòng*</EnterprisePriceBottomTitleStyled>
                            <EnterpriseInfoBottomContentSelectStyled>
                                {typeRoomPicker.map(item => (
                                    <EnterpriseInfoBottomContentOptionStyled value={item.title}>{item.title}</EnterpriseInfoBottomContentOptionStyled>
                                ))}
                            </EnterpriseInfoBottomContentSelectStyled>
                        </EnterprisePriceBottomWrapperStyled>
                        <EnterprisePriceBottomWrapperStyled>
                            <EnterprisePriceBottomTitleStyled>Số lượng phòng của loại này*</EnterprisePriceBottomTitleStyled>
                            <EnterpriseInfoTopContentBottomAreaWrapperStyled>
                                <EnterpriseInfoTopContentBottomAreaInputStyled type="number" min={0} required={true}/>
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
                            name='priceMin'
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
                            name='priceMax'
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
                            name='price'
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
                                <EnterpriseInfoTopContentBottomAreaInputStyled type="number" min={0} required={true}/>
                            </EnterpriseInfoTopContentBottomAreaWrapperStyled>
                        </EnterprisePriceBottomWrapperStyled>
                        <EnterprisePriceBottomWrapperStyled>
                            <EnterprisePriceBottomTitleStyled>Cho phép trẻ em trong phòng này*</EnterprisePriceBottomTitleStyled>
                            <EnterpriseInfoTopContentBottomAreaWrapperStyled>
                                <EnterpriseInfoTopContentBottomQuantityBtnStyled>Có</EnterpriseInfoTopContentBottomQuantityBtnStyled>
                                <EnterpriseInfoTopContentBottomQuantityBtnStyled>Không</EnterpriseInfoTopContentBottomQuantityBtnStyled>
                            </EnterpriseInfoTopContentBottomAreaWrapperStyled>
                        </EnterprisePriceBottomWrapperStyled>
                        <EnterprisePriceBottomWrapperStyled>
                            <EnterprisePriceBottomTitleStyled>Lượng trẻ em được phép ở miễn phí*</EnterprisePriceBottomTitleStyled>
                            <EnterpriseInfoTopContentBottomAreaWrapperStyled>
                                <EnterpriseInfoTopContentBottomAreaInputStyled type="number" min={0} required={true}/>
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
                                    <EnterpriseInfoTopContentBottomAreaInputStyled type="number" min={0} required={true} placeholder="mét vuông"/>
                                </EnterpriseInfoTopContentBottomAreaWrapperStyled>
                            </EnterprisePriceBottomWrapperStyled>
                            <EnterprisePriceBottomWrapperStyled>
                                <EnterprisePriceBottomTitleStyled>Số lượng phòng tắm*</EnterprisePriceBottomTitleStyled>
                                <EnterpriseInfoTopContentBottomAreaWrapperStyled>
                                    <EnterpriseInfoTopContentBottomAreaInputStyled type="number" min={0} required={true}/>
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
                                            <MyRoomViewChoiceWrapperStyled>
                                                <BalconyOutlinedIcon />
                                                <MyRoomViewChoiceTitleStyled>Không rõ</MyRoomViewChoiceTitleStyled>
                                            </MyRoomViewChoiceWrapperStyled>
                                            <MyRoomViewChoiceWrapperStyled>
                                                <BalconyOutlinedIcon />
                                                <MyRoomViewChoiceTitleStyled>Đại dương</MyRoomViewChoiceTitleStyled>
                                            </MyRoomViewChoiceWrapperStyled>
                                        </MyRoomViewChoiceLeftWrapperStyled>
                                        <MyRoomViewChoiceRightWrapperStyled>
                                            <MyRoomViewChoiceWrapperStyled>
                                                <BalconyOutlinedIcon />
                                                <MyRoomViewChoiceTitleStyled>Đại dương</MyRoomViewChoiceTitleStyled>
                                            </MyRoomViewChoiceWrapperStyled>
                                            <MyRoomViewChoiceWrapperStyled>
                                                <BalconyOutlinedIcon />
                                                <MyRoomViewChoiceTitleStyled>Đại dương</MyRoomViewChoiceTitleStyled>
                                            </MyRoomViewChoiceWrapperStyled>
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
                        <EnterprisePriceSetUpTopWrapperStyled>
                        </EnterprisePriceSetUpTopWrapperStyled>
                    </MyRoomBedConfiguarationWrapperStyled>
                    <ProviderServiceTopMoreChoiceButtonStyled type='button' onClick={() => setOpenPopup(!openPopup)}>Quản lý hình dạng giường</ProviderServiceTopMoreChoiceButtonStyled>
                </MyRoompageRightContentWrapperStyled>
                <MyRoompageRightContentWrapperStyled>
                    <MyRoompageRightContentInfoTitleStyled>Ảnh phòng</MyRoompageRightContentInfoTitleStyled>
                    <EnterpriseQuantityWrapperStyled>
                        <EnterprisePriceSetUpTopWrapperStyled>
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
                        </EnterprisePriceSetUpTopWrapperStyled>
                    </EnterpriseQuantityWrapperStyled>
                </MyRoompageRightContentWrapperStyled>
            </MyRoompageRightWrapperStyled>
        </MyRoompageWrapperStyled>
        <Popup
            title="Hình dạng giường"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            onClose={() => setOpenPopup(false)} 
            maxWidth="lg"
        >
                <BedConfiguarationPopup
                />
        </Popup>
    </MyRoompageContainerStyled>
  )
}

export default MyRoompage