const { getType } = require('../utils/utils');

const deepCopy = (obj) => {
  const createObject = (_obj, newObj = {}) => {
    if (_obj === null || _obj === undefined) {
      return _obj;
    }

    for(let [key, value] of Object.entries(_obj)) {
      const type = getType(value);
      switch(type) {
        case 'Array':
          const childArr = createObject(value, []);
          newObj[key] = childArr;
          break;
        case 'Object':
          const childObj = createObject(value, {});
          newObj[key] = childObj;
          break;
        case 'Date':
          const dateObj = new Date(value.getTime());
          newObj[key] = dateObj;
          break;
        default:
          newObj[key] = value;
          break;
      }   
    }

    return newObj;
  }

  return createObject(obj);
};

const testObj = {a: 1, b: [1, 2, {aa: 123, bb: 135, cc: [4, 5, 6]}], c: {d: 'abc', e: 'xyz', f: {g: 'qwe', h: 'rty'}}, i: {}, j:[]};
const newObj = deepCopy(testObj);
console.log(newObj);
console.assert(testObj !== newObj);
console.assert(testObj.b !== newObj.b);
console.assert(testObj.b[2] !== newObj.b[2]);
console.assert(testObj.c !== newObj.c);
console.assert(testObj.c.f !== newObj.c.f);
console.assert(testObj.i !== newObj.i);
console.assert(testObj.j !== newObj.j);
console.log(testObj !== newObj, testObj.b !== newObj.b, testObj.b[2] !== newObj.b[2], testObj.c !== newObj.c, testObj.c.f !== newObj.c.f);