import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { Line } from 'react-chartjs-2';
import Dropzone from './Dropzone';
import GlobalStyle from './styles/globalStyles';
import DataContext from './context/DataContext';

const StyledWrapper = styled(Grid)`
  min-height: 100vh;
  padding: 8rem 2rem 0 2rem;
  max-width: 100vw;
`;

const StyledTitle = styled(Grid)`
  position: absolute;
  top: 1rem;
  left: 0;
  width: 100vw;

  display: flex;
  justify-content: center;
`;

function App() {
  const [data, setData] = useState(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <GlobalStyle />
      <StyledWrapper container spacing={2} className="App">
        <StyledTitle item xs={12}>
          <Typography variant="h2">LinearRegression</Typography>
        </StyledTitle>
        {data ? (
          <>
            <Grid item xs={3}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">x</TableCell>
                      <TableCell align="center">y</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map(row => (
                      <TableRow>
                        <TableCell align="center">{row[0]}</TableCell>
                        <TableCell align="center">{row[1]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={9}>
              <Line
                data={{
                  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                  datasets: [
                    {
                      label: '# of Votes',
                      data: [12, 19, 3, 5, 2, 3],

                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                      ],
                      borderWidth: 2,
                    },
                  ],
                }}
              />
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Dropzone />
          </Grid>
        )}
      </StyledWrapper>
    </DataContext.Provider>
  );
}

export default App;
