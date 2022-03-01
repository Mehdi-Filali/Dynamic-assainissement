import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '70vw'
};

const center = {
  lat: 48.751030,
  lng: 2.507140
};

const position = {
    lat: 48.751030,
    lng: 2.507140
};

function MapGoogle() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBwk_e4TvvWIH11PYLlOce9am6_EYnhycI"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        
      >
        <Marker position= {position} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapGoogle)