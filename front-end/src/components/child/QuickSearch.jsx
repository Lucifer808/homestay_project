import React, { useState } from 'react';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import styled from 'styled-components';
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import * as rdrLocales from 'react-date-range/dist/locale';
import { optionsData } from '../../dummyData';
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
const QuickSearchNavigationOptionContainerStyled = styled.div`
  display: flex;
  position: absolute;
  border-radius: .6rem;
  margin-top: .8rem;
  z-index: 10;
  left: -10rem;
  width: ${props => props.toggleCheck ? "40rem" : "auto"};
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
    left: 10rem;
    border-width: 0 1rem .8rem;
    border-style: solid;
    border-color: transparent transparent rgb(248, 247, 249) transparent;
  }
`
const QuickSearchNavigationOptionWrapperStyled = styled.div`
  flex: 1;
  width: auto;
  background-color: rgb(248, 247, 249);
`
const QuickSearchNavigationOptionStyled = styled.div`
  display: flex;
  flex: 1;
  width: 15rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  cursor: pointer;
  transition: all .1s linear;
  &:hover{
    color: rgb(135, 179, 251);
  }
`
const QuickSearchNavigationOptionLeftStyled = styled.div``
const QuickSearchNavigationOptionRightStyled = styled.div``
const QuickSearchNavigationOptionLeftContentStyled = styled.span``
const QuickSearchNavigationOptionRightContentStyled = styled.span`
  font-size: .8rem;
`
const QuickSearchPesudoStyled = styled.div `
  width: 100%;
  height: 1.2rem;
  padding: .4rem;
  font-weight: 800;
  border-radius: .1rem;
  color: #fff;
  background-color: rgb(225, 44, 44);
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
const QuickSearchPesudoContentStyled = styled.span`
  display: block;
  color: #fff;
  font-size: .8rem;
  font-weight: 500;
`
const QuickSearchNavigationOptionDetailWrapperStyled = styled.div`
  flex: 1;
  width: auto;
  padding: .8rem .6rem;
`
const QuickSearchNavigationOptionDetailStyled = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: space-around;
  padding: 1rem .4rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: all .1s linear;
`
const QuickSearchNavigationOptionDetailQuantityStyled = styled.span`
  font-size: 1.4rem;
  color: rgb(57, 116, 210);
`
const QuickSearchNavigationOptionDetailContentStyled = styled.span`
  color: #888;
`
const QuickSearchNavigationOptionDetailContentWrapperStyled = styled.div``
const QuickSearchNavigationOptionDetailInfomationWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const QuickSearchNavigationOptionDetailInfomationStyled = styled.span`
  display: block;
  padding: 1rem;
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
const QuickSearch = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [index, setIndex] = useState();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
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
  const handleOpenAdvancedOption = (id) =>{
    setIndex(id);
  }
  return (
    <QuickSearchContainerStyled>
        <QuickSearchWrapperStyled>
            <QuickSearchStyled>
            <QuickSearchLeftWrapperStyled>
                <SearchOutlinedIcon/>
                <QuickSearchInputWrapperStyled>
                    <QuickSearchInputStyled placeholder='1.853 nơi ở có phòng' />
                    <QuickSearchInputContentStyled>London</QuickSearchInputContentStyled>
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
                <QuickSearchNavigationOptionContainerStyled toggleCheck={index > 2 ? true : false}>
                    <QuickSearchNavigationOptionWrapperStyled>
                    {optionsData.map(item => (
                    <QuickSearchNavigationOptionStyled key={item.id} onClick={() => handleOpenAdvancedOption(item.id)}>
                        <QuickSearchNavigationOptionLeftStyled>
                            <QuickSearchNavigationOptionLeftContentStyled>{item.title}</QuickSearchNavigationOptionLeftContentStyled>
                            {item.id === 1 && (
                            <QuickSearchPesudoStyled>
                                <QuickSearchPesudoContentStyled>
                                Tiết kiệm đến 12%
                                </QuickSearchPesudoContentStyled>
                            </QuickSearchPesudoStyled>
                            )}
                        </QuickSearchNavigationOptionLeftStyled>
                        <QuickSearchNavigationOptionRightStyled>
                        { item.id < 3 ?
                        <QuickSearchNavigationOptionRightContentStyled>{item.option}</QuickSearchNavigationOptionRightContentStyled>
                            :
                        <ChevronRightOutlinedIcon />
                        }
                        </QuickSearchNavigationOptionRightStyled>
                    </QuickSearchNavigationOptionStyled>
                    ))}
                    </QuickSearchNavigationOptionWrapperStyled>
                    { index > 2 && (
                    <QuickSearchNavigationOptionDetailWrapperStyled>
                        <QuickSearchNavigationOptionDetailStyled>
                        <RemoveIcon />
                            <QuickSearchNavigationOptionDetailContentWrapperStyled>
                            <QuickSearchNavigationOptionDetailQuantityStyled>3 </QuickSearchNavigationOptionDetailQuantityStyled>
                            <QuickSearchNavigationOptionDetailContentStyled>Phòng</QuickSearchNavigationOptionDetailContentStyled>
                            </QuickSearchNavigationOptionDetailContentWrapperStyled>
                        <AddIcon sx={{ "&:hover": { color: "rgb(135, 179, 251)" } }}/>
                        </QuickSearchNavigationOptionDetailStyled>
                        <QuickSearchNavigationOptionDetailStyled>
                        <RemoveIcon />
                            <QuickSearchNavigationOptionDetailContentWrapperStyled>
                            <QuickSearchNavigationOptionDetailQuantityStyled>1 </QuickSearchNavigationOptionDetailQuantityStyled>
                            <QuickSearchNavigationOptionDetailContentStyled>Người lớn</QuickSearchNavigationOptionDetailContentStyled>
                            </QuickSearchNavigationOptionDetailContentWrapperStyled>
                        <AddIcon sx={{ "&:hover": { color: "rgb(135, 179, 251)" } }}/>
                        </QuickSearchNavigationOptionDetailStyled>
                        <QuickSearchNavigationOptionDetailStyled>
                        <RemoveIcon />
                            <QuickSearchNavigationOptionDetailContentWrapperStyled>
                            <QuickSearchNavigationOptionDetailQuantityStyled>1 </QuickSearchNavigationOptionDetailQuantityStyled>
                            <QuickSearchNavigationOptionDetailContentStyled>Trẻ em</QuickSearchNavigationOptionDetailContentStyled>
                            </QuickSearchNavigationOptionDetailContentWrapperStyled>
                        <AddIcon sx={{ "&:hover": { color: "rgb(135, 179, 251)" } }}/>
                        </QuickSearchNavigationOptionDetailStyled>
                        <QuickSearchNavigationOptionDetailInfomationWrapperStyled>
                        <QuickSearchNavigationOptionDetailInfomationStyled>
                            Du lịch cùng bé yêu? Bao gồm cả mục phía trên có giá và ưu đãi tốt nhất cho các nơi ở phù hợp với trẻ em.
                        </QuickSearchNavigationOptionDetailInfomationStyled>
                        <FamilyRestroomOutlinedIcon fontSize='large' sx={{ m: 1}}/>
                        </QuickSearchNavigationOptionDetailInfomationWrapperStyled>
                    </QuickSearchNavigationOptionDetailWrapperStyled>
                    )}
                </QuickSearchNavigationOptionContainerStyled>
                )}
            </QuickSearchNavigationInputHalfRightStyled>
            <QuickSearchButtonWrapperStyled>TÌM</QuickSearchButtonWrapperStyled>
            </QuickSearchStyled>
        </QuickSearchWrapperStyled>
    </QuickSearchContainerStyled>
  )
}

export default QuickSearch