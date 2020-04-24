import React from 'react';

import {
  createIdFromRoutes,
  getAirlineById,
  getAirportByCode,
} from '../data/data';

const TableRow = ({ route }) => {
  return (
    <tr>
      <td>{getAirlineById(route.airline)}</td>
      <td>{getAirportByCode(route.src)}</td>
      <td>{getAirportByCode(route.dest)}</td>
    </tr>
  );
};

export default TableRow;
