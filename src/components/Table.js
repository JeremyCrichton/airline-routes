import React from 'react';
import routes from '../data/data';
import {
  createIdFromRoutes,
  getAirlineById,
  getAirportByCode,
} from '../data/data';

const Table = ({ columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => (
            <th>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {routes.routes.map(route => (
          <tr key={createIdFromRoutes(route)}>
            <td>{getAirlineById(route.airline)}</td>
            <td>{getAirportByCode(route.src)}</td>
            <td>{getAirportByCode(route.dest)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
