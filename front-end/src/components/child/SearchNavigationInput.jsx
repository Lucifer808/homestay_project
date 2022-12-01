import React, { useState } from 'react'
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import * as rdrLocales from 'react-date-range/dist/locale';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { useEffect } from 'react';
import viLocale from "date-fns/locale/vi";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { addDays } from 'date-fns';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import { addSelectPosition } from '../../features/customerSlice';
import { useDispatch } from 'react-redux';
const SearchNavigationInputContentStyled = styled.div`
  position: relative;
`
const SearchNavigationInputFullStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: .4rem;
  padding: .8rem 1.4rem;
`
const SearchNavigationInputSearchResultFullContainerStyled = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: .4rem;
  width: 100%;
  background-color: #fff;
  z-index: 100;
  margin-top: 1rem;
  height: 100%;
  overflow: auto;
`
const SearchNavigationInputSearchResultFullWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
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
const SearchNavigationSubmitButtomStyled = styled.button`
  position: absolute;
  padding: 1rem 18rem;
  top: 11rem;
  right: 17rem;
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
const SearchNavigationInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [room, setRoom] = useState(2);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [searchLoading, setSearchLoading] = useState(true);
  const [selectPosition, setSelectPosition] = useState(null);
  const [index, setIndex] = useState();
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [openSearchResult, setOpenSearchResult] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection"
    }
  ]);
  useEffect(() => {
    const params = {
      q: searchText,
      format: 'jsonv2',
      addressdetails: 1,
      polygon_geojson: 1,
      limit: 3
    }
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    setSearchLoading(true);
    const delayDebounceFn = setTimeout(() => {
      fetch(`${process.env.REACT_APP_SEARCH_MAP_URL}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setListPlace(JSON.parse(result));
        setSearchLoading(false);
      })
      .catch((err) => console.log("err: ", err));
    }, 1000)
    return () => {clearTimeout(delayDebounceFn)};
  },[searchText])
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
  // function removeAccents(str) {
  //   var AccentsMap = [
  //     "aàảãáạăằẳẵắặâầẩẫấậ",
  //     "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
  //     "dđ", "DĐ",
  //     "eèẻẽéẹêềểễếệ",
  //     "EÈẺẼÉẸÊỀỂỄẾỆ",
  //     "iìỉĩíị",
  //     "IÌỈĨÍỊ",
  //     "oòỏõóọôồổỗốộơờởỡớợ",
  //     "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
  //     "uùủũúụưừửữứự",
  //     "UÙỦŨÚỤƯỪỬỮỨỰ",
  //     "yỳỷỹýỵ",
  //     "YỲỶỸÝỴ"    
  //   ];
  //   for (var i=0; i<AccentsMap.length; i++) {
  //     var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
  //     var char = AccentsMap[i][0];
  //     str = str.replace(re, char);
  //   }
  //   return str;
  // }
  const handleSearch = () => {
    const searchParams = {
      checkIn: format(date[0].startDate, "yyyy-MM-dd"),
      rooms: room,
      adults: adult,
      childrens: children,
      checkOut: format(date[0].endDate, "yyyy-MM-dd"),
      textToSearch: searchText
    }
    const searchQueryString = new URLSearchParams(searchParams).toString();
    dispatch(addSelectPosition(selectPosition))
    navigate(`/search?${searchQueryString}`)
  }
  return (
    <SearchNavigationInputContentStyled >
      <SearchNavigationInputFullStyled>
        <SearchOutlinedIcon />
        <SearchNavigationInputStyled 
          type="text" 
          placeholder="Nhập điểm du lịch hoặc tên khách sạn"
          value={searchText}
          onClick= {() => setOpenSearchResult(!openSearchResult)}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </SearchNavigationInputFullStyled>
      {openSearchResult && (
        <SearchNavigationInputSearchResultFullContainerStyled>
            <SearchNavigationInputSearchResultFullWrapperStyled>
              {searchLoading === false ? (
                <List component="nav" aria-label="main mailbox folders">
                  {listPlace.map((item) => {
                    return (
                      <div key={item?.place_id}>
                        <ListItem
                          button
                          onClick={() => {
                            setSelectPosition(item);
                            setSearchText(item.address.city);
                            setOpenSearchResult(false);
                          }}
                        >
                          <LocationOnIcon sx={{marginRight: '10px'}}/>
                          <ListItemText primary={item?.display_name} />
                        </ListItem>
                        <Divider />
                      </div>
                    );
                  })}
                </List>
              ) : <Loader />}
            </SearchNavigationInputSearchResultFullWrapperStyled>
        </SearchNavigationInputSearchResultFullContainerStyled>
      )}
      <SearchNavigationInputHalfWrapperStyled>
        <SearchNavigationInputHalfLeftStyled>
          <SearchBonusNavigationBottomRightDateRangeContainerStyled  onClick={() => setOpenDate(!openDate)}>
            <SearchBonusNavigationBottomRightDateRangeWrapperStyled>
              <CalendarTodayOutlinedIcon />
              <SearchBonusNavigationDateRangeWrapperStyled>
                <SearchBonusNavigationInputDateRangeStyled placeholder={`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].startDate,"eeee", { locale: viLocale })}`}/>
                <SearchBonusNavigationDateRangeTopContentStyled>Nhận phòng</SearchBonusNavigationDateRangeTopContentStyled>
              </SearchBonusNavigationDateRangeWrapperStyled>
            </SearchBonusNavigationBottomRightDateRangeWrapperStyled>
            <SearchBonusNavigationBottomLeftMiddleWrapperInputStyled />
            <SearchBonusNavigationBottomRightDateRangeWrapperStyled>
              <CalendarTodayOutlinedIcon />
              <SearchBonusNavigationDateRangeWrapperStyled>
                <SearchBonusNavigationInputDateRangeStyled placeholder={`${format(date[0].endDate, "dd/MM/yyyy")} - ${format(date[0].endDate,"eeee", { locale: viLocale })}`}/>
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
                  {adult} người lớn, {children} trẻ em
                </SearchNavigationOptionContentTopStyled>
                <SearchNavigationOptionContentBottomStyled>
                  {room} phòng
                </SearchNavigationOptionContentBottomStyled>
            </SearchNavigationOptionContentWrapperStyled>
            <KeyboardArrowDownIcon />
          </SearchNavigationInputOptionsWrapperStyled>
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
                      <SearchNavigationOptionDetailQuantityStyled>{room}</SearchNavigationOptionDetailQuantityStyled>
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
                      <SearchNavigationOptionDetailQuantityStyled>{adult}</SearchNavigationOptionDetailQuantityStyled>
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
                      <SearchNavigationOptionDetailQuantityStyled>{children}</SearchNavigationOptionDetailQuantityStyled>
                    </SearchNavigationOptionDetailContentWrapperStyled>
                  <SearchNavigationOptionRightIconsWrapperStyled>
                    <AddCircleOutlineIcon onClick={() => handleIncrease("children")}/>
                  </SearchNavigationOptionRightIconsWrapperStyled>
                </SearchNavigationOptionRightStyled>
              </SearchNavigationOptionStyled>
            </SearchNavigationOptionWrapperStyled>
          </SearchNavigationOptionContainerStyled>
          )}
        </SearchNavigationInputHalfRightStyled>
      </SearchNavigationInputHalfWrapperStyled>
      <SearchNavigationSubmitButtomStyled onClick={handleSearch}>
        TÌM
      </SearchNavigationSubmitButtomStyled>
    </SearchNavigationInputContentStyled>
  )
}

export default SearchNavigationInput