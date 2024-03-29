import React, {useState} from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import wheel from '../../../assets/ferrisWheel.svg';
import door from '../../../assets/door.svg';
import location from '../../../assets/location.svg';
import transfer from '../../../assets/transfer.svg';
import hotel from '../../../assets/hotel.svg';
import sha_logo from '../../../assets/sha_plus_logo.png';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import DirectionsWalkOutlinedIcon from '@mui/icons-material/DirectionsWalkOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import bkgmap from '../../../assets/bkg-map-entry.svg';
import mappin from '../../../assets/img-map-pin-red.svg';
import { selectPosition } from '../../../features/customerSlice';
import { useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import RoomDetailMap from './RoomDetailMap';
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
const AdminServiceFormRightReviewWrapperStyled = styled.div`
    display: flex;
    padding: .6rem;
    width: 100%;
`
const AdminServiceFormRightReviewContentWrapperStyled = styled.div`
    width: 100%;
    height: 100%;
    margin-right: .6rem;
`
const AdminServiceFormRightReviewContentTopStyled = styled.span`
    font-size: .9rem;
    display: block;
`
const AdminServiceFormRightReviewContentBottomStyled = styled.span`
    display: block;
    font-size: .8rem;
    color: #888;
`
const AdminServiceFormRightReviewPointWrapperStyled = styled.div`
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
const AdminServiceFormRightReviewPointContentStyled = styled.span`
    display: block;
    color: #fff;
`
const AdminServiceFormRightReviewTagContainerStyled = styled.div`
    max-width: 20rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`
const AdminServiceFormRightReviewTagWrapperStyled = styled.div`
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
const AdminServiceFormRightReviewTagContentStyled = styled.span`
    font-size: .8rem;
`
const AdminServiceFormRightReviewTagContentNumberWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const AdminServiceFormRightReviewTagContentNumberStyled = styled.span`
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
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
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
const RoomListLeftTopMapTitleWrapperStyled = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const RoomListLeftTopMapTitleImageStyled = styled.img`
    width: 3rem;
    height: 3rem;
`
const RoomListLeftTopMapWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
const RoomListLeftTopMapImageStyled = styled.img`
    height: 100%;
    width: 100%;
`
const RoomListLeftTopMapTitleStyled = styled.p``
const RoomDetailOverview = (props) => {
  const {selectRoomDetailData} = props;
  const selectPositionData = useSelector(selectPosition);
  const [open, setOpen] = useState(false);
  const handleClickOpen = (e) => {
      e.stopPropagation()
      setOpen(true);
  };
  const handleClose = (e) => {
      e.stopPropagation()
      setOpen(false);
  };
  return (
    <RoomDetailOverviewContainerStyled>
        <RoomDetailOverviewWrapperStyled>
            <RoomDetailOverviewLeftWrapperStyled>
                <RoomDetailOverviewLeftTopDescWrapperStyled>
                    <RoomDetailOverviewLeftTopDescTagWrapperStyled>
                        <RoomDetailOverviewLeftTopDescTagContentStyled>Mới sửa sang</RoomDetailOverviewLeftTopDescTagContentStyled>
                    </RoomDetailOverviewLeftTopDescTagWrapperStyled>
                    <RoomDetailOverviewLeftTopDescTitleWrapperStyled>
                        <RoomDetailOverviewLeftTopDescTitleStyled>{selectRoomDetailData?.nameOfAccommodation}</RoomDetailOverviewLeftTopDescTitleStyled>
                        <Rating name="size-small" value={selectRoomDetailData?.rating} size="medium" readOnly/>
                    </RoomDetailOverviewLeftTopDescTitleWrapperStyled>
                    <RoomDetailOverviewLeftTopDescSubTitleWrapperStyled>
                        <RoomDetailOverviewLeftTopDescSubTitleStyled onClick={handleClickOpen}>
                            {selectRoomDetailData?.address}, thành phố {selectRoomDetailData?.acci_id?.name}, {selectRoomDetailData?.acst_id?.name},  {selectRoomDetailData?.acct_id?.name} - TRÊN BẢN ĐỒ
                        </RoomDetailOverviewLeftTopDescSubTitleStyled>
                    </RoomDetailOverviewLeftTopDescSubTitleWrapperStyled>
                    <RoomDetailOverviewLeftBottomDescContentWrapperStyled>
                        <RoomDetailOverviewLeftBottomDescContentStyled>
                            {selectRoomDetailData?.welcome}
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
                            <RoomDetailOverviewLeftTopHighlightSubTitleStyled>Gần biển Nha Trang</RoomDetailOverviewLeftTopHighlightSubTitleStyled>
                        </RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                        <RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                            <RoomDetailOverviewLeftTopHighlightImageStyled src={door} />
                            <RoomDetailOverviewLeftTopHighlightSubTitleStyled>Nhận phòng [24 giờ]</RoomDetailOverviewLeftTopHighlightSubTitleStyled>
                        </RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                        <RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                            <RoomDetailOverviewLeftTopHighlightImageStyled src={location} />
                            <RoomDetailOverviewLeftTopHighlightSubTitleStyled>Nằm ở trung tâm thành phố</RoomDetailOverviewLeftTopHighlightSubTitleStyled>
                        </RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                        <RoomDetailOverviewLeftTopHighlightImageWrapperStyled>
                            <RoomDetailOverviewLeftTopHighlightImageStyled src={transfer} />
                            <RoomDetailOverviewLeftTopHighlightSubTitleStyled>Đưa đón tại sân bay</RoomDetailOverviewLeftTopHighlightSubTitleStyled>
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
                        {selectRoomDetailData?.acdas_id?.slice(0, 4).map((item, index) => (
                            <RoomDetailOverviewLeftTopConvenientTopSideStyled key={index}>
                                <RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                                    <DoneOutlinedIcon />
                                    <RoomDetailOverviewLeftTopConvenientTopSideContentStyled>{item.dsasv_id[0]?.name}</RoomDetailOverviewLeftTopConvenientTopSideContentStyled>
                                </RoomDetailOverviewLeftTopConvenientTopSideContentWrapperStyled>
                            </RoomDetailOverviewLeftTopConvenientTopSideStyled>
                        ))}
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
                    <AdminServiceFormRightReviewWrapperStyled>
                        <AdminServiceFormRightReviewContentWrapperStyled>
                            <AdminServiceFormRightReviewContentTopStyled>Tuyệt vời</AdminServiceFormRightReviewContentTopStyled>
                            <AdminServiceFormRightReviewContentBottomStyled>1.509 Bài đánh giá</AdminServiceFormRightReviewContentBottomStyled>
                        </AdminServiceFormRightReviewContentWrapperStyled>
                        <AdminServiceFormRightReviewPointWrapperStyled>
                            <AdminServiceFormRightReviewPointContentStyled>8.5</AdminServiceFormRightReviewPointContentStyled>
                        </AdminServiceFormRightReviewPointWrapperStyled>
                    </AdminServiceFormRightReviewWrapperStyled>
                    <AdminServiceFormRightReviewTagContainerStyled>
                        <AdminServiceFormRightReviewTagWrapperStyled>
                            <AdminServiceFormRightReviewTagContentStyled>Bãi biển</AdminServiceFormRightReviewTagContentStyled>
                            <AdminServiceFormRightReviewTagContentNumberWrapperStyled>
                                <AdminServiceFormRightReviewTagContentNumberStyled>52</AdminServiceFormRightReviewTagContentNumberStyled>
                                <ThumbUpAltIcon style={{fontSize: '.8rem', color: 'rgb(50, 169, 35)'}}/>
                            </AdminServiceFormRightReviewTagContentNumberWrapperStyled>
                        </AdminServiceFormRightReviewTagWrapperStyled>
                        <AdminServiceFormRightReviewTagWrapperStyled>
                            <AdminServiceFormRightReviewTagContentStyled>Bữa sáng</AdminServiceFormRightReviewTagContentStyled>
                            <AdminServiceFormRightReviewTagContentNumberWrapperStyled>
                                <AdminServiceFormRightReviewTagContentNumberStyled>52</AdminServiceFormRightReviewTagContentNumberStyled>
                                <ThumbUpAltIcon style={{fontSize: '.8rem', color: 'rgb(50, 169, 35)'}}/>
                            </AdminServiceFormRightReviewTagContentNumberWrapperStyled>
                        </AdminServiceFormRightReviewTagWrapperStyled>
                        <AdminServiceFormRightReviewTagWrapperStyled>
                            <AdminServiceFormRightReviewTagContentStyled>Dọn phòng</AdminServiceFormRightReviewTagContentStyled>
                            <AdminServiceFormRightReviewTagContentNumberWrapperStyled>
                                <AdminServiceFormRightReviewTagContentNumberStyled>52</AdminServiceFormRightReviewTagContentNumberStyled>
                                <ThumbUpAltIcon style={{fontSize: '.8rem', color: 'rgb(50, 169, 35)'}}/>
                            </AdminServiceFormRightReviewTagContentNumberWrapperStyled>
                        </AdminServiceFormRightReviewTagWrapperStyled>
                    </AdminServiceFormRightReviewTagContainerStyled>
                </RoomDetailOverviewRightTopConvenientWrapperStyled>
                <RoomDetailOverviewRightBottomConvenientWrapperStyled>
                    <RoomDetailOverviewRightBottomMapWrapperStyled>
                        <RoomListLeftTopMapWrapperStyled onClick={handleClickOpen}>
                            <RoomListLeftTopMapTitleWrapperStyled>
                                <RoomListLeftTopMapTitleImageStyled src={mappin}/>
                                <RoomListLeftTopMapTitleStyled>XEM VỊ TRÍ</RoomListLeftTopMapTitleStyled>
                            </RoomListLeftTopMapTitleWrapperStyled>
                            <RoomListLeftTopMapImageStyled src={bkgmap}/>
                        </RoomListLeftTopMapWrapperStyled>
                        <Dialog
                            fullScreen
                            open={open}
                            onClose={handleClose}
                        >
                            <AppBar sx={{ position: 'relative' }}>
                            <Toolbar>
                                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                    Bản đồ
                                </Typography>
                                <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                                >
                                <CloseIcon />
                                </IconButton>
                            </Toolbar>
                            </AppBar>
                            <RoomDetailMap selectPosition={selectPositionData} selectRoomDetailData={selectRoomDetailData}/>  
                        </Dialog>
                    </RoomDetailOverviewRightBottomMapWrapperStyled>
                    <AdminServiceFormRightReviewWrapperStyled>
                        <AdminServiceFormRightReviewContentWrapperStyled>
                            <AdminServiceFormRightReviewContentTopStyled>Tuyệt vời</AdminServiceFormRightReviewContentTopStyled>
                            <AdminServiceFormRightReviewContentBottomStyled>Điểm đánh giá</AdminServiceFormRightReviewContentBottomStyled>
                        </AdminServiceFormRightReviewContentWrapperStyled>
                        <AdminServiceFormRightReviewPointWrapperStyled>
                            <AdminServiceFormRightReviewPointContentStyled>8.5</AdminServiceFormRightReviewPointContentStyled>
                        </AdminServiceFormRightReviewPointWrapperStyled>
                    </AdminServiceFormRightReviewWrapperStyled>
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