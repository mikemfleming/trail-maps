import Map from '../components/map';
import MarkerModal from '../components/marker-modal';
import waypoints from '../data';

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentWaypoint: {
        lat: 38.45,
        lng: -106.6,
        text: ''
      },
      modalIsOpen: false
    };
  }

  onMarkerClick (currentWaypoint) {
    // TODO: animate zoom map to marker slightly
    this.openModal();
    this.setState({ currentWaypoint });
  }

  openModal () {
    this.setState({ modalIsOpen: true });
  }

  closeModal () {
    this.setState({ modalIsOpen: false });
  }

  render () {
    return (
      <div>
        <MarkerModal
          isOpen={this.state.modalIsOpen}
          closeModal={this.closeModal.bind(this)}
          waypoint={this.state.currentWaypoint}
        />
        <Map
          waypoints={waypoints}
          currentWaypoint={this.state.currentWaypoint}
          currentCoordinates={this.state.currentCoordinates}
          onMarkerClick={this.onMarkerClick.bind(this)}
        />
      </div>
    );
  }
}
