// take a number and return greatest number of divided square which that number of line can make in the utter square

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", function (n) {
  let hence = 0;
  for (let i = 1; i < n; i++) {
    hence += Math.pow(i, 2);
  }
  console.log(hence);
  rl.close();
});
