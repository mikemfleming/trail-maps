import { Marker } from "react-google-maps"

export default function MapMarker ({ waypoint, onMarkerClick }) {
  const { lat, lng } = waypoint;

  return (
    <Marker
      key={lat}
      onClick={() => onMarkerClick(waypoint)}
      position={{ lat, lng }}
    />
  );
}
