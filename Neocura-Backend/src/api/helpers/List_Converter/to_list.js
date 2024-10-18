const list_convert = (obj) => {
  let list = obj.map((item, i) => item[Object.keys(item)[0]]);
  return list;
};

module.exports = { list_convert };
