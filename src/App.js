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
  const [filterByAirportId, setFilterByAirportId] = useState();

  useEffect(() => {
    setRows(
      data.routes.filter(route => {
        const filterByAirline = route.airline.toString() === filterByAirlineId;
        const filterByAirport =
          route.src === filterByAirportId || route.dest === filterByAirportId;

        if (!filterByAirlineId && !filterByAirportId) {
          return true;
        } else if (!filterByAirlineId) {
          return filterByAirport;
        } else if (!filterByAirportId) {
          return filterByAirline;
        }
        return filterByAirline && filterByAirport;
      })
    );
  }, [filterByAirlineId, filterByAirportId]);

  const airportsToFilter = data.airports.sort((a, b) =>
    a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
  );

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
      <h2>Select routes by airport</h2>
      <div>
        <Select
          options={airportsToFilter}
          valueKey='code'
          titleKey='name'
          allTitle='All Airports'
          value={filterByAirportId}
          onSelect={setFilterByAirportId}
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
