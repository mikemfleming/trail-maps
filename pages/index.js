import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import getConfig from 'next/config';

const { publicRuntimeConfig: { MAPS_KEY } } = getConfig();

console.log(getConfig())

console.log(`maps key ${MAPS_KEY}`)

import coords from '../data';

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}`,
    loadingElement: <div style={{ height: '100vh' }} />,
    containerElement: <div style={{ height: '100vh', width: '100vw' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 38.45, lng: -106.6 }}
    defaultMapTypeId="satellite"
  >
    {coords.map(({ lat, lng }) => <Marker key={`${lat},${lng}`} clickable position={{ lat, lng }} />)}
  </GoogleMap>
)

function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {coords.map(({ lat, lng }, idx) => <li style={{ cursor: 'pointer' }} onClick={() => alert(`${lat},${lng}`)}>{lat},{lng}</li>)}
      </ul>
      <MyMapComponent />
    </div>
  )
}

export default Home
