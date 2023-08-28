import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

function ProductPieChart() {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // Hacer la solicitud para obtener los datos de los items de productos
    fetch('http://localhost:8080/api/v1/orderitems') // Ajusta la URL según tu API
      .then(response => response.json())
      .then(data => setProductItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  // Agrupar los items por nombre y contar la cantidad
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

  const dataForChart = Object.values(groupedItems);

  return (
    <div style={{ display: 'inline-block' }}>
      <h2>Participación de los Productos en ventas</h2>
      <h2>(número de veces que el producto ha estado presente en ventas)</h2>
      <PieChart width={800} height={550}>
        <Pie
          data={dataForChart}
          dataKey="quantity"
          nameKey="orderItemName"
          cx="50%"
          cy="55%"
          outerRadius={200} // Aumentar el radio exterior
          
 
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

export default ProductPieChart;
