require('es6-promise').polyfill();
require('isomorphic-fetch');

import Map from '../components/map';
import MarkerModal from '../components/marker-modal';

// import fetch from 'isomorphic-unfetch'

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    // console.log(props)

    this.state = {
      currentWaypoint: {
        lat: 30.2672,
        lng: -97.7431,
        text: []
      },
      waypoints: props.waypoints,
      modalIsOpen: false
    };
  }

  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    //   .then(({ data }) => data);
    const res = await fetch('/api/waypoints')
    const json = await res.json()
    return json;
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
          waypoints={this.state.waypoints}
          currentWaypoint={this.state.currentWaypoint}
          currentCoordinates={this.state.currentCoordinates}
          onMarkerClick={this.onMarkerClick.bind(this)}
        />
      </div>
    );
  }
}
