import React, { useEffect } from 'react'
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
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
            L.latLng(selectPosition?.latitude, selectPosition?.longitude),
            map.getZoom(),
            {
            animate: true
            }
        )
        }
    }, [selectPosition]);

    return null;
}
const Maps = (props) => {
  const {selectPosition} = props;
  const locationSelection = [selectPosition?.latitude, selectPosition?.longitude];
  const position = [10.762622, 106.660172];
  return (
    <MapContainer center={position} zoom={9} scrollWheelZoom={true} style={{height: '100%', width: '100%'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=tDBAuVPvRWiOESRVUIGX"
    />
    {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            {selectPosition?.name}
          </Popup>
        </Marker>
    )}
    <ResetCenterView selectPosition={selectPosition} />
  </MapContainer>
  )
}

export default Maps