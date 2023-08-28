import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewUsersKPI() {
  const [newUsersCount, setNewUsersCount] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(currentDate.getDate() - 30);

    axios.get(`http://localhost:8080/api/v1/users`, {
      params: {
        startDate: thirtyDaysAgo.toISOString(),
        endDate: currentDate.toISOString()
      }
    })
      .then(response => {
        setNewUsersCount(response.data.length);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>KPI: Nuevos Usuarios Registrados</h1>
      <p>{newUsersCount}</p>
    </div>
  );
}

export default NewUsersKPI;

