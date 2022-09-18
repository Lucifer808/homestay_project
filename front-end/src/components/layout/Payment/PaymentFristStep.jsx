import React from 'react';
import styled from 'styled-components';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import SingleBedOutlinedIcon from '@mui/icons-material/SingleBedOutlined';
const PaymentpageBottomLeftWrapperStyled = styled.div`
    flex: 4;
`
const PaymentpageBottomLeftTopWrapperStyled = styled.div`
    padding: 1rem;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`
const PaymentpageBottomLeftTopTitleWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const PaymentpageBottomLeftTopTitleStyled = styled.span`
    font-size: 1.2rem;
    margin-left: .4rem;
`
const PaymentpageBottomLeftTopInputTitleStyled = styled.p`
    margin: 1rem 0 .4rem 0; 
    font-size: .9rem;
`
const PaymentpageBottomLeftTopInputStyled = styled.input`
    width: 100%;
    padding: .7rem;
    border: 1px solid rgb(50, 169, 35);
    border-radius: .2rem;
    &:focus{
        border-color: rgb(83, 146, 249);
        outline: 0px;
        box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset, rgb(83 146 249) 0px 0px 6px;
    }
`
const PaymentpageBottomLeftTopInputHalfContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const PaymentpageBottomLeftTopInputHalfWrapperStyled = styled.div``
const PaymentpageBottomLeftTopInputHalfStyled = styled.input`
    width: 23rem;
    padding: .7rem;
    border: 1px solid rgb(50, 169, 35);
    border-radius: .2rem;
    &:focus{
        border-color: rgb(83, 146, 249);
        outline: 0px;
        box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset, rgb(83 146 249) 0px 0px 6px;
    }
`
const PaymentpageBottomLeftTopSelectHalfStyled = styled.select`
    width: 23rem;
    padding: .7rem;
    border: 1px solid rgb(50, 169, 35);
    border-radius: .2rem;
    &:focus{
        border-color: rgb(83, 146, 249);
        outline: 0px;
        box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset, rgb(83 146 249) 0px 0px 6px;
    }
`
const PaymentpageBottomLeftTopOptionHalfStyled = styled.option`` 
const PaymentpageBottomLeftTopCheckboxStyled = styled.input`
    margin: 1rem 0;
`
const PaymentpageBottomLeftTopCheckboxTitleStyled = styled.span`
    font-weight: 300;
    margin-left: .4rem;
`
const PaymentpageBottomLeftMiddleWrapperStyled = styled.div`
    padding: 1rem;
    margin: 1rem 0;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`
const PaymentpageBottomLeftMiddleTitleStyled = styled.p`
    font-weight: 600;
`
const PaymentpageBottomLeftMiddleSubTitleStyled = styled.p`
    font-weight: 300;
    font-size: .9rem;
    margin: 1rem 0;
`
const PaymentpageBottomLeftMiddleAdvanceWrapperStyled = styled.div`
    background-color: #f9f9f9;
    padding: 1rem;
`
const PaymentpageBottomLeftMiddleAdvanceTitleStyled = styled.p`
    font-weight: 300;
    font-size: .9rem;
`
const PaymentpageBottomLeftMiddleAdvanceChoiceWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;
`
const PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-child(2){
        margin-left: 10rem;
    }
`
const PaymentpageBottomLeftMiddleAdvanceSubChoiceInputStyled = styled.input`
    margin-right: .4rem;
`
const PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled = styled.span`
    margin-left: .4rem;
    font-size: .9rem;
    font-weight: 300;
`
const PaymentpageBottomLeftMiddleMoreAdvanceWrapperStyled = styled.div`
    margin: 1rem 0;
    border: 1px solid #ccc;
    padding: 1rem;
`
const PaymentpageBottomLeftMiddleMoreAdvanceTopTitleStyled = styled.p`
    color: rgb(83, 146, 249);
    text-decoration: underline;
    margin-top: 1rem;
    cursor: pointer;
`
const PaymentpageBottomLeftMiddleMoreAdvanceTitleStyled = styled.p`
    font-size: .9rem;
    font-weight: 300;
`
const PaymentpageBottomLeftMiddleMoreAdvanceTopWrapperStyled = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid #ccc;
`
const PaymentpageBottomLeftMiddleMoreAdvanceTopLeftWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
`
const PaymentpageBottomLeftMiddleMoreAdvanceTopSubLeftWrapperStyled = styled.div``
const PaymentpageBottomLeftMiddleMoreAdvanceTopLeftCheckboxStyled = styled.input``
const PaymentpageBottomLeftMiddleMoreAdvanceTopLeftCheckboxContentStyled = styled.span`
    margin-left: .6rem;
    font-weight: 300;
`
const PaymentpageBottomLeftMiddleMoreAdvanceTopRightWrapperStyled = styled.div``
const PaymentpageBottomLeftMiddleMoreAdvanceTopDescWrapperStyled = styled.div`
    padding: 1.8rem 0 0 0;
`
const PaymentpageBottomLeftMiddleMoreAdvanceTopDescTitleStyled = styled.p`
    font-size: .9rem;
    margin-bottom: 1rem;
`
const PaymentpageBottomLeftMiddleMoreAdvanceTopDescStyled = styled.textarea``
const PaymentFristStep = () => {
  return (
    <PaymentpageBottomLeftWrapperStyled>
        <PaymentpageBottomLeftTopWrapperStyled>
            <PaymentpageBottomLeftTopTitleWrapperStyled>
                <RecordVoiceOverOutlinedIcon style={{color: 'rgb(62, 108, 234)'}}/>
                <PaymentpageBottomLeftTopTitleStyled>Thông tin liên lạc</PaymentpageBottomLeftTopTitleStyled>
            </PaymentpageBottomLeftTopTitleWrapperStyled>
            <PaymentpageBottomLeftTopInputTitleStyled>Họ và tên</PaymentpageBottomLeftTopInputTitleStyled>
            <PaymentpageBottomLeftTopInputStyled placeholder='Nhập họ và tên...'/>
            <PaymentpageBottomLeftTopInputTitleStyled>Email</PaymentpageBottomLeftTopInputTitleStyled>
            <PaymentpageBottomLeftTopInputStyled placeholder='Nhập email...'/>
            <PaymentpageBottomLeftTopInputHalfContainerStyled>
                <PaymentpageBottomLeftTopInputHalfWrapperStyled>
                    <PaymentpageBottomLeftTopInputTitleStyled>Số điện thoại (không bắt buộc)</PaymentpageBottomLeftTopInputTitleStyled>
                    <PaymentpageBottomLeftTopInputHalfStyled />
                </PaymentpageBottomLeftTopInputHalfWrapperStyled>
                <PaymentpageBottomLeftTopInputHalfWrapperStyled>
                    <PaymentpageBottomLeftTopInputTitleStyled>Quốc gia cư trú</PaymentpageBottomLeftTopInputTitleStyled>
                    <PaymentpageBottomLeftTopSelectHalfStyled>
                        <PaymentpageBottomLeftTopOptionHalfStyled defaultValue="Việt Nam" readOnly>Việt Nam</PaymentpageBottomLeftTopOptionHalfStyled>
                    </PaymentpageBottomLeftTopSelectHalfStyled>
                </PaymentpageBottomLeftTopInputHalfWrapperStyled>
            </PaymentpageBottomLeftTopInputHalfContainerStyled>
            <PaymentpageBottomLeftTopCheckboxStyled type="checkbox"/>
            <PaymentpageBottomLeftTopCheckboxTitleStyled>Tôi không ở phòng nào tại khách sạn này. Tôi đặt phòng giúp cho người khác.</PaymentpageBottomLeftTopCheckboxTitleStyled>
        </PaymentpageBottomLeftTopWrapperStyled>
        <PaymentpageBottomLeftMiddleWrapperStyled>
            <PaymentpageBottomLeftMiddleTitleStyled>Hãy cho chúng tôi biết quý khách cần gì</PaymentpageBottomLeftMiddleTitleStyled>
            <PaymentpageBottomLeftMiddleSubTitleStyled>Các yêu cầu được đáp ứng trên cơ sở phục vụ cho khách đến trước. Chúng tôi sẽ gửi các yêu cầu của quý khách ngay sau khi quý khách đặt phòng.</PaymentpageBottomLeftMiddleSubTitleStyled>
            <PaymentpageBottomLeftMiddleAdvanceWrapperStyled>
                <PaymentpageBottomLeftMiddleAdvanceTitleStyled>Quy định hút thuốc (nếu có phòng):</PaymentpageBottomLeftMiddleAdvanceTitleStyled>
                <PaymentpageBottomLeftMiddleAdvanceChoiceWrapperStyled>
                    <PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                        <PaymentpageBottomLeftMiddleAdvanceSubChoiceInputStyled type="radio" name="smoke"/>
                        <SmokeFreeIcon style={{color: '#555'}}/>
                        <PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>Phòng không hút thuốc</PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>
                    </PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                    <PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                        <PaymentpageBottomLeftMiddleAdvanceSubChoiceInputStyled type="radio" name="smoke"/>
                        <SmokingRoomsIcon style={{color: '#555'}}/>
                        <PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>Phòng hút thuốc</PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>
                    </PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                </PaymentpageBottomLeftMiddleAdvanceChoiceWrapperStyled>
                <PaymentpageBottomLeftMiddleAdvanceTitleStyled>Chọn loại giường (nếu có phòng):</PaymentpageBottomLeftMiddleAdvanceTitleStyled>
                <PaymentpageBottomLeftMiddleAdvanceChoiceWrapperStyled>
                    <PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                        <PaymentpageBottomLeftMiddleAdvanceSubChoiceInputStyled type="radio" name="bed"/>
                        <KingBedOutlinedIcon style={{color: '#555'}}/>
                        <PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>Tôi muốn lấy giường lớn</PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>
                    </PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                    <PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled style={{marginLeft: '9.6rem'}}>
                        <PaymentpageBottomLeftMiddleAdvanceSubChoiceInputStyled type="radio" name="bed"/>
                        <SingleBedOutlinedIcon style={{color: '#555'}}/>
                        <SingleBedOutlinedIcon style={{color: '#555'}}/>
                        <PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>Tôi muốn lấy phòng 2 giường</PaymentpageBottomLeftMiddleAdvanceSubChoiceContentInputStyled>
                    </PaymentpageBottomLeftMiddleAdvanceSubChoiceWrapperStyled>
                </PaymentpageBottomLeftMiddleAdvanceChoiceWrapperStyled>
            </PaymentpageBottomLeftMiddleAdvanceWrapperStyled>
            <PaymentpageBottomLeftMiddleMoreAdvanceTopTitleStyled>Thêm yêu cầu đặc biệt</PaymentpageBottomLeftMiddleMoreAdvanceTopTitleStyled>
            <PaymentpageBottomLeftMiddleMoreAdvanceWrapperStyled>
                <PaymentpageBottomLeftMiddleMoreAdvanceTitleStyled>Vui lòng lưu ý tất cả các yêu cầu chỉ được đáp ứng tùy theo khách sạn.</PaymentpageBottomLeftMiddleMoreAdvanceTitleStyled>
                <PaymentpageBottomLeftMiddleMoreAdvanceTopWrapperStyled>
                    <PaymentpageBottomLeftMiddleMoreAdvanceTopLeftWrapperStyled>
                        <PaymentpageBottomLeftMiddleMoreAdvanceTopSubLeftWrapperStyled>
                            <PaymentpageBottomLeftMiddleMoreAdvanceTopLeftCheckboxStyled type="checkbox" />
                            <PaymentpageBottomLeftMiddleMoreAdvanceTopLeftCheckboxContentStyled>Tôi muốn lấy phòng tầng cao</PaymentpageBottomLeftMiddleMoreAdvanceTopLeftCheckboxContentStyled>
                        </PaymentpageBottomLeftMiddleMoreAdvanceTopSubLeftWrapperStyled>
                        <PaymentpageBottomLeftMiddleMoreAdvanceTopSubLeftWrapperStyled>
                            <PaymentpageBottomLeftMiddleMoreAdvanceTopLeftCheckboxStyled type="checkbox" />
                            <PaymentpageBottomLeftMiddleMoreAdvanceTopLeftCheckboxContentStyled>Tôi muốn có nôi trẻ em (Phụ phí có thể áp dụng)</PaymentpageBottomLeftMiddleMoreAdvanceTopLeftCheckboxContentStyled>
                        </PaymentpageBottomLeftMiddleMoreAdvanceTopSubLeftWrapperStyled>
                    </PaymentpageBottomLeftMiddleMoreAdvanceTopLeftWrapperStyled>
                    <PaymentpageBottomLeftMiddleMoreAdvanceTopRightWrapperStyled>
                        <PaymentpageBottomLeftMiddleMoreAdvanceTopSubLeftWrapperStyled>
                            <PaymentpageBottomLeftMiddleMoreAdvanceTopLeftCheckboxStyled type="checkbox" />
                            <PaymentpageBottomLeftMiddleMoreAdvanceTopLeftCheckboxContentStyled>Tôi muốn lấy phòng yên tĩnh</PaymentpageBottomLeftMiddleMoreAdvanceTopLeftCheckboxContentStyled>
                        </PaymentpageBottomLeftMiddleMoreAdvanceTopSubLeftWrapperStyled>
                    </PaymentpageBottomLeftMiddleMoreAdvanceTopRightWrapperStyled>
                </PaymentpageBottomLeftMiddleMoreAdvanceTopWrapperStyled>
                <PaymentpageBottomLeftMiddleMoreAdvanceTopDescWrapperStyled>
                    <PaymentpageBottomLeftMiddleMoreAdvanceTopDescTitleStyled>Vui lòng nhập lời nhắn tại đây</PaymentpageBottomLeftMiddleMoreAdvanceTopDescTitleStyled>
                    <PaymentpageBottomLeftMiddleMoreAdvanceTopDescStyled cols="107" rows="8"/>
                </PaymentpageBottomLeftMiddleMoreAdvanceTopDescWrapperStyled>
            </PaymentpageBottomLeftMiddleMoreAdvanceWrapperStyled>
        </PaymentpageBottomLeftMiddleWrapperStyled>
    </PaymentpageBottomLeftWrapperStyled>
  )
}

export default PaymentFristStep