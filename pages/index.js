import Map from '../components/map';
import waypoints from '../data';

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentCoordinates: {
        lat: 38.45,
        lng: -106.6
      }
    };
  }

  render () {
    return (
      <div style={{ display: 'flex' }}>
        <Map
          waypoints={waypoints}
          currentCoordinates={this.state.currentCoordinates}
          updateCoordinates={(currentCoordinates) => this.setState({ currentCoordinates })}
        />
      </div>
    );
  }
}
