import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
const CardListContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    margin: 1rem ;
`
const CardListWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
`
const CardList = () => {
  return (
    <CardListContainerStyled>
        <CardListWrapperStyled>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
        </CardListWrapperStyled>
        <CardListWrapperStyled>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
        </CardListWrapperStyled>
    </CardListContainerStyled>
  )
}

export default CardList