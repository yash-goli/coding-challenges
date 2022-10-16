const { getType, union } = require('../utils/utils');

const objectsCompare = (obj1, obj2) => {
  let areObjectsEqual = true;

  const constant = {
    OBJECT: 'Object',
    ARRAY: 'Array',
    DATE: 'Date'
  };

  const checkValueIsNullOrUndefined = (value1, value2) => {
    return (value1 === null || value1 === undefined) && (value2 === null || value2 === undefined);
  }

  const compare = (_obj1, _obj2) => {
    const allKeys = union(Object.keys(_obj1), Object.keys(_obj2));

    for (const key of allKeys) {
      const value1 = _obj1[key];
      const value2 = _obj2[key];

      if (
        (getType(value1) === constant.OBJECT && getType(value2) === constant.OBJECT) || 
        (getType(value1) === constant.ARRAY && getType(value2) === constant.ARRAY)
      ) {
        compare(value1, value2);
      } else if (getType(value1) === constant.DATE && getType(value2) === constant.DATE) {
        areObjectsEqual = areObjectsEqual && value1.toISOString() === value2.toISOString(); 
      } else {
        areObjectsEqual = areObjectsEqual && (checkValueIsNullOrUndefined(value1, value2) || value1 === value2); 
      }

      if (!areObjectsEqual) {
        return areObjectsEqual;
      }
    }
  }

  compare(obj1, obj2)
  return areObjectsEqual;
};

console.assert(objectsCompare({ a: 17, b: 12, c: 4}, { a: 17, b: 12, c: 4}), '1')

console.assert(objectsCompare({ a: 17, b: { c: 'Test', d: null }}, { a: 17, b: null}), '2');

console.assert(objectsCompare({ a: 17, b: { c: 'Test', d: null }, e: 2}, { a: 17, b: { c: 'Testw' }, e: 2}), '3');

console.assert(objectsCompare(
  { a: 17, b: [1, 2, { c: 'Test', d: null }], e: new Date('01/15/2015')}, 
  { a: 17, b: [1, 2, { c: 'Test' }], e: new Date('01/15/2015')}),
  '4'
);

console.assert(objectsCompare(
  { a: 17, b: [1, 2, { c: 'Test', d: null }], e: new Date('01/15/2015')}, 
  { a: 17, b: [1, 2, { c: 'Test' }], e: new Date('01/15/2013')}), 
  '5'
);