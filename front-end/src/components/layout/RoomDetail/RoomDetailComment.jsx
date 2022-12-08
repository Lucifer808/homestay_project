import React, {useState} from 'react';
import styled from 'styled-components';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const RoomDetailCommentContainerStyled = styled.div``
const RoomDetailCommentWrapperStyled = styled.div``
const RoomDetailCommentTitleWrapperStyled = styled.div`
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
`
const RoomDetailCommentTitleStyled = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
`
const RoomDetailCommentBottomWrapperStyled = styled.div`
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
`
const RoomDetailCommentInputContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    width: 100%;
`
const RoomDetailCommentSelectPointWrapperrStyled = styled.div`
    text-align: right;
`
const RoomDetailCommentSelectPointStyled = styled.input`
    padding: .8rem 1.8rem;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
`
const RoomDetailCommentBtnPointStyled = styled.button`
    padding: 1rem;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    border: none;
    margin-top: 4rem;
    background-color: rgb(62, 108, 234);
    color: #fff;
    border-radius: .2rem;
    border-color: rgb(120, 152, 240);
    cursor: pointer;
    &:hover{
        background-color: rgb(120, 152, 240);
    }
`
const RoomDetailCommentInputWrapperrStyled = styled.div`
    width: 80%;
`
const RoomDetailCommentInputStyled = styled.textarea`
    width: 100%;
    padding: 1rem;
`
const RoomDetailCommentBottomTopWrapperStyled = styled.div``
const RoomDetailCommentBottomTopFilterContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const RoomDetailCommentBottomTopFilterWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20rem;
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem 0;
    cursor: pointer;
    &:last-child{
        margin-left: 2rem;
    }
`
const RoomDetailCommentBottomTopFilterContentWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const RoomDetailCommentBottomTopFilterContentStyled = styled.span`
    margin-left: .4rem;
`
const RoomDetailCommentBottomTopFilterTitleWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const RoomDetailCommentBottomTopFilterTitleStyled = styled.span`
    font-size: .9rem;
    font-weight: 600;
`
const RoomDetailCommentBottomTopFilterSelectWrapperStyled = styled.div``
const RoomDetailCommentBottomTopFilterSelectTitleStyled = styled.span`
    font-size: .9rem;
    font-weight: 600;
    margin-right: .2rem;
`
const RoomDetailCommentBottomTopFilterSelectStyled = styled.select`
    padding: .4rem;
`
const RoomDetailCommentBottomTopFilterOptionStyled = styled.option``
const RoomDetailCommentBottomUnderContainerStyled = styled.div`
    padding: 2rem;
    width: 100%;
`
const RoomDetailCommentBottomUnderWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 2rem 0;
    &:last-child{
        border-bottom: none;
    }
`
const RoomDetailCommentBottomUnderLeftWrapperStyled = styled.div`
    flex: 1;
`
const RoomDetailCommentBottomUnderRightWrapperStyled = styled.div`
    flex: 3;
    background-color: rgb(245, 245, 245);
    border-radius: 1rem;
    padding: 3rem;
`
const RoomDetailCommentBottomUnderRightCommentWrapperStyled = styled.div`
    border-bottom: 1px solid #ccc;
`
const RoomDetailCommentBottomUnderRightCommentTitleStyled = styled.p`
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.2rem;
`
const RoomDetailCommentBottomUnderRightCommentBottomWrapperStyled = styled.div`
    margin-bottom: 2rem;
`
const RoomDetailCommentBottomUnderRightCommentBottomTimeWrapperStyled = styled.p`
    margin-bottom: 1rem;
    font-size: .8rem;
    font-weight: 500;
    color: #777;
`
const RoomDetailCommentBottomUnderRightCommentBottomStyled = styled.p`
    font-size: .9rem;
    font-weight: 300;
    line-height: 1.4rem;
`
const RoomDetailCommentBottomUnderLeftPointWrapperStyled = styled.div``
const RoomDetailCommentBottomUnderRightPointStyled = styled.span`
    font-size: 3rem;
    color: #488bf8;
`
const RoomDetailCommentBottomUnderRightPointTitleStyled = styled.span`
    font-size: 1.4rem;
    color: #488bf8;
`
const RoomDetailCommentBottomUnderLeftSubContentWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #555;
    margin-top: .4rem;
`
const RoomDetailCommentBottomUnderLeftSubContentStyled = styled.span`
    font-size: .8rem;
    margin-left: .2rem;
`
const RoomDetailComment = (props) => {
  const [comment, setComment] = useState();
  const [ratung, setRating] = useState(0);
  const {selectRoomDetailData} = props;
  return (
    <RoomDetailCommentContainerStyled>
        <RoomDetailCommentWrapperStyled>
            <RoomDetailCommentTitleWrapperStyled>
                <RoomDetailCommentTitleStyled>Bài đánh giá {selectRoomDetailData?.nameOfAccommodation} từ khách thật</RoomDetailCommentTitleStyled>
            </RoomDetailCommentTitleWrapperStyled>
            <RoomDetailCommentInputContainerStyled>
                <RoomDetailCommentInputWrapperrStyled>
                    <RoomDetailCommentInputStyled cols={20} rows={8} placeholder="Thêm bình luận đánh giá tại đây"/>
                </RoomDetailCommentInputWrapperrStyled>
                <RoomDetailCommentSelectPointWrapperrStyled>
                    <RoomDetailCommentSelectPointStyled placeholder='Chấm điểm' type="number" min={0}/>
                    <RoomDetailCommentBtnPointStyled>Thêm bình luận</RoomDetailCommentBtnPointStyled>
                </RoomDetailCommentSelectPointWrapperrStyled>
            </RoomDetailCommentInputContainerStyled>
            <RoomDetailCommentBottomWrapperStyled>
                <RoomDetailCommentBottomTopWrapperStyled>
                    <RoomDetailCommentBottomTopFilterContainerStyled>
                        <RoomDetailCommentBottomTopFilterWrapperStyled>
                            <RoomDetailCommentBottomTopFilterContentWrapperStyled>
                                <GroupOutlinedIcon />
                                <RoomDetailCommentBottomTopFilterContentStyled>Tất cả mọi du khách (2)</RoomDetailCommentBottomTopFilterContentStyled>
                            </RoomDetailCommentBottomTopFilterContentWrapperStyled>
                            <ArrowDropDownIcon />
                        </RoomDetailCommentBottomTopFilterWrapperStyled>
                        <RoomDetailCommentBottomTopFilterWrapperStyled>
                            <RoomDetailCommentBottomTopFilterContentWrapperStyled>
                                <BedOutlinedIcon />
                                <RoomDetailCommentBottomTopFilterContentStyled>Mọi loại phòng</RoomDetailCommentBottomTopFilterContentStyled>
                            </RoomDetailCommentBottomTopFilterContentWrapperStyled>
                            <ArrowDropDownIcon />
                        </RoomDetailCommentBottomTopFilterWrapperStyled>
                    </RoomDetailCommentBottomTopFilterContainerStyled>
                    <RoomDetailCommentBottomTopFilterTitleWrapperStyled>
                        <RoomDetailCommentBottomTopFilterTitleStyled>Đang hiển thị 2 nhận xét thực từ du khách</RoomDetailCommentBottomTopFilterTitleStyled>
                        <RoomDetailCommentBottomTopFilterSelectWrapperStyled>
                            <RoomDetailCommentBottomTopFilterSelectTitleStyled>Sắp xếp theo</RoomDetailCommentBottomTopFilterSelectTitleStyled>
                            <RoomDetailCommentBottomTopFilterSelectStyled>
                                <RoomDetailCommentBottomTopFilterOptionStyled>Gần đây nhất</RoomDetailCommentBottomTopFilterOptionStyled>
                                <RoomDetailCommentBottomTopFilterOptionStyled>Đánh giá, cao đến thấp</RoomDetailCommentBottomTopFilterOptionStyled>
                                <RoomDetailCommentBottomTopFilterOptionStyled>Đánh giá, thấp đến cao</RoomDetailCommentBottomTopFilterOptionStyled>
                                <RoomDetailCommentBottomTopFilterOptionStyled>Hữu ích nhất</RoomDetailCommentBottomTopFilterOptionStyled>
                            </RoomDetailCommentBottomTopFilterSelectStyled>
                        </RoomDetailCommentBottomTopFilterSelectWrapperStyled>
                    </RoomDetailCommentBottomTopFilterTitleWrapperStyled>
                </RoomDetailCommentBottomTopWrapperStyled>
            </RoomDetailCommentBottomWrapperStyled>
            <RoomDetailCommentBottomUnderContainerStyled>
                <RoomDetailCommentBottomUnderWrapperStyled>
                    <RoomDetailCommentBottomUnderLeftWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftPointWrapperStyled>
                            <RoomDetailCommentBottomUnderRightPointStyled>8,8 </RoomDetailCommentBottomUnderRightPointStyled>
                            <RoomDetailCommentBottomUnderRightPointTitleStyled>Tuyệt vời</RoomDetailCommentBottomUnderRightPointTitleStyled>
                        </RoomDetailCommentBottomUnderLeftPointWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                            <LanguageOutlinedIcon style={{color: '#555', fontSize: '1rem'}}/>
                            <RoomDetailCommentBottomUnderLeftSubContentStyled>Duy đến từ Việt Nam</RoomDetailCommentBottomUnderLeftSubContentStyled>
                        </RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                            <LuggageOutlinedIcon style={{color: '#555', fontSize: '1rem'}}/>
                            <RoomDetailCommentBottomUnderLeftSubContentStyled>Du lịch một mình</RoomDetailCommentBottomUnderLeftSubContentStyled>
                        </RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                            <BedOutlinedIcon style={{color: '#555', fontSize: '1rem'}}/>
                            <RoomDetailCommentBottomUnderLeftSubContentStyled>Deluxe Terrace Garden Access</RoomDetailCommentBottomUnderLeftSubContentStyled>
                        </RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                            <CalendarTodayOutlinedIcon style={{color: '#555', fontSize: '1rem'}}/>
                            <RoomDetailCommentBottomUnderLeftSubContentStyled>Đã ở 1 đêm vào tháng tư 2022</RoomDetailCommentBottomUnderLeftSubContentStyled>
                        </RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                    </RoomDetailCommentBottomUnderLeftWrapperStyled>
                    <RoomDetailCommentBottomUnderRightWrapperStyled>
                        <RoomDetailCommentBottomUnderRightCommentWrapperStyled>
                            <RoomDetailCommentBottomUnderRightCommentTitleStyled>"Tiện nghi - sạch sẽ - thuận tiện"</RoomDetailCommentBottomUnderRightCommentTitleStyled>
                            <RoomDetailCommentBottomUnderRightCommentBottomWrapperStyled>
                                <RoomDetailCommentBottomUnderRightCommentBottomStyled datatype='comment'>
                                Căn hộ rất phù hợp với gia đình và ở thời gian lâu. Tiện nghi: đầy đủ tiện nghi như khách sạn 5 sao. Ngoài ra còn có máy lạnh mới và tốt Sạch sẽ: lau dọn hàng ngày từ bên trong phòng đến nơi công cộng Thuận tiện: rất gần bãi biển, gần nơi có đầy đủ từ quán ăn đến nhà thuốc, từ siêu thị đến quán cốc vĩa hè. Thuận tiện đi tham qua n các nơi nổi tiềng ở Nha Trang.
                                </RoomDetailCommentBottomUnderRightCommentBottomStyled>
                            </RoomDetailCommentBottomUnderRightCommentBottomWrapperStyled>
                            <RoomDetailCommentBottomUnderRightCommentBottomTimeWrapperStyled>Đã nhận xét vào 09 tháng tư 2022</RoomDetailCommentBottomUnderRightCommentBottomTimeWrapperStyled>
                        </RoomDetailCommentBottomUnderRightCommentWrapperStyled>
                    </RoomDetailCommentBottomUnderRightWrapperStyled>
                </RoomDetailCommentBottomUnderWrapperStyled>
                <RoomDetailCommentBottomUnderWrapperStyled>
                    <RoomDetailCommentBottomUnderLeftWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftPointWrapperStyled>
                            <RoomDetailCommentBottomUnderRightPointStyled>8,8 </RoomDetailCommentBottomUnderRightPointStyled>
                            <RoomDetailCommentBottomUnderRightPointTitleStyled>Tuyệt vời</RoomDetailCommentBottomUnderRightPointTitleStyled>
                        </RoomDetailCommentBottomUnderLeftPointWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                            <LanguageOutlinedIcon style={{color: '#555', fontSize: '1rem'}}/>
                            <RoomDetailCommentBottomUnderLeftSubContentStyled>Duy đến từ Việt Nam</RoomDetailCommentBottomUnderLeftSubContentStyled>
                        </RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                            <LuggageOutlinedIcon style={{color: '#555', fontSize: '1rem'}}/>
                            <RoomDetailCommentBottomUnderLeftSubContentStyled>Du lịch một mình</RoomDetailCommentBottomUnderLeftSubContentStyled>
                        </RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                            <BedOutlinedIcon style={{color: '#555', fontSize: '1rem'}}/>
                            <RoomDetailCommentBottomUnderLeftSubContentStyled>Deluxe Terrace Garden Access</RoomDetailCommentBottomUnderLeftSubContentStyled>
                        </RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                            <CalendarTodayOutlinedIcon style={{color: '#555', fontSize: '1rem'}}/>
                            <RoomDetailCommentBottomUnderLeftSubContentStyled>Đã ở 1 đêm vào tháng tư 2022</RoomDetailCommentBottomUnderLeftSubContentStyled>
                        </RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                    </RoomDetailCommentBottomUnderLeftWrapperStyled>
                    <RoomDetailCommentBottomUnderRightWrapperStyled>
                        <RoomDetailCommentBottomUnderRightCommentWrapperStyled>
                            <RoomDetailCommentBottomUnderRightCommentTitleStyled>"Incredible Experience, Best Value, 5* Service"</RoomDetailCommentBottomUnderRightCommentTitleStyled>
                            <RoomDetailCommentBottomUnderRightCommentBottomWrapperStyled>
                                <RoomDetailCommentBottomUnderRightCommentBottomStyled datatype='comment'>
                                    I was a little hesitant before i arrived after reading one or two negative reviews. Sometimes it's best to just ignore them as i did! This was without doubt the best hotel experience i have had in Phuket and beyond. The rooms were really excellent, with the most comfortable bed and sleep i have had in Thailand. Everything in very good condition and well looked after. There was also plenty to do at this resort, with a great cafe, dessert / cake shop, and restaurant on site. The food was very good with one of the best pad thai noodles and pizza i have had on this trip. There is also a petting zoo, which was very well managed and the animals were clearly well looked after. Kids and adults alike were able to feed, pet, and hold various animals twice a day. The staff need a Huge mention as it is very rare to have such exemplary service and care from ALL staff.. including even the room cleaners. I could not fault the hotel staff in any way after a week's stay. Finally the gardens are lovingly managed and very beautiful. They make this resort something of a jewel that lives just a few steps from the beach that is just across the road. If you like a more quiet beach then this is the one, nothing to compare to the crowded and noisy beaches in Patong etc. Thank you to all the staff and Kudos to the management for keeping this resort at such high standards despite the challenges of recent times!
                                </RoomDetailCommentBottomUnderRightCommentBottomStyled>
                            </RoomDetailCommentBottomUnderRightCommentBottomWrapperStyled>
                            <RoomDetailCommentBottomUnderRightCommentBottomTimeWrapperStyled>Đã nhận xét vào 09 tháng tư 2022</RoomDetailCommentBottomUnderRightCommentBottomTimeWrapperStyled>
                        </RoomDetailCommentBottomUnderRightCommentWrapperStyled>
                    </RoomDetailCommentBottomUnderRightWrapperStyled>
                </RoomDetailCommentBottomUnderWrapperStyled>
                <RoomDetailCommentBottomUnderWrapperStyled>
                    <RoomDetailCommentBottomUnderLeftWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftPointWrapperStyled>
                            <RoomDetailCommentBottomUnderRightPointStyled>8,8 </RoomDetailCommentBottomUnderRightPointStyled>
                            <RoomDetailCommentBottomUnderRightPointTitleStyled>Tuyệt vời</RoomDetailCommentBottomUnderRightPointTitleStyled>
                        </RoomDetailCommentBottomUnderLeftPointWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                            <LanguageOutlinedIcon style={{color: '#555', fontSize: '1rem'}}/>
                            <RoomDetailCommentBottomUnderLeftSubContentStyled>Duy đến từ Việt Nam</RoomDetailCommentBottomUnderLeftSubContentStyled>
                        </RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                            <LuggageOutlinedIcon style={{color: '#555', fontSize: '1rem'}}/>
                            <RoomDetailCommentBottomUnderLeftSubContentStyled>Du lịch một mình</RoomDetailCommentBottomUnderLeftSubContentStyled>
                        </RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                            <BedOutlinedIcon style={{color: '#555', fontSize: '1rem'}}/>
                            <RoomDetailCommentBottomUnderLeftSubContentStyled>Deluxe Terrace Garden Access</RoomDetailCommentBottomUnderLeftSubContentStyled>
                        </RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                        <RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                            <CalendarTodayOutlinedIcon style={{color: '#555', fontSize: '1rem'}}/>
                            <RoomDetailCommentBottomUnderLeftSubContentStyled>Đã ở 1 đêm vào tháng tư 2022</RoomDetailCommentBottomUnderLeftSubContentStyled>
                        </RoomDetailCommentBottomUnderLeftSubContentWrapperStyled>
                    </RoomDetailCommentBottomUnderLeftWrapperStyled>
                    <RoomDetailCommentBottomUnderRightWrapperStyled>
                        <RoomDetailCommentBottomUnderRightCommentWrapperStyled>
                            <RoomDetailCommentBottomUnderRightCommentTitleStyled>"Incredible Experience, Best Value, 5* Service"</RoomDetailCommentBottomUnderRightCommentTitleStyled>
                            <RoomDetailCommentBottomUnderRightCommentBottomWrapperStyled>
                                <RoomDetailCommentBottomUnderRightCommentBottomStyled datatype='comment'>
                                    I was a little hesitant before i arrived after reading one or two negative reviews. Sometimes it's best to just ignore them as i did! This was without doubt the best hotel experience i have had in Phuket and beyond. The rooms were really excellent, with the most comfortable bed and sleep i have had in Thailand. Everything in very good condition and well looked after. There was also plenty to do at this resort, with a great cafe, dessert / cake shop, and restaurant on site. The food was very good with one of the best pad thai noodles and pizza i have had on this trip. There is also a petting zoo, which was very well managed and the animals were clearly well looked after. Kids and adults alike were able to feed, pet, and hold various animals twice a day. The staff need a Huge mention as it is very rare to have such exemplary service and care from ALL staff.. including even the room cleaners. I could not fault the hotel staff in any way after a week's stay. Finally the gardens are lovingly managed and very beautiful. They make this resort something of a jewel that lives just a few steps from the beach that is just across the road. If you like a more quiet beach then this is the one, nothing to compare to the crowded and noisy beaches in Patong etc. Thank you to all the staff and Kudos to the management for keeping this resort at such high standards despite the challenges of recent times!
                                </RoomDetailCommentBottomUnderRightCommentBottomStyled>
                            </RoomDetailCommentBottomUnderRightCommentBottomWrapperStyled>
                            <RoomDetailCommentBottomUnderRightCommentBottomTimeWrapperStyled>Đã nhận xét vào 09 tháng tư 2022</RoomDetailCommentBottomUnderRightCommentBottomTimeWrapperStyled>
                        </RoomDetailCommentBottomUnderRightCommentWrapperStyled>
                    </RoomDetailCommentBottomUnderRightWrapperStyled>
                </RoomDetailCommentBottomUnderWrapperStyled>
            </RoomDetailCommentBottomUnderContainerStyled>
            <Stack spacing={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Pagination count={10} variant="outlined" />
            </Stack>
        </RoomDetailCommentWrapperStyled>
    </RoomDetailCommentContainerStyled>
  )
}

export default RoomDetailComment