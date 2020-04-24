import React, { useState, useEffect } from 'react';
import './App.css';

import data from './data/data';
import Table from './components/Table';

const columns = [
  { name: 'Airline', property: 'airline' },
  { name: 'Source Airport', property: 'src' },
  { name: 'Destination Airport', property: 'dest' },
];

const App = () => {
  const [filterByAirlineId, setFilterByAirlineId] = useState();
  const [rows, setRows] = useState(data.routes);

  useEffect(() => {
    setRows(
      filterByAirlineId
        ? data.routes.filter(route => route.airline === filterByAirlineId)
        : data.routes
    );
  }, [filterByAirlineId]);

  return (
    <div className='App'>
      <h2>Select routes by airline</h2>
      <div>
        <select
          value={filterByAirlineId}
          onChange={e => setFilterByAirlineId(parseInt(e.target.value, 10))}
        >
          <option value=''>All airlines</option>
          {data.airlines.map(airline => (
            <option key={airline.id} value={airline.id}>
              {airline.name}
            </option>
          ))}
        </select>
      </div>
      <Table
        className='routes-table'
        columns={columns}
        rows={rows}
        format=''
        perPage={25}
      />
    </div>
  );
};

export default App;
