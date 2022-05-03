import React, { Component } from 'react';
import FlatList from './flat-list';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
      </div>
    );
  }
}

export default App;
