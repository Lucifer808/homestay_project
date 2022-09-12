import React from 'react';
import styled from 'styled-components';
const RoomFilterListContainerStyled = styled.div`
    margin: 1rem 0;
`
const RoomListLeftTopFilterCheckWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: .8rem 0;
`
const RoomListLeftTopFilterCheckboxStyled = styled.input`
    margin-right: .4rem;
    cursor: pointer;
`
const RoomListLeftTopFilterContentStyled = styled.span`
    display: block;
    font-size: .9rem;
    color: #888;
`
const RoomFilterList = () => {
  return (
    <RoomFilterListContainerStyled>
        <RoomListLeftTopFilterCheckWrapperStyled>
            <RoomListLeftTopFilterCheckboxStyled type="checkbox"/>
            <RoomListLeftTopFilterContentStyled>Được phép cho thú nuôi vào</RoomListLeftTopFilterContentStyled>
        </RoomListLeftTopFilterCheckWrapperStyled>
        <RoomListLeftTopFilterCheckWrapperStyled>
            <RoomListLeftTopFilterCheckboxStyled type="checkbox"/>
            <RoomListLeftTopFilterContentStyled>Được phép cho thú nuôi vào</RoomListLeftTopFilterContentStyled>
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
    </RoomFilterListContainerStyled>
  )
}

export default RoomFilterList