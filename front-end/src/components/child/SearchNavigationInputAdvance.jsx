import React, { useState } from 'react';
import styled from 'styled-components';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import * as rdrLocales from 'react-date-range/dist/locale';
import { format, addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
const SearchBonusNavigationContainerStyled = styled.div`
  transition: all linear .2s;
`
const SearchBonusNavigationWrapperStyled = styled.div`
`
const SearchBonusNavigationTopStyled = styled.div`
  display: flex;
`
const SearchBonusNavigationTopLeftWayStyled = styled.div`
  position: relative;
  display: flex;
  border-radius: .2rem;
  background-color: rgb(83, 146, 249);
  padding: .6rem .8rem;
  margin-left: .8rem;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover{
    background-color: rgb(134, 179, 251);
  }
`
const SearchBonusNavigationTopLeftWayOptionContainerStyled = styled.div`
  position: absolute;
  border-radius: .4rem;
  margin-top: 3.5rem;
  z-index: 10;
  height: auto;
  width: 11rem;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all ease-in-out .2s;
  &::before{
    content: "";
    position: absolute;
    height: 2rem;
    width: .1rem;
    top: -2rem;
    left: .4rem;
    border-width: 0 1rem .8rem;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
  }
`
const SearchBonusNavigationTopLeftWayOptionWrapperStyled = styled.div`
  padding: .4rem;
  width: 100%;
`
const SearchBonusNavigationTopLeftWayOptionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: .4rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:hover{
    color: rgb(83, 146, 249);
  }
`
const SearchBonusNavigationTopLeftWayOptionSelectStyled = styled.span``
const SearchBonusNavigationTopLeftClassStyled = styled.div`
  position: relative;
  display: flex;
  border-radius: .2rem;
  background-color: rgb(83, 146, 249);
  padding: .6rem .8rem;
  margin-left: .8rem;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover{
    background-color: rgb(134, 179, 251);
  }
`
const SearchBonusNavigationTopLeftClassOptionContainerStyled = styled.div`
  display: flex;
  position: absolute;
  border-radius: .4rem;
  margin-top: 3.5rem;
  margin-left: 8rem;
  z-index: 10;
  width: 16rem;
  height: auto;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all ease-in-out .2s;
  &::before{
    content: "";
    position: absolute;
    height: 2rem;
    width: .1rem;
    top: -2rem;
    left: .4rem;
    border-width: 0 1rem .8rem;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
  }
`
const SearchBonusNavigationTopLeftClassOptionWrapperStyled = styled.div`
  padding: .4rem;
  width: 100%;
`
const SearchBonusNavigationTopLeftClassOptionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: .8rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:hover{
    color: rgb(83, 146, 249);
  }
`
const SearchBonusNavigationTopLeftClassOptionSelectStyled = styled.span``

const SearchBonusNavigationButtonStyled = styled.button`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  font-size: 1rem;
  cursor: pointer;
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
  background-color: rgb(104, 160, 251);
  cursor: pointer;
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
  cursor: pointer;
`
const SearchBonusNavigationPassengersInputWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  height: auto;
`
const SearchBonusNavigationPassengersInputStyled = styled.p`
  padding-left: .6rem;
  font-size: 1.1rem;
  cursor: pointer;
`
const SearchBonusNavigationBottomLeftRoomInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5rem;
  cursor: pointer;
`
const SearchBonusNavigationRoomInputWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  height: auto;
`
const SearchBonusNavigationRoomInputStyled = styled.p`
  padding: 0 2rem 0 .6rem;
  font-size: 1.1rem;
`
const SearchBonusNavigationBottomRightCheckboxWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.3rem 1.2rem;
  cursor: pointer;
  &:hover{
    color: rgb(104, 160, 251);
  }
`
const SearchBonusNavigationBottomRightCheckboxStyled = styled.input`
  user-select: none;
`
const SearchBonusNavigationBottomRightCheckboxContentStyled = styled.span`
  margin-left: 1rem;
`
const SearchNavigationBonusButtonStyled = styled.button`
  position: absolute;
  padding: 1rem 18rem;
  top: ${props => props.checkedOpen === true ? '25rem' : '20rem'};
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
const SearchNavigationOptionDetailLeftWrapperStyled = styled.div`
  position: absolute;
  background-color: #fff;
  z-index: 10;
  margin-top: 20.1rem;
  width: 100%;
  padding: .8rem .6rem;
  border-radius: .4rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all ease-in-out .2s;
  &::before{
    content: "";
    position: absolute;
    height: 2rem;
    width: .1rem;
    top: -2rem;
    left: .4rem;
    border-width: 0 1rem .8rem;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
  }
`
const SearchNavigationOptionDetailStyled = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: space-between;
  padding: .8rem 2.8rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: all .1s linear;
`
const SearchNavigationOptionDetailQuantityStyled = styled.span`
  font-size: 1.6rem;
  color: rgb(57, 116, 210);
`
const SearchNavigationOptionDetailContentStyled = styled.span`
  color: #888;
`
const SearchNavigationOptionDetailContentWrapperStyled = styled.div`
`
const SearchNavigationOptionDetailRightContainerStyled = styled.div`
  position: absolute;
  background-color: #fff;
  z-index: 10;
  margin-top: 27.4rem;
  width: 100%;
  padding: .8rem .6rem;
  border-radius: .4rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all ease-in-out .2s;
  &::before{
    content: "";
    position: absolute;
    height: 2rem;
    width: .1rem;
    top: -2rem;
    left: 18rem;
    border-width: 0 1rem .8rem;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
  }
`
const SearchNavigationOptionDetailRightWrapperStyled = styled.div`
  padding: .4rem 0;
`
const SearchBonusNavigationTopLeftRoomOptionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: .8rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:hover{
    color: rgb(83, 146, 249);
  }
`
const SearchBonusNavigationTopLeftRoomOptionSelectStyled = styled.span``
const SearchNavigationInputAdvance = () => {
    const [openDateFlying, setOpenDateFlying] = useState(false);
    const [openDateStaying, setOpenDateStaying] = useState(false);
    const [openWay, setOpenWay] = useState(false);
    const [openClass, setOpenClass] = useState(false);
    const [openQuantity, setOpenQuantity] = useState(false);
    const [openRoom, setOpenRoom] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [rotate, setRotate] = useState(false);
    const handleClick = () => setRotate((prevState) => (!prevState ));
    const openMenuWay = ()=>{
    if(openClass || openDateFlying || openDateStaying || openQuantity || openRoom){
        setOpenClass(false);
        setOpenDateFlying(false);
        setOpenDateStaying(false);
        setOpenQuantity(false);
        setOpenRoom(false);
        setOpenWay(true);
    }else{
        setOpenWay(!openWay);
    }
    }
    const openMenuClass = ()=>{
    if(openWay || openDateFlying || openDateStaying || openQuantity || openRoom){
        setOpenDateFlying(false);
        setOpenDateStaying(false);
        setOpenWay(false);
        setOpenRoom(false);
        setOpenQuantity(false);
        setOpenClass(true);
    }else{
        setOpenClass(!openClass);
    }
    }
    const handleOpenDateFlying = () =>{
    if(openClass || openWay || openDateStaying || openQuantity || openRoom){
        setOpenDateStaying(false);
        setOpenClass(false);
        setOpenWay(false);
        setOpenRoom(false);
        setOpenQuantity(false);
        setOpenDateFlying(true);
    }else{
        setOpenDateFlying(!openDateFlying)
    }
    }
    const handleOpenDateStaying = () =>{
    if(openClass || openWay || openDateFlying || openQuantity || openRoom){
        setOpenDateFlying(false);
        setOpenClass(false);
        setOpenQuantity(false);
        setOpenRoom(false);
        setOpenWay(false);
        setOpenDateStaying(true);
    }else{
        setOpenDateStaying(!openDateStaying)
    }
    }
    const openMenuQuantity = () =>{
    if(openClass || openWay || openDateFlying || openDateStaying || openRoom){
        setOpenDateFlying(false);
        setOpenClass(false);
        setOpenWay(false);
        setOpenRoom(false);
        setOpenDateStaying(false);
        setOpenQuantity(true);
    }else{
        setOpenQuantity(!openQuantity);
    }
    }
    const openMenuRoom = () =>{
    if(openClass || openWay || openDateFlying || openDateStaying || openQuantity){
        setOpenDateFlying(false);
        setOpenClass(false);
        setOpenWay(false);
        setOpenDateStaying(false);
        setOpenQuantity(false);
        setOpenRoom(true);
    }else{
        setOpenRoom(!openRoom);
    }
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
    const handleChecked = () =>{
    return;
    }
  return (
    <>
        <SearchBonusNavigationContainerStyled>
                    <SearchBonusNavigationWrapperStyled>
                      <SearchBonusNavigationTopStyled>
                        <SearchBonusNavigationTopLeftWayStyled onClick={openMenuWay}>
                          <SearchBonusNavigationButtonStyled>Khứ hồi</SearchBonusNavigationButtonStyled>
                          <KeyboardArrowDownOutlinedIcon sx={{color: '#fff'}}/>
                        </SearchBonusNavigationTopLeftWayStyled>
                        {openWay && (
                        <SearchBonusNavigationTopLeftWayOptionContainerStyled>
                          <SearchBonusNavigationTopLeftWayOptionWrapperStyled>
                            <SearchBonusNavigationTopLeftWayOptionStyled>
                              <SearchBonusNavigationTopLeftWayOptionSelectStyled>Một chiều</SearchBonusNavigationTopLeftWayOptionSelectStyled>
                              <CheckOutlinedIcon />
                            </SearchBonusNavigationTopLeftWayOptionStyled>
                            <SearchBonusNavigationTopLeftWayOptionStyled>
                              <SearchBonusNavigationTopLeftWayOptionSelectStyled>Khứ hồi</SearchBonusNavigationTopLeftWayOptionSelectStyled>
                              <CheckOutlinedIcon />
                            </SearchBonusNavigationTopLeftWayOptionStyled>
                          </SearchBonusNavigationTopLeftWayOptionWrapperStyled>
                        </SearchBonusNavigationTopLeftWayOptionContainerStyled>
                        )}
                        <SearchBonusNavigationTopLeftClassStyled onClick={openMenuClass}>
                          <SearchBonusNavigationButtonStyled>Phổ thông</SearchBonusNavigationButtonStyled>
                          <KeyboardArrowDownOutlinedIcon sx={{color: '#fff'}}/>
                        </SearchBonusNavigationTopLeftClassStyled>
                        {openClass && (
                        <SearchBonusNavigationTopLeftClassOptionContainerStyled>
                          <SearchBonusNavigationTopLeftClassOptionWrapperStyled>
                            <SearchBonusNavigationTopLeftClassOptionStyled>
                              <SearchBonusNavigationTopLeftClassOptionSelectStyled>Phổ thông</SearchBonusNavigationTopLeftClassOptionSelectStyled>
                              <CheckOutlinedIcon />
                            </SearchBonusNavigationTopLeftClassOptionStyled>
                            <SearchBonusNavigationTopLeftClassOptionStyled>
                              <SearchBonusNavigationTopLeftClassOptionSelectStyled>Phổ thông cao cấp</SearchBonusNavigationTopLeftClassOptionSelectStyled>
                              <CheckOutlinedIcon />
                            </SearchBonusNavigationTopLeftClassOptionStyled>
                            <SearchBonusNavigationTopLeftClassOptionStyled>
                              <SearchBonusNavigationTopLeftClassOptionSelectStyled>Thương gia</SearchBonusNavigationTopLeftClassOptionSelectStyled>
                              <CheckOutlinedIcon />
                            </SearchBonusNavigationTopLeftClassOptionStyled>
                            <SearchBonusNavigationTopLeftClassOptionStyled>
                              <SearchBonusNavigationTopLeftClassOptionSelectStyled>Hạng nhất</SearchBonusNavigationTopLeftClassOptionSelectStyled>
                              <CheckOutlinedIcon />
                            </SearchBonusNavigationTopLeftClassOptionStyled>
                          </SearchBonusNavigationTopLeftClassOptionWrapperStyled>
                        </SearchBonusNavigationTopLeftClassOptionContainerStyled>
                        ) }
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
                                <ChangeCircleOutlinedIcon sx={{color: '#fff'}}/>
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
                          { isChecked && (
                          <SearchBonusNavigationBottomLeftInputContainerStyled>
                            <SearchBonusNavigationBottomLeftStayingAtWrapperStyled>
                              <ApartmentOutlinedIcon />
                              <SearchBonusNavigationStayingAtInputWrapperStyled>
                                <SearchBonusNavigationStayingAtInputStyled placeholder='Nhập địa điểm du lịch hoặc tên khách sạn'/>
                                <SearchBonusNavigationStayingAtInputTopContentStyled>Nơi ở</SearchBonusNavigationStayingAtInputTopContentStyled>
                              </SearchBonusNavigationStayingAtInputWrapperStyled>
                            </SearchBonusNavigationBottomLeftStayingAtWrapperStyled>
                          </SearchBonusNavigationBottomLeftInputContainerStyled>
                          )}
                          <SearchBonusNavigationBottomLeftInputContainerStyled>
                            <SearchBonusNavigationBottomLeftPassengersInputWrapperStyled onClick={openMenuQuantity}>
                                <GroupOutlinedIcon />
                                <SearchBonusNavigationPassengersInputWrapperStyled>
                                  <SearchBonusNavigationPassengersInputStyled>2 Hành khách</SearchBonusNavigationPassengersInputStyled>
                                </SearchBonusNavigationPassengersInputWrapperStyled>
                            </SearchBonusNavigationBottomLeftPassengersInputWrapperStyled>
                            <SearchBonusNavigationBottomLeftMiddleWrapperInputStyled style={{marginLeft: '5rem'}}/>
                            <SearchBonusNavigationBottomLeftRoomInputWrapperStyled onClick={openMenuRoom}>
                              <SensorDoorOutlinedIcon />
                              <SearchBonusNavigationRoomInputWrapperStyled>
                                <SearchBonusNavigationRoomInputStyled>1 Phòng</SearchBonusNavigationRoomInputStyled>
                              </SearchBonusNavigationRoomInputWrapperStyled>
                            </SearchBonusNavigationBottomLeftRoomInputWrapperStyled>
                            {openQuantity && (
                              <SearchNavigationOptionDetailLeftWrapperStyled>
                                <SearchNavigationOptionDetailStyled>
                                  <RemoveIcon />
                                    <SearchNavigationOptionDetailContentWrapperStyled>
                                      <SearchNavigationOptionDetailQuantityStyled>3 </SearchNavigationOptionDetailQuantityStyled>
                                      <SearchNavigationOptionDetailContentStyled>Người lớn (12 tuổi trở lên)</SearchNavigationOptionDetailContentStyled>
                                    </SearchNavigationOptionDetailContentWrapperStyled>
                                  <AddIcon sx={{ "&:hover": { color: "rgb(135, 179, 251)" } }}/>
                                </SearchNavigationOptionDetailStyled>
                                <SearchNavigationOptionDetailStyled>
                                  <RemoveIcon />
                                    <SearchNavigationOptionDetailContentWrapperStyled>
                                      <SearchNavigationOptionDetailQuantityStyled>0 </SearchNavigationOptionDetailQuantityStyled>
                                      <SearchNavigationOptionDetailContentStyled>Trẻ em (2-11 tuổi)</SearchNavigationOptionDetailContentStyled>
                                    </SearchNavigationOptionDetailContentWrapperStyled>
                                  <AddIcon sx={{ "&:hover": { color: "rgb(135, 179, 251)" } }}/>
                                </SearchNavigationOptionDetailStyled>
                                <SearchNavigationOptionDetailStyled>
                                  <RemoveIcon />
                                    <SearchNavigationOptionDetailContentWrapperStyled>
                                      <SearchNavigationOptionDetailQuantityStyled>0 </SearchNavigationOptionDetailQuantityStyled>
                                      <SearchNavigationOptionDetailContentStyled>Trẻ em sơ sinh (dưới 2 tuổi)</SearchNavigationOptionDetailContentStyled>
                                    </SearchNavigationOptionDetailContentWrapperStyled>
                                  <AddIcon sx={{ "&:hover": { color: "rgb(135, 179, 251)" } }}/>
                                </SearchNavigationOptionDetailStyled>
                              </SearchNavigationOptionDetailLeftWrapperStyled>
                            )}
                            { openRoom && (
                              <SearchNavigationOptionDetailRightContainerStyled>
                                <SearchNavigationOptionDetailRightWrapperStyled>
                                  <SearchBonusNavigationTopLeftRoomOptionStyled>
                                    <SearchBonusNavigationTopLeftRoomOptionSelectStyled>1 Phòng</SearchBonusNavigationTopLeftRoomOptionSelectStyled>
                                    <CheckOutlinedIcon />
                                  </SearchBonusNavigationTopLeftRoomOptionStyled>
                                  <SearchBonusNavigationTopLeftRoomOptionStyled>
                                    <SearchBonusNavigationTopLeftRoomOptionSelectStyled>2 Phòng</SearchBonusNavigationTopLeftRoomOptionSelectStyled>
                                    <CheckOutlinedIcon />
                                  </SearchBonusNavigationTopLeftRoomOptionStyled>
                                  <SearchBonusNavigationTopLeftRoomOptionStyled>
                                    <SearchBonusNavigationTopLeftRoomOptionSelectStyled>3 Phòng</SearchBonusNavigationTopLeftRoomOptionSelectStyled>
                                    <CheckOutlinedIcon />
                                  </SearchBonusNavigationTopLeftRoomOptionStyled>
                                  <SearchBonusNavigationTopLeftRoomOptionStyled>
                                    <SearchBonusNavigationTopLeftRoomOptionSelectStyled>4 Phòng</SearchBonusNavigationTopLeftRoomOptionSelectStyled>
                                    <CheckOutlinedIcon />
                                  </SearchBonusNavigationTopLeftRoomOptionStyled>
                                  <SearchBonusNavigationTopLeftRoomOptionStyled>
                                    <SearchBonusNavigationTopLeftRoomOptionSelectStyled>5 Phòng</SearchBonusNavigationTopLeftRoomOptionSelectStyled>
                                    <CheckOutlinedIcon />
                                  </SearchBonusNavigationTopLeftRoomOptionStyled>
                                  <SearchBonusNavigationTopLeftRoomOptionStyled>
                                    <SearchBonusNavigationTopLeftRoomOptionSelectStyled>6 Phòng</SearchBonusNavigationTopLeftRoomOptionSelectStyled>
                                    <CheckOutlinedIcon />
                                  </SearchBonusNavigationTopLeftRoomOptionStyled>
                                </SearchNavigationOptionDetailRightWrapperStyled>
                              </SearchNavigationOptionDetailRightContainerStyled>
                            )}
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
                            {isChecked && (
                            <SearchBonusNavigationBottomRightDateRangeContainerStyled  onClick={handleOpenDateStaying}>
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
                            )}
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
                    <SearchNavigationBonusButtonStyled checkedOpen={isChecked}>
                      TÌM
                    </SearchNavigationBonusButtonStyled>
                  </SearchBonusNavigationContainerStyled>
    </>
  )
}

export default SearchNavigationInputAdvance