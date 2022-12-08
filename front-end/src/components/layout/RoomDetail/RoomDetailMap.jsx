import React, { useEffect, useState } from 'react'
import {MapContainer, Marker, Popup, TileLayer, useMap, Polygon, useMapEvents, Tooltip} from 'react-leaflet';
import Rating from '@mui/material/Rating';
import styled from 'styled-components';
import {Link} from "react-router-dom"
import { useSearchParams } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
const PopupContainerStyled = styled.div`
  width: 100%;
  height: 100%;
`
const PopupWrapperStyled = styled.div`
  display: flex;
`
const PopupLeftWrapperStyled = styled.div``
const PopupLeftImageStyled = styled.img`
  width: 10rem;
  height: 12rem;
  object-fit: cover;
`
const PopupRightWrapperStyled = styled.div`
  margin: 0 .2rem;
`
const PopupRightTopTitleWrapperStyled = styled.div``
const PopupRightTopTitleStyled = styled.span`
  font-weight: 600;
`
const AdminServiceFormRightReviewWrapperStyled = styled.div`
    display: flex;
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
const AdminServiceFormRightPriceDiscountSubContentStyled = styled.span`
    margin-top: 2rem;
    display: block;
    color: #666;
`
const AdminServiceFormRightNewPriceStyled = styled.span`
    max-width: 100%;
    color: #e12d2d;
`
const AdminServiceFormRightPriceDiscountWrapperStyled = styled.div`
    margin: .4rem 0;
    padding: .2rem 0;
    border-radius: .1rem;
    background-color: rgb(225, 45, 45);
`
const AdminServiceFormRightPriceDiscountPercentStyled = styled.span`
    display: block;
    text-align: center;
    font-size: .8rem;
    color: #fff;
`
const icon = L.icon({
    iconUrl: "/placeholder.png",
    iconSize: [28, 28],
  });
function ResetCenterView(props) {
    const { selectPosition } = props;
    const map = useMap();

    useEffect(() => {
        if (selectPosition) {
        map.flyTo(
            L.latLng(selectPosition?.lat, selectPosition?.lon),
            map.getZoom(),
            {
            animate: true
            }
        )
        }
    }, [selectPosition]);

    return null;
}
const Markers = (props) => {
    const { selectRoomDetailData } = props;
    const [markers, setMarkers] = useState([[12.237687704760287, 109.17268753051759]]);
    const pathName = process.env.REACT_APP_BACK_END_PUBLIC_URL;
    const [searchParams, setSearchParams] = useSearchParams();
    let params = {};
    searchParams.forEach((key, value) => {
      params[value] = key
    });
    const searchQueryString = new URLSearchParams(params).toString();
    const map = useMapEvents({
        click(e) {                                
          markers.push(e.latlng);
          setMarkers((prevValue) => [...prevValue, e.latlng]);
          console.log(markers)    
        },            
    })
    return (
      <React.Fragment>
          <Marker position={selectRoomDetailData.ac_latlong.coordinates} key={selectRoomDetailData.id} icon={icon}>
            <Popup>
              <Link to={`/roomdetail/${selectRoomDetailData.ac_propertyRegistrationId}?${searchQueryString}`} style={{textDecoration: 'none', color: "#000"}}>
                <PopupContainerStyled>
                  <PopupWrapperStyled>
                    <PopupLeftWrapperStyled>
                      <PopupLeftImageStyled src={`${pathName+selectRoomDetailData?.acim_id?.[0]?.path}`}/>
                    </PopupLeftWrapperStyled>
                    <PopupRightWrapperStyled>
                      <PopupRightTopTitleWrapperStyled>
                        <PopupRightTopTitleStyled>{selectRoomDetailData.nameOfAccommodation}</PopupRightTopTitleStyled>
                        <Rating name="size-small" value={selectRoomDetailData.rating} size="small" readOnly/>
                        <AdminServiceFormRightReviewWrapperStyled>
                            <AdminServiceFormRightReviewContentWrapperStyled>
                                <AdminServiceFormRightReviewContentTopStyled>Tuyệt vời</AdminServiceFormRightReviewContentTopStyled>
                                <AdminServiceFormRightReviewContentBottomStyled>1.509 Nhận xét</AdminServiceFormRightReviewContentBottomStyled>
                            </AdminServiceFormRightReviewContentWrapperStyled>
                            <AdminServiceFormRightReviewPointWrapperStyled>
                                <AdminServiceFormRightReviewPointContentStyled>8.5</AdminServiceFormRightReviewPointContentStyled>
                            </AdminServiceFormRightReviewPointWrapperStyled>
                        </AdminServiceFormRightReviewWrapperStyled>
                        <AdminServiceFormRightPriceDiscountWrapperStyled>
                            <AdminServiceFormRightPriceDiscountPercentStyled>GIẢM SỐC HÔM NAY</AdminServiceFormRightPriceDiscountPercentStyled>
                        </AdminServiceFormRightPriceDiscountWrapperStyled>
                        <AdminServiceFormRightPriceDiscountSubContentStyled>Giá mỗi đêm rẻ nhất từ</AdminServiceFormRightPriceDiscountSubContentStyled>
                        <AdminServiceFormRightNewPriceStyled>{selectRoomDetailData.priceBase?.toLocaleString()} ₫</AdminServiceFormRightNewPriceStyled>
                      </PopupRightTopTitleWrapperStyled>
                    </PopupRightWrapperStyled>
                  </PopupWrapperStyled>
                </PopupContainerStyled>
              </Link>
            </Popup>
            <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
              {selectRoomDetailData?.priceBase?.toLocaleString()} ₫
            </Tooltip>
          </Marker>
      </React.Fragment>
    );
    
  }
const RoomDetailMap = (props) => {
    const {selectPosition, selectRoomDetailData} = props;
  // console.log([selectRoomDetailData.ac_latitude, selectRoomDetailData.ac_longtitude]);
  const [coordinates, setCoordinates] = useState(null);
  useEffect(() => {
    if(selectPosition.geojson.type === "MultiPolygon"){
      setCoordinates(selectPosition.geojson?.coordinates.map(coordinate => coordinate.map((row) => row.map(item => [item[1], item[0]]))));
    }else if(selectPosition.geojson.type === "Polygon"){
      setCoordinates(selectPosition.geojson?.coordinates.map((row) => row.map(item => [item[1], item[0]])));
    }else if(selectPosition.geojson.type === "Point"){
      const handleArr = selectPosition.geojson;
      setCoordinates(handleArr);
    }
  }, [selectPosition]);
  const center = [10.762622, 106.660172];
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={{height: '100%', width: '100%'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=tDBAuVPvRWiOESRVUIGX"
      accessToken='pk.eyJ1IjoidHA4NTA1NTgzIiwiYSI6ImNrZzJ5dDNmNjA1bmYyc28zajRiZXpwb2kifQ.IdnR8H3QvoxD0I6dQi2oDA'
    />
    <Markers selectRoomDetailData={selectRoomDetailData}/>
    <Polygon pathOptions={{
              fillColor: '#cbdaf6',
              fillOpacity: 0.5,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: 'white'
            }} positions={coordinates}/>
    <ResetCenterView selectPosition={selectPosition} />
  </MapContainer>
  )
}

export default RoomDetailMap