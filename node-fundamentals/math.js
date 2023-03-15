import 
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

let addition = () => 'void';

add = addition;
console.log(add())


module.exports = {
  add,
  subtract,
};

// module.exports = (a, b) => {
//   return a + b;
// };

// exports = {
//   add,
//   subtract,
// };
// module.exports = add;

console.log(typeof(module.exports),typeof(exports))
console.dir(import.meta.url)
