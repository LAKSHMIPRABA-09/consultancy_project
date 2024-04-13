import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const LatestUpdate = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const socket = socketIOClient('http://localhost:4000');
    socket.on('newProduct', (product) => {
      setLatestProducts((prevProducts) => [...prevProducts, product]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="latest-update">
      <h2>Latest Updates</h2>
      <div className="latest-products">
        {latestProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            {/* Render other product details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdate;
