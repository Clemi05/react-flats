import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  renderFlatList = () => {
    const { flats, selectedFlat, selectFlat } = this.props;
    return flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          index={index}
          key={flat.lat}
          // selected={flat.name === selectedFlat.name}
          selectFlat={selectFlat}
        />
      );
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderFlatList()}
      </div>
    );
  }
}

export default FlatList;
