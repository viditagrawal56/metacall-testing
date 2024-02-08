const { sum } = require("./sum.py");

function main(a, b) {
  return sum(a, b);
}

console.log(main(3, 4));

module.exports = {
  main,
};
