import React from 'react';
import styled from 'styled-components';
const RoomCardContainerStyled = styled.div`
    border: 1px solid #ccc;
    border-radius: .8rem;
    height: 10rem;
    width: 100%;
`
const RoomCardWrapperStyled = styled.div`

`
const RoomCard = () => {
  return (
    <RoomCardContainerStyled>
        <RoomCardWrapperStyled>

        </RoomCardWrapperStyled>
    </RoomCardContainerStyled>
  )
}

export default RoomCard