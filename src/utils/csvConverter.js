const csvConverter = data => {
  const row = data.split('\n');
  let error = false;
  const res = row.map((item, id) => {
    const currentItem = item.split(',');
    const x = parseInt(currentItem[0], 10);
    const y = parseInt(currentItem[1], 10);
    if (Number.isNaN(x) || Number.isNaN(y)) error = true;
    return { x, y, id };
  });

  if (error) return false;
  return res;
};

export default csvConverter;
