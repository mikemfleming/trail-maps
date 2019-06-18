import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import getConfig from 'next/config';

import MapMarker from './map-marker';

const MAPS_KEY = process.env.MAPS_KEY || getConfig().publicRuntimeConfig.MAPS_KEY

export default compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}`,
    loadingElement: <div style={{ height: '100vh' }} />,
    containerElement: <div style={{ height: '100vh', width: '100vw' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ onMarkerClick, waypoints, currentWaypoint, currentZoom, updateZoom, updateCenter }) => 
  <GoogleMap
  onZoomChanged={function () { updateZoom(this.zoom); }}
  zoom={currentZoom}
  onCenterChanged={function () { updateCenter(this.center) }}
  center={currentWaypoint}
  defaultMapTypeId="satellite"
  >
    {waypoints.map((waypoint, idx) => (
      <MapMarker
        key={`waypoint-${idx}`}
        onMarkerClick={onMarkerClick}
        waypoint={waypoint}
      />
    ))}
  </GoogleMap>
)