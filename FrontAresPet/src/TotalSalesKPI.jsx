import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TotalSalesKPI() {
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/orderstats')
      .then(response => {
        setTotalSales(response.data.length);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>KPI: Número de Ventas Realizadas</h1>
      <p> {totalSales}</p>
    </div>
  );
}

export default TotalSalesKPI;
