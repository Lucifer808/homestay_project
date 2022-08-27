import React, { useState } from 'react';
import styled from 'styled-components';
import video from '../../../assets/Cinematic.mp4';
import {Box}from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { CssBaseline } from '@mui/material';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RowingOutlinedIcon from '@mui/icons-material/RowingOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import * as rdrLocales from 'react-date-range/dist/locale';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { optionsData } from '../../../dummyData';
import SearchNavigationInput from '../../child/SearchNavigationInput';
import { format, addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
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
  right: -4.2rem;
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
const SearchBonusNavigationWrapperStyled = styled.div`
`
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
  width: 36vw;
  padding: .2rem .4rem;
  margin-top: 1rem;
`
const SearchBonusNavigationBottomLeftInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`
const SearchBonusNavigationBottomLeftMiddleInputStyled = styled.div`
  position: absolute;
  height: 2rem;
  border-radius: .2rem;
  padding: .2rem;
  border: .05rem solid #ccc;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  ${({ rotate }) => rotate === "true" && `transform: rotate(360deg)`};
  background-color: #fff;
  cursor: pointer;
  &:hover{
    background-color: rgb(104, 160, 251);
  }
`
const SearchBonusNavigationBottomLeftMiddleWrapperInputStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: .02rem;
  margin: 0 1rem;
  background-color: #ccc;
`
const SearchBonusNavigationInputWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  height: auto;
`
const SearchBonusNavigationInputStyled = styled.input`
  width: 100%;
  height: 100%;
  padding: .6rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  border-radius: .4rem;
  outline: none;
  border: none;
  ::placeholder{
    color: #000;
  }
`
const SearchBonusNavigationInputTopContentStyled = styled.span`
  position: absolute;
  font-size: .9rem;
  color: #888;
  margin-left: .6rem;
  margin-bottom: 1.6rem;
`
const SearchBonusNavigationBottomRightStyled = styled.div`
  flex: 1;
`
const SearchBonusNavigationBottomRightDateRangeContainerStyled = styled.div`
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #ccc;
  border-radius: .4rem;
  width: 36vw;
  padding: .2rem .4rem;
  margin-top: 1rem;
`
const SearchBonusNavigationBottomRightDateRangeWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`
const SearchBonusNavigationDateRangeWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  height: auto;
`
const SearchBonusNavigationInputDateRangeStyled = styled.input`
  width: 100%;
  height: 100%;
  padding: .6rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  border-radius: .4rem;
  outline: none;
  border: none;
  cursor: pointer;
  ::placeholder{
    color: #000;
  }
`
const SearchBonusNavigationDateRangeTopContentStyled = styled.span`
  position: absolute;
  font-size: .9rem;
  color: #888;
  margin-left: .6rem;
  margin-bottom: 1.6rem;
`
const SearchBonusNavigationInputCalendarStyled = styled.div`
  position: absolute;
  margin: 5.6rem 0 0 14.4rem;
  z-index: 99;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const SearchBonusNavigationBottomLeftStayingAtWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 1rem;
  padding: .3rem 0;
  width: 100%;
  height: 100%;
`
const SearchBonusNavigationStayingAtInputWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`
const SearchBonusNavigationStayingAtInputStyled = styled.input`
  width: 100%;
  height: 100%;
  padding: .6rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  border-radius: .4rem;
  outline: none;
  border: none;
  ::placeholder{
    color: #000;
  }
`
const SearchBonusNavigationStayingAtInputTopContentStyled = styled.span`
  position: absolute;
  font-size: .9rem;
  color: #888;
  margin-left: .6rem;
  margin-bottom: 1.6rem;
`
const SearchBonusNavigationInputCalendarBottomStyled = styled.div`
  position: absolute;
  margin: 11rem 0 0 14.4rem;
  z-index: 99;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const SearchBonusNavigationBottomLeftPassengersInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`
const SearchBonusNavigationPassengersInputWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  height: auto;
`
const SearchBonusNavigationPassengersInputStyled = styled.input`
  width: 100%;
  height: 100%;
  padding: .6rem;
  font-size: 1.1rem;
  border-radius: .4rem;
  outline: none;
  border: none;
  cursor: pointer;
  ::placeholder{
    color: #000;
  }
`
const SearchBonusNavigationBottomLeftRoomInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`
const SearchBonusNavigationRoomInputWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  height: auto;
`
const SearchBonusNavigationRoomInputStyled = styled.input`
  width: 100%;
  height: 100%;
  padding: .6rem;
  font-size: 1.1rem;
  border-radius: .4rem;
  outline: none;
  border: none;
  cursor: pointer;
  ::placeholder{
    color: #000;
  }
`
const SearchBonusNavigationBottomRightCheckboxWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.3rem 1rem;
  cursor: pointer;
  &:hover{
    color: rgb(104, 160, 251);
  }
`
const SearchBonusNavigationBottomRightCheckboxStyled = styled.input``
const SearchBonusNavigationBottomRightCheckboxContentStyled = styled.span`
  margin-left: 1rem;
`
const SearchNavigation = () => {
  const [openDateFlying, setOpenDateFlying] = useState(false);
  const [openDateStaying, setOpenDateStaying] = useState(false);
  const [valueIndex, setValueIndex] = useState("1");
  const [isChecked, setIsChecked] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleClick = () => setRotate((prevState) => (!prevState ));
  const handleChangePage = (e, newValue) =>{
    setValueIndex(newValue);
  }
  const [dateFlying, setDateFlying] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  const [dateStaying, setDateStaying] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  const handleOpenDateFlying = () =>{
    if(openDateStaying === true){
      setOpenDateStaying(false);
      setOpenDateFlying(!openDateFlying);
    }
    setOpenDateFlying(!openDateFlying)
  }
  console.log(openDateStaying)
  const handleChecked = () =>{
    return;
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
                <TabPanel value='1' sx={{paddingTop: '0'}}>
                  <SearchNavigationInput optionsData={optionsData}/>
                </TabPanel>
                <TabPanel value='2' sx={{paddingTop: '0'}}>
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
                              <SearchBonusNavigationInputWrapperStyled>
                                <SearchBonusNavigationInputStyled placeholder='Hồ Chí Minh (SGN)'/>
                                <SearchBonusNavigationInputTopContentStyled>Bay từ</SearchBonusNavigationInputTopContentStyled>
                              </SearchBonusNavigationInputWrapperStyled>
                            </SearchBonusNavigationBottomLeftInputWrapperStyled>
                            <SearchBonusNavigationBottomLeftMiddleWrapperInputStyled>
                              <SearchBonusNavigationBottomLeftMiddleInputStyled rotate={rotate.toString()} onClick={handleClick}>
                                <ChangeCircleOutlinedIcon sx={{color: '#000', "&:hover": { color: '#fff' } }}/>
                              </SearchBonusNavigationBottomLeftMiddleInputStyled>
                            </SearchBonusNavigationBottomLeftMiddleWrapperInputStyled>
                            <SearchBonusNavigationBottomLeftInputWrapperStyled>
                              <PlaceOutlinedIcon />
                              <SearchBonusNavigationInputWrapperStyled>
                                <SearchBonusNavigationInputStyled placeholder='Singapore (SIN)'/>
                                <SearchBonusNavigationInputTopContentStyled>Bay đến</SearchBonusNavigationInputTopContentStyled>
                              </SearchBonusNavigationInputWrapperStyled>
                            </SearchBonusNavigationBottomLeftInputWrapperStyled>
                          </SearchBonusNavigationBottomLeftInputContainerStyled>
                          <SearchBonusNavigationBottomLeftInputContainerStyled>
                            <SearchBonusNavigationBottomLeftStayingAtWrapperStyled>
                              <ApartmentOutlinedIcon />
                              <SearchBonusNavigationStayingAtInputWrapperStyled>
                                <SearchBonusNavigationStayingAtInputStyled placeholder='Nhập địa điểm du lịch hoặc tên khách sạn'/>
                                <SearchBonusNavigationStayingAtInputTopContentStyled>Nơi ở</SearchBonusNavigationStayingAtInputTopContentStyled>
                              </SearchBonusNavigationStayingAtInputWrapperStyled>
                            </SearchBonusNavigationBottomLeftStayingAtWrapperStyled>
                          </SearchBonusNavigationBottomLeftInputContainerStyled>
                          <SearchBonusNavigationBottomLeftInputContainerStyled>
                          <SearchBonusNavigationBottomLeftPassengersInputWrapperStyled>
                              <GroupOutlinedIcon />
                              <SearchBonusNavigationPassengersInputWrapperStyled>
                                <SearchBonusNavigationPassengersInputStyled placeholder='1 Phòng'/>
                              </SearchBonusNavigationPassengersInputWrapperStyled>
                          </SearchBonusNavigationBottomLeftPassengersInputWrapperStyled>
                          <SearchBonusNavigationBottomLeftMiddleWrapperInputStyled />
                          <SearchBonusNavigationBottomLeftRoomInputWrapperStyled>
                            <SensorDoorOutlinedIcon />
                            <SearchBonusNavigationRoomInputWrapperStyled>
                              <SearchBonusNavigationRoomInputStyled placeholder='2 Người Lớn'/>
                            </SearchBonusNavigationRoomInputWrapperStyled>
                          </SearchBonusNavigationBottomLeftRoomInputWrapperStyled>
                          </SearchBonusNavigationBottomLeftInputContainerStyled>
                        </SearchBonusNavigationBottomLeftStyled>
                        <SearchBonusNavigationBottomRightStyled>
                          <SearchBonusNavigationBottomRightDateRangeContainerStyled onClick={handleOpenDateFlying}>
                              <SearchBonusNavigationBottomRightDateRangeWrapperStyled>
                                <CalendarTodayOutlinedIcon />
                                <SearchBonusNavigationDateRangeWrapperStyled>
                                  <SearchBonusNavigationInputDateRangeStyled placeholder={`${format(dateFlying[0].startDate, "dd/MM/yyyy")}`}/>
                                  <SearchBonusNavigationDateRangeTopContentStyled>Ngày đi</SearchBonusNavigationDateRangeTopContentStyled>
                                </SearchBonusNavigationDateRangeWrapperStyled>
                              </SearchBonusNavigationBottomRightDateRangeWrapperStyled>
                              <SearchBonusNavigationBottomLeftMiddleWrapperInputStyled />
                              <SearchBonusNavigationBottomRightDateRangeWrapperStyled>
                                <CalendarTodayOutlinedIcon />
                                <SearchBonusNavigationDateRangeWrapperStyled>
                                  <SearchBonusNavigationInputDateRangeStyled placeholder={`${format(dateFlying[0].endDate, "dd/MM/yyyy")}`}/>
                                  <SearchBonusNavigationDateRangeTopContentStyled>Ngày về</SearchBonusNavigationDateRangeTopContentStyled>
                                </SearchBonusNavigationDateRangeWrapperStyled>
                              </SearchBonusNavigationBottomRightDateRangeWrapperStyled>
                            </SearchBonusNavigationBottomRightDateRangeContainerStyled>
                            <SearchBonusNavigationBottomRightDateRangeContainerStyled  onClick={() => setOpenDateStaying(!openDateStaying)}>
                              <SearchBonusNavigationBottomRightDateRangeWrapperStyled>
                                <CalendarTodayOutlinedIcon />
                                <SearchBonusNavigationDateRangeWrapperStyled>
                                  <SearchBonusNavigationInputDateRangeStyled placeholder={`${format(dateStaying[0].startDate, "dd/MM/yyyy")}`}/>
                                  <SearchBonusNavigationDateRangeTopContentStyled>Nhận phòng</SearchBonusNavigationDateRangeTopContentStyled>
                                </SearchBonusNavigationDateRangeWrapperStyled>
                              </SearchBonusNavigationBottomRightDateRangeWrapperStyled>
                              <SearchBonusNavigationBottomLeftMiddleWrapperInputStyled />
                              <SearchBonusNavigationBottomRightDateRangeWrapperStyled>
                                <CalendarTodayOutlinedIcon />
                                <SearchBonusNavigationDateRangeWrapperStyled>
                                  <SearchBonusNavigationInputDateRangeStyled placeholder={`${format(dateStaying[0].endDate, "dd/MM/yyyy")}`}/>
                                  <SearchBonusNavigationDateRangeTopContentStyled>Trả phòng</SearchBonusNavigationDateRangeTopContentStyled>
                                </SearchBonusNavigationDateRangeWrapperStyled>
                              </SearchBonusNavigationBottomRightDateRangeWrapperStyled>
                            </SearchBonusNavigationBottomRightDateRangeContainerStyled>
                            <SearchBonusNavigationBottomRightDateRangeContainerStyled>
                              <SearchBonusNavigationBottomRightCheckboxWrapperStyled onClick={() => setIsChecked(!isChecked)}>
                                <SearchBonusNavigationBottomRightCheckboxStyled type="checkbox" checked={isChecked} onChange={handleChecked}/>
                                <SearchBonusNavigationBottomRightCheckboxContentStyled>Tìm khách sạn ở thành phố theo ngày</SearchBonusNavigationBottomRightCheckboxContentStyled>
                              </SearchBonusNavigationBottomRightCheckboxWrapperStyled>
                            </SearchBonusNavigationBottomRightDateRangeContainerStyled>
                        </SearchBonusNavigationBottomRightStyled>
                        <SearchBonusNavigationInputCalendarStyled>
                          {openDateFlying && (
                            <DateRangePicker
                            onChange={date => setDateFlying([date.selection])}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            ranges={dateFlying}
                            direction="horizontal"
                            preventSnapRefocus={true}
                            calendarFocus="backwards"
                            locale={rdrLocales.vi}
                          />
                          )}
                        </SearchBonusNavigationInputCalendarStyled>
                        <SearchBonusNavigationInputCalendarBottomStyled>
                          {openDateStaying && (
                            <DateRangePicker
                            onChange={date => setDateStaying([date.selection])}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            ranges={dateStaying}
                            direction="horizontal"
                            preventSnapRefocus={true}
                            calendarFocus="backwards"
                            locale={rdrLocales.vi}
                          />
                          )}
                        </SearchBonusNavigationInputCalendarBottomStyled>
                      </SearchBonusNavigationBottomStyled>
                    </SearchBonusNavigationWrapperStyled>
                  </SearchBonusNavigationContainerStyled>
                </TabPanel>
                <TabPanel value='3' sx={{paddingTop: '0'}}>
                  <SearchNavigationInput optionsData={optionsData}/>
                </TabPanel>
                <TabPanel value='4' sx={{paddingTop: '0'}}>
                  <SearchNavigationInput optionsData={optionsData}/> 
                </TabPanel>
                <TabPanel value='5' sx={{paddingTop: '0'}}>
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