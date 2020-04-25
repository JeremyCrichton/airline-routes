import React, { useState, useEffect } from 'react';
import './App.css';

import data from './data/data';
import Table from './components/Table';
import Select from './components/Select';
import Map from './components/Map';

const COLUMNS = [
  { name: 'Airline', property: 'airline' },
  { name: 'Source Airport', property: 'src' },
  { name: 'Destination Airport', property: 'dest' },
];

const App = () => {
  const [filterByAirlineId, setFilterByAirlineId] = useState('all');
  const [filterByAirportCode, setFilterByAirportCode] = useState('all');
  const [filteredRoutes, setFilteredRoutes] = useState(data.routes);
  const [filteredAirlines, setFilteredAirlines] = useState(data.airlines);
  const [filteredAirports, setFilteredAirports] = useState(data.airports);

  // Update routes to display whenever either select is changed
  useEffect(() => {
    const routeHasSelectedAirport = route => {
      if (filterByAirportCode === 'all') return true;
      return (
        route.src === filterByAirportCode || route.dest === filterByAirportCode
      );
    };

    const routeHasSelectedAirline = route => {
      if (filterByAirlineId === 'all') return true;
      return route.airline === parseInt(filterByAirlineId, 10);
    };

    const routes = data.routes.filter(
      route => routeHasSelectedAirport(route) && routeHasSelectedAirline(route)
    );

    setFilteredRoutes(routes);
  }, [filterByAirlineId, filterByAirportCode]);

  // Update select options whenever routes to display are updated
  useEffect(() => {
    const getFilteredAirlines = routes => {
      if (filterByAirportCode === 'all') return data.airlines;
      return data.airlines.filter(airline =>
        routes.some(route => route.airline === airline.id)
      );
    };

    const getFilteredAirports = routes => {
      if (filterByAirlineId === 'all') return data.airports;
      return data.airports.filter(airport =>
        routes.some(
          route => route.src === airport.code || route.des === airport.code
        )
      );
    };

    setFilteredAirlines(getFilteredAirlines(filteredRoutes));
    setFilteredAirports(getFilteredAirports(filteredRoutes));
  }, [filteredRoutes, filterByAirlineId, filterByAirportCode]);

  const clearFilters = () => {
    setFilterByAirlineId('all');
    setFilterByAirportCode('all');
  };

  return (
    <div className='App'>
      <Map routes={filteredRoutes} />
      <h2>Select routes by airline</h2>
      <div>
        <Select
          options={filteredAirlines}
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
          options={filteredAirports}
          valueKey='code'
          titleKey='name'
          allTitle='All Airports'
          value={filterByAirportCode}
          onSelect={setFilterByAirportCode}
        />
      </div>
      <button onClick={clearFilters}>Clear Filters</button>
      <h2>Routes</h2>
      <Table
        className='routes-table'
        columns={COLUMNS}
        rows={filteredRoutes}
        format=''
        perPage={25}
      />
    </div>
  );
};

export default App;
