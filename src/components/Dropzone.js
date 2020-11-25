import React, { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';
import csvConverter from '../utils/csvConverter';
import { ReactComponent as CSVIcon } from '../assets/csv.svg';
import DataContext from '../context/DataContext';

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
  height: calc(100vh - 10rem);
  transition: 0.3s;
  border: 2px solid white;
  ${({ dragged }) =>
    dragged &&
    css`
      background-color: #feefe5;
      border: 2px solid orange;
      svg {
        color: black;
      }
    `}
`;

function Dropzone() {
  const { setData, setError } = useContext(DataContext);

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new global.FileReader();
      try {
        if (
          acceptedFiles[0].type === 'application/vnd.ms-excel' ||
          acceptedFiles[0].type === 'text/plain'
        ) {
          reader.onload = () => {
            const data = reader.result;
            const response = csvConverter(data);
            if (response) setData(response);
            else setError(true);
          };
          reader.readAsText(file);
        } else {
          setError(true);
          throw new Error('błąd');
        }
      } catch (error) {
        // console.log(error);
      }
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <StyledWrapper dragged={isDragActive} {...getRootProps()}>
      <input {...getInputProps()} />
      <StyledIcon />
      <Typography variant="subtitle1">
        {isDragActive
          ? 'Upuść tutaj ...'
          : 'Kliknij tu aby dodaj plik .csv lub .txt, lub przeciągnij tutaj'}
      </Typography>
    </StyledWrapper>
  );
}

export default Dropzone;
