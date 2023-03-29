import React from 'react';
import { getShipImage } from '../util/helpers';

const ShipList = ({ ships }) => {
  return (
    <div className="ship-list">
      {ships.map((ship, index) => (
        <div key={index} className="ship-item">
          <img src={`assets/${getShipImage(ship.name)}`} alt={ship.name} />
          <div className="hit-indicators">
            {Array.from({ length: ship.size }).map((_, i) => (
              <div
                key={i}
                className={`hit-indicator ${i < ship.hits ? 'hit' : ''}`}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShipList;