import React, { Component } from 'react';
import Flat from './flat';
import flats from '../data/flats';

class FlatList extends Component {
  render() {
    const flat = flats[1].name;
    console.log(flat);
    return(
      <Flat />
    );
  }
}

export default FlatList;
