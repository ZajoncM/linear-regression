const csvConverter = data => {
  const row = data.split('\n');
  return row.map((item, id) => {
    const currentItem = item.split(',');
    return { x: currentItem[0], y: currentItem[1], id };
  });
};

export default csvConverter;
