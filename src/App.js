import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Typography, Snackbar } from '@material-ui/core';
import Table from './components/Table';
import Dropzone from './components/Dropzone';
import GlobalStyle from './styles/globalStyles';
import DataContext from './context/DataContext';
import Scatter from './components/Scatter';

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
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  return (
    <DataContext.Provider value={{ data, setData, setError }}>
      <GlobalStyle />
      <StyledWrapper container spacing={2} className="App">
        <StyledTitle item xs={12}>
          <Typography variant="h2">Regresja liniowa</Typography>
        </StyledTitle>
        {data.length ? (
          <>
            <Grid container justify="center" item xs={12} md={3}>
              <Table />
            </Grid>
            <Grid container justify="center" item xs={12} md={9}>
              <Scatter />
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Dropzone />
          </Grid>
        )}
      </StyledWrapper>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={error}
        onClose={() => setError(false)}
        message="Błędny format danych"
      />
    </DataContext.Provider>
  );
}

export default App;
