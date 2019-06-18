import { Marker } from "react-google-maps"

export default function MapMarker ({ waypoint, onMarkerClick }) {
  const { lat, lng } = waypoint;

  return (
    <Marker
      onClick={() => onMarkerClick(waypoint)}
      position={{ lat, lng }}
    />
  );
}
