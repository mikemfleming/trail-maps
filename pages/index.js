import axios from 'axios'
import Sidebar from 'react-sidebar'

import Map from '../components/map';

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentWaypoint: {
        lat: 30.2672,
        lng: -97.7431,
        text: []
      },
      currentZoom: 13,
      waypoints: props.waypoints,
      sidebarIsOpen: false
    };
  }

  static async getInitialProps () {
    return await axios({
      method: 'get',
      url: 'https://sleepy-lake-19367.herokuapp.com/api/waypoints'
    })
      .then(({ data }) => data);
  }

  onMarkerClick (currentWaypoint) {
    this.setState({
      currentWaypoint: currentWaypoint|| this.state.currentWaypoint, // this keeps everything centered
      currentZoom: 20,
      sidebarIsOpen: !this.state.sidebarIsOpen
    });
  }

  updateZoom (newZoom) {
    this.setState({ currentZoom: newZoom });
  }

  updateCenter (center) {    
    const lat = center.lat();
    const lng = center.lng();

    this.setState({
      currentWaypoint: {
        lat,
        lng,
        text: []
      }
    })
  }

  render () {
    return (
      <Sidebar
        open={this.state.sidebarIsOpen}
        sidebar={this.state.currentWaypoint && this.state.currentWaypoint.text.map((t, i) => <p key={`p-${i}`} >{t}</p>)}
        onSetOpen={this.onMarkerClick.bind(this)}
        styles={{ sidebar: {
          background: 'white',
          padding: '2rem',
          maxWidth: '25%'
        } }}
      >
        <Map
          updateCenter={this.updateCenter.bind(this)}
          updateZoom={this.updateZoom.bind(this)}
          currentZoom={this.state.currentZoom}
          waypoints={this.state.waypoints}
          currentWaypoint={this.state.currentWaypoint}
          currentCoordinates={this.state.currentCoordinates}
          onMarkerClick={this.onMarkerClick.bind(this)}
        />
      </Sidebar>
    );
  }
}
