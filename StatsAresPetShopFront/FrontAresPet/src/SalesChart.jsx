import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ReferenceLine } from 'recharts';

const SalesChart = () => {
  const [data, setData] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [avgValue, setAvgValue] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const orderStatsResponse = await axios.get('http://localhost:8080/api/v1/orderstats');
      const orderItemsResponse = await axios.get('http://localhost:8080/api/v1/orderitems');

      const orderStatsData = orderStatsResponse.data;
      const orderItemsData = orderItemsResponse.data;

      const salesByOrder = {}; // { "Número de Orden": cantidadVendida }

      orderItemsData.forEach(item => {
        const orderStat = orderStatsData.find(stat => stat.orderId === item.orderId);
        if (orderStat) {
          const orderId = orderStat.orderId;
          if (salesByOrder[orderId]) {
            salesByOrder[orderId] += 1;
          } else {
            salesByOrder[orderId] = 1;
          }
        }
      });

      const formattedData = Object.keys(salesByOrder).map(orderId => ({
        name: `Orden ${orderId}`,
        cantidadVendida: salesByOrder[orderId],
      }));

      setData(formattedData);

      // Calcula mínimo, máximo y promedio
      const values = Object.values(salesByOrder);
      const min = Math.min(...values);
      const max = Math.max(...values);
      const avg = values.reduce((sum, value) => sum + value, 0) / values.length;

      setMinValue(min);
      setMaxValue(max);
      setAvgValue(avg);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2> Número de productos vendidos por cada orden de Venta</h2>
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cantidadVendida" fill="#8884d8" />
        <ReferenceLine y={minValue} label={`Min: ${minValue}`} stroke="red" />
        <ReferenceLine y={maxValue} label={`Max: ${maxValue}`} stroke="red" />
        <ReferenceLine y={avgValue} label={`Avg: ${avgValue.toFixed(2)}`} stroke="green" />
      </BarChart>
    </div>
  );
};

export default SalesChart;

