import React from 'react';
import styled from 'styled-components';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import SmokeFreeOutlinedIcon from '@mui/icons-material/SmokeFreeOutlined';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BookingDetailCard from '../../child/BookingDetailCard';
const RoomDetailChoiceContainerStyled = styled.div`
    width: 100%;
`
const RoomDetailChoiceWrapperStyled = styled.div``
const RoomDetailChoiceTitleWrapperStyled = styled.div`
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
`
const RoomDetailChoiceTitleStyled = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
`
const RoomDetailChoiceClearTitleStyled = styled.p`
    color: rgb(82, 120, 224);
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`
const RoomDetailChoiceFilterWrapperStyled = styled.div`
    width: 100%;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: .2rem;
    margin: 1rem 0;
`
const RoomDetailChoiceFilterTitleContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const RoomDetailChoiceFilterTitleWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const RoomDetailChoiceFilterTitleStyled = styled.span`
    margin-left: .4rem;
`
const RoomDetailChoiceFilterBottomContainerStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0;
`
const RoomDetailChoiceFilterBottomWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem 0;
    border: 1px solid #ccc;
    border-radius: 1rem;
    width: 13rem;
    margin: 0 1rem;
    cursor: pointer;
    &:hover{
        border: 1px solid rgb(82, 120, 224);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`
const RoomDetailChoiceFilterBottomContentStyled = styled.span`
    margin-left: .4rem;
    color: #555;
`
const RoomDetailChoiceFilterContentWrapperStyled = styled.div``
const RoomDetailChoiceFilterContentStyled = styled.p`
    font-weight: 500;
    font-size: .9rem;
`
const RoomDetailChoiceFilterSubContentStyled = styled.p`
    font-weight: 500;
    font-size: .8rem;
    margin: .4rem 0;
    color: #555;
`
const RoomDetailChoice = () => {
  return (
    <RoomDetailChoiceContainerStyled>
        <RoomDetailChoiceWrapperStyled>
            <RoomDetailChoiceTitleWrapperStyled>
                <RoomDetailChoiceTitleStyled>Chọn phòng</RoomDetailChoiceTitleStyled>
            </RoomDetailChoiceTitleWrapperStyled>
            <RoomDetailChoiceFilterWrapperStyled>
                <RoomDetailChoiceFilterTitleContainerStyled>
                    <RoomDetailChoiceFilterTitleWrapperStyled>
                        <TuneOutlinedIcon />
                        <RoomDetailChoiceFilterTitleStyled>Chọn lọc:</RoomDetailChoiceFilterTitleStyled>
                    </RoomDetailChoiceFilterTitleWrapperStyled>
                    <RoomDetailChoiceClearTitleStyled>Xóa hết</RoomDetailChoiceClearTitleStyled>
                </RoomDetailChoiceFilterTitleContainerStyled>
                <RoomDetailChoiceFilterBottomContainerStyled>
                    <RoomDetailChoiceFilterBottomWrapperStyled>
                        <SmokeFreeOutlinedIcon style={{color: '#555'}}/>
                        <RoomDetailChoiceFilterBottomContentStyled>Không hút thuốc (5)</RoomDetailChoiceFilterBottomContentStyled>
                    </RoomDetailChoiceFilterBottomWrapperStyled>
                    <RoomDetailChoiceFilterBottomWrapperStyled>
                        <FreeBreakfastOutlinedIcon style={{color: '#555'}}/>
                        <RoomDetailChoiceFilterBottomContentStyled>Có ăn sáng (7)</RoomDetailChoiceFilterBottomContentStyled>
                    </RoomDetailChoiceFilterBottomWrapperStyled>
                    <RoomDetailChoiceFilterBottomWrapperStyled>
                        <Diversity1OutlinedIcon style={{color: '#555'}}/>
                        <RoomDetailChoiceFilterBottomContentStyled>Gợi ý cho gia đình (1)</RoomDetailChoiceFilterBottomContentStyled>
                    </RoomDetailChoiceFilterBottomWrapperStyled>
                    <RoomDetailChoiceFilterBottomWrapperStyled>
                        <BedOutlinedIcon style={{color: '#555'}}/>
                        <RoomDetailChoiceFilterBottomContentStyled>Hai giường (2)</RoomDetailChoiceFilterBottomContentStyled>
                    </RoomDetailChoiceFilterBottomWrapperStyled>
                </RoomDetailChoiceFilterBottomContainerStyled>
            </RoomDetailChoiceFilterWrapperStyled>
            <RoomDetailChoiceFilterContentWrapperStyled>
                <RoomDetailChoiceFilterContentStyled>5 loại phòng và tổng cộng 10 lựa chọn</RoomDetailChoiceFilterContentStyled>
                <RoomDetailChoiceFilterSubContentStyled>Giá không bao gồm thuế & phí</RoomDetailChoiceFilterSubContentStyled>
            </RoomDetailChoiceFilterContentWrapperStyled>
            <BookingDetailCard />
            <BookingDetailCard />
        </RoomDetailChoiceWrapperStyled>
    </RoomDetailChoiceContainerStyled>
  )
}

export default RoomDetailChoice