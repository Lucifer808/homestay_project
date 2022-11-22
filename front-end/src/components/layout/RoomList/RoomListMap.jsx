import React, { useEffect, useState } from 'react'
import {MapContainer, Marker, Popup, TileLayer, useMap, Polygon, useMapEvents} from 'react-leaflet';
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
const Markers = () => {
  const [markers, setMarkers] = useState([[51.505, -0.09]]);
  const map = useMapEvents({
      click(e) {                                
        markers.push(e.latlng);
        setMarkers((prevValue) => [...prevValue, e.latlng]);        
      },            
  })

  return (
    <React.Fragment>
      {markers.map((marker, index) => 
        <Marker position={marker} key={index} icon={icon}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>)}
    </React.Fragment>
  );
  
}
const RoomListMap = (props) => {
  const {selectPosition} = props;
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
    />
    <Markers />
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

export default RoomListMap