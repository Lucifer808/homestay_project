import React from 'react';
import styled from 'styled-components';
import RoomCard from '../../child/RoomCard';
const RoomListRightContainerStyled = styled.div`
    flex: 3;
    width: 100%;
    height: 100%;
`
const RoomListRightWrapperStyled = styled.div``
const RoomListRightTopFilterWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: .4rem;
  margin-bottom: 1rem;
`
const RoomListRightTopFilterMiddleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 3rem;
  width: .02rem;
  margin: 0 .4rem;
  background-color: #ccc;
`
const RoomListRightTopFilterContentStyled = styled.span`
  display: inline-block;
  font-weight: 300;
`
const RoomListRightTopFilterContentWrapperStyled = styled.div`
  cursor: pointer;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`
const RoomListRightBottomFilterWrapperStyled = styled.div``
const RoomListRight = () => {
  return (
    <RoomListRightContainerStyled>
        <RoomListRightWrapperStyled>
          <RoomListRightTopFilterWrapperStyled>
            <RoomListRightTopFilterContentWrapperStyled style={{backgroundColor: 'rgb(248, 247, 249)', borderRadius: '.4rem 0 0 .4rem'}}>
              <RoomListRightTopFilterContentStyled>Sắp xếp</RoomListRightTopFilterContentStyled>
            </RoomListRightTopFilterContentWrapperStyled>
            <RoomListRightTopFilterMiddleStyled style={{marginLeft: '0px'}}/>
            <RoomListRightTopFilterContentWrapperStyled>
              <RoomListRightTopFilterContentStyled>Phù Hợp Nhất</RoomListRightTopFilterContentStyled>
            </RoomListRightTopFilterContentWrapperStyled>
            <RoomListRightTopFilterMiddleStyled />
            <RoomListRightTopFilterContentWrapperStyled>
              <RoomListRightTopFilterContentStyled>Được Đánh Giá Hàng Đầu</RoomListRightTopFilterContentStyled>
            </RoomListRightTopFilterContentWrapperStyled>
            <RoomListRightTopFilterMiddleStyled />
            <RoomListRightTopFilterContentWrapperStyled>
              <RoomListRightTopFilterContentStyled>Giá Thấp Nhất Trước</RoomListRightTopFilterContentStyled>
            </RoomListRightTopFilterContentWrapperStyled>
            <RoomListRightTopFilterMiddleStyled />
            <RoomListRightTopFilterContentWrapperStyled>
              <RoomListRightTopFilterContentStyled>Mách bạn ưu đãi</RoomListRightTopFilterContentStyled>
            </RoomListRightTopFilterContentWrapperStyled>
          </RoomListRightTopFilterWrapperStyled>
          <RoomListRightBottomFilterWrapperStyled>
            <RoomCard />
          </RoomListRightBottomFilterWrapperStyled>
        </RoomListRightWrapperStyled>
    </RoomListRightContainerStyled>
  )
}

export default RoomListRight