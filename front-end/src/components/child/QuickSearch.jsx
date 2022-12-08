import React, { useState } from 'react';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from 'styled-components';
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import * as rdrLocales from 'react-date-range/dist/locale';
import { useSearchParams } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useSelector } from 'react-redux';
import { selectCitiSearch } from '../../features/customerSlice';
const QuickSearchContainerStyled = styled.div`
    width: 100%;
    height: 100%;
`
const QuickSearchWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(31, 39, 76);
    height: 100%;
`
const QuickSearchStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw;
    padding: .4rem 0;
`
const QuickSearchLeftWrapperStyled = styled.div`
    width: 25vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    border-radius: .4rem;
    padding: .1rem 1.2rem;
`
const QuickSearchInputWrapperStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`
const QuickSearchInputStyled = styled.input`
    width: 100%;
    padding: .4rem .6rem;
    font-size: 1.1rem;
    border-radius: .4rem;
    outline: none;
    border: none;
    margin-top: .7rem;
    &::placeholder{
        font-size: .9rem;
        color: rgb(135, 179, 251);
    }
`
const QuickSearchInputContentStyled = styled.span`
    position: absolute;
    font-size: .9rem;
    color: #000;
    margin-left: .6rem;
    margin-bottom: 1.4rem;
`
const QuickSearchNavigationInputHalfLeftStyled = styled.div`
    position: relative;
    width: 30vw;
    margin: 0 .2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    border-radius: .4rem;
    padding: .2rem .4rem;
`
const QuickSearchNavigationInputCalendarStyled = styled.div`
    position: absolute;
    z-index: 99;
    top: 3.2rem;
`
const QuickSearchBonusNavigationBottomRightDateRangeContainerStyled = styled.div`
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const QuickSearchBonusNavigationBottomRightDateRangeWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
`
const QuickSearchBonusNavigationDateRangeWrapperStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    height: auto;
    background-color: #fff;
`
const QuickSearchBonusNavigationInputDateRangeStyled = styled.input`
    width: 100%;
    height: 100%;
    padding: .2rem;
    margin-top: 1rem;
    margin-left: .4rem;
    font-size: 1.1rem;
    border-radius: .4rem;
    outline: none;
    border: none;
    cursor: pointer;
    ::placeholder{
        color: #000;
    }
`
const QuickSearchBonusNavigationDateRangeTopContentStyled = styled.span`
    position: absolute;
    font-size: .9rem;
    color: #888;
    margin-left: .6rem;
    margin-bottom: 1.6rem;
`
const QuickSearchBonusNavigationBottomLeftMiddleWrapperInputStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: .02rem;
    margin: 0 1rem;
    background-color: #ccc;
`
const QuickSearchNavigationInputHalfRightStyled = styled.div`
  position: relative;
  width: 15rem;
  height: 100%;
`
const QuickSearchNavigationInputOptionsWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: .4rem;
  background-color: #fff;
  height: 3.1rem;
  padding: 0 1.2rem;
  cursor: pointer;
`
const QuickSearchNavigationOptionContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`
const QuickSearchNavigationOptionContentTopStyled = styled.span``
const QuickSearchNavigationOptionContentBottomStyled = styled.span`
  color: #ccc;
`
const QuickSearchButtonWrapperStyled = styled.button`
    margin-left:.2rem;
    width: 7.4vw;
    border-radius: .4rem;
    border: none;
    padding: 1.1rem 2.2rem;
    color: #fff;
    background-color: rgb(83, 145, 249);
    cursor: pointer;
    &:hover{
        background-color: rgb(135, 179, 251);
    }
`
const SearchNavigationOptionContainerStyled = styled.div`
  display: flex;
  position: absolute;
  border-radius: .6rem;
  margin-top: .8rem;
  z-index: 10;
  width: 100%;
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
    border-color: transparent transparent rgb(248, 247, 249) transparent;
  }
`
const SearchNavigationOptionWrapperStyled = styled.div`
  flex: 1;
  width: auto;
  padding: 1rem;
  background-color: rgb(248, 247, 249);
  border-radius: .4rem;
`
const SearchNavigationOptionStyled = styled.div`
  display: flex;
  flex: 1;
  width: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  transition: all .1s linear;
`
const SearchNavigationOptionLeftStyled = styled.div``
const SearchNavigationOptionRightStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const SearchNavigationOptionLeftContentStyled = styled.span`
  font-weight: 600;
`
const SearchNavigationOptionLeftContentWrapperStyled = styled.div``
const SearchNavigationOptionLeftSubContentStyled = styled.span`
  display: block;
  font-size: .8rem;
  color: #888;
`
const SearchNavigationOptionRightIconsWrapperStyled = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(49, 112, 231);
`
const SearchNavigationOptionDetailQuantityStyled = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`
const SearchNavigationOptionDetailContentWrapperStyled = styled.div`
  margin: 0 1rem;
`
const QuickSearch = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [index, setIndex] = useState();
  const [room, setRoom] = useState(2);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectCitiSearchData = useSelector(selectCitiSearch);
  const params = [];

  searchParams.forEach((key, value) => {
    params.push({[value]: key});
  });
  const handleDecrease = (name) => {
    if(name === "room"){
      if(room > 1){
        setRoom( room - 1);
      }else{
        return 
      }
    }else if(name === "adult"){
      if(adult > 1){
        setAdult( adult - 1);
      }else{
        return 
      }
    }else if(name === "children"){
      if(children > 1){
        setChildren( children - 1);
      }else{
        return 
      }
    }
  }
  const [date, setDate] = useState([
    {
      startDate: new Date(params[0].checkIn),
      endDate: new Date(params[4].checkOut),
      key: "selection"
    }
  ]);
  const openMenuDate = ()=>{
    if(openOption){
        setOpenOption(false);
        setOpenDate(true);
    }else{
        setOpenDate(!openDate);
    }
  };
  const openMenuOption = ()=>{
    if(openDate){
        setOpenDate(false);
        setOpenOption(true);
    }else{
        setOpenOption(!openOption);
    }
  };
  const handleIncrease = (name) => {
    if(name === "room"){
      if(room < 9){
        setRoom( room + 1);
      }else{
        return 
      }
    }else if(name === "adult"){
      if(adult < 36){
        setAdult( adult + 1);
      }else{
        return 
      }
    }else if(name === "children"){
      if(children < 9){
        setChildren( children + 1);
      }else{
        return 
      }
    }
  }
  return (
    <QuickSearchContainerStyled>
        <QuickSearchWrapperStyled>
            <QuickSearchStyled>
            <QuickSearchLeftWrapperStyled>
                <SearchOutlinedIcon/>
                <QuickSearchInputWrapperStyled>
                    <QuickSearchInputStyled placeholder={selectCitiSearchData.length + ` nơi ở có phòng`} />
                    <QuickSearchInputContentStyled>{params[5].textToSearch}</QuickSearchInputContentStyled>
                </QuickSearchInputWrapperStyled>
            </QuickSearchLeftWrapperStyled>
            <QuickSearchNavigationInputHalfLeftStyled>
                <QuickSearchBonusNavigationBottomRightDateRangeContainerStyled  onClick={openMenuDate}>
                    <QuickSearchBonusNavigationBottomRightDateRangeWrapperStyled>
                    <CalendarTodayOutlinedIcon />
                    <QuickSearchBonusNavigationDateRangeWrapperStyled>
                        <QuickSearchBonusNavigationInputDateRangeStyled placeholder={`${format(date[0].startDate, "dd/MM/yyyy")}`}/>
                        <QuickSearchBonusNavigationDateRangeTopContentStyled>Nhận phòng</QuickSearchBonusNavigationDateRangeTopContentStyled>
                    </QuickSearchBonusNavigationDateRangeWrapperStyled>
                    </QuickSearchBonusNavigationBottomRightDateRangeWrapperStyled>
                    <QuickSearchBonusNavigationBottomLeftMiddleWrapperInputStyled />
                    <QuickSearchBonusNavigationBottomRightDateRangeWrapperStyled>
                    <CalendarTodayOutlinedIcon />
                    <QuickSearchBonusNavigationDateRangeWrapperStyled>
                        <QuickSearchBonusNavigationInputDateRangeStyled placeholder={`${format(date[0].endDate, "dd/MM/yyyy")}`}/>
                        <QuickSearchBonusNavigationDateRangeTopContentStyled>Trả phòng</QuickSearchBonusNavigationDateRangeTopContentStyled>
                    </QuickSearchBonusNavigationDateRangeWrapperStyled>
                    </QuickSearchBonusNavigationBottomRightDateRangeWrapperStyled>
                </QuickSearchBonusNavigationBottomRightDateRangeContainerStyled>
                <QuickSearchNavigationInputCalendarStyled>
                    {openDate && (
                        <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}
                        locale={rdrLocales.vi}
                        />
                    )}
                </QuickSearchNavigationInputCalendarStyled>
            </QuickSearchNavigationInputHalfLeftStyled>
            <QuickSearchNavigationInputHalfRightStyled>
                <QuickSearchNavigationInputOptionsWrapperStyled onClick={openMenuOption}>
                    <GroupOutlinedIcon />
                    <QuickSearchNavigationOptionContentWrapperStyled>
                        <QuickSearchNavigationOptionContentTopStyled>
                        1 người lớn
                        </QuickSearchNavigationOptionContentTopStyled>
                        <QuickSearchNavigationOptionContentBottomStyled>
                        1 phòng
                        </QuickSearchNavigationOptionContentBottomStyled>
                    </QuickSearchNavigationOptionContentWrapperStyled>
                    <KeyboardArrowDownIcon />
                </QuickSearchNavigationInputOptionsWrapperStyled>
                {openOption && (
                <SearchNavigationOptionContainerStyled toggleCheck={index > 2 ? true : false}>
                  <SearchNavigationOptionWrapperStyled>
                    <SearchNavigationOptionStyled>
                      <SearchNavigationOptionLeftStyled>
                        <SearchNavigationOptionLeftContentStyled>
                          Phòng
                        </SearchNavigationOptionLeftContentStyled>
                      </SearchNavigationOptionLeftStyled>
                      <SearchNavigationOptionRightStyled>
                        <SearchNavigationOptionRightIconsWrapperStyled>
                          <RemoveCircleOutlineIcon onClick={() => handleDecrease("room")}/>
                        </SearchNavigationOptionRightIconsWrapperStyled>
                          <SearchNavigationOptionDetailContentWrapperStyled>
                            <SearchNavigationOptionDetailQuantityStyled>{params[1].rooms}</SearchNavigationOptionDetailQuantityStyled>
                          </SearchNavigationOptionDetailContentWrapperStyled>
                          <SearchNavigationOptionRightIconsWrapperStyled>
                            <AddCircleOutlineIcon onClick={() => handleIncrease("room")}/>
                          </SearchNavigationOptionRightIconsWrapperStyled>
                      </SearchNavigationOptionRightStyled>
                    </SearchNavigationOptionStyled>
                    <SearchNavigationOptionStyled>
                      <SearchNavigationOptionLeftStyled>
                        <SearchNavigationOptionLeftContentWrapperStyled>
                          <SearchNavigationOptionLeftContentStyled>Người lớn</SearchNavigationOptionLeftContentStyled>
                          <SearchNavigationOptionLeftSubContentStyled>18 tuổi trở lên</SearchNavigationOptionLeftSubContentStyled>
                        </SearchNavigationOptionLeftContentWrapperStyled>
                      </SearchNavigationOptionLeftStyled>
                      <SearchNavigationOptionRightStyled>
                        <SearchNavigationOptionRightIconsWrapperStyled>
                            <RemoveCircleOutlineIcon onClick={() => handleDecrease("adult")}/>
                        </SearchNavigationOptionRightIconsWrapperStyled>
                          <SearchNavigationOptionDetailContentWrapperStyled>
                            <SearchNavigationOptionDetailQuantityStyled>{params[2].adults}</SearchNavigationOptionDetailQuantityStyled>
                          </SearchNavigationOptionDetailContentWrapperStyled>
                        <SearchNavigationOptionRightIconsWrapperStyled>
                          <AddCircleOutlineIcon onClick={() => handleIncrease("adult")}/>
                        </SearchNavigationOptionRightIconsWrapperStyled>
                      </SearchNavigationOptionRightStyled>
                    </SearchNavigationOptionStyled>
                    <SearchNavigationOptionStyled>
                      <SearchNavigationOptionLeftStyled>
                        <SearchNavigationOptionLeftContentWrapperStyled>
                          <SearchNavigationOptionLeftContentStyled>Trẻ em</SearchNavigationOptionLeftContentStyled>
                          <SearchNavigationOptionLeftSubContentStyled>0-17 tuổi</SearchNavigationOptionLeftSubContentStyled>
                        </SearchNavigationOptionLeftContentWrapperStyled>
                      </SearchNavigationOptionLeftStyled>
                      <SearchNavigationOptionRightStyled>
                        <SearchNavigationOptionRightIconsWrapperStyled>
                          <RemoveCircleOutlineIcon onClick={() => handleDecrease("children")}/>
                        </SearchNavigationOptionRightIconsWrapperStyled>
                          <SearchNavigationOptionDetailContentWrapperStyled>
                            <SearchNavigationOptionDetailQuantityStyled>{params[3].childrens}</SearchNavigationOptionDetailQuantityStyled>
                          </SearchNavigationOptionDetailContentWrapperStyled>
                        <SearchNavigationOptionRightIconsWrapperStyled>
                          <AddCircleOutlineIcon onClick={() => handleIncrease("children")}/>
                        </SearchNavigationOptionRightIconsWrapperStyled>
                      </SearchNavigationOptionRightStyled>
                    </SearchNavigationOptionStyled>
                  </SearchNavigationOptionWrapperStyled>
                </SearchNavigationOptionContainerStyled>
                )}
            </QuickSearchNavigationInputHalfRightStyled>
            <QuickSearchButtonWrapperStyled>TÌM</QuickSearchButtonWrapperStyled>
            </QuickSearchStyled>
        </QuickSearchWrapperStyled>
    </QuickSearchContainerStyled>
  )
}

export default QuickSearch