const linearRegression = data => {
  // zmienne

  const n = data.length;
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumXX = 0;

  data.forEach(item => {
    sumX += parseInt(item.x, 10);
    sumY += parseInt(item.y, 10);
    sumXY += item.x * item.y;
    sumXX += item.x * item.x;
  });
  const averageY = sumY / n;
  const averageX = sumX / n;

  // parametry liniowej funkcji regresji

  const b = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const a = averageY - b * averageX;

  const arrayX = data.map(({ x }) => parseInt(x, 10));

  const minX = Math.min(...arrayX) - 1;
  const maxX = Math.max(...arrayX) + 2;
  const minY = a + b * minX;
  const maxY = a + b * maxX;

  return [
    { x: minX, y: minY },
    { x: maxX, y: maxY },
  ];
};

export default linearRegression;
