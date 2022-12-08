import React from 'react';
import styled from 'styled-components';
import card_img from '../../assets/card_img.jpeg';
import Rating from '@mui/material/Rating';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const CardItemContainerStyled = styled.div`
  width: 19.5vw;
  height: 40vh;
`
const CardItemWrapperStyled = styled.div`
  cursor: pointer;
`
const CardItemTopWrapperStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const CardItemTopImgStyled = styled.img`
  width: 100%;
`
const PesudoStyled = styled.div `
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: .5rem;
    color: #fff;
    font-weight: bold;
    background-color: rgb(83, 145, 249);
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after{
        content: '';
        position: absolute;
        border-width: 0 18px 14px;
        border-style: solid;
        right: -30px;
        top: 8px;
        color: rgb(83, 145, 249);
        border-color: transparent transparent transparent rgb(83, 145, 249);
    }
`
const PesudoContentStyled = styled.span`
    display: block;
    color: #fff;
`
const CardItemBottomWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`
const CardItemBottomHeaderWrapperStyled = styled.div`
`
const CardItemBottomHeaderStyled = styled.h5``
const CardItemBottomContentWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const CardItemBottomLocationWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const CardItemBottomContentStyled = styled.span`
  color: rgb(83, 145, 249);
`
const CardItemBottomSubContentStyled = styled.span`
  color: #888;
  font-size: .8rem;
`
const CardItemBottomPriceStyled = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: red;
`
const CardItem = () => {
  const ratingOptions = {
    value: 5,
    readOnly: true,
    precision: 0.5,
    size: 'small'
  }
  return (
    <CardItemContainerStyled>
      <CardItemWrapperStyled>
        <CardItemTopWrapperStyled>
          <CardItemTopImgStyled src={card_img}/>
          <PesudoStyled>
            <PesudoContentStyled>9.6</PesudoContentStyled>
          </PesudoStyled>
        </CardItemTopWrapperStyled>
        <CardItemBottomWrapperStyled>
          <CardItemBottomHeaderWrapperStyled>
            <CardItemBottomHeaderStyled>The Art - Nhà Dân G9 (The Art - G9 Homestay)</CardItemBottomHeaderStyled>
          </CardItemBottomHeaderWrapperStyled>
          <CardItemBottomContentWrapperStyled>
            <Rating {...ratingOptions}/>
            <CardItemBottomLocationWrapperStyled>
              <LocationOnOutlinedIcon sx={{fontSize: '16px', color: 'rgb(83, 145, 249)'}}/>
              <CardItemBottomContentStyled>Quận 7, TP.Hồ Chí Minh</CardItemBottomContentStyled>
            </CardItemBottomLocationWrapperStyled>
          </CardItemBottomContentWrapperStyled>
          <CardItemBottomSubContentStyled>Giá mỗi đêm rẻ nhất từ</CardItemBottomSubContentStyled>
          <CardItemBottomPriceStyled>VND 180.000</CardItemBottomPriceStyled>
        </CardItemBottomWrapperStyled>
      </CardItemWrapperStyled>
    </CardItemContainerStyled>
  )
}

export default CardItem