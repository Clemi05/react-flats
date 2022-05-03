import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  renderFlatList = () => {
    const { flats } = this.props;
    return flats.map((flat, index) => {
      return (
        <Flat
          name={flat.name}
          imageUrl={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          index={index}
          key={flat.lat}
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
