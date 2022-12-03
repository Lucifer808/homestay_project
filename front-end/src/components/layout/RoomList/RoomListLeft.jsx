import React, { useState } from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import RoomFilterList from '../../child/RoomFilterList';
import { useSelector } from 'react-redux';
import { selectPosition, selectCitiSearch } from '../../../features/customerSlice';
import RoomListMap from './RoomListMap';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import bkgmap from '../../../assets/bkg-map-entry.svg';
import mappin from '../../../assets/img-map-pin-red.svg';
const RoomListLeftContainerStyled = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
`
const RoomListLeftWrapperStyled = styled.div`
    padding-right: 1rem;
`
const RoomListLeftTopWrapperStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: .2rem;
    height: 8rem;
    cursor: pointer;
    &:hover{
        color: #ccc;
    }
`
const RoomListLeftTopMapTitleStyled = styled.p``
const RoomListLeftTopMapTitleWrapperStyled = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const RoomListLeftTopMapTitleImageStyled = styled.img`
    width: 3rem;
    height: 3rem;
`
const RoomListLeftTopMapWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
const RoomListLeftTopMapImageStyled = styled.img`
    height: 100%;
    width: 100%;
`
const RoomListLeftTopSearchWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: .8rem;
    padding: 1rem;
    height: 2.4rem;
    width: 100%;
    margin: 1rem 0;
    border: 1px solid #ccc;
`
const RoomListLeftTopSearchTitleWrapperStyled = styled.div``
const RoomListLeftTopSearchTitleStyled = styled.span`
    display: block;
    margin: 1rem 0;
    color: #888;
`
const RoomListLeftTopSearchSubTitleStyled = styled.span`
    display: block;
    font-size: .8rem;
    color: #888;
`
const RoomListLeftTopMapSearchInputStyled = styled.input`
    width: 100%;
    margin-left: .2rem;
    border: none;
    outline: none;
`
const RoomListLeftTopFilterContainerStyled = styled.div`
    margin: 1rem 0;
`
const RoomListLeftTopFilterPriceStyled = styled.fieldset`
    padding: 0 .4rem;
    border: none;
`
const RoomListLeftTopPriceBottomWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    height: 100%;
`
const RoomListLeftTopPriceWrapStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: .2rem;
    width: 8rem;
`
const RoomListLeftTopPriceContainerStyled = styled.div``
const RoomListLeftTopPriceStyled = styled.span``
const RoomListLeftTopPriceIconStyled = styled.span``
const RoomListLeftTopPriceTitleStyled = styled.span`
    display: block;
    font-size: .8rem;
    margin-bottom: .2rem;
`
const RoomListLeftTopPriceMiddleStyled = styled.div`
    display: block;
    min-width: 1px;
    width: 100%;
    flex: 1 1 0%;
    padding-top: 1.2rem;
    margin: 0px;
    border-bottom: 2px dotted #000;
`
const RoomListLeftTopFilterWrapperStyled = styled.div`
    margin: 1rem 0;
`
const RoomListLeftTopFilterCheckWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: .8rem 0;
    cursor: pointer;
`
const RoomListLeftTopFilterCheckboxStyled = styled.input`
    margin-right: .4rem;
`
const RoomListLeftTopFilterContentStyled = styled.span`
    display: block;
    font-size: .9rem;
    color: #888;
    &:hover{
        color: rgb(135, 179, 251);
    }
`
const RoomListLeftTopFilterMaiddleStyled = styled.div`
    display: block;
    min-width: 1px;
    width: 100%;
    flex: 1 1 0%;
    margin: 0px;
    border-bottom: 2px solid #ccc;
`
const RoomListLeft = () => {
  const [price, setPrice] = useState([100000, 100000000]);
  const selectPositionData = useSelector(selectPosition);
  const citiSearchData = useSelector(selectCitiSearch);
  const [open, setOpen] = useState(false);
  const priceHandle = (e, newPrice) =>{
      setPrice(newPrice);
    }
  const handleClickOpen = (e) => {
      e.stopPropagation()
      setOpen(true);
  };

  const handleClose = (e) => {
      e.stopPropagation()
      setOpen(false);
  };
  return (
    <RoomListLeftContainerStyled>
        <RoomListLeftWrapperStyled>
            <RoomListLeftTopWrapperStyled onClick={handleClickOpen}>
                <RoomListLeftTopMapWrapperStyled>
                    <RoomListLeftTopMapTitleWrapperStyled>
                        <RoomListLeftTopMapTitleImageStyled src={mappin}/>
                        <RoomListLeftTopMapTitleStyled>XEM VỊ TRÍ</RoomListLeftTopMapTitleStyled>
                    </RoomListLeftTopMapTitleWrapperStyled>
                    <RoomListLeftTopMapImageStyled src={bkgmap}/>
                </RoomListLeftTopMapWrapperStyled>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                >
                    <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Bản đồ
                        </Typography>
                        <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        >
                        <CloseIcon />
                        </IconButton>
                    </Toolbar>
                    </AppBar>
                    <RoomListMap selectPosition={selectPositionData} citiSearchData={citiSearchData}/>  
                </Dialog>
            </RoomListLeftTopWrapperStyled>
            <RoomListLeftTopSearchWrapperStyled>
                <SearchOutlinedIcon />
                <RoomListLeftTopMapSearchInputStyled placeholder='Tìm kiếm'/>
            </RoomListLeftTopSearchWrapperStyled>
            <RoomListLeftTopSearchTitleWrapperStyled>
                <RoomListLeftTopSearchTitleStyled>Bộ lọc phổ biến cho Vũng Tàu</RoomListLeftTopSearchTitleStyled>
                <RoomListLeftTopSearchSubTitleStyled>Giá phòng (1 đêm)</RoomListLeftTopSearchSubTitleStyled>
            </RoomListLeftTopSearchTitleWrapperStyled>
            <RoomListLeftTopFilterContainerStyled>
                <RoomListLeftTopFilterPriceStyled>
                    <Slider 
                        value={price}
                        onChange={priceHandle}
                        valueLabelDisplay="off"
                        aria-labelledby="range-slider"
                        min={100000}
                        max={100000000}
                    />
                </RoomListLeftTopFilterPriceStyled>
                <RoomListLeftTopPriceBottomWrapperStyled>
                    <RoomListLeftTopPriceContainerStyled>
                        <RoomListLeftTopPriceTitleStyled>TỐI THIỂU</RoomListLeftTopPriceTitleStyled>
                        <RoomListLeftTopPriceWrapStyled>
                            <RoomListLeftTopPriceIconStyled>đ</RoomListLeftTopPriceIconStyled>
                            <RoomListLeftTopPriceStyled>{price[0].toLocaleString()}</RoomListLeftTopPriceStyled>
                        </RoomListLeftTopPriceWrapStyled>
                    </RoomListLeftTopPriceContainerStyled>
                    <RoomListLeftTopPriceMiddleStyled />
                    <RoomListLeftTopPriceContainerStyled>
                        <RoomListLeftTopPriceTitleStyled>TỐI ĐA</RoomListLeftTopPriceTitleStyled>
                        <RoomListLeftTopPriceWrapStyled>
                            <RoomListLeftTopPriceIconStyled>₫</RoomListLeftTopPriceIconStyled>
                            <RoomListLeftTopPriceStyled>{price[1].toLocaleString()}</RoomListLeftTopPriceStyled>
                        </RoomListLeftTopPriceWrapStyled>
                    </RoomListLeftTopPriceContainerStyled>
                </RoomListLeftTopPriceBottomWrapperStyled>
                <RoomListLeftTopFilterWrapperStyled>
                    <RoomListLeftTopFilterCheckWrapperStyled>
                        <RoomListLeftTopFilterCheckboxStyled type="checkbox"/>
                        <Rating name="size-small" value={5} size="small" readOnly/>
                    </RoomListLeftTopFilterCheckWrapperStyled>
                    <RoomListLeftTopFilterCheckWrapperStyled>
                        <RoomListLeftTopFilterCheckboxStyled type="checkbox"/>
                        <Rating name="size-small" value={4} size="small" readOnly/>
                    </RoomListLeftTopFilterCheckWrapperStyled>
                    <RoomListLeftTopFilterCheckWrapperStyled>
                        <RoomListLeftTopFilterCheckboxStyled type="checkbox"/>
                        <RoomListLeftTopFilterContentStyled>Được phép cho thú nuôi vào</RoomListLeftTopFilterContentStyled>
                    </RoomListLeftTopFilterCheckWrapperStyled>
                    <RoomListLeftTopFilterCheckWrapperStyled>
                        <RoomListLeftTopFilterCheckboxStyled type="checkbox"/>
                        <RoomListLeftTopFilterContentStyled>Bãi biển riêng</RoomListLeftTopFilterContentStyled>
                    </RoomListLeftTopFilterCheckWrapperStyled>
                    <RoomListLeftTopFilterCheckWrapperStyled>
                        <RoomListLeftTopFilterCheckboxStyled type="checkbox"/>
                        <RoomListLeftTopFilterContentStyled>Xếp hạng của khách 8+ Xuất sắc</RoomListLeftTopFilterContentStyled>
                    </RoomListLeftTopFilterCheckWrapperStyled>
                    <RoomListLeftTopFilterCheckWrapperStyled>
                        <RoomListLeftTopFilterCheckboxStyled type="checkbox"/>
                        <RoomListLeftTopFilterContentStyled>Hủy miễn phí</RoomListLeftTopFilterContentStyled>
                    </RoomListLeftTopFilterCheckWrapperStyled>
                    <RoomListLeftTopFilterCheckWrapperStyled>
                        <RoomListLeftTopFilterCheckboxStyled type="checkbox"/>
                        <RoomListLeftTopFilterContentStyled>Thanh toán tại nơi ở</RoomListLeftTopFilterContentStyled>
                    </RoomListLeftTopFilterCheckWrapperStyled>
                </RoomListLeftTopFilterWrapperStyled>
                <RoomListLeftTopFilterMaiddleStyled />
                <RoomFilterList />
                <RoomListLeftTopFilterMaiddleStyled />
                <RoomFilterList />
                <RoomListLeftTopFilterMaiddleStyled />
                <RoomFilterList />
                <RoomListLeftTopFilterMaiddleStyled />
                <RoomFilterList />
                <RoomListLeftTopFilterMaiddleStyled />
                <RoomFilterList />
            </RoomListLeftTopFilterContainerStyled>
        </RoomListLeftWrapperStyled>
    </RoomListLeftContainerStyled>
  )
}

export default RoomListLeft