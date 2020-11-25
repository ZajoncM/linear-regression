import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Typography, Snackbar, Fab, Popover } from '@material-ui/core';
import Table from './components/Table';
import Dropzone from './components/Dropzone';
import GlobalStyle from './styles/globalStyles';
import DataContext from './context/DataContext';
import Scatter from './components/Scatter';
import { ReactComponent as Question } from './assets/question.svg';

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

const StyledFab = styled(Fab)`
  && {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
  }
`;

const StyledQuestion = styled(Question)`
  width: 30%;
`;

const StyledTypography = styled(Typography)`
  padding: 1rem;
`;

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

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
          <>
            <Grid item xs={12}>
              <Dropzone />
              <StyledFab color="primary" onClick={() => setAnchorEl(true)}>
                <StyledQuestion />
              </StyledFab>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(false)}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'center',
                }}
              >
                <StyledTypography>
                  Zawartość pliku powinien wyglądać w następujący sposób:
                  <br />
                  x1,y1
                  <br />
                  x2,y2
                  <br />
                  x3,y3
                  <br />
                  <br />
                  Przykład:
                  <br />
                  2,4
                  <br />
                  5,6
                  <br />
                  7,2
                </StyledTypography>
              </Popover>
            </Grid>
          </>
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
