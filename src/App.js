import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import Dropzone from './Dropzone';
import GlobalStyle from './styles/globalStyles';

const StyledWrapper = styled(Grid)`
  min-height: 100vh;
`;

const StyledTitle = styled(Grid)`
  position: absolute;
  top: 1rem;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const DataContext = createContext(null);

function App() {
  const [data, setData] = useState(null);

  return (
    <DataContext value={{ data, setData }}>
      <GlobalStyle />
      <StyledWrapper container className="App">
        <StyledTitle item xs={12}>
          <Typography variant="h2">LinearRegretion</Typography>
        </StyledTitle>
        <Grid item xs={12}>
          <Dropzone />
        </Grid>
      </StyledWrapper>
    </DataContext>
  );
}

export default App;
