import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import getConfig from 'next/config';

import MapMarker from './map-marker';

const { publicRuntimeConfig: { MAPS_KEY } } = getConfig();

export default compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}`,
    loadingElement: <div style={{ height: '100vh' }} />,
    containerElement: <div style={{ height: '100vh', width: '100vw' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ currentCoordinates, updateCoordinates, waypoints }) =>
  <GoogleMap
    defaultZoom={8}
    center={currentCoordinates}
    defaultMapTypeId="satellite"
  >
    {waypoints.map(({ lat, lng }) => (
      <MapMarker
        updateCoordinates={updateCoordinates}
        markerCoordinates={{ lat, lng }}
      />
    ))}
  </GoogleMap>
)