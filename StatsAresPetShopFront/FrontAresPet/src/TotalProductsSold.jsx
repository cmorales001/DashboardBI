import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TotalProductsSold() {
  const [totalProductsSold, setTotalProductsSold] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/orderitems')
      .then(response => {
        setTotalProductsSold(response.data.length);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>KPI: Productos Vendidos</h1>
      <p> {totalProductsSold}</p>
    </div>
  );
}

export default TotalProductsSold;
