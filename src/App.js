import React, { useState, useEffect } from 'react';
import './App.css';

import data from './data/data';
import Table from './components/Table';
import Select from './components/Select';

const columns = [
  { name: 'Airline', property: 'airline' },
  { name: 'Source Airport', property: 'src' },
  { name: 'Destination Airport', property: 'dest' },
];

const App = () => {
  const [rows, setRows] = useState(data.routes);
  const [filterByAirlineId, setFilterByAirlineId] = useState();

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
        <Select
          options={data.airlines}
          valueKey='id'
          titleKey='name'
          allTitle='All Airlines'
          value={filterByAirlineId}
          onSelect={setFilterByAirlineId}
        />
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
