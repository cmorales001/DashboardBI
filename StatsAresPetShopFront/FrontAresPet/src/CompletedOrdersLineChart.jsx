import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

function CompletedOrdersLineChart() {
  const [orderStats, setOrderStats] = useState([]);

  useEffect(() => {
    // Hacer la solicitud para obtener los datos de las estadísticas de órdenes
    fetch('http://localhost:8080/api/v1/orderstats') // Ajusta la URL según tu API
      .then(response => response.json())
      .then(data => setOrderStats(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Convertir las fechas a formato adecuado y agrupar por fecha de completado
  const groupedByDate = orderStats.reduce((acc, stat) => {
    const date = stat.dateCompleted.split('T')[0];
    if (!acc[date]) {
      acc[date] = {
        dateCompleted: date,
        completedOrders: 0,
      };
    }
    acc[date].completedOrders++;
    return acc;
  }, {});

  // Convertir el objeto agrupado en un array de objetos
  const dataForChart = Object.values(groupedByDate);

  // Ordenar por fecha
  const sortedData = dataForChart.sort((a, b) => a.dateCompleted.localeCompare(b.dateCompleted));

  return (
    <div>
      <h2>Gráfico de Línea de Pedidos Completados a lo largo del Tiempo</h2>
      <ResponsiveContainer width={800} height={500}>
        <LineChart data={sortedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dateCompleted" />
          <YAxis />
          <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} labelStyle={{ fontSize: 12, color: 'black' }} />
          <Legend />
          <Line type="monotone" dataKey="completedOrders" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CompletedOrdersLineChart;
