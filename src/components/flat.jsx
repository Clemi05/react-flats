import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const color1 = "rgba(0, 0, 0, 0.3)";
    const color2 = "rgba(0, 0, 0, 0.2)";
    const { name, imageUrl, price, priceCurrency } = this.props.flat;
    return (
      <div className="card" style={{
        backgroundImage: `linear-gradient(${color1}, ${color2}), url('${imageUrl}')`
      }}>
        <div className="card-category">
          {price} {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
