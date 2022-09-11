import React, { useState } from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import RoomFilterList from '../../child/RoomFilterList';
const RoomListLeftContainerStyled = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
`
const RoomListLeftWrapperStyled = styled.div`
    padding-right: 1rem;
`
const RoomListLeftTopWrapperStyled = styled.div`
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
const RoomListLeftTopMapTitleStyled = styled.span``
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
  const priceHandle = (e, newPrice) =>{
    setPrice(newPrice);
  }
  return (
    <RoomListLeftContainerStyled>
        <RoomListLeftWrapperStyled>
            <RoomListLeftTopWrapperStyled>
                <RoomListLeftTopMapTitleStyled>XEM VỊ TRÍ</RoomListLeftTopMapTitleStyled>
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
                            <RoomListLeftTopPriceIconStyled>đ</RoomListLeftTopPriceIconStyled>
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