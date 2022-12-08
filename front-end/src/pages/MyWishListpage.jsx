import React from 'react'
import styled from 'styled-components'
import roomimg from '../assets/new(4)_1.jpeg'
import roomimg1 from '../assets/new(3)_2.jpeg'
import roomimg2 from '../assets/new(4)_5.jpeg'
import roomimg3 from '../assets/new(1)_4.jpeg'
const WishListContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
`
const WishListWrapperStyled = styled.div`
    padding: 1rem 10rem;
`
const WishListCardListWrapperStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const WishListCardListTitleStyled = styled.p`
    color: #666;
    font-size: 1.4rem;
    margin: 4rem 1rem;
`
const WishListCardWrapperStyled = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    width: 22rem;
    height: 20rem;
    margin: 1rem;
    cursor: pointer;
`
const WishListCardTopWrapperStyled = styled.div`
    /* width: 10rem;
    height: 10rem; */
`
const WishListCardTopImageStyled = styled.img`
    width: 22rem;
    height: 16rem;
    object-fit: cover;
`
const WishListCardBottomWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const WishListCardBottomTitleStyled = styled.p`
    font-size: 1.4rem;
`
const WishListCardBottomSpanStyled = styled.span`
    margin: .4rem 0;
`
const MyWishListpage = () => {
  return (
    <WishListContainerStyled>
        <WishListWrapperStyled>
            <WishListCardListTitleStyled>
                Danh sách yêu thích
            </WishListCardListTitleStyled>
            <WishListCardListWrapperStyled>
                <WishListCardWrapperStyled>
                    <WishListCardTopWrapperStyled>
                        <WishListCardTopImageStyled src={roomimg}/>
                    </WishListCardTopWrapperStyled>
                    <WishListCardBottomWrapperStyled>
                        <WishListCardBottomTitleStyled>Hồ Chí Minh</WishListCardBottomTitleStyled>
                        <WishListCardBottomSpanStyled>Continental Hotel</WishListCardBottomSpanStyled>
                    </WishListCardBottomWrapperStyled>
                </WishListCardWrapperStyled>
                <WishListCardWrapperStyled>
                    <WishListCardTopWrapperStyled>
                        <WishListCardTopImageStyled src={roomimg1}/>
                    </WishListCardTopWrapperStyled>
                    <WishListCardBottomWrapperStyled>
                        <WishListCardBottomTitleStyled>Hồ Chí Minh</WishListCardBottomTitleStyled>
                        <WishListCardBottomSpanStyled>Continental Hotel</WishListCardBottomSpanStyled>
                    </WishListCardBottomWrapperStyled>
                </WishListCardWrapperStyled>
                <WishListCardWrapperStyled>
                    <WishListCardTopWrapperStyled>
                        <WishListCardTopImageStyled src={roomimg2}/>
                    </WishListCardTopWrapperStyled>
                    <WishListCardBottomWrapperStyled>
                        <WishListCardBottomTitleStyled>Hồ Chí Minh</WishListCardBottomTitleStyled>
                        <WishListCardBottomSpanStyled>Continental Hotel</WishListCardBottomSpanStyled>
                    </WishListCardBottomWrapperStyled>
                </WishListCardWrapperStyled>
                <WishListCardWrapperStyled>
                    <WishListCardTopWrapperStyled>
                        <WishListCardTopImageStyled src={roomimg3}/>
                    </WishListCardTopWrapperStyled>
                    <WishListCardBottomWrapperStyled>
                        <WishListCardBottomTitleStyled>Hồ Chí Minh</WishListCardBottomTitleStyled>
                        <WishListCardBottomSpanStyled>Continental Hotel</WishListCardBottomSpanStyled>
                    </WishListCardBottomWrapperStyled>
                </WishListCardWrapperStyled>
            </WishListCardListWrapperStyled>
        </WishListWrapperStyled>
    </WishListContainerStyled>
  )
}

export default MyWishListpage