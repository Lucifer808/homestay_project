import React, { useState } from 'react'
import Basic from '../components/chat/ChatbotWidget'
import CategoryList from '../components/layout/Home/CategoryList'
import DiscountBanner from '../components/layout/Home/DiscountBanner'
import RecommendList from '../components/layout/Home/RecommendList'
import SearchNavigation from '../components/layout/Home/SearchNavigation'
import TrendingList from '../components/layout/Home/TrendingList'
import {AiOutlineMessage} from 'react-icons/ai';
import styled from 'styled-components';
const ChatbotWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid #87b3fb;
  bottom: 0;
  right: 0;
  margin: 2rem;
  z-index: 10000;
  cursor: pointer;
  &:hover{
    background-color: #87b3fb;
    color: #fff;
  }
`
const Homepage = () => {
  const [openChat, setOpenChat] = useState(false);
  return (
    <>
        <SearchNavigation />
        <DiscountBanner />
        <CategoryList />
        <TrendingList />
        <RecommendList />
        {/* <ChatbotWrapperStyled onClick={() => setOpenChat(!openChat)}>
          <AiOutlineMessage style={{position: 'relative', fontSize: '1.8rem'}}/>
        </ChatbotWrapperStyled>
          {openChat && 
            <Basic />
          } */}
    </>
  )
}

export default Homepage