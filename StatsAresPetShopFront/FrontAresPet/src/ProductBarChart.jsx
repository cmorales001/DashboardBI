import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, Label } from 'recharts';

function ProductBarChart() {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Hacer la solicitud para obtener los datos de los items de productos
    fetch('http://localhost:8080/api/v1/orderitems') // Ajusta la URL según tu API
      .then(response => response.json())
      .then(data => setProductItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Agrupar los items por nombre y sumar la cantidad vendida
  const groupedItems = productItems.reduce((acc, item) => {
    if (!acc[item.orderItemName]) {
      acc[item.orderItemName] = {
        orderItemName: item.orderItemName,
        quantity: 0,
      };
    }
    acc[item.orderItemName].quantity++;
    return acc;
  }, {});

  // Convertir el objeto agrupado en un array de objetos
  const dataForChart = Object.values(groupedItems);

  // Ordenar los productos por cantidad de ventas descendente
  const sortedData = dataForChart.sort((a, b) => b.quantity - a.quantity);

  return (
    <div>
      <h2>Productos más vendidos</h2>
      <ResponsiveContainer width={800} height={1000}>
        <BarChart data={sortedData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="orderItemName" type="category" height={200} width={300} />
          <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} labelStyle={{ fontSize: 12, color: 'black' }} />

          <Legend />
          <Bar dataKey="quantity" fill="#8884d8">
            {sortedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
            ))}
            <Label dataKey="orderItemName" position="insideRight" fontSize={12} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProductBarChart;






