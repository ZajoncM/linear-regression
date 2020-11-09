import React, { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';
import csvConverter from './utils/csvConverter';
import { ReactComponent as CSVIcon } from './assets/csv.svg';
import DataContext from './context/DataContext';

const StyledIcon = styled(CSVIcon)`
  max-width: 15%;
  color: lightgray;
  margin-bottom: 1rem;
  transition: 0.3s;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  transition: 0.3s;

  ${({ dragged }) =>
    dragged &&
    css`
      background-color: #feefe5;

      svg {
        color: black;
      }
    `}
`;

function Dropzone() {
  const { setData } = useContext(DataContext);

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new global.FileReader();
      // reader.onabort = () => console.log('file reading was aborted')
      // reader.onerror = () => console.log('file reading has failed')
      try {
        if (acceptedFiles[0].type !== 'application/vnd.ms-excel') throw new Error('błąd');
        reader.onload = () => {
          const data = reader.result;
          setData(csvConverter(data));
        };
        reader.readAsText(file);
      } catch (error) {
        // console.log(error)
      }
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <StyledWrapper dragged={isDragActive} {...getRootProps()}>
      <input {...getInputProps()} />
      <StyledIcon />
      <Typography variant="subtitle1">
        {isDragActive ? 'Upuść tutaj ...' : 'Kliknij tu aby dodaj plik .csv lub przeciągnij tutaj'}
      </Typography>
    </StyledWrapper>
  );
}

export default Dropzone;
