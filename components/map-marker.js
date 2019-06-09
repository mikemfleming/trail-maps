import { Marker } from "react-google-maps"

export default function MapMarker ({ updateCoordinates, markerCoordinates }) {

  return (
    <Marker
      key={markerCoordinates.lat}
      onClick={() => updateCoordinates(markerCoordinates)}
      position={markerCoordinates}
    />
  );
}
