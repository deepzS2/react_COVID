/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
 Container, TableContainer, TableBody, TableHeader, Caption
} from "./styles";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    // eslint-disable-next-line prefer-const
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === `ascending` ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === `ascending` ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = `ascending`;
    if (
      sortConfig
      && sortConfig.key === key
      && sortConfig.direction === `ascending`
    ) {
      direction = `descending`;
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export default function Table({ rows }) {
  const { items, requestSort, sortConfig } = useSortableData(rows);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <Container>
      <TableContainer>
        <Caption>Tabela de casos em cada país</Caption>
        <TableHeader>
          <tr>
            <th>
              <button type="button">ID</button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort(`country`)}
                className={getClassNamesFor(`country`)}
              >
                País
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort(`cases`)}
                className={getClassNamesFor(`cases`)}
              >
                Casos
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort(`deaths`)}
                className={getClassNamesFor(`deaths`)}
              >
                Mortes
              </button>
            </th>
          </tr>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <tr
              className="table body row"
              key={
                !item.countryInfo._id
                  ? Math.floor(Math.random() * 100000000)
                  : item.countryInfo._id !== `NO DATA`
                  ? item.countryInfo._id
                  : Math.floor(Math.random() * 100000000)
              }
            >
              <td data-label="ID">{item.countryInfo._id}</td>
              <td data-label="País">
                <Link to={`/country/${item.country}`}>{item.country}</Link>
              </td>
              <td data-label="Casos">{item.cases}</td>
              <td data-label="Mortes">{item.deaths}</td>
            </tr>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
}

Table.propTypes = {
  rows: PropTypes.array.isRequired
};
