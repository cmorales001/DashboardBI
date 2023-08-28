import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import axios from 'axios';

function CustomerRetentionPieChart() {
  const [orderStats, setOrderStats] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/orderstats')
      .then(response => {
        setOrderStats(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const COLORS = ['#75c0e0', '#d46f7d'];

  const calculateRetention = () => {
    let newCustomers = 0;
    let returningCustomers = 0;

    orderStats.forEach(order => {
      if (order.returningCustomer) {
        returningCustomers++;
      } else {
        newCustomers++;
      }
    });

    return [
      { name: 'Nuevos Clientes', value: newCustomers },
      { name: 'Clientes que Regresan', value: returningCustomers },
    ];
  };

  const dataForChart = calculateRetention();

  return (
    <div style={{ display: 'inline-block' }}>
      <h2>Gráfico de Proporción de Clientes Nuevos y Clientes que Regresan</h2>
      <PieChart width={800} height={450}>
        <Pie
          data={dataForChart}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={180}
          fill="#8884d8"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(2)}%`}
        >
          {dataForChart.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default CustomerRetentionPieChart;
