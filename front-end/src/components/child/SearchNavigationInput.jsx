import React, { useState } from 'react'
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import * as rdrLocales from 'react-date-range/dist/locale';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const SearchNavigationInputContentStyled = styled.form`
`
const SearchNavigationInputFullStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: .4rem;
  padding: .8rem 1.4rem;
`
const SearchNavigationInputStyled = styled.input`
  width: 100%;
  padding: .6rem 1.2rem;
  font-size: 1.1rem;
  border-radius: .4rem;
  outline: none;
  border: none;
`
const SearchNavigationInputHalfWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const SearchNavigationInputHalfLeftStyled = styled.div`
  flex: 1;
`
const SearchNavigationInputCalendarStyled = styled.div`
  position: absolute;
  z-index: 99;
`
const SearchNavigationInputHalfRightStyled = styled.div`
  position: relative;
  width: 34rem;
  flex: 1;
`
const SearchNavigationInputOptionsWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .7rem 1.4rem;
  border-radius: .4rem;
  margin-top: 1rem;
  border: 1px solid #ccc;
  cursor: pointer;
  margin-left: auto;
`
const SearchNavigationOptionContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`
const SearchNavigationOptionContentTopStyled = styled.span``
const SearchNavigationOptionContentBottomStyled = styled.span`
  color: #ccc;
`
const SearchNavigationOptionContainerStyled = styled.div`
  display: flex;
  position: absolute;
  border-radius: .6rem;
  margin-top: .8rem;
  z-index: 10;
  width: ${props => props.toggleCheck ? "100%" : "60%"};
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
`
const SearchNavigationOptionStyled = styled.div`
  display: flex;
  flex: 1;
  width: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: all .1s linear;
  &:hover{
    color: rgb(135, 179, 251);
  }
`
const SearchNavigationOptionLeftStyled = styled.div``
const SearchNavigationOptionRightStyled = styled.div``
const SearchNavigationOptionLeftContentStyled = styled.span``
const SearchNavigationOptionRightContentStyled = styled.span`
  font-size: .8rem;
`
const PesudoStyled = styled.div `
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
const PesudoContentStyled = styled.span`
  display: block;
  color: #fff;
  font-size: .8rem;
  font-weight: 500;
`
const SearchNavigationOptionDetailWrapperStyled = styled.div`
  flex: 1;
  width: auto;
  padding: .8rem .6rem;
`
const SearchNavigationOptionDetailStyled = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: space-around;
  padding: 1.2rem .4rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: all .1s linear;
`
const SearchNavigationOptionDetailQuantityStyled = styled.span`
  font-size: 1.4rem;
  color: rgb(57, 116, 210);
`
const SearchNavigationOptionDetailContentStyled = styled.span`
  color: #888;
`
const SearchNavigationOptionDetailContentWrapperStyled = styled.div``
const SearchNavigationOptionDetailInfomationWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const SearchNavigationOptionDetailInfomationStyled = styled.span`
  display: block;
  padding: 1rem;
`
const SearchNavigationSubmitButtomStyled = styled.button`
  position: absolute;
  padding: 1rem 18rem;
  top: 16rem;
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
const SearchNavigationInput = (props) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [index, setIndex] = useState();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ])
  const handleOpenAdvancedOption = (id) =>{
    setIndex(id);
  }
  return (
    <SearchNavigationInputContentStyled>
      <SearchNavigationInputFullStyled>
        <SearchOutlinedIcon />
        <SearchNavigationInputStyled type="text" placeholder="Nhập điểm du lịch hoặc tên khách sạn"/>
      </SearchNavigationInputFullStyled>
      <SearchNavigationInputHalfWrapperStyled>
        <SearchNavigationInputHalfLeftStyled>
        <SearchBonusNavigationBottomRightDateRangeContainerStyled  onClick={() => setOpenDate(!openDate)}>
          <SearchBonusNavigationBottomRightDateRangeWrapperStyled>
            <CalendarTodayOutlinedIcon />
            <SearchBonusNavigationDateRangeWrapperStyled>
              <SearchBonusNavigationInputDateRangeStyled placeholder={`${format(date[0].startDate, "dd/MM/yyyy")}`}/>
              <SearchBonusNavigationDateRangeTopContentStyled>Nhận phòng</SearchBonusNavigationDateRangeTopContentStyled>
            </SearchBonusNavigationDateRangeWrapperStyled>
          </SearchBonusNavigationBottomRightDateRangeWrapperStyled>
          <SearchBonusNavigationBottomLeftMiddleWrapperInputStyled />
          <SearchBonusNavigationBottomRightDateRangeWrapperStyled>
            <CalendarTodayOutlinedIcon />
            <SearchBonusNavigationDateRangeWrapperStyled>
              <SearchBonusNavigationInputDateRangeStyled placeholder={`${format(date[0].endDate, "dd/MM/yyyy")}`}/>
              <SearchBonusNavigationDateRangeTopContentStyled>Trả phòng</SearchBonusNavigationDateRangeTopContentStyled>
            </SearchBonusNavigationDateRangeWrapperStyled>
          </SearchBonusNavigationBottomRightDateRangeWrapperStyled>
        </SearchBonusNavigationBottomRightDateRangeContainerStyled>
          <SearchNavigationInputCalendarStyled>
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
          </SearchNavigationInputCalendarStyled>
        </SearchNavigationInputHalfLeftStyled>
        <SearchNavigationInputHalfRightStyled>
          <SearchNavigationInputOptionsWrapperStyled onClick={() => setOpenOption(!openOption)}>
            <GroupOutlinedIcon />
            <SearchNavigationOptionContentWrapperStyled>
                <SearchNavigationOptionContentTopStyled>
                  1 người lớn
                </SearchNavigationOptionContentTopStyled>
                <SearchNavigationOptionContentBottomStyled>
                  1 phòng
                </SearchNavigationOptionContentBottomStyled>
            </SearchNavigationOptionContentWrapperStyled>
            <KeyboardArrowDownIcon />
          </SearchNavigationInputOptionsWrapperStyled>
          {openOption && (
          <SearchNavigationOptionContainerStyled toggleCheck={index > 2 ? true : false}>
            <SearchNavigationOptionWrapperStyled>
            {props.optionsData.map(item => (
              <SearchNavigationOptionStyled key={item.id} onClick={() => handleOpenAdvancedOption(item.id)}>
                <SearchNavigationOptionLeftStyled>
                    <SearchNavigationOptionLeftContentStyled>{item.title}</SearchNavigationOptionLeftContentStyled>
                    {item.id === 1 && (
                      <PesudoStyled>
                        <PesudoContentStyled>
                          Tiết kiệm đến 12%
                        </PesudoContentStyled>
                      </PesudoStyled>
                    )}
                </SearchNavigationOptionLeftStyled>
                <SearchNavigationOptionRightStyled>
                  { item.id < 3 ?
                  <SearchNavigationOptionRightContentStyled>{item.option}</SearchNavigationOptionRightContentStyled>
                    :
                  <ChevronRightOutlinedIcon />
                  }
                </SearchNavigationOptionRightStyled>
              </SearchNavigationOptionStyled>
            ))}
            </SearchNavigationOptionWrapperStyled>
            { index > 2 && (
              <SearchNavigationOptionDetailWrapperStyled>
                <SearchNavigationOptionDetailStyled>
                  <RemoveIcon />
                    <SearchNavigationOptionDetailContentWrapperStyled>
                      <SearchNavigationOptionDetailQuantityStyled>3 </SearchNavigationOptionDetailQuantityStyled>
                      <SearchNavigationOptionDetailContentStyled>Phòng</SearchNavigationOptionDetailContentStyled>
                    </SearchNavigationOptionDetailContentWrapperStyled>
                  <AddIcon sx={{ "&:hover": { color: "rgb(135, 179, 251)" } }}/>
                </SearchNavigationOptionDetailStyled>
                <SearchNavigationOptionDetailStyled>
                  <RemoveIcon />
                    <SearchNavigationOptionDetailContentWrapperStyled>
                      <SearchNavigationOptionDetailQuantityStyled>1 </SearchNavigationOptionDetailQuantityStyled>
                      <SearchNavigationOptionDetailContentStyled>Người lớn</SearchNavigationOptionDetailContentStyled>
                    </SearchNavigationOptionDetailContentWrapperStyled>
                  <AddIcon sx={{ "&:hover": { color: "rgb(135, 179, 251)" } }}/>
                </SearchNavigationOptionDetailStyled>
                <SearchNavigationOptionDetailStyled>
                  <RemoveIcon />
                    <SearchNavigationOptionDetailContentWrapperStyled>
                      <SearchNavigationOptionDetailQuantityStyled>1 </SearchNavigationOptionDetailQuantityStyled>
                      <SearchNavigationOptionDetailContentStyled>Trẻ em</SearchNavigationOptionDetailContentStyled>
                    </SearchNavigationOptionDetailContentWrapperStyled>
                  <AddIcon sx={{ "&:hover": { color: "rgb(135, 179, 251)" } }}/>
                </SearchNavigationOptionDetailStyled>
                <SearchNavigationOptionDetailInfomationWrapperStyled>
                  <SearchNavigationOptionDetailInfomationStyled>
                    Du lịch cùng bé yêu? Bao gồm cả mục phía trên có giá và ưu đãi tốt nhất cho các nơi ở phù hợp với trẻ em.
                  </SearchNavigationOptionDetailInfomationStyled>
                  <FamilyRestroomOutlinedIcon fontSize='large' sx={{ m: 1}}/>
                </SearchNavigationOptionDetailInfomationWrapperStyled>
              </SearchNavigationOptionDetailWrapperStyled>
            )}
          </SearchNavigationOptionContainerStyled>
          )}
        </SearchNavigationInputHalfRightStyled>
      </SearchNavigationInputHalfWrapperStyled>
      <SearchNavigationSubmitButtomStyled>
        TÌM
      </SearchNavigationSubmitButtomStyled>
    </SearchNavigationInputContentStyled>
  )
}

export default SearchNavigationInput