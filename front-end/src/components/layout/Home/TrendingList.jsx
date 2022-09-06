import React, { useState } from 'react';
import styled from 'styled-components';
import {Box}from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { CssBaseline } from '@mui/material';
import CardList from '../../child/CardList';
const TrendingListContainerStyled = styled.div`
  width: 80vw;
  height: 90vh;
  margin: 10rem 9rem;
`
const TrendingListHeaderStyled = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`
const TrendingListWrapperStyled = styled.div`
  border-radius: .4rem;
  width: 80vw;
  margin: auto;
`
const TrendingListBarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const CardListWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const CardListButtonWrapperStyled = styled.div``
const CardListButtonStyled = styled.button`
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: .2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: rgb(83, 145, 249);
  color: #fff;
  cursor: pointer;
  font-weight: 800;
  &:hover{
    background-color: rgb(121, 170, 255);
  }
`
const TrendingList = () => {
  const [valueIndex, setValueIndex] = useState("1");
  const handleChangePage = (e, newValue) =>{
    setValueIndex(newValue);
  }
  return (
    <TrendingListContainerStyled>
        <TrendingListHeaderStyled>Chổ nghỉ nổi bật khuyến nghị cho bạn</TrendingListHeaderStyled>
        <CssBaseline />
          <Box>
            <TabContext value={valueIndex}>
              <TrendingListWrapperStyled>
                <TrendingListBarStyled>
                  <Box sx={{height: '100%', borderBottom: '1px solid #ccc'}}>
                    <TabList onChange={handleChangePage} variant='standard'>
                      <Tab label="TP. Hồ Chí Minh" value="1" />
                      <Tab label="Hà Nội" value="2" />
                      <Tab label="Đà Nẵng" value="3" />
                      <Tab label="Vũng Tàu" value="4" />
                      <Tab label="Đà Lạt" value="5" />
                    </TabList>
                  </Box>
                </TrendingListBarStyled>
                <TabPanel value='1' sx={{padding: '0'}}>
                  <CardListWrapperStyled>
                    <CardList />
                    <CardListButtonWrapperStyled>
                      <CardListButtonStyled>Xem thêm các chỗ nghỉ (TP.Hồ Chí Minh)</CardListButtonStyled>
                    </CardListButtonWrapperStyled>
                  </CardListWrapperStyled>
                </TabPanel>
                <TabPanel value='2' sx={{padding: '0 3rem 3rem 3rem'}}>
                    2
                </TabPanel>
                <TabPanel value='3' sx={{padding: '0 3rem 3rem 3rem'}}>
                    3
                </TabPanel>
                <TabPanel value='4' sx={{padding: '0 3rem 3rem 3rem'}}>
                    4
                </TabPanel>
                <TabPanel value='5' sx={{padding: '0 3rem 3rem 3rem'}}>
                    5
                </TabPanel>
              </TrendingListWrapperStyled>
            </TabContext>
          </Box>
    </TrendingListContainerStyled>
  )
}

export default TrendingList