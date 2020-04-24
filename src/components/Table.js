import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';

import { createIdFromRoutes } from '../data/data';

const Table = ({ columns, rows, perPage }) => {
  const [routesPerPage] = useState(perPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [routesToDisplay, setRoutesToDisplay] = useState(rows.slice(0, 24));

  const lastPage = Math.ceil(rows.length / routesPerPage);
  const startingPageRoute = currentPage * routesPerPage + 1;
  const endingPageRoute = startingPageRoute + routesToDisplay.length - 1;
  const totalRoutes = rows.length;

  useEffect(() => {
    setRoutesToDisplay(
      rows.slice(
        currentPage * routesPerPage,
        currentPage * routesPerPage + routesPerPage
      )
    );
  }, [currentPage, routesPerPage, rows]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.property}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {routesToDisplay.map(route => (
            <TableRow route={route} key={createIdFromRoutes(route)} />
          ))}
        </tbody>
      </table>
      {currentPage > 0 && (
        <button onClick={() => setCurrentPage(currentPage - 1)}>Back</button>
      )}
      {currentPage < lastPage - 1 && (
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      )}
      <p>
        Displaying {`${startingPageRoute} - ${endingPageRoute}`} routes of{' '}
        {totalRoutes} total routes.
      </p>
    </div>
  );
};

export default Table;
