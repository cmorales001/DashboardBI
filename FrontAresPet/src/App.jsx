import React from 'react';
import './Dashboard.css'; // Importa el archivo CSS que creamos

import ProductPieChart from './ProductPieChart';
import CustomerRetentionPieChart from './CustomerRetentionPieChart';
import TotalSalesKPI from './TotalSalesKPI';
import TotalProductsSold from './TotalProductsSold';
import SalesChart from './SalesChart';
import ProductBarChart from './ProductBarChart';
import CompletedOrdersLineChart from './CompletedOrdersLineChart';
import NewUsersKPI from './NewUsersKPI';

function App() {
  return (
    <div className="dashboard-container">
  <header className="dashboard-header">
    <h1>Analitica Ares Pet Shop </h1>
  </header>
  <div className="dashboard-section">
    <h1 className="section-title">KPIs</h1>
    <div className="dashboard-grid">
      <div className="dashboard-item">
        <TotalSalesKPI />
      </div>
      <div className="dashboard-item">
        <TotalProductsSold />
      </div>
      <div className="dashboard-item">
        <NewUsersKPI />
      </div>
    </div>
  </div>
  <div className="dashboard-section">
    <h1 className="section-title" >Análisis de Productos</h1>
    <div className="dashboard-grid">
      <div className="dashboard-item">
        <ProductPieChart />
      </div>
      
      <div className="dashboard-item">
        <SalesChart />
      </div>
      <div className="dashboard-item">
        <ProductBarChart />
      </div>
    </div>
  </div>
  <div className="dashboard-section">
    <h1 className="section-title">Análisis de Clientes</h1>
    <div className="dashboard-grid">
      <div className="dashboard-item">
        <CustomerRetentionPieChart />
      </div>
      <div className="dashboard-item">
        <CompletedOrdersLineChart />
      </div>
    </div>
  </div>
</div>
  );
}

export default App;


