global.$logger = console.log;
global.$math = {
  sum(a, b) {
    return a + b;
  },
  mul(a, b) {
    return a * b;
  }
}

const execute = (code, variables) => {
  const { a, b } = variables;
  const fn = new Function('a', 'b', code);
  return fn(a, b);
};

execute('$logger("Sum:", $math.sum(a, b))', { a: 17, b: 3 }); 
execute('$logger("Mul:", $math.mul(a, b))', { a: 17, b: 3 }); 