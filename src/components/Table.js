import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  Table as MatTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import DataContext from '../context/DataContext';

const StyledTableContainer = styled(TableContainer)`
  max-height: 70vh;
`;

const StyledTableHead = styled(TableHead)`
  background-color: #eee;
`;

const Table = () => {
  const { data } = useContext(DataContext);

  return (
    <StyledTableContainer component={Paper}>
      <MatTable aria-label="simple table">
        <StyledTableHead>
          <TableRow>
            <TableCell align="center">x</TableCell>
            <TableCell align="center">y</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {data.map(({ x, y, id }) => (
            <TableRow key={id}>
              <TableCell align="center">{x}</TableCell>
              <TableCell align="center">{y}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MatTable>
    </StyledTableContainer>
  );
};

export default Table;
