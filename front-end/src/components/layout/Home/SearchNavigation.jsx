import React, { useState } from 'react'
import styled from 'styled-components'
import video from '../../../assets/Cinematic.mp4'
import {Box}from "@mui/material";
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { CssBaseline } from '@mui/material'
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RowingOutlinedIcon from '@mui/icons-material/RowingOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { optionsData } from '../../../dummyData';
import SearchNavigationInput from '../../child/SearchNavigationInput';
const SearchNavigationStyled = styled.div`
  min-height: 100vh;
  width: 100vw;
`
const SearchNavigationVideoWrapperStyled = styled.div`
  position: relative;
  min-height: 60vh;
  width: 100vw;
  overflow: hidden;
`
const SearchNavigationVideoStyled = styled.video`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
`
const SearchNavigationVideoSourceStyled = styled.source``
const SearchNavigationInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const SearchNavigationBarStyled = styled.div`
  position: relative;
  border-radius: .4rem;
  padding-top: .2rem;
  padding: 0 1rem;
  height: 8.4vh;
  width: 68vw;
  bottom: 2rem;
  right: -5.7rem;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const SearchNavigationInputContainerStyled = styled.div`
  position: absolute;
  border-radius: 1rem;
  height: ${props => props.valueCheck === "2" ? "50vh" : "38vh"};
  width: 80vw;
  bottom: 2rem;
  right: 10rem;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const SearchNavigationActivitiesContainerStyled = styled.div``
const SearchNavigationActivitiesInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: .4rem;
  padding: .4rem;
  margin-top: 1rem;
`
const SearchNavigationActivitiesInputStyled = styled.input`
  width: 100%;
  padding: .6rem 1.2rem;
  font-size: 1.1rem;
  border-radius: .4rem;
  outline: none;
  border: none;
`
const SearchNavigationSubmitButtomStyled = styled.button`
  position: absolute;
  padding: 1rem 18rem;
  top: 18rem;
  right: 18rem;
  outline: none;
  border-radius: .4rem;
  border: none;
  background-color: rgb(83, 146, 249);
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px 1px;
  transition: all ease-in-out .1s;
  &:hover{
    background-color: rgb(135, 179, 251);
  }
`
const SearchBonusNavigationContainerStyled = styled.div``
const SearchBonusNavigationWrapperStyled = styled.div``
const SearchBonusNavigationTopStyled = styled.div`
  display: flex;
`
const SearchBonusNavigationTopLeftStyled = styled.div`
  display: flex;
  border-radius: .2rem;
  background-color: rgb(83, 146, 249);
  padding: .6rem .8rem;
  margin-left: .8rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const SearchBonusNavigationButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  color: #fff;
`
const SearchBonusNavigationBottomStyled = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: .8rem;
`
const SearchBonusNavigationBottomLeftStyled = styled.div`
  flex: 1;
`
const SearchBonusNavigationBottomLeftInputContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #ccc;
  border-radius: .4rem;
  width: 34vw;
  padding: .4rem;
  margin-top: 1rem;
`
const SearchBonusNavigationBottomLeftInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const SearchBonusNavigationBottomLeftMiddleInputStyled = styled.div`
  height: 1.8rem;
  width: .06rem;
  margin: 0 1rem;
  background-color: #ccc;
`
const SearchBonusNavigationInputStyled = styled.input`
  width: 100%;
  height: 100%;
  padding: .6rem 1.2rem;
  font-size: 1.1rem;
  border-radius: .4rem;
  outline: none;
  border: none;
`
const SearchBonusNavigationBottomRightStyled = styled.div`
  flex: 1;
`
const SearchNavigation = () => {
  const [valueIndex, setValueIndex] = useState("1");
  const handleChangePage = (e, newValue) =>{
    setValueIndex(newValue);
  }
  return (
    <SearchNavigationStyled>
      <SearchNavigationVideoWrapperStyled>
        <SearchNavigationVideoStyled autoPlay muted playsInline>
          <SearchNavigationVideoSourceStyled src={video} type="video/mp4"/>
        </SearchNavigationVideoStyled>
      </SearchNavigationVideoWrapperStyled>
      <SearchNavigationInputWrapperStyled>
          <CssBaseline />
          <Box>
            <TabContext value={valueIndex}>
              <SearchNavigationInputContainerStyled valueCheck={valueIndex}>
                <SearchNavigationBarStyled>
                  <Box sx={{height: '100%'}}>
                    <TabList onChange={handleChangePage} variant='fullWidth'>
                      <Tab icon={<ApartmentOutlinedIcon />} label="Khách sạn & Nhà" value="1" />
                      <Tab icon={<AirplaneTicketOutlinedIcon />} label="Chuyến bay & K.sạn" value="2" />
                      <Tab icon={<HomeWorkOutlinedIcon />} label="Chổ ở riêng" value="3" />
                      <Tab icon={<CalendarMonthOutlinedIcon />} label="Ở dài ngày" value="4" />
                      <Tab icon={<RowingOutlinedIcon />} label="Hoạt động" value="5" />
                    </TabList>
                  </Box>
                </SearchNavigationBarStyled>
                <TabPanel value='1'>
                  <SearchNavigationInput optionsData={optionsData}/>
                </TabPanel>
                <TabPanel value='2'>
                  <SearchBonusNavigationContainerStyled>
                    <SearchBonusNavigationWrapperStyled>
                      <SearchBonusNavigationTopStyled>
                        <SearchBonusNavigationTopLeftStyled>
                          <SearchBonusNavigationButtonStyled>Khứ hồi</SearchBonusNavigationButtonStyled>
                          <KeyboardArrowDownOutlinedIcon sx={{color: '#fff'}}/>
                        </SearchBonusNavigationTopLeftStyled>
                        <SearchBonusNavigationTopLeftStyled>
                          <SearchBonusNavigationButtonStyled>Phổ thông</SearchBonusNavigationButtonStyled>
                          <KeyboardArrowDownOutlinedIcon sx={{color: '#fff'}}/>
                        </SearchBonusNavigationTopLeftStyled>
                      </SearchBonusNavigationTopStyled>
                      <SearchBonusNavigationBottomStyled>
                        <SearchBonusNavigationBottomLeftStyled>
                          <SearchBonusNavigationBottomLeftInputContainerStyled>
                            <SearchBonusNavigationBottomLeftInputWrapperStyled>
                              <FlightOutlinedIcon />
                              <SearchBonusNavigationInputStyled />
                            </SearchBonusNavigationBottomLeftInputWrapperStyled>
                            <SearchBonusNavigationBottomLeftMiddleInputStyled />
                            <SearchBonusNavigationBottomLeftInputWrapperStyled>
                              <FlightOutlinedIcon />
                              <SearchBonusNavigationInputStyled />
                            </SearchBonusNavigationBottomLeftInputWrapperStyled>
                          </SearchBonusNavigationBottomLeftInputContainerStyled>
                          <SearchBonusNavigationBottomLeftInputContainerStyled>
                            <FlightOutlinedIcon />
                            <SearchBonusNavigationInputStyled />
                          </SearchBonusNavigationBottomLeftInputContainerStyled>
                          <SearchBonusNavigationBottomLeftInputContainerStyled>
                            <FlightOutlinedIcon />
                            <SearchBonusNavigationInputStyled />
                          </SearchBonusNavigationBottomLeftInputContainerStyled>
                        </SearchBonusNavigationBottomLeftStyled>
                        <SearchBonusNavigationBottomRightStyled>
                          <SearchBonusNavigationBottomLeftInputContainerStyled>
                            <FlightOutlinedIcon />
                            <SearchBonusNavigationInputStyled />
                          </SearchBonusNavigationBottomLeftInputContainerStyled>
                          <SearchBonusNavigationBottomLeftInputContainerStyled>
                            <FlightOutlinedIcon />
                            <SearchBonusNavigationInputStyled />
                          </SearchBonusNavigationBottomLeftInputContainerStyled>
                          <SearchBonusNavigationBottomLeftInputContainerStyled>
                            <FlightOutlinedIcon />
                            <SearchBonusNavigationInputStyled />
                          </SearchBonusNavigationBottomLeftInputContainerStyled>
                        </SearchBonusNavigationBottomRightStyled>
                      </SearchBonusNavigationBottomStyled>
                    </SearchBonusNavigationWrapperStyled>
                  </SearchBonusNavigationContainerStyled>
                </TabPanel>
                <TabPanel value='3'>
                  <SearchNavigationInput optionsData={optionsData}/>
                </TabPanel>
                <TabPanel value='4'>
                  <SearchNavigationInput optionsData={optionsData}/> 
                </TabPanel>
                <TabPanel value='5'>
                  <SearchNavigationActivitiesContainerStyled>
                    <SearchNavigationActivitiesInputWrapperStyled>
                      <SearchOutlinedIcon />
                      <SearchNavigationActivitiesInputStyled placeholder='Tìm theo thành phố' />
                    </SearchNavigationActivitiesInputWrapperStyled>
                    <SearchNavigationSubmitButtomStyled>
                      TÌM
                    </SearchNavigationSubmitButtomStyled>
                  </SearchNavigationActivitiesContainerStyled>
                </TabPanel>
              </SearchNavigationInputContainerStyled>
            </TabContext>
          </Box>
      </SearchNavigationInputWrapperStyled>
    </SearchNavigationStyled>
  )
}

export default SearchNavigation