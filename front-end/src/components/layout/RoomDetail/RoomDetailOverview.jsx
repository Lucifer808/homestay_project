import React from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import wheel from '../../../assets/ferrisWheel.svg';
import door from '../../../assets/door.svg';
import croissant from '../../../assets/croissant.svg';
import transfer from '../../../assets/transfer.svg';
import hotel from '../../../assets/hotel.svg';
import sha_logo from '../../../assets/sha_plus_logo.png';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import DirectionsWalkOutlinedIcon from '@mui/icons-material/DirectionsWalkOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
const RoomDetailOverviewContainerStyled = styled.div`
    height: 100%;
`
const RoomDetailOverviewWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
`
const RoomDetailOverviewLeftWrapperStyled = styled.div`
    flex: 5;
    height: 100%;
    margin-right: 1rem;
`
const RoomDetailOverviewRightWrapperStyled = styled.div`
    flex: 2;
    height: 100%;
`
const RoomDetailOverviewLeftTopDescWrapperStyled = styled.div`
    width: 100%;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: .2rem;
    margin-bottom: 1rem;
`
const RoomDetailOverviewLeftTopDescTagWrapperStyled = styled.div`
    text-align: center;
    background-color: rgb(68, 196, 211);
    width: 7rem;
    border-radius: .2rem;
    margin-bottom: 1rem;
`
const RoomDetailOverviewLeftTopDescTagContentStyled = styled.p`
    color: #fff;
    font-size: .9rem;
    padding: .3rem .2rem;
`
const RoomDetailOverviewLeftTopDescTitleWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const RoomDetailOverviewLeftTopDescTitleStyled = styled.span`
    font-size: 1.6rem;
    font-weight: 600;
    margin-right: .4rem;
`
const RoomDetailOverviewLeftTopDescSubTitleWrapperStyled = styled.div`
    border-bottom: 1px solid #ccc;
`
const RoomDetailOverviewLeftTopDescSubTitleStyled = styled.p`
    font-size: .9rem;
    margin: 1rem 0;
    font-weight: 300;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`
const RoomDetailOverviewLeftBottomDescContentWrapperStyled = styled.div`
    margin: 1rem 0;
    font-weight: 300;
`
const RoomDetailOverviewLeftBottomDescContentStyled = styled.p``
const RoomDetailOverviewLeftTopHighlightWrapperStyled = styled.div`
    width: 100%;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: .2rem;
`
const RoomDetailOverviewLeftTopHighlightTitleStyled = styled.p`
    font-weight: 600;
    font-size: 1.1rem;
`
const RoomDetailOverviewLeftTopHighlightElementWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const RoomDetailOverviewLeftTopHighlightImageWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 10rem;
    margin: 1rem 0;
`
const RoomDetailOverviewLeftTopHighlightImageStyled = styled.img``
const RoomDetailOverviewLeftTopHighlightSubTitleStyled = styled.span`
    display: block;
    font-size: .8rem;
    font-weight: 500;
`
const RoomDetailOverviewLeftTopCertificateWrapperStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid #ccc;
    border-radius: .2rem;
`
const RoomDetailOverviewLeftTopCertificateImageStyled = styled.img`
    height: 3rem;
`
const RoomDetailOverviewLeftTopCertificateContentWrapperStyled = styled.div`
    margin-left: 1rem;
`
const RoomDetailOverviewLeftTopCertificateContentStyled = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
`
const RoomDetailOverviewLeftTopCertificateSubContentStyled = styled.p`
    font-weight: 300;
`
const RoomDetailOverviewLeftTopConvenientWrapperStyled = styled.div`
    width: 100%;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: .2rem;
`
const RoomDetailOverviewLeftTopConvenientTitleStyled = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
`
const RoomDetailOverviewLeftTopConvenientBottomWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
`
const RoomDetailOverviewLeftTopConvenientTopSideStyled = styled.div`
    text-align: left;
    left: 0;
`
const RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: .4rem 0;
`
const RoomDetailOverviewLeftTopConvenientTopSideContentStyled = styled.span`
    font-weight: 400;
    margin-left: .2rem;
`
const RoomDetailOverviewRightTopConvenientWrapperStyled = styled.div`
    width: 100%;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: .2rem;
`
const RoomCardRightReviewWrapperStyled = styled.div`
    display: flex;
    padding: .6rem;
    width: 100%;
`
const RoomCardRightReviewContentWrapperStyled = styled.div`
    width: 100%;
    height: 100%;
    margin-right: .6rem;
`
const RoomCardRightReviewContentTopStyled = styled.span`
    font-size: .9rem;
    display: block;
`
const RoomCardRightReviewContentBottomStyled = styled.span`
    display: block;
    font-size: .8rem;
    color: #888;
`
const RoomCardRightReviewPointWrapperStyled = styled.div`
    position: relative;
    background-color: rgb(62, 108, 234);
    height: 2.2rem;
    width: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 0;
`
const RoomCardRightReviewPointContentStyled = styled.span`
    display: block;
    color: #fff;
`
const RoomCardRightReviewTagContainerStyled = styled.div`
    max-width: 20rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`
const RoomCardRightReviewTagWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    width: 7rem;
    font-size: .9rem;
    padding: .3rem;
    margin: .4rem .4rem;
`
const RoomCardRightReviewTagContentStyled = styled.span`
    font-size: .8rem;
`
const RoomCardRightReviewTagContentNumberWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const RoomCardRightReviewTagContentNumberStyled = styled.span`
    font-size: .8rem;
    margin: 0 .2rem;
    color: rgb(50, 169, 35);
`
const RoomDetailOverviewRightBottomConvenientWrapperStyled = styled.div`
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    border: 1px solid #ccc;
    border-radius: .2rem;
`
const RoomDetailOverviewRightBottomMapWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: .2rem;
    height: 8rem;
    cursor: pointer;
    &:hover{
        color: #ccc;
    }
`
const RoomDetailOverviewRightBottomMapStyled = styled.span``
const RoomDetailOverviewRightBottomTitleContainerStyled = styled.div`
    border-bottom: 1px solid #ccc;
`
const RoomDetailOverviewRightBottomTitleWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: .4rem;
`
const RoomDetailOverviewRightBottomTitleStyled = styled.span`
    font-size: .9rem;
    font-weight: 500;
    margin-left: .2rem;
`
const RoomDetailOverviewRightBottomSubSuggestionWrapperStyled = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid #ccc;
`
const RoomDetailOverviewRightBottomSubSuggestionTitleStyled = styled.p`
    font-weight: 400;
    font-size: .8rem;
`
const RoomDetailOverviewRightBottomSubSuggestionContentWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: .6rem 0;
`
const RoomDetailOverviewRightBottomSubSuggestionContentLeftStyled = styled.span`
    font-weight: 300;
    font-size: .8rem;
`
const RoomDetailOverviewRightBottomSubSuggestionContentRightStyled = styled.span`
    font-weight: 300;
    font-size: .8rem;
`
const RoomDetailOverviewRightBottomSubSuggestionMoreStyled = styled.p`
    color: rgb(82, 120, 224);
    margin: .8rem 0;
    font-size: .9rem;
    text-align: right;
`
const RoomDetailOverviewLeftTopSellingGoodWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 1.2rem 1rem;
    border-radius: .2rem;
    margin: 1rem 0;
    background-color: #fdf3f3;
`
const RoomDetailOverviewLeftTopSellingGoodIconWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgb(225, 44, 44);
    height: 3rem;
    width: 3rem;
`
const RoomDetailOverviewLeftTopSellingGoodTitleWrapperStyled = styled.div`
    margin-left: 2rem;
`
const RoomDetailOverviewLeftTopSellingGoodTopTitleStyled = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    color: #e12d2d;
`
const RoomDetailOverviewLeftTopSellingGoodBottomTitleStyled = styled.p`
    margin-top: .4rem;
`
const RoomDetailOverview = () => {
  return (
    <RoomDetailOverviewContainerStyled>
        <RoomDetailOverviewWrapperStyled>
            <RoomDetailOverviewLeftWrapperStyled>
                <RoomDetailOverviewLeftTopDescWrapperStyled>
                    <RoomDetailOverviewLeftTopDescTagWrapperStyled>
                        <RoomDetailOverviewLeftTopDescTagContentStyled>Mới sửa sang</RoomDetailOverviewLeftTopDescTagContentStyled>
                    </RoomDetailOverviewLeftTopDescTagWrapperStyled>
                    <RoomDetailOverviewLeftTopDescTitleWrapperStyled>
                        <RoomDetailOverviewLeftTopDescTitleStyled>Thavorn Palm Beach Resort Phuket (SHA Plus+)</RoomDetailOverviewLeftTopDescTitleStyled>
                        <Rating name="size-small" value={5} size="medium" readOnly/>
                    </RoomDetailOverviewLeftTopDescTitleWrapperStyled>
                    <RoomDetailOverviewLeftTopDescSubTitleWrapperStyled>
                        <RoomDetailOverviewLeftTopDescSubTitleStyled>
                            311 Patak Road, Karon Beach, Amphur Muang, Karon, Phuket, Thái Lan, 83100 - TRÊN BẢN ĐỒ
                        </RoomDetailOverviewLeftTopDescSubTitleStyled>
                    </RoomDetailOverviewLeftTopDescSubTitleWrapperStyled>
                    <RoomDetailOverviewLeftBottomDescContentWrapperStyled>
                        <RoomDetailOverviewLeftBottomDescContentStyled>
                            Ngoài tiêu chuẩn SHA Plus, tất cả khách đều được truy cập Wi-Fi miễn phí trong tất cả các phòng và đỗ xe miễn phí nếu đến bằng ô tô. Nằm ở vị trí trung tâm tại Karon của Phuket, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Đường Bangla nổi tiếng. Được xếp hạng 5 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng bể bơi ngoài trời, phòng tập và nhà hàng ngay trong khuôn viên.
                        </RoomDetailOverviewLeftBottomDescContentStyled>
                    </RoomDetailOverviewLeftBottomDescContentWrapperStyled>
                </RoomDetailOverviewLeftTopDescWrapperStyled>
                <RoomDetailOverviewLeftTopHighlightWrapperStyled>
                    <RoomDetailOverviewLeftTopHighlightTitleStyled>
                        Điểm nổi bật nhất
                    </RoomDetailOverviewLeftTopHighlightTitleStyled>
                    <RoomDetailOverviewLeftTopHighlightElementWrapperStyled>
                        <RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                            <RoomDetailOverviewLeftTopHighlightImageStyled src={wheel} />
                            <RoomDetailOverviewLeftTopHighlightSubTitleStyled>Cách Bãi biển Karon 60 m</RoomDetailOverviewLeftTopHighlightSubTitleStyled>
                        </RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                        <RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                            <RoomDetailOverviewLeftTopHighlightImageStyled src={door} />
                            <RoomDetailOverviewLeftTopHighlightSubTitleStyled>Nhận phòng [24 giờ]</RoomDetailOverviewLeftTopHighlightSubTitleStyled>
                        </RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                        <RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                            <RoomDetailOverviewLeftTopHighlightImageStyled src={croissant} />
                            <RoomDetailOverviewLeftTopHighlightSubTitleStyled>Đưa đón sân bay </RoomDetailOverviewLeftTopHighlightSubTitleStyled>
                        </RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                        <RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                            <RoomDetailOverviewLeftTopHighlightImageStyled src={transfer} />
                            <RoomDetailOverviewLeftTopHighlightSubTitleStyled>Bữa sáng tuyệt vời</RoomDetailOverviewLeftTopHighlightSubTitleStyled>
                        </RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                        <RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                            <RoomDetailOverviewLeftTopHighlightImageStyled src={hotel} />
                            <RoomDetailOverviewLeftTopHighlightSubTitleStyled>Mới sửa sang </RoomDetailOverviewLeftTopHighlightSubTitleStyled>
                        </RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                    </RoomDetailOverviewLeftTopHighlightElementWrapperStyled>
                </RoomDetailOverviewLeftTopHighlightWrapperStyled>
                <RoomDetailOverviewLeftTopCertificateWrapperStyled>
                    <RoomDetailOverviewLeftTopCertificateImageStyled src={sha_logo} />
                    <RoomDetailOverviewLeftTopCertificateContentWrapperStyled>
                        <RoomDetailOverviewLeftTopCertificateContentStyled>
                            Được chứng nhận SHA Cộng
                        </RoomDetailOverviewLeftTopCertificateContentStyled>
                        <RoomDetailOverviewLeftTopCertificateSubContentStyled>
                            Hơn 70% nhân viên của các cơ sở được SHA chứng nhận đã được tiêm vắc-xin.
                        </RoomDetailOverviewLeftTopCertificateSubContentStyled>
                    </RoomDetailOverviewLeftTopCertificateContentWrapperStyled>
                </RoomDetailOverviewLeftTopCertificateWrapperStyled>
                <RoomDetailOverviewLeftTopConvenientWrapperStyled>
                    <RoomDetailOverviewLeftTopConvenientTitleStyled>Tiện nghi</RoomDetailOverviewLeftTopConvenientTitleStyled>
                    <RoomDetailOverviewLeftTopConvenientBottomWrapperStyled>
                        <RoomDetailOverviewLeftTopConvenientTopSideStyled>
                            <RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled style={{color: 'rgb(62, 108, 234)'}}>
                                <DoneOutlinedIcon />
                                <RoomDetailOverviewLeftTopConvenientTopSideContentStyled>Bàn tiếp tân [24 giờ]</RoomDetailOverviewLeftTopConvenientTopSideContentStyled>
                            </RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                            <RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                                <DoneOutlinedIcon />
                                <RoomDetailOverviewLeftTopConvenientTopSideContentStyled>Đưa đón sân bay</RoomDetailOverviewLeftTopConvenientTopSideContentStyled>
                            </RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                        </RoomDetailOverviewLeftTopConvenientTopSideStyled>
                        <RoomDetailOverviewLeftTopConvenientTopSideStyled>
                            <RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                                <DoneOutlinedIcon />
                                <RoomDetailOverviewLeftTopConvenientTopSideContentStyled>Bãi để xe</RoomDetailOverviewLeftTopConvenientTopSideContentStyled>
                            </RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                            <RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                                <DoneOutlinedIcon />
                                <RoomDetailOverviewLeftTopConvenientTopSideContentStyled>Dịch vụ đưa đón</RoomDetailOverviewLeftTopConvenientTopSideContentStyled>
                            </RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                        </RoomDetailOverviewLeftTopConvenientTopSideStyled>
                        <RoomDetailOverviewLeftTopConvenientTopSideStyled>
                            <RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled style={{color: 'rgb(62, 108, 234)'}}>
                                <DoneOutlinedIcon />
                                <RoomDetailOverviewLeftTopConvenientTopSideContentStyled>CLB trẻ em</RoomDetailOverviewLeftTopConvenientTopSideContentStyled>
                            </RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                            <RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled style={{color: 'rgb(62, 108, 234)'}}>
                                <DoneOutlinedIcon />
                                <RoomDetailOverviewLeftTopConvenientTopSideContentStyled>Phòng tập</RoomDetailOverviewLeftTopConvenientTopSideContentStyled>
                            </RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                        </RoomDetailOverviewLeftTopConvenientTopSideStyled>
                        <RoomDetailOverviewLeftTopConvenientTopSideStyled>
                            <RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                                <DoneOutlinedIcon />
                                <RoomDetailOverviewLeftTopConvenientTopSideContentStyled>Wi-Fi miễn phí trong tất cả các phòng!</RoomDetailOverviewLeftTopConvenientTopSideContentStyled>
                            </RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                            <RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                                <DoneOutlinedIcon />
                                <RoomDetailOverviewLeftTopConvenientTopSideContentStyled>Giữ hành lý</RoomDetailOverviewLeftTopConvenientTopSideContentStyled>
                            </RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                        </RoomDetailOverviewLeftTopConvenientTopSideStyled>
                    </RoomDetailOverviewLeftTopConvenientBottomWrapperStyled>
                </RoomDetailOverviewLeftTopConvenientWrapperStyled>
                <RoomDetailOverviewLeftTopSellingGoodWrapperStyled>
                    <RoomDetailOverviewLeftTopSellingGoodIconWrapperStyled>
                        <AutoAwesomeOutlinedIcon style={{color: '#fff'}}/>
                    </RoomDetailOverviewLeftTopSellingGoodIconWrapperStyled>
                    <RoomDetailOverviewLeftTopSellingGoodTitleWrapperStyled>
                        <RoomDetailOverviewLeftTopSellingGoodTopTitleStyled>Phòng ở đây đang bán rất chạy!</RoomDetailOverviewLeftTopSellingGoodTopTitleStyled>
                        <RoomDetailOverviewLeftTopSellingGoodBottomTitleStyled>13 du khách đã đặt hôm nay.</RoomDetailOverviewLeftTopSellingGoodBottomTitleStyled>
                    </RoomDetailOverviewLeftTopSellingGoodTitleWrapperStyled>
                </RoomDetailOverviewLeftTopSellingGoodWrapperStyled>
            </RoomDetailOverviewLeftWrapperStyled>
            <RoomDetailOverviewRightWrapperStyled>
                <RoomDetailOverviewRightTopConvenientWrapperStyled>
                    <RoomCardRightReviewWrapperStyled>
                        <RoomCardRightReviewContentWrapperStyled>
                            <RoomCardRightReviewContentTopStyled>Tuyệt vời</RoomCardRightReviewContentTopStyled>
                            <RoomCardRightReviewContentBottomStyled>1.509 Bài đánh giá</RoomCardRightReviewContentBottomStyled>
                        </RoomCardRightReviewContentWrapperStyled>
                        <RoomCardRightReviewPointWrapperStyled>
                            <RoomCardRightReviewPointContentStyled>8.5</RoomCardRightReviewPointContentStyled>
                        </RoomCardRightReviewPointWrapperStyled>
                    </RoomCardRightReviewWrapperStyled>
                    <RoomCardRightReviewTagContainerStyled>
                        <RoomCardRightReviewTagWrapperStyled>
                            <RoomCardRightReviewTagContentStyled>Bãi biển</RoomCardRightReviewTagContentStyled>
                            <RoomCardRightReviewTagContentNumberWrapperStyled>
                                <RoomCardRightReviewTagContentNumberStyled>52</RoomCardRightReviewTagContentNumberStyled>
                                <ThumbUpAltIcon style={{fontSize: '.8rem', color: 'rgb(50, 169, 35)'}}/>
                            </RoomCardRightReviewTagContentNumberWrapperStyled>
                        </RoomCardRightReviewTagWrapperStyled>
                        <RoomCardRightReviewTagWrapperStyled>
                            <RoomCardRightReviewTagContentStyled>Bữa sáng</RoomCardRightReviewTagContentStyled>
                            <RoomCardRightReviewTagContentNumberWrapperStyled>
                                <RoomCardRightReviewTagContentNumberStyled>52</RoomCardRightReviewTagContentNumberStyled>
                                <ThumbUpAltIcon style={{fontSize: '.8rem', color: 'rgb(50, 169, 35)'}}/>
                            </RoomCardRightReviewTagContentNumberWrapperStyled>
                        </RoomCardRightReviewTagWrapperStyled>
                        <RoomCardRightReviewTagWrapperStyled>
                            <RoomCardRightReviewTagContentStyled>Dọn phòng</RoomCardRightReviewTagContentStyled>
                            <RoomCardRightReviewTagContentNumberWrapperStyled>
                                <RoomCardRightReviewTagContentNumberStyled>52</RoomCardRightReviewTagContentNumberStyled>
                                <ThumbUpAltIcon style={{fontSize: '.8rem', color: 'rgb(50, 169, 35)'}}/>
                            </RoomCardRightReviewTagContentNumberWrapperStyled>
                        </RoomCardRightReviewTagWrapperStyled>
                    </RoomCardRightReviewTagContainerStyled>
                </RoomDetailOverviewRightTopConvenientWrapperStyled>
                <RoomDetailOverviewRightBottomConvenientWrapperStyled>
                    <RoomDetailOverviewRightBottomMapWrapperStyled>
                        <RoomDetailOverviewRightBottomMapStyled>XEM VỊ TRÍ</RoomDetailOverviewRightBottomMapStyled>
                    </RoomDetailOverviewRightBottomMapWrapperStyled>
                    <RoomCardRightReviewWrapperStyled>
                        <RoomCardRightReviewContentWrapperStyled>
                            <RoomCardRightReviewContentTopStyled>Tuyệt vời</RoomCardRightReviewContentTopStyled>
                            <RoomCardRightReviewContentBottomStyled>Điểm đánh giá</RoomCardRightReviewContentBottomStyled>
                        </RoomCardRightReviewContentWrapperStyled>
                        <RoomCardRightReviewPointWrapperStyled>
                            <RoomCardRightReviewPointContentStyled>8.5</RoomCardRightReviewPointContentStyled>
                        </RoomCardRightReviewPointWrapperStyled>
                    </RoomCardRightReviewWrapperStyled>
                    <RoomDetailOverviewRightBottomTitleContainerStyled>
                        <RoomDetailOverviewRightBottomTitleWrapperStyled>
                            <WorkspacePremiumOutlinedIcon />
                            <RoomDetailOverviewRightBottomTitleStyled>Vị trí tuyệt vời - Cách bãi biển 60 m</RoomDetailOverviewRightBottomTitleStyled>
                        </RoomDetailOverviewRightBottomTitleWrapperStyled>
                        <RoomDetailOverviewRightBottomTitleWrapperStyled>
                            <DirectionsWalkOutlinedIcon />
                            <RoomDetailOverviewRightBottomTitleStyled>Tuyệt vời để đi bộ</RoomDetailOverviewRightBottomTitleStyled>
                        </RoomDetailOverviewRightBottomTitleWrapperStyled>
                        <RoomDetailOverviewRightBottomTitleWrapperStyled>
                            <LocalParkingOutlinedIcon />
                            <RoomDetailOverviewRightBottomTitleStyled>Đỗ xe miễn phí</RoomDetailOverviewRightBottomTitleStyled>
                        </RoomDetailOverviewRightBottomTitleWrapperStyled>
                    </RoomDetailOverviewRightBottomTitleContainerStyled>
                    <RoomDetailOverviewRightBottomSubSuggestionWrapperStyled>
                        <RoomDetailOverviewRightBottomSubSuggestionTitleStyled>Nơi có thể đi bộ</RoomDetailOverviewRightBottomSubSuggestionTitleStyled>
                        <RoomDetailOverviewRightBottomSubSuggestionContentWrapperStyled>
                            <RoomDetailOverviewRightBottomSubSuggestionContentLeftStyled>Bãi biển Karon</RoomDetailOverviewRightBottomSubSuggestionContentLeftStyled>
                            <RoomDetailOverviewRightBottomSubSuggestionContentRightStyled>60m</RoomDetailOverviewRightBottomSubSuggestionContentRightStyled>
                        </RoomDetailOverviewRightBottomSubSuggestionContentWrapperStyled>
                        <RoomDetailOverviewRightBottomSubSuggestionContentWrapperStyled>
                            <RoomDetailOverviewRightBottomSubSuggestionContentLeftStyled>GreenMart</RoomDetailOverviewRightBottomSubSuggestionContentLeftStyled>
                            <RoomDetailOverviewRightBottomSubSuggestionContentRightStyled>120m</RoomDetailOverviewRightBottomSubSuggestionContentRightStyled>
                        </RoomDetailOverviewRightBottomSubSuggestionContentWrapperStyled>
                        <RoomDetailOverviewRightBottomSubSuggestionContentWrapperStyled>
                            <RoomDetailOverviewRightBottomSubSuggestionContentLeftStyled>Karon Shopping Mall</RoomDetailOverviewRightBottomSubSuggestionContentLeftStyled>
                            <RoomDetailOverviewRightBottomSubSuggestionContentRightStyled>200m</RoomDetailOverviewRightBottomSubSuggestionContentRightStyled>
                        </RoomDetailOverviewRightBottomSubSuggestionContentWrapperStyled>
                    </RoomDetailOverviewRightBottomSubSuggestionWrapperStyled>
                    <RoomDetailOverviewRightBottomSubSuggestionWrapperStyled>
                        <RoomDetailOverviewRightBottomSubSuggestionTitleStyled>Các địa điểm nổi tiếng</RoomDetailOverviewRightBottomSubSuggestionTitleStyled>
                        <RoomDetailOverviewRightBottomSubSuggestionContentWrapperStyled>
                            <RoomDetailOverviewRightBottomSubSuggestionContentLeftStyled>Bãi biển Kata</RoomDetailOverviewRightBottomSubSuggestionContentLeftStyled>
                            <RoomDetailOverviewRightBottomSubSuggestionContentRightStyled>1,2km</RoomDetailOverviewRightBottomSubSuggestionContentRightStyled>
                        </RoomDetailOverviewRightBottomSubSuggestionContentWrapperStyled>
                        <RoomDetailOverviewRightBottomSubSuggestionContentWrapperStyled>
                            <RoomDetailOverviewRightBottomSubSuggestionContentLeftStyled>Big Buddha Phuket</RoomDetailOverviewRightBottomSubSuggestionContentLeftStyled>
                            <RoomDetailOverviewRightBottomSubSuggestionContentRightStyled>2,1km</RoomDetailOverviewRightBottomSubSuggestionContentRightStyled>
                        </RoomDetailOverviewRightBottomSubSuggestionContentWrapperStyled>
                        <RoomDetailOverviewRightBottomSubSuggestionContentWrapperStyled>
                            <RoomDetailOverviewRightBottomSubSuggestionContentLeftStyled>Chaithararam Temple (Wat Chalong)</RoomDetailOverviewRightBottomSubSuggestionContentLeftStyled>
                            <RoomDetailOverviewRightBottomSubSuggestionContentRightStyled>4,7km</RoomDetailOverviewRightBottomSubSuggestionContentRightStyled>
                        </RoomDetailOverviewRightBottomSubSuggestionContentWrapperStyled>
                    </RoomDetailOverviewRightBottomSubSuggestionWrapperStyled>
                    <RoomDetailOverviewRightBottomSubSuggestionMoreStyled>XEM NHỮNG NƠI GẦN ĐÂY</RoomDetailOverviewRightBottomSubSuggestionMoreStyled>
                </RoomDetailOverviewRightBottomConvenientWrapperStyled>
            </RoomDetailOverviewRightWrapperStyled>
        </RoomDetailOverviewWrapperStyled>
    </RoomDetailOverviewContainerStyled>
  )
}

export default RoomDetailOverview