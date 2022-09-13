import React from 'react';
import styled from 'styled-components';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import RoomDetailTopImage from '../components/layout/RoomDetail/RoomDetailTopImage';
const RoomDetailContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 80rem;
  margin: 0 10rem;
  padding: 0rem 0 2rem 0;
  height: 100%;
`
const RoomDetailNavigationAddressWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`
const RoomDetailNavigationAddressLeftWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: .8rem;
`
const RoomDetailNavigationAddressStyled = styled.span`
  cursor: pointer;
  color: #555;
  text-decoration: underline;
`
const RoomDetailNavigationAddressNowStyled = styled.span`
  font-weight: 700;
  display: block;
`
const RoomDetailNavigationAddressRoomStyled = styled.span`
  display: block;
  font-size: .9rem;
  color: rgb(62, 108, 234);
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`
const RoomDetailpage = () => {
  return (
    <RoomDetailContainerStyled>
      <RoomDetailNavigationAddressWrapperStyled>
        <RoomDetailNavigationAddressLeftWrapperStyled>
          <RoomDetailNavigationAddressStyled>Trang chủ</RoomDetailNavigationAddressStyled>
          <ChevronRightOutlinedIcon />
          <RoomDetailNavigationAddressStyled>Khách sạn Thái Lan(71.179)</RoomDetailNavigationAddressStyled>
          <ChevronRightOutlinedIcon />
          <RoomDetailNavigationAddressStyled>Khách sạn Phuket(10.821)</RoomDetailNavigationAddressStyled>
          <ChevronRightOutlinedIcon />
          <RoomDetailNavigationAddressNowStyled>Đặt phòng Thavorn Palm Beach Resort Phuket (SHA Plus+)</RoomDetailNavigationAddressNowStyled>
        </RoomDetailNavigationAddressLeftWrapperStyled>
        <RoomDetailNavigationAddressRoomStyled>Xem tất cả 10.821 khách sạn tại Phuket</RoomDetailNavigationAddressRoomStyled>
      </RoomDetailNavigationAddressWrapperStyled>
      <RoomDetailTopImage />
    </RoomDetailContainerStyled>
  )
}

export default RoomDetailpage