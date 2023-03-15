const add = (a, b) => {
  return a + b;
};


const symbolID = Symbol(1234)
let symbolStrID = Symbol("Description of ID")
console.dir(symbolID)
console.dir(symbolStrID)

module.exports = add;
