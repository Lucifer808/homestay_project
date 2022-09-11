import React from 'react';
import styled from 'styled-components';
import RoomListLeft from '../components/layout/RoomList/RoomListLeft';
import RoomListRight from '../components/layout/RoomList/RoomListRight';
const RoomListpageContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    max-width: 80rem;
    margin: 0 10rem;
    padding: 2rem 0;
    height: 100%;
`
const RoomListpage = () => {
  return (
    <RoomListpageContainerStyled>
        <RoomListLeft />
        <RoomListRight />
    </RoomListpageContainerStyled>
  )
}

export default RoomListpage