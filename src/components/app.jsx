import React, { Component } from 'react';
import flats from '../../data/flats';
import FlatList from './flat_list';

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
      </div>
    );
  }
}

export default App;
