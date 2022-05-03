import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const color1 = "rgba(0, 0, 0, 0.3)";
    const color2 = "rgba(0, 0, 0, 0.2)";
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg"
    return (
      <div className="card" style={{
        backgroundImage: `linear-gradient(${color1}, ${color2}), url(${url})`
      }}>
        <div className="card-category">150 EUR</div>
        <div className="card-description">
          <h2>Super 60m2 in trendy neighborhood!</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
