import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link as ScrollTo } from 'react-scroll';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import RoomDetailTopImage from '../components/layout/RoomDetail/RoomDetailTopImage';
import RoomDetailOverview from '../components/layout/RoomDetail/RoomDetailOverview';
import RoomDetailChoice from '../components/layout/RoomDetail/RoomDetailChoice';
import RoomDetailComment from '../components/layout/RoomDetail/RoomDetailComment';
import { useSelector, useDispatch } from 'react-redux';
import { selectRoomDetail, customerRoomDetail, selectIsLoading } from '../features/customerSlice';
import { useParams } from "react-router-dom";
import Loader from '../components/child/Loader';
const RoomDetailContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 80vw;
  margin: 0 10rem;
  padding: 0rem 0 2rem 0;
  height: 100%;
`
const RoomDetailNavigationAddressWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`
const RoomDetailNavigationAddressLeftWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: .8rem;
`
const RoomDetailNavigationAddressStyled = styled.span`
  cursor: pointer;
  color: #555;
  text-decoration: underline;
`
const RoomDetailNavigationAddressNowStyled = styled.span`
  font-weight: 700;
  display: block;
`
const RoomDetailNavigationAddressRoomStyled = styled.span`
  display: block;
  font-size: .9rem;
  color: rgb(62, 108, 234);
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`
const RoomDetailNavigationBarWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: .2rem;
  margin-top: 1rem;
`
const RoomDetailNavigationBarLeftWrapperStyled = styled.div`
  display:  flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 1rem 0 0;
`
const RoomDetailNavigationBarLeftTitleWrapperStyled = styled.div`
  margin: 0 1.4rem;
  padding-bottom: 1rem;
  border-bottom: .3rem solid rgb(62, 108, 234);
  cursor: pointer;
  &:hover{
    color: rgb(62, 108, 234);
  }
`
const RoomDetailNavigationBarLeftTitleStyled = styled.p`
  font-weight: 400;
`
const RoomDetailNavigationBarRightWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const RoomDetailNavigationBarRightContentStyled = styled.p`
  font-size: .8rem;
  margin-top: .2rem;
  margin-right: .2rem;
  color: #666;
`
const RoomDetailNavigationBarRightPriceStyled = styled.p`
  font-size: 1.4rem;
  max-width: 100%;
  color: #e12d2d;
  margin-right: 1rem;
`
const RoomCardRightBottomButtonWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .2rem;
    margin-right: 1rem;
    background-color: rgb(62, 108, 234);
    border-radius: .2rem;
    border-color: rgb(120, 152, 240);
    cursor: pointer;
    &:hover{
        background-color: rgb(120, 152, 240);
    }
`
const RoomCardRightBottomButtonTitleStyled = styled.span`
    display: block;
    margin: .7rem .8rem;
    font-size: .9rem;
    color: #fff;
`
const RoomDetailOverviewWrapperStyled = styled.div``
const RoomDetailChoiceWrapperStyled = styled.div``
const RoomDetailCommentWrapperStyled = styled.div``
const RoomDetailpage = () => {
  const dispatch = useDispatch();
  const [roomData, setRoomData] = useState(null);
  const selectRoomDetailData = useSelector(selectRoomDetail);
  const selectIsLoadingData = useSelector(selectIsLoading);
  const params = useParams();
  useEffect(() => {
      dispatch(customerRoomDetail(params.id));
      window.scrollTo(0, 0);
  },[dispatch, params.id]);
  return (
    <>
    {selectIsLoadingData && selectRoomDetailData == null ? <Loader /> : 
      <RoomDetailContainerStyled>
        <RoomDetailNavigationAddressWrapperStyled>
          <RoomDetailNavigationAddressLeftWrapperStyled>
            <RoomDetailNavigationAddressStyled>Trang chủ</RoomDetailNavigationAddressStyled>
            <ChevronRightOutlinedIcon />
            <RoomDetailNavigationAddressStyled>Khách sạn {selectRoomDetailData?.[0]?.acct_id?.name}(29)</RoomDetailNavigationAddressStyled>
            <ChevronRightOutlinedIcon />
            <RoomDetailNavigationAddressStyled>Khách sạn {selectRoomDetailData?.[0]?.acst_id?.name}(21)</RoomDetailNavigationAddressStyled>
            <ChevronRightOutlinedIcon />
            <RoomDetailNavigationAddressNowStyled>Đặt phòng {selectRoomDetailData?.[0]?.nameOfAccommodation}</RoomDetailNavigationAddressNowStyled>
          </RoomDetailNavigationAddressLeftWrapperStyled>
          <RoomDetailNavigationAddressRoomStyled>Xem tất cả 10 khách sạn tại {selectRoomDetailData?.[0]?.acst_id?.name}</RoomDetailNavigationAddressRoomStyled>
        </RoomDetailNavigationAddressWrapperStyled>
          <RoomDetailTopImage selectRoomDetailData={selectRoomDetailData?.[0]}/>
        <RoomDetailNavigationBarWrapperStyled>
          <RoomDetailNavigationBarLeftWrapperStyled>
            <ScrollTo to="overview" spy={true} smooth={true} duration={0} offset={-50}>
              <RoomDetailNavigationBarLeftTitleWrapperStyled>
                <RoomDetailNavigationBarLeftTitleStyled>Tổng quan</RoomDetailNavigationBarLeftTitleStyled>
              </RoomDetailNavigationBarLeftTitleWrapperStyled>
            </ScrollTo>
            <ScrollTo to="choice" spy={true} smooth={true} duration={0} offset={-50}>
              <RoomDetailNavigationBarLeftTitleWrapperStyled>
                <RoomDetailNavigationBarLeftTitleStyled>Phòng nghỉ</RoomDetailNavigationBarLeftTitleStyled>
              </RoomDetailNavigationBarLeftTitleWrapperStyled>
            </ScrollTo>
            <RoomDetailNavigationBarLeftTitleWrapperStyled>
              <RoomDetailNavigationBarLeftTitleStyled>Tiện nghi</RoomDetailNavigationBarLeftTitleStyled>
            </RoomDetailNavigationBarLeftTitleWrapperStyled>
            <ScrollTo to="comment" spy={true} smooth={true} duration={0} offset={-50}>
              <RoomDetailNavigationBarLeftTitleWrapperStyled>
                <RoomDetailNavigationBarLeftTitleStyled>Đánh giá</RoomDetailNavigationBarLeftTitleStyled>
              </RoomDetailNavigationBarLeftTitleWrapperStyled>
            </ScrollTo>
          </RoomDetailNavigationBarLeftWrapperStyled>
          <RoomDetailNavigationBarRightWrapperStyled>
            <RoomDetailNavigationBarRightContentStyled>Giá từ</RoomDetailNavigationBarRightContentStyled>
            <RoomDetailNavigationBarRightPriceStyled>{selectRoomDetailData?.[0]?.priceBase?.toLocaleString()} ₫</RoomDetailNavigationBarRightPriceStyled>
            <RoomCardRightBottomButtonWrapperStyled>
              <RoomCardRightBottomButtonTitleStyled>Xem giá</RoomCardRightBottomButtonTitleStyled>
            </RoomCardRightBottomButtonWrapperStyled>
          </RoomDetailNavigationBarRightWrapperStyled>
        </RoomDetailNavigationBarWrapperStyled>
        <RoomDetailOverviewWrapperStyled id='overview'>
          <RoomDetailOverview selectRoomDetailData={selectRoomDetailData?.[0]}/>
        </RoomDetailOverviewWrapperStyled>
        <RoomDetailChoiceWrapperStyled id='choice'>
          <RoomDetailChoice selectRoomDetailData={selectRoomDetailData?.[0]}/>
        </RoomDetailChoiceWrapperStyled>
        <RoomDetailCommentWrapperStyled id='comment'>
          <RoomDetailComment selectRoomDetailData={selectRoomDetailData?.[0]}/>
        </RoomDetailCommentWrapperStyled>
      </RoomDetailContainerStyled>
    }
    </>
  )
}

export default RoomDetailpage