const deepCopySimple = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// const obj = {a: 1, b: 2};
// const newObj = deepCopySimple(obj);
// console.log(newObj === obj);