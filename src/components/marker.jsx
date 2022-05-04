import React from 'react';

const Marker = (props) => {
  const { selectedFlat } = props;
  return (
    <div className="marker">
      {selectedFlat.price}
      &nbsp;
      {selectedFlat.priceCurrency}
    </div>
  );
};

export default Marker;
