const getType = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1);
};

const isObjectEmpty = (value) => {
  return !Object.keys(value).length;
}

const union = (arr1, arr2) => {
  return new Set([...arr1, ...arr2]);
};

module.exports = {
  getType, 
  isObjectEmpty,
  union
}