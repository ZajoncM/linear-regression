import React, { useContext } from 'react';
import { Scatter as ScatterComp } from 'react-chartjs-2';
import linearRegression from '../utils/linearRegression';
import DataContext from '../context/DataContext';

const Scatter = () => {
  const { data } = useContext(DataContext);

  return (
    <ScatterComp
      data={{
        datasets: [
          {
            label: 'Dane',
            data,
            pointBackgroundColor: 'rgba(99, 32, 238, 1)',
            pointRadius: 4,
            backgroundColor: 'rgba(99, 32, 238, 1)',
          },
          {
            label: 'Regresja liniowa',
            data: linearRegression(data),
            type: 'line',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            pointRadius: 0,
          },
        ],
      }}
      options={{
        scales: {
          xAxes: [
            {
              type: 'linear',
              position: 'bottom',
            },
          ],
        },
      }}
    />
  );
};

export default Scatter;
