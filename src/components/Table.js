import React from 'react';
import routes from '../data/data';

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Airline</th>
          <th>Source</th>
          <th>destination</th>
        </tr>
      </thead>
      <tbody>
        {routes.routes.map(route => (
          <tr>
            <td>{route.airline}</td>
            <td>{route.src}</td>
            <td>{route.dest}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
