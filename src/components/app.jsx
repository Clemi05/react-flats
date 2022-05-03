// Components imports
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat_list';
import Marker from './marker';

// DB import
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
          <Marker />
        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
