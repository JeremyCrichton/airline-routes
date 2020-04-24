import React from 'react';
import './App.css';

import routes from './data/data';
import Table from './components/Table';

const columns = [
  { name: 'Airline', property: 'airline' },
  { name: 'Source Airport', property: 'src' },
  { name: 'Destination Airport', property: 'dest' },
];

const App = () => {
  return (
    <div className='App'>
      <Table
        className='routes-table'
        columns={columns}
        rows={routes.routes}
        format=''
        perPage={25}
      />
    </div>
  );
};

export default App;
