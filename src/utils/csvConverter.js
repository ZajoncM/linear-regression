const csvConverter = data => {
  const row = data.split('\n');
  return row.map(item => item.split(','));
};

export default csvConverter;
